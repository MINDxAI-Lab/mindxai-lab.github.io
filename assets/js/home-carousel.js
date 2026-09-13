(function () {
  'use strict';

  document.querySelectorAll('[data-carousel]').forEach(function (carousel) {
    var slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
    var tabs = Array.from(carousel.querySelectorAll('[data-carousel-goto]'));
    var playback = carousel.querySelector('[data-carousel-playback]');
    var status = carousel.querySelector('[data-carousel-status]');
    var stage = carousel.querySelector('.carousel-stage');
    var current = 0;
    var running = true;
    var timer = null;
    var playbackToken = 0;
    var imageDelay = 3000;

    if (!slides.length || !playback) return;

    function updatePlaybackControl() {
      playback.textContent = running ? 'Pause slideshow' : 'Resume slideshow';
      stage.setAttribute('aria-live', running ? 'off' : 'polite');
    }

    function setStatus(message) {
      status.textContent = message;
      status.hidden = !message;
    }

    function clearTimer() {
      window.clearTimeout(timer);
      timer = null;
      playbackToken += 1;
    }

    function startCurrentSlide() {
      clearTimer();
      var video = slides[current].querySelector('video');
      if (!running || document.hidden) {
        if (video) video.pause();
        return;
      }

      if (video) {
        if (video.ended) video.currentTime = 0;
        var token = playbackToken;
        var playAttempt = video.play();
        if (playAttempt && typeof playAttempt.catch === 'function') {
          playAttempt.catch(function () {
            if (token !== playbackToken || document.hidden) return;
            running = false;
            updatePlaybackControl();
            setStatus('Video could not start automatically. Use Resume slideshow or the video play button to continue.');
          });
        }
        // The video's ended event, not an image timer, advances this slide.
        return;
      }

      var image = slides[current].querySelector('img');
      if (image && !image.complete) return;
      timer = window.setTimeout(function () { showSlide(current + 1); }, imageDelay);
    }

    function showSlide(index) {
      clearTimer();
      current = (index + slides.length) % slides.length;
      setStatus('');
      slides.forEach(function (slide, slideIndex) {
        var active = slideIndex === current;
        slide.classList.toggle('is-active', active);
        slide.hidden = !active;
        slide.setAttribute('role', 'group');
        slide.setAttribute('aria-roledescription', 'slide');
        slide.setAttribute('aria-label', (slideIndex + 1) + ' of ' + slides.length);
        var video = slide.querySelector('video');
        if (video) {
          video.pause();
          if (video.readyState > 0) video.currentTime = 0;
        }
      });
      tabs.forEach(function (tab, tabIndex) {
        tab.classList.toggle('is-active', tabIndex === current);
        tab.setAttribute('aria-current', tabIndex === current ? 'true' : 'false');
      });
      updatePlaybackControl();
      startCurrentSlide();
    }

    slides.forEach(function (slide, index) {
      var image = slide.querySelector('img');
      if (image) {
        ['load', 'error'].forEach(function (eventName) {
          image.addEventListener(eventName, function () {
            if (current === index) startCurrentSlide();
          });
        });
      }
      var video = slide.querySelector('video');
      if (!video) return;
      video.muted = true;
      video.playsInline = true;
      video.loop = false;
      video.addEventListener('ended', function () {
        if (current === index && running && !document.hidden) showSlide(0);
      });
      video.addEventListener('pause', function () {
        if (current !== index || !running || document.hidden || video.ended || !video.paused) return;
        running = false;
        clearTimer();
        updatePlaybackControl();
      });
      video.addEventListener('play', function () {
        if (current !== index || document.hidden) return;
        running = true;
        setStatus('');
        updatePlaybackControl();
      });
      video.addEventListener('error', function () {
        if (current !== index) return;
        running = false;
        clearTimer();
        updatePlaybackControl();
        setStatus('Video is unavailable. Use the slide buttons to continue browsing.');
      });
    });

    carousel.querySelector('[data-carousel-prev]').addEventListener('click', function () { showSlide(current - 1); });
    carousel.querySelector('[data-carousel-next]').addEventListener('click', function () { showSlide(current + 1); });
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () { showSlide(Number(tab.dataset.carouselGoto)); });
    });
    playback.addEventListener('click', function () {
      running = !running;
      setStatus('');
      updatePlaybackControl();
      startCurrentSlide();
    });
    document.addEventListener('visibilitychange', startCurrentSlide);
    playback.hidden = false;
    showSlide(0);
  });
}());
