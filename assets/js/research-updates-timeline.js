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

    function distributeTimelineEvents() {
      var trackWidth = track && track.clientWidth;
      if (!trackWidth) return;

      var minimumSpacing = 18;
      var desiredPositions = events.map(function (event) {
        return (parseFloat(event.dataset.timelinePosition) || 0) / 100 * trackWidth;
      });
      var adjustedPositions = [];

      desiredPositions.forEach(function (position, index) {
        var previousPosition = index ? adjustedPositions[index - 1] : -minimumSpacing;
        adjustedPositions.push(Math.max(position, previousPosition + minimumSpacing));
      });

      var finalPosition = adjustedPositions[adjustedPositions.length - 1];
      var scale = finalPosition > trackWidth ? trackWidth / finalPosition : 1;
      events.forEach(function (event, index) {
        var adjustedPosition = adjustedPositions[index] * scale;
        var offset = adjustedPosition - desiredPositions[index];
        event.style.setProperty('--timeline-offset', offset.toFixed(2) + 'px');
      });
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
      activeIndex = nextIndex;

      tabs.forEach(function (tab, tabIndex) {
        var selected = tabIndex === activeIndex;
        tab.setAttribute('aria-selected', selected ? 'true' : 'false');
        tab.tabIndex = selected ? 0 : -1;
      });
      panels.forEach(function (panel, panelIndex) {
        panel.hidden = panelIndex !== activeIndex;
      });
      previous.disabled = activeIndex === 0;
      next.disabled = activeIndex === tabs.length - 1;

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
        if (event.key === 'ArrowLeft') nextIndex = tabIndex - 1;
        if (event.key === 'ArrowRight') nextIndex = tabIndex + 1;
        if (event.key === 'Home') nextIndex = 0;
        if (event.key === 'End') nextIndex = tabs.length - 1;
        if (nextIndex === null) return;

        event.preventDefault();
        selectUpdate(nextIndex, { focus: true, announce: true });
      });
    });

    previous.addEventListener('click', function () {
      selectUpdate(activeIndex - 1, { announce: true });
    });
    next.addEventListener('click', function () {
      selectUpdate(activeIndex + 1, { announce: true });
    });

    selectUpdate(activeIndex, { scroll: false });
    window.requestAnimationFrame(function () {
      distributeTimelineEvents();
      window.requestAnimationFrame(function () {
        scrollTabIntoView(tabs[activeIndex], 'auto');
      });
    });
    window.addEventListener('resize', distributeTimelineEvents);
  }

  document.querySelectorAll('[data-research-updates]').forEach(initTimeline);
}());
