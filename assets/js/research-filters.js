(function () {
  'use strict';

  var root = document.querySelector('.research-page');
  if (!root) return;

  var filters = root.querySelector('.research-filters');
  var buttons = Array.from(filters.querySelectorAll('[data-research-filter]'));
  var projects = Array.from(root.querySelector('.research-project-list').children);
  var descriptions = Array.from(root.querySelectorAll('[data-research-description]'));
  var status = root.querySelector('.research-filter-status');
  var activeTopic = 'all';
  // Preserve links from the previous area-based layout and homepage.
  var aliases = {
    'area-transportation-automated-driving': 'transportation-automated-driving',
    'area-smart-manufacturing-workforce-development': 'smart-manufacturing',
    'smart-manufacturing-workforce-development': 'smart-manufacturing',
    'area-rehabilitation-robotics-assistive-technologies': 'rehabilitation-robotics-assistive-technologies',
    'area-healthcare-biomedical-ai': 'healthcare-biomedical-ai',
    'theme-adaptive-health-training-safety': 'transportation-automated-driving',
    'theme-human-ai-automation': 'human-ai-autonomy-robot-teaming',
    'theme-physiological-biomedical-modeling': 'healthcare-biomedical-ai',
    'human-ai-teaming-learning': 'human-ai-autonomy-robot-teaming',
    'human-ai-teaming': 'human-ai-autonomy-robot-teaming',
    'learning-education': 'education-workforce-development'
  };

  function getHash() {
    try { return decodeURIComponent(window.location.hash.slice(1)); }
    catch (error) { return ''; }
  }

  function applyFilter(topic) {
    var selected = buttons.find(function (button) {
      return button.dataset.researchFilter === topic;
    }) || buttons[0];
    activeTopic = selected.dataset.researchFilter;
    var visibleCount = 0;

    projects.forEach(function (project) {
      var matches = activeTopic === 'all' || project.dataset.researchTopics.split(' ').indexOf(activeTopic) !== -1;
      project.hidden = !matches;
      if (matches) visibleCount += 1;
      else project.querySelectorAll('video').forEach(function (video) { video.pause(); });
    });
    buttons.forEach(function (button) {
      button.setAttribute('aria-pressed', button === selected ? 'true' : 'false');
    });
    descriptions.forEach(function (description) {
      description.hidden = description.dataset.researchDescription !== activeTopic;
    });
    status.textContent = activeTopic === 'all'
      ? 'Showing all ' + visibleCount + ' projects.'
      : 'Showing ' + visibleCount + ' project' + (visibleCount === 1 ? '' : 's') + ' in ' + selected.dataset.researchLabel + '.';
  }

  function showHashTarget() {
    var hash = getHash();
    var topic = Object.prototype.hasOwnProperty.call(aliases, hash) ? aliases[hash] : hash;
    var isTopic = buttons.some(function (button) { return button.dataset.researchFilter === topic; });
    if (isTopic) {
      applyFilter(topic);
      return;
    }
    // Deep links to a project or a publication must work even if a filter hid it.
    var target = document.getElementById(hash);
    var project = target && target.closest('.research-project');
    if (project) {
      applyFilter('all');
      window.requestAnimationFrame(function () { target.scrollIntoView({ block: 'start' }); });
    } else {
      applyFilter('all');
    }
  }

  function selectTopic(topic, scrollToFilters) {
    var nextHash = topic === 'all' ? '' : '#' + topic;
    if (window.location.hash !== nextHash) {
      window.history.pushState(null, '', window.location.pathname + window.location.search + nextHash);
    }
    applyFilter(topic);
    if (scrollToFilters) {
      var selected = buttons.find(function (button) { return button.dataset.researchFilter === activeTopic; });
      selected.focus({ preventScroll: true });
      filters.scrollIntoView({ block: 'start' });
    }
  }

  buttons.forEach(function (button) {
    button.addEventListener('click', function () { selectTopic(button.dataset.researchFilter, false); });
  });
  root.querySelectorAll('[data-research-topic-link]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
      event.preventDefault();
      selectTopic(link.dataset.researchTopicLink, true);
    });
  });
  window.addEventListener('hashchange', showHashTarget);
  window.addEventListener('popstate', showHashTarget);
  // Re-align project deep links after images and other page assets finish loading.
  window.addEventListener('load', showHashTarget);

  filters.hidden = false;
  root.querySelector('.research-filter-help').hidden = false;
  status.hidden = false;
  showHashTarget();
}());
