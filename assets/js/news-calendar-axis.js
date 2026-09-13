(function () {
  'use strict';

  function create(root, track, dateStrings) {
    var events = Array.from(track.querySelectorAll('.research-timeline-event'));
    // One equal-width slot per calendar month, with years anchored at January.
    var dates = dateStrings.map(function (dateString) {
      var parts = dateString.split('-').map(Number);
      var daysInMonth = new Date(Date.UTC(parts[0], parts[1], 0)).getUTCDate();
      return { year: parts[0], month: parts[0] * 12 + parts[1] - 1 + (parts[2] - 1) / daysInMonth };
    });
    var firstYear = Math.min.apply(null, dates.map(function (date) { return date.year; }));
    var lastYear = Math.max.apply(null, dates.map(function (date) { return date.year; }));
    var startMonth = firstYear * 12;
    var monthCount = (lastYear - firstYear + 1) * 12;
    var calendarAxis = document.createElement('li');
    calendarAxis.className = 'research-calendar-axis';
    calendarAxis.setAttribute('role', 'presentation');
    calendarAxis.setAttribute('aria-hidden', 'true');
    root.classList.add('research-timeline--calendar');

    for (var month = 0; month < monthCount; month += 1) {
      var tick = document.createElement('span');
      tick.className = 'research-calendar-tick';
      tick.style.left = (month / monthCount * 100) + '%';
      if (month % 3 === 0) {
        var monthLabel = document.createElement('span');
        monthLabel.className = 'research-calendar-month';
        monthLabel.textContent = ['Jan', 'Apr', 'Jul', 'Oct'][(month % 12) / 3];
        tick.appendChild(monthLabel);
      }
      if (month % 12 === 0) {
        tick.classList.add('research-calendar-tick--year');
        var yearLabel = document.createElement('span');
        yearLabel.className = 'research-calendar-year';
        yearLabel.textContent = firstYear + month / 12;
        tick.appendChild(yearLabel);
      }
      calendarAxis.appendChild(tick);
    }
    track.insertBefore(calendarAxis, track.firstChild);

    function layout(visibleIndexes) {
      var trackWidth = track.clientWidth;
      if (!trackWidth) return;

      var placed = [];
      var minimumSpacing = 20;
      visibleIndexes.forEach(function (index) {
        var event = events[index];
        var position = (dates[index].month - startMonth) / monthCount * 100;
        var x = position / 100 * trackWidth;
        var lane = 0;
        var attempt = 0;
        // Shift only vertically: dates keep their exact horizontal calendar positions.
        while (placed.some(function (point) {
          return Math.pow(point.x - x, 2) + Math.pow(point.y - lane, 2) < minimumSpacing * minimumSpacing;
        })) {
          attempt += 1;
          lane = Math.ceil(attempt / 2) * minimumSpacing * (attempt % 2 ? -1 : 1);
        }
        placed.push({ x: x, y: lane });
        event.style.setProperty('--timeline-position', position + '%');
        event.style.setProperty('--timeline-offset', '0px');
        event.style.setProperty('--timeline-lane', lane + 'px');
        event.style.setProperty('--timeline-stem-height', Math.abs(lane) + 'px');
        event.style.setProperty('--timeline-stem-top', (7 - Math.max(0, lane)) + 'px');
      });
      var minimumLane = Math.min.apply(null, placed.map(function (point) { return point.y; }).concat([0]));
      var maximumLane = Math.max.apply(null, placed.map(function (point) { return point.y; }).concat([0]));
      var axisY = Math.max(48, 12 - minimumLane);
      var labelsY = axisY + Math.max(40, maximumLane) + 12;
      track.style.setProperty('--timeline-axis-y', axisY + 'px');
      track.style.setProperty('--timeline-label-y', labelsY + 'px');
      track.style.height = (labelsY + 44) + 'px';
    }

    return { firstYear: firstYear, lastYear: lastYear, layout: layout };
  }

  window.NewsCalendarAxis = { create: create };
}());
