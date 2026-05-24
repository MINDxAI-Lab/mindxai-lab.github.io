---
layout: home
title: Home
---

<style>
  .mindxai-home h1,
  .mindxai-home h2,
  .mindxai-home h3 {
    letter-spacing: 0;
  }

  .mindxai-home h1 {
    margin-bottom: 6px;
    text-align: center;
  }

  .mindxai-home .lead {
    max-width: 920px;
    margin: 0 auto 28px;
    text-align: center;
    font-size: 1.05rem;
    line-height: 1.65;
  }

  .home-section {
    margin-top: 34px;
  }

  .home-section p {
    line-height: 1.7;
    text-align: left;
  }

  .theme-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
  }

  .theme-item {
    border-left: 4px solid #389092;
    padding: 2px 0 2px 14px;
  }

  .theme-item h3 {
    margin: 0 0 6px;
    font-size: 1.05rem;
  }

  .theme-item p {
    margin: 0;
  }

  .mindxai-carousel {
    position: relative;
    margin: 30px auto 12px;
    max-width: 980px;
  }

  .carousel-stage {
    position: relative;
    overflow: hidden;
    min-height: 420px;
    background: #101415;
    border-radius: 8px;
  }

  .carousel-slide {
    display: none;
    margin: 0;
    min-height: 420px;
  }

  .carousel-slide.is-active {
    display: block;
  }

  .carousel-slide img {
    display: block;
    width: 100%;
    height: 420px;
    object-fit: cover;
  }

  .carousel-slide figcaption {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 14px 18px;
    color: #fff;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.72));
  }

  .carousel-control {
    position: absolute;
    top: 190px;
    width: 40px;
    height: 40px;
    border: 0;
    border-radius: 50%;
    color: #fff;
    background: rgba(0, 0, 0, 0.62);
    cursor: pointer;
    font-size: 26px;
    line-height: 40px;
  }

  .carousel-control:hover,
  .carousel-control:focus {
    background: rgba(0, 0, 0, 0.82);
    outline: 2px solid #fff;
    outline-offset: 2px;
  }

  .carousel-control.prev {
    left: 14px;
  }

  .carousel-control.next {
    right: 14px;
  }

  .carousel-tabs {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 12px;
  }

  .carousel-tabs button {
    width: 34px;
    height: 34px;
    border: 1px solid #b8c6c7;
    border-radius: 50%;
    color: #2d3a3b;
    background: #fff;
    cursor: pointer;
  }

  .carousel-tabs button.is-active {
    color: #fff;
    border-color: #389092;
    background: #389092;
  }

  .quick-links {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 12px;
  }

  .quick-links a {
    display: inline-block;
    padding: 8px 12px;
    border: 1px solid #cbd7d8;
    border-radius: 8px;
    text-decoration: none;
  }

  @media (max-width: 760px) {
    .theme-grid {
      grid-template-columns: 1fr;
    }

    .carousel-stage,
    .carousel-slide {
      min-height: 280px;
    }

    .carousel-slide img {
      height: 280px;
    }

    .carousel-control {
      top: 120px;
    }
  }
</style>

<div class="mindxai-home">
  <h1>MINDxAI Lab</h1>
  <!-- <p class="lead">Modeling Interaction, cogNition, and Decision-making by Artificial Intelligence</p> -->

  <div class="home-section">
    <p>
      The MINDxAI Lab develops human-centered AI and human-in-the-loop systems grounded in human factors and data-driven modeling. The lab is housed in the Department of Industrial and Systems Engineering at the University of Louisville.
    </p>
    <p>
      Our research focuses on modeling interaction, cognition, and decision-making with AI. We study human states, workload, situation awareness, performance, and behavior using experimental methods, wearable sensors, physiological signals, behavioral data, machine learning, and statistical modeling.
    </p>
    <p>
      The lab applies these approaches to healthcare, transportation, automated driving, aviation, robotics, and intelligent adaptive systems. Our goal is to design AI-enabled systems that understand human capabilities and limitations, support better decisions, and improve safety and effectiveness in complex environments.
    </p>
  </div>

  <div class="mindxai-carousel" data-carousel>
    <div class="carousel-stage">
      <figure class="carousel-slide is-active">
        <img src="/assets/images/banners/Updated%20Images/Picture1.jpg" alt="MINDxAI Lab activity photo">
        <figcaption>MINDxAI Lab research</figcaption>
      </figure>
      <figure class="carousel-slide">
        <img src="/assets/images/banners/Updated%20Images/Picture2.png" alt="MINDxAI Lab group photo">
        <figcaption>Human states modeling and driving safety</figcaption>
      </figure>
      <figure class="carousel-slide">
        <img src="/assets/images/banners/Updated%20Images/Picture51.png" alt="NSF project illustration for EMG-based assistive interface design">
        <figcaption>Assistive human-machine interface design</figcaption>
      </figure>
      <figure class="carousel-slide">
        <img src="/assets/images/banners/Updated%20Images/Picture7.png" alt="MINDxAI Lab research photo">
        <figcaption>Human-AI-Teaming research</figcaption>
        </figure>
      <figure class="carousel-slide">
        <img src="/assets/images/banners/Updated%20Images/Retreat%20dinner.png" alt="MINDxAI Lab retreat dinner">
      <figcaption>MINDxAI Lab retreat dinner</figcaption>
      </figure>
    </div>
    <button class="carousel-control prev" type="button" data-carousel-prev aria-label="Previous image">&lsaquo;</button>
    <button class="carousel-control next" type="button" data-carousel-next aria-label="Next image">&rsaquo;</button>
    <div class="carousel-tabs" aria-label="Select carousel image">
      <button type="button" class="is-active" data-carousel-goto="0" aria-label="Show image 1">1</button>
      <button type="button" data-carousel-goto="1" aria-label="Show image 2">2</button>
      <button type="button" data-carousel-goto="2" aria-label="Show image 3">3</button>
      <button type="button" data-carousel-goto="3" aria-label="Show image 4">4</button>
      <button type="button" data-carousel-goto="4" aria-label="Show image 5">5</button>
    </div>
  </div>

  <div class="home-section">
    <h2>Research Themes</h2>
    <div class="theme-grid">
      <div class="theme-item">
        <h3>Human States Modeling</h3>
        <p>Multimodal learning from behavioral, physiological, and performance data.</p>
      </div>
      <div class="theme-item">
        <h3>Human-Automation Interaction</h3>
        <p>Design and evaluation of human-centered AI, automation, and adaptive systems.</p>
      </div>
      <div class="theme-item">
        <h3>Decision-Making and Performance</h3>
        <p>Models of cognition, workload, situation awareness, trust, and decision behavior.</p>
      </div>
      <div class="theme-item">
        <h3>Applied Sociotechnical Systems</h3>
        <p>Applications in healthcare, transportation, automated driving, aviation, robotics, and manufacturing.</p>
      </div>
    </div>
  </div>

  <div class="home-section">
    <h2>Explore the Lab</h2>
    <div class="quick-links">
      <a href="/Team.html">Team</a>
      <a href="/Research.html">Research</a>
      <a href="/Publications.html">Publications</a>
      <a href="/Opportunities.html">Opportunities</a>
      <a href="/News.html">News</a>
    </div>
  </div>
</div>

<script>
  (function() {
    var carousels = document.querySelectorAll('[data-carousel]');

    carousels.forEach(function(carousel) {
      var slides = carousel.querySelectorAll('.carousel-slide');
      var tabs = carousel.querySelectorAll('[data-carousel-goto]');
      var prev = carousel.querySelector('[data-carousel-prev]');
      var next = carousel.querySelector('[data-carousel-next]');
      var current = 0;

      function showSlide(index) {
        current = (index + slides.length) % slides.length;

        slides.forEach(function(slide, slideIndex) {
          slide.classList.toggle('is-active', slideIndex === current);
        });

        tabs.forEach(function(tab, tabIndex) {
          tab.classList.toggle('is-active', tabIndex === current);
          tab.setAttribute('aria-current', tabIndex === current ? 'true' : 'false');
        });
      }

      prev.addEventListener('click', function() {
        showSlide(current - 1);
      });

      next.addEventListener('click', function() {
        showSlide(current + 1);
      });

      tabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
          showSlide(parseInt(tab.getAttribute('data-carousel-goto'), 10));
        });
      });
    });
  }());
</script>
