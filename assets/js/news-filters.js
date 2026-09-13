(function () {
  'use strict';

  var root = document.querySelector('.mindxai-news');
  if (!root) return;

  var filters = root.querySelector('.news-filters');
  var buttons = Array.from(filters.querySelectorAll('[data-news-filter]'));
  var cards = Array.from(root.querySelectorAll('.news-card'));
  var status = root.querySelector('.news-filter-status');
  var dateNavigation = root.querySelector('.news-date-navigation');
  var dateViewport = root.querySelector('.news-date-viewport');
  var dateTrack = root.querySelector('.research-timeline-events');
  var earlierMonths = root.querySelector('[data-news-date-earlier]');
  var laterMonths = root.querySelector('[data-news-date-later]');
  var dateEntries = [];
  var activeEntry = null;
  var resizeAnchor = null;
  var calendar = null;

  function scrollBehavior() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
  }

  function clearDateTarget() {
    cards.forEach(function (card) {
      card.classList.remove('news-card--date-target');
      var back = card.querySelector('[data-news-date-back]');
      if (back) back.hidden = true;
    });
    dateEntries.forEach(function (entry) { entry.button.removeAttribute('aria-current'); });
    activeEntry = null;
  }

  function jumpToNews(entry) {
    var target = entry.card;
    if (target.hidden) return;
    clearDateTarget();
    activeEntry = entry;
    resizeAnchor = entry;
    entry.button.setAttribute('aria-current', 'true');
    target.classList.add('news-card--date-target');
    target.querySelector('[data-news-date-back]').hidden = false;
    target.focus({ preventScroll: true });
    target.scrollIntoView({ behavior: scrollBehavior(), block: 'start' });
  }

  function updateScrollControls() {
    earlierMonths.disabled = dateViewport.scrollLeft <= 1;
    laterMonths.disabled = dateViewport.scrollLeft >= dateViewport.scrollWidth - dateViewport.clientWidth - 1;
  }

  function scrollToEntry(entry, behavior) {
    var buttonRect = entry.button.getBoundingClientRect();
    var viewportRect = dateViewport.getBoundingClientRect();
    dateViewport.scrollTo({
      left: dateViewport.scrollLeft + buttonRect.left - viewportRect.left - (dateViewport.clientWidth - buttonRect.width) / 2,
      behavior: behavior || scrollBehavior()
    });
  }

  function layoutDateNavigation() {
    if (!calendar) return;
    var visibleIndexes = [];
    dateEntries.forEach(function (entry, index) {
      entry.event.hidden = entry.card.hidden;
      if (!entry.card.hidden) visibleIndexes.push(index);
    });
    calendar.layout(visibleIndexes);
    updateScrollControls();
  }

  function buildDateNavigation() {
    if (!dateNavigation || !cards.length || !window.NewsCalendarAxis) return;
    var datedCards = cards.filter(function (card) { return card.dataset.newsDate; }).sort(function (a, b) {
      return a.dataset.newsDate.localeCompare(b.dataset.newsDate);
    });
    if (!datedCards.length) return;
    dateEntries = datedCards.map(function (card) {
      var item = document.createElement('li');
      item.className = 'research-timeline-event news-timeline-category--' + card.dataset.newsCategory;
      item.dataset.newsDate = card.dataset.newsDate;
      item.dataset.newsCategory = card.dataset.newsCategory;
      var button = document.createElement('button');
      button.type = 'button';
      button.setAttribute('aria-controls', card.id);
      var label = card.querySelector('.news-date').textContent.trim() + ' — ' + card.querySelector('h2').textContent.trim();
      button.setAttribute('aria-label', 'Jump to ' + label);
      button.title = label;
      var dot = document.createElement('span');
      dot.className = 'research-timeline-dot';
      dot.setAttribute('aria-hidden', 'true');
      button.appendChild(dot);
      item.appendChild(button);
      dateTrack.appendChild(item);
      var entry = { card: card, event: item, button: button };
      button.addEventListener('click', function () { jumpToNews(entry); });
      button.addEventListener('keydown', function (event) {
        var visibleEntries = dateEntries.filter(function (candidate) { return !candidate.card.hidden; });
        var index = visibleEntries.indexOf(entry);
        var nextIndex;
        if (event.key === 'ArrowLeft') nextIndex = Math.max(0, index - 1);
        else if (event.key === 'ArrowRight') nextIndex = Math.min(visibleEntries.length - 1, index + 1);
        else if (event.key === 'Home') nextIndex = 0;
        else if (event.key === 'End') nextIndex = visibleEntries.length - 1;
        else return;
        event.preventDefault();
        var nextEntry = visibleEntries[nextIndex];
        resizeAnchor = nextEntry;
        nextEntry.button.focus({ preventScroll: true });
        scrollToEntry(nextEntry);
      });
      return entry;
    });
    calendar = window.NewsCalendarAxis.create(dateNavigation, dateTrack, datedCards.map(function (card) {
      return card.dataset.newsDate;
    }));

    cards.forEach(function (card) {
      card.querySelector('[data-news-date-back]').addEventListener('click', function () {
        if (!activeEntry) return;
        resizeAnchor = activeEntry;
        scrollToEntry(activeEntry, 'auto');
        activeEntry.button.focus({ preventScroll: true });
        dateNavigation.scrollIntoView({ behavior: scrollBehavior(), block: 'center' });
      });
    });
    earlierMonths.addEventListener('click', function () {
      resizeAnchor = null;
      dateViewport.scrollBy({ left: -dateViewport.clientWidth * 0.8, behavior: scrollBehavior() });
    });
    laterMonths.addEventListener('click', function () {
      resizeAnchor = null;
      dateViewport.scrollBy({ left: dateViewport.clientWidth * 0.8, behavior: scrollBehavior() });
    });
    // Keep the default/current dot visible on resize, but do not undo manual history browsing.
    ['pointerdown', 'touchstart', 'wheel'].forEach(function (eventName) {
      dateViewport.addEventListener(eventName, function () { resizeAnchor = null; }, { passive: true });
    });
    dateViewport.addEventListener('keydown', function (event) {
      if (event.target === dateViewport) resizeAnchor = null;
    });
    dateViewport.addEventListener('scroll', updateScrollControls, { passive: true });
    window.addEventListener('resize', function () {
      layoutDateNavigation();
      if (resizeAnchor && !resizeAnchor.card.hidden) {
        var buttonRect = resizeAnchor.button.getBoundingClientRect();
        var viewportRect = dateViewport.getBoundingClientRect();
        if (buttonRect.left < viewportRect.left || buttonRect.right > viewportRect.right) {
          scrollToEntry(resizeAnchor, 'auto');
        }
      }
    });
    dateNavigation.hidden = false;
  }

  function updateDateNavigation() {
    if (!dateEntries.length) return;
    clearDateTarget();
    layoutDateNavigation();
    var visibleEntries = dateEntries.filter(function (entry) { return !entry.card.hidden; });
    resizeAnchor = visibleEntries[visibleEntries.length - 1] || null;
    if (resizeAnchor) scrollToEntry(resizeAnchor, 'auto');
    else dateViewport.scrollLeft = 0;
    updateScrollControls();
  }

  function applyFilter(requestedCategory) {
    var selected = buttons.find(function (button) {
      return button.dataset.newsFilter === requestedCategory;
    }) || buttons[0];
    var category = selected.dataset.newsFilter;
    var visibleCount = 0;

    cards.forEach(function (card) {
      var matches = category === 'all' || card.dataset.newsTopics.split(' ').indexOf(category) !== -1;
      card.hidden = !matches;
      if (matches) visibleCount += 1;
    });

    buttons.forEach(function (button) {
      button.setAttribute('aria-pressed', button === selected ? 'true' : 'false');
    });

    status.textContent = category === 'all'
      ? 'Showing all ' + visibleCount + ' news items.'
      : 'Showing ' + visibleCount + ' news item' + (visibleCount === 1 ? '' : 's') + ' in ' + selected.dataset.newsLabel + '.';
    updateDateNavigation();
  }

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      var category = button.dataset.newsFilter;
      var nextHash = category === 'all' ? '' : '#' + category;
      if (window.location.hash !== nextHash) {
        window.history.pushState(null, '', window.location.pathname + window.location.search + nextHash);
      }
      applyFilter(category);
    });
  });

  window.addEventListener('hashchange', function () {
    applyFilter(window.location.hash.slice(1));
  });

  filters.hidden = false;
  status.hidden = false;
  buildDateNavigation();
  applyFilter(window.location.hash.slice(1));
}());
