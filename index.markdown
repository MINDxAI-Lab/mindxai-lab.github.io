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
    max-width: 100%;
    margin: 0 auto 28px;
    text-align: center;
    font-size: 1.05rem;
    line-height: 1.65;
  }

  .home-section {
    margin-top: 34px;
  }

  .mindxai-home > .home-section:first-of-type {
    margin-top: 12px;
  }

  .home-main > .home-section:first-child {
    margin-top: 12px;
  }

  .home-section p {
    max-width: 100%;
    margin-right: auto;
    margin-left: auto;
    line-height: 1.7;
    text-align: left;
  }

  .home-layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(260px, 320px);
    gap: 28px;
    align-items: start;
  }

  .home-news {
    position: sticky;
    top: 92px;
    margin-top: 12px;
    padding: 18px 18px 20px;
    border-left: 4px solid #389092;
    border-radius: 8px;
    background: #f6fbfb;
  }

  .home-news h2 {
    margin: 0 0 14px;
    font-size: 1.15rem;
  }

  .home-news-list {
    display: grid;
    gap: 14px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .home-news-item {
    padding-bottom: 13px;
    border-bottom: 1px solid #dfe8e8;
  }

  .home-news-item:last-child {
    padding-bottom: 0;
    border-bottom: 0;
  }

  .home-news-date {
    margin: 0 0 4px;
    color: #1f7a7f;
    font-size: 0.86rem;
    font-weight: 700;
    line-height: 1.4;
  }

  .home-news-title {
    margin: 0;
    font-size: 0.96rem;
    font-weight: 700;
    line-height: 1.45;
  }

  .home-news-title a {
    color: #3f4a4c;
    text-decoration: none;
  }

  .home-news-title a:hover,
  .home-news-title a:focus {
    color: #1f7a7f;
    text-decoration: underline;
  }

  .home-news-all {
    display: inline-block;
    margin-top: 16px;
    color: #1f7a7f;
    font-weight: 700;
    text-decoration: none;
  }

  .home-news-all:hover,
  .home-news-all:focus {
    text-decoration: underline;
  }

  .theme-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 16px;
  }

  .theme-item {
    border-left: 4px solid #389092;
    border-radius: 8px;
    padding: 16px 18px;
    background: #eef6f6;
  }

  .theme-item h3 {
    margin: 0 0 6px;
    font-size: 1.05rem;
  }

  .theme-item h3 a {
    color: #3f4a4c;
    text-decoration: none;
  }

  .theme-item h3 a:hover,
  .theme-item h3 a:focus {
    color: #1f7a7f;
    text-decoration: underline;
  }

  .theme-item p {
    margin: 0 0 10px;
  }

  .theme-item .theme-focus {
    margin: 8px 0 12px;
    color: #165f66;
    font-weight: 700;
    font-size: 1.01rem;
    line-height: 1.5;
  }

  .theme-item .theme-focus strong {
    color: #3f4a4c;
  }

  .theme-projects {
    margin: 0;
    padding-left: 18px;
  }

  .theme-projects li {
    margin-bottom: 6px;
    line-height: 1.45;
  }

  .theme-projects a {
    color: #1f7a7f;
    font-weight: 600;
    text-decoration: none;
  }

  .theme-projects a:hover,
  .theme-projects a:focus {
    text-decoration: underline;
  }

  .mindxai-carousel {
    position: relative;
    margin: 30px auto 12px;
    max-width: 100%;
  }

  .carousel-stage {
    position: relative;
    overflow: hidden;
    min-height: 500px;
    background: #101415;
    border-radius: 8px;
  }

  .carousel-slide {
    display: none;
    margin: 0;
    min-height: 500px;
  }

  .carousel-slide.is-active {
    display: block;
  }

  .carousel-slide img {
    display: block;
    width: 100%;
    height: 500px;
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
    top: 230px;
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

  @media (max-width: 1180px) {
    .home-layout {
      grid-template-columns: 1fr;
    }

    .home-news {
      position: static;
      order: 2;
      margin-top: 28px;
    }
  }

  @media (max-width: 980px) {
    .carousel-stage,
    .carousel-slide {
      min-height: 380px;
    }

    .carousel-slide img {
      height: 380px;
    }

    .carousel-control {
      top: 170px;
    }
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
  <h1><strong>Welcome to the MINDxAI Lab!</strong></h1>
  <!-- <p class="lead">Modeling Interaction, cogNition, and Decision-making by Artificial Intelligence</p> -->

  <div class="home-layout">
    <main class="home-main">
      <div class="home-section">
        <p>
          The <strong>M</strong>odeling <strong>I</strong>nteraction, cog<strong>N</strong>ition, and <strong>D</strong>ecision-making by <strong>A</strong>rtificial <strong>I</strong>ntelligence (<strong>MINDxAI</strong>)  Lab develops human-centered AI and human-in-the-loop systems grounded in human factors and data-driven modeling. The lab is housed in the <b>Department of Industrial and Systems Engineering</b> at the <b>University of Louisville</b>.
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
          <!-- <figure class="carousel-slide is-active">
            <img src="/assets/images/banners/Updated%20Images/Picture1.jpg" alt="MINDxAI Lab activity photo">
            <figcaption>MINDxAI Lab research</figcaption>
          </figure> -->
          <figure class="carousel-slide is-active">
            <img src="/assets/images/banners/Updated%20Images/Picture2.png" alt="MINDxAI Lab group photo">
            <figcaption>Human states modeling and driving safety</figcaption>
          </figure>
          <!-- <figure class="carousel-slide">
            <img src="/assets/images/banners/Updated%20Images/Picture51.png" alt="NSF project illustration for EMG-based assistive interface design">
            <figcaption>Assistive human-machine interface design</figcaption>
          </figure>
          <figure class="carousel-slide">
            <img src="/assets/images/banners/Updated%20Images/Picture7.png" alt="MINDxAI Lab research photo">
            <figcaption>Human-AI-Teaming research</figcaption>
            </figure> -->
          <figure class="carousel-slide">
            <img src="/assets/images/banners/Updated%20Images/Retreat%20dinner.png" alt="MINDxAI Lab retreat dinner">
          <figcaption><strong>MINDxAI Lab</strong> retreat dinner</figcaption>
          </figure>
        </div>
        <button class="carousel-control prev" type="button" data-carousel-prev aria-label="Previous image">&lsaquo;</button>
        <button class="carousel-control next" type="button" data-carousel-next aria-label="Next image">&rsaquo;</button>
        <div class="carousel-tabs" aria-label="Select carousel image">
          <button type="button" class="is-active" data-carousel-goto="0" aria-label="Show image 1">1</button>
          <button type="button" data-carousel-goto="1" aria-label="Show image 2">2</button>
          <!-- <button type="button" data-carousel-goto="2" aria-label="Show image 3">3</button>
          <button type="button" data-carousel-goto="3" aria-label="Show image 4">4</button>
          <button type="button" data-carousel-goto="4" aria-label="Show image 5">5</button> -->
        </div>
      </div>

      <div class="home-section">
        <h2>Research Themes</h2>
        <div class="theme-grid">
          <div class="theme-item">
            <h3><a href="/Research.html#theme-adaptive-health-training-safety">Research Theme I: Real-Time Adaptive System Design Guided by Human State Modeling</a></h3>
    <p>This theme translates human-state information into the design and implementation of real-time adaptive systems.</p>
            <ol class="theme-projects">
              <li><a href="/Research.html#project-cognitive-emotional-driving-automation">Cognitive-Emotional State Assessment for Adaptive Automation Intervention</a></li>
              <li><a href="/Research.html#project-prosthetic-control">Human-Centered Design for Natural Upper-Limb Prosthetic Control</a></li>
            </ol>
          </div>
          <div class="theme-item">
            <h3><a href="/Research.html#theme-physiological-biomedical-modeling">Research Theme II: Human-Centered Computing and Interaction-Aware Human State Modeling</a></h3>
    <p>This theme investigates the mechanisms and theoretical foundations of human-state changes through AI-enabled modeling and multimodal data analysis.</p>
            <ol class="theme-projects">
              <li><a href="/Research.html#project-eeg-seizure-modeling">AI-Driven Scalp EEG Modeling for Seizure Detection and Signal Enhancement</a></li>
              <li><a href="/Research.html#project-communication-barriers-healthcare">Communication Barriers in Patient-Provider Interactions</a></li>
            </ol>
          </div>
          <div class="theme-item">
            <h3><a href="/Research.html#theme-human-ai-automation">Research Theme III: Human Behavior Modeling in Transportation and Automation Systems</a></h3>
    <p>This theme models behavioral dynamics and system-level safety and efficiency outcomes in complex systems.</p>
            <ol class="theme-projects">
              <li><a href="/Research.html#project-aggressive-driving-mixed-traffic">Aggressive Driving in Mixed Traffic</a></li>
            </ol>
          </div>
        </div>
      </div>

      <div class="home-section">
        <h2>Explore the Lab</h2>
        <div class="quick-links">
          <a href="/Team.html">Team</a>
          <a href="/Research.html">Research</a>
          <a href="/Publications.html">Publications</a>
          <a href="/News.html">News</a>
          <a href="/Opportunities.html">Opportunities</a>
        </div>
      </div>
    </main>

    <aside class="home-news" aria-labelledby="home-news-heading">
      <h2 id="home-news-heading">News</h2>
      <ul class="home-news-list">
        {%- assign news_posts = site.posts | where_exp: "post", "post.tags contains 'news'" -%}
        {%- for post in news_posts limit:6 -%}
        <li class="home-news-item">
          {%- if post.display_date -%}
          <p class="home-news-date">{{ post.display_date }}</p>
          {%- else -%}
          <p class="home-news-date">{{ post.date | date: "%B %Y" }}</p>
          {%- endif -%}
          <p class="home-news-title"><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></p>
        </li>
        {%- endfor -%}
      </ul>
      <a class="home-news-all" href="/News.html">... see all News</a>
    </aside>
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
