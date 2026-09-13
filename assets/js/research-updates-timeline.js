(function () {
  'use strict';

  function initTimeline(root) {
    var tabs = Array.from(root.querySelectorAll('[data-research-update-tab]'));
    var panels = Array.from(root.querySelectorAll('[data-research-update-panel]'));
    var previous = root.querySelector('[data-research-update-previous]');
    var next = root.querySelector('[data-research-update-next]');
    var status = root.querySelector('[data-research-update-status]');
    var viewport = root.querySelector('.research-timeline-viewport');
    var track = root.querySelector('.research-timeline-events');
    var scrollControls = root.querySelector('[data-timeline-scroll-controls]');
    var scrollLeft = root.querySelector('[data-timeline-scroll-left]');
    var scrollRight = root.querySelector('[data-timeline-scroll-right]');
    var events = tabs.map(function (tab) {
      return tab.closest('.research-timeline-event');
    });
    var section = root.closest('.research-updates') || root;
    var filters = Array.from(section.querySelectorAll('[data-news-timeline-filter]'));
    var filterStatus = section.querySelector('[data-news-timeline-filter-status]');
    var visibleIndexes = tabs.map(function (tab, index) { return index; });
    var activeFilter = 'all';

    if (!tabs.length || tabs.length !== panels.length || !previous || !next) return;

    var activeIndex = tabs.findIndex(function (tab) {
      return tab.getAttribute('aria-selected') === 'true';
    });
    if (activeIndex < 0) activeIndex = 0;

    function updateScrollControls() {
      if (!viewport || !scrollControls) return;
      var maximum = viewport.scrollWidth - viewport.clientWidth;
      scrollControls.hidden = maximum <= 1;
      scrollLeft.disabled = viewport.scrollLeft <= 1;
      scrollRight.disabled = viewport.scrollLeft >= maximum - 1;
    }

    if (viewport && scrollControls) {
      viewport.addEventListener('scroll', updateScrollControls, { passive: true });
      [scrollLeft, scrollRight].forEach(function (button, index) {
        button.addEventListener('click', function () {
          viewport.scrollBy({
            left: (index ? 1 : -1) * viewport.clientWidth * 0.8,
            behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
          });
        });
      });
    }

    var calendarAxis = window.NewsCalendarAxis.create(root, track, panels.map(function (panel) {
      return panel.querySelector('time[datetime]').getAttribute('datetime');
    }));

    function distributeTimelineEvents() {
      calendarAxis.layout(visibleIndexes);
      updateScrollControls();
    }

    function scrollTabIntoView(tab, behavior) {
      if (viewport) {
        var tabRect = tab.getBoundingClientRect();
        var viewportRect = viewport.getBoundingClientRect();
        var targetLeft = viewport.scrollLeft + tabRect.left - viewportRect.left
          - (viewport.clientWidth - tabRect.width) / 2;

        viewport.scrollTo({
          left: Math.max(0, targetLeft),
          behavior: behavior
        });
        return;
      }

      tab.scrollIntoView({
        behavior: behavior,
        block: 'nearest',
        inline: 'center'
      });
    }

    function selectUpdate(index, options) {
      var settings = options || {};
      var nextIndex = Math.max(0, Math.min(index, tabs.length - 1));
      if (visibleIndexes.indexOf(nextIndex) < 0) nextIndex = visibleIndexes[0];
      if (nextIndex === undefined) return;
      activeIndex = nextIndex;

      tabs.forEach(function (tab, tabIndex) {
        var selected = tabIndex === activeIndex;
        tab.setAttribute('aria-selected', selected ? 'true' : 'false');
        tab.tabIndex = selected ? 0 : -1;
      });
      panels.forEach(function (panel, panelIndex) {
        panel.hidden = panelIndex !== activeIndex;
      });
      previous.disabled = activeIndex === visibleIndexes[0];
      next.disabled = activeIndex === visibleIndexes[visibleIndexes.length - 1];

      if (settings.focus) tabs[activeIndex].focus({ preventScroll: true });
      if (settings.scroll !== false) {
        var behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
        scrollTabIntoView(tabs[activeIndex], behavior);
      }
      if (settings.announce && status) {
        status.textContent = 'Showing ' + tabs[activeIndex].getAttribute('aria-label') + '.';
      }
    }

    tabs.forEach(function (tab, tabIndex) {
      tab.addEventListener('click', function () {
        selectUpdate(tabIndex, { announce: true });
      });
      tab.addEventListener('keydown', function (event) {
        var nextIndex = null;
        var visibleIndex = visibleIndexes.indexOf(tabIndex);
        if (event.key === 'ArrowLeft') nextIndex = visibleIndexes[Math.max(0, visibleIndex - 1)];
        if (event.key === 'ArrowRight') nextIndex = visibleIndexes[Math.min(visibleIndexes.length - 1, visibleIndex + 1)];
        if (event.key === 'Home') nextIndex = visibleIndexes[0];
        if (event.key === 'End') nextIndex = visibleIndexes[visibleIndexes.length - 1];
        if (nextIndex === null) return;

        event.preventDefault();
        selectUpdate(nextIndex, { focus: true, announce: true });
      });
    });

    previous.addEventListener('click', function () {
      var visibleIndex = visibleIndexes.indexOf(activeIndex);
      selectUpdate(visibleIndexes[Math.max(0, visibleIndex - 1)], { announce: true });
    });
    next.addEventListener('click', function () {
      var visibleIndex = visibleIndexes.indexOf(activeIndex);
      selectUpdate(visibleIndexes[Math.min(visibleIndexes.length - 1, visibleIndex + 1)], { announce: true });
    });

    filters.forEach(function (filter) {
      filter.addEventListener('click', function () {
        activeFilter = filter.dataset.newsTimelineFilter;
        visibleIndexes = [];
        var previousMonth = '';
        var previousYear = '';
        events.forEach(function (event, index) {
          var visible = activeFilter === 'all' || event.dataset.newsCategory === activeFilter;
          event.hidden = !visible;
          if (!visible) return;
          visibleIndexes.push(index);
          event.querySelector('time').classList.toggle('research-timeline-month--empty', event.dataset.timelineMonth === previousMonth);
          event.querySelector('.research-timeline-year').classList.toggle('research-timeline-year--empty', event.dataset.timelineYear === previousYear);
          previousMonth = event.dataset.timelineMonth;
          previousYear = event.dataset.timelineYear;
        });
        filters.forEach(function (button) {
          button.setAttribute('aria-pressed', button === filter ? 'true' : 'false');
        });
        selectUpdate(visibleIndexes[0], { scroll: false });
        distributeTimelineEvents();
        if (viewport) {
          if (activeFilter === 'all') viewport.scrollTo({ left: 0, behavior: 'auto' });
          else scrollTabIntoView(tabs[visibleIndexes[0]], 'auto');
        }
        if (filterStatus) {
          filterStatus.textContent = activeFilter === 'all'
            ? 'Showing all ' + visibleIndexes.length + ' news items.'
            : filter.dataset.newsTimelineLabel + ': showing ' + visibleIndexes.length
              + ' of ' + tabs.length + ' news items.';
        }
      });
    });

    selectUpdate(activeIndex, { scroll: false });
    window.requestAnimationFrame(function () {
      distributeTimelineEvents();
      window.requestAnimationFrame(function () {
        scrollTabIntoView(tabs[activeIndex], 'auto');
      });
    });
    window.addEventListener('resize', function () {
      distributeTimelineEvents();
      if (!viewport) return;
      var selectedRect = tabs[activeIndex].getBoundingClientRect();
      var viewportRect = viewport.getBoundingClientRect();
      if (selectedRect.left < viewportRect.left || selectedRect.right > viewportRect.right) {
        scrollTabIntoView(tabs[activeIndex], 'auto');
      }
    });
  }

  document.querySelectorAll('[data-research-updates]').forEach(initTimeline);
}());
