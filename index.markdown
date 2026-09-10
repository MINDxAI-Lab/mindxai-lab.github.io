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

  .home-opening {
    max-width: 100%;
    margin: 28px 0 32px;
    padding: 17px 0 18px;
    border-top: 1px solid #dfe6e7;
    border-bottom: 1px solid #dfe6e7;
    text-align: left;
  }

  .home-opening-kicker {
    margin: 0 0 5px;
    color: #1f7a7f;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .home-opening h2 {
    margin: 0 0 7px;
    color: #3f4a4c;
    font-size: 1.34rem;
    line-height: 1.25;
  }

  .home-opening p {
    margin: 0;
    line-height: 1.6;
  }

  .home-opening a {
    color: #1f6f70;
    font-weight: 700;
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
    border: 1px solid #d7e4e4;
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

  .research-area-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
  }

  .research-area-item {
    border-left: 4px solid #389092;
    border-radius: 8px;
    padding: 16px 18px;
    background: #eef6f6;
  }

  .research-area-item h3 {
    margin: 0 0 6px;
    font-size: 1.05rem;
  }

  .research-area-item h3 a {
    color: #3f4a4c;
    text-decoration: none;
  }

  .research-area-item h3 a:hover,
  .research-area-item h3 a:focus {
    color: #1f7a7f;
    text-decoration: underline;
  }

  .research-area-item p {
    margin: 0 0 10px;
  }

  .research-area-label {
    display: block;
    margin-bottom: 5px;
    color: #1f7a7f;
    font-size: 0.78rem;
    font-weight: 700;
    line-height: 1.4;
  }

  .research-area-projects {
    margin: 0;
    padding-left: 18px;
  }

  .research-area-projects li {
    margin-bottom: 6px;
    line-height: 1.45;
  }

  .research-area-projects a {
    color: #1f7a7f;
    font-weight: 600;
    text-decoration: none;
  }

  .research-area-projects a:hover,
  .research-area-projects a:focus {
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

  .carousel-slide video {
    display: block;
    width: 100%;
    height: 500px;
    object-fit: contain;
    background: #101415;
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
    .research-area-grid {
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
          The <strong>M</strong>odeling <strong>I</strong>nteraction, cog<strong>N</strong>ition, and <strong>D</strong>ecision-making by <strong>A</strong>rtificial <strong>I</strong>ntelligence (<strong>MINDxAI</strong>) Lab develops human-centered AI and adaptive systems that improve how people interact with complex human-in-the-loop systems. The lab is housed in the <b>Department of Industrial and Systems Engineering</b> at the <b>University of Louisville</b>.
        </p>
        <p>
          We model human cognitive, emotional, physiological, and behavioral states through experiments, wearable sensing, simulation, machine learning, and multimodal data analysis. Our research spans transportation and automated driving, smart manufacturing and workforce development, rehabilitation robotics and assistive technologies, and healthcare and biomedical AI.
        </p>
      </div>
      <div class="home-opening" aria-labelledby="home-opening-heading">
        <p class="home-opening-kicker"><span aria-hidden="true">📣</span> Now recruiting</p>
        <h2 id="home-opening-heading">One fully funded Ph.D. opening for 2027</h2>
        <p>
          Start in Spring, Summer, or Fall 2027. <a href="/Opportunities.html">View position details and application instructions&nbsp;&rarr;</a>
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
          <figure class="carousel-slide">
            <video controls preload="metadata" aria-label="Aggressive Driving in Mixed Traffic demonstration video">
              <source src="/assets/images/banners/aggressive%20driving.mp4" type="video/mp4">
              Your browser does not support the video element.
            </video>
            <figcaption>Aggressive Driving in Mixed Traffic</figcaption>
          </figure>
        </div>
        <button class="carousel-control prev" type="button" data-carousel-prev aria-label="Previous image">&lsaquo;</button>
        <button class="carousel-control next" type="button" data-carousel-next aria-label="Next image">&rsaquo;</button>
        <div class="carousel-tabs" aria-label="Select carousel image">
          <button type="button" class="is-active" data-carousel-goto="0" aria-label="Show image 1">1</button>
          <button type="button" data-carousel-goto="1" aria-label="Show image 2">2</button>
          <button type="button" data-carousel-goto="2" aria-label="Show video 3">3</button>
        </div>
      </div>

      <section class="home-section" aria-labelledby="home-research-heading">
        <h2 id="home-research-heading">Research Areas</h2>
        <div class="research-area-grid">
          <div class="research-area-item">
            <h3><a href="/Research.html#area-transportation-automated-driving"><span class="research-area-label">Research Area I</span>Transportation and Automated Driving</a></h3>
            <p>Understanding driver states and behavior to support adaptive automation, safer mixed traffic, and driver education.</p>
            <ol class="research-area-projects">
              <li><a href="/Research.html#project-cognitive-emotional-driving-automation">Cognitive-Emotional State Assessment for Adaptive Automation Intervention</a></li>
              <li><a href="/Research.html#project-aggressive-driving-mixed-traffic">Aggressive Driving in Mixed Traffic</a></li>
              <li><a href="/Research.html#project-teen-driver-safety-education">Teen Driver Safety Education</a></li>
            </ol>
          </div>
          <div class="research-area-item">
            <h3><a href="/Research.html#area-smart-manufacturing-workforce-development"><span class="research-area-label">Research Area II</span>Smart Manufacturing and Workforce Development</a></h3>
            <p>Using AI-supported virtual reality to advance manufacturing learning, career exploration, and workforce development.</p>
            <ol class="research-area-projects">
              <li><a href="/Research.html#project-ai-vr-manufacturing-foundry">AI-Enabled Virtual Reality Manufacturing Foundry</a></li>
            </ol>
          </div>
          <div class="research-area-item">
            <h3><a href="/Research.html#area-rehabilitation-robotics-assistive-technologies"><span class="research-area-label">Research Area III</span>Rehabilitation Robotics and Assistive Technologies</a></h3>
            <p>Designing and evaluating intuitive prosthetic interfaces and training technologies that support human movement and rehabilitation.</p>
            <ol class="research-area-projects">
              <li><a href="/Research.html#project-prosthetic-control">Human-Centered Design for Natural Upper-Limb Prosthetic Control</a></li>
            </ol>
          </div>
          <div class="research-area-item">
            <h3><a href="/Research.html#area-healthcare-biomedical-ai"><span class="research-area-label">Research Area IV</span>Healthcare and Biomedical AI</a></h3>
            <p>Applying AI and human-centered research to biomedical signal modeling, neurological assessment, and patient-provider communication.</p>
            <ol class="research-area-projects">
              <li><a href="/Research.html#project-eeg-seizure-modeling">AI-Driven Scalp EEG Modeling for Seizure Detection and Signal Enhancement</a></li>
              <li><a href="/Research.html#project-communication-barriers-healthcare">Communication Barriers in Patient-Provider Interactions</a></li>
            </ol>
          </div>
        </div>
      </section>

      <div class="home-section">
        <h2>Explore the Lab</h2>
        <div class="quick-links">
          <a href="/Team.html">Team</a>
          <a href="/Research.html">Research</a>
          <a href="/Publications.html">Publications</a>
          <a href="/News.html">News</a>
          <a href="/Opportunities.html">Opportunities</a>
          <a href="/MoreAboutPI.html">More About the PI</a>
        </div>
      </div>
    </main>

    <aside class="home-news" aria-labelledby="home-news-heading">
      <h2 id="home-news-heading">News</h2>
      <ul class="home-news-list">
        {%- assign news_posts = site.posts | where_exp: "post", "post.tags contains 'news'" -%}
        {%- for post in news_posts limit:10 -%}
        <li class="home-news-item">
          {%- if post.display_date -%}
          <p class="home-news-date">{{ post.display_date }}</p>
          {%- else -%}
          <p class="home-news-date">{{ post.date | date: "%B %Y" }}</p>
          {%- endif -%}
          <p class="home-news-title"><a href="{{ post.url | relative_url }}">{% include news-category-badge.html post=post %} {{ post.title | escape }}</a></p>
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
          if (slideIndex !== current) {
            var video = slide.querySelector('video');
            if (video) {
              video.pause();
            }
          }
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
