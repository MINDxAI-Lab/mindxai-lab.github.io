(function () {
  'use strict';

  var root = document.querySelector('.mindxai-news');
  if (!root) return;

  var filters = root.querySelector('.news-filters');
  var buttons = Array.from(filters.querySelectorAll('[data-news-filter]'));
  var cards = Array.from(root.querySelectorAll('.news-card'));
  var status = root.querySelector('.news-filter-status');

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
  applyFilter(window.location.hash.slice(1));
}());
