(function () {
  'use strict';

  var root = document.querySelector('.publications-page');
  if (!root) return;

  var filters = root.querySelector('.publication-filters');
  var buttons = Array.from(filters.querySelectorAll('[data-publication-filter]'));
  var entries = Array.from(root.querySelectorAll('.publication-entry'));
  var groups = Array.from(root.querySelectorAll('.publication-group'));
  var descriptions = Array.from(root.querySelectorAll('[data-publication-description]'));
  var status = root.querySelector('.publication-filter-status');
  var empty = root.querySelector('.publication-empty');

  function readHash() {
    try { return decodeURIComponent(window.location.hash.slice(1)); }
    catch (error) { return ''; }
  }

  function applyFilter(topic) {
    var selected = buttons.find(function (button) {
      return button.dataset.publicationFilter === topic;
    }) || buttons[0];
    var selectedTopic = selected.dataset.publicationFilter;
    var count = 0;

    entries.forEach(function (entry) {
      var matches = selectedTopic === 'all' || entry.dataset.publicationTopics.split(' ').indexOf(selectedTopic) !== -1;
      entry.hidden = !matches;
      if (matches) count += 1;
    });
    groups.forEach(function (group) {
      group.hidden = !group.querySelector('.publication-entry:not([hidden])');
    });
    buttons.forEach(function (button) {
      button.setAttribute('aria-pressed', button === selected ? 'true' : 'false');
    });
    descriptions.forEach(function (description) {
      description.hidden = description.dataset.publicationDescription !== selectedTopic;
    });
    empty.hidden = count !== 0;
    status.textContent = selectedTopic === 'all'
      ? 'Showing all ' + count + ' publications.'
      : 'Showing ' + count + ' publication' + (count === 1 ? '' : 's') + ' in ' + selected.dataset.publicationLabel + '.';
    return selected;
  }

  function restoreFromHash() {
    var hash = readHash();
    if (buttons.some(function (button) { return button.dataset.publicationFilter === hash; })) {
      applyFilter(hash);
      return;
    }
    applyFilter('all');
    // Retain existing section anchors and allow links to individual citations.
    var target = document.getElementById(hash);
    if (target && root.contains(target)) {
      window.requestAnimationFrame(function () { target.scrollIntoView({ block: 'start' }); });
    }
  }

  function selectTopic(topic, moveToFilters) {
    var hash = topic === 'all' ? '' : '#' + topic;
    if (window.location.hash !== hash) {
      window.history.pushState(null, '', window.location.pathname + window.location.search + hash);
    }
    var selected = applyFilter(topic);
    if (moveToFilters) {
      selected.focus({ preventScroll: true });
      filters.scrollIntoView({ block: 'start' });
    }
  }

  buttons.forEach(function (button) {
    button.addEventListener('click', function () { selectTopic(button.dataset.publicationFilter, false); });
  });
  root.querySelectorAll('[data-publication-topic-link]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
      event.preventDefault();
      selectTopic(link.dataset.publicationTopicLink, true);
    });
  });
  window.addEventListener('hashchange', restoreFromHash);
  window.addEventListener('popstate', restoreFromHash);

  filters.hidden = false;
  root.querySelector('.publication-filter-help').hidden = false;
  status.hidden = false;
  restoreFromHash();
}());
