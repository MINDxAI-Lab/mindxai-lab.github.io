---
layout: home
title: Dr. Yunmei Liu
nav_title: Home
---

<link rel="stylesheet" href="{{ '/assets/css/news-timeline.css' | relative_url }}">

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

  .home-main {
    min-width: 0;
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
    display: block;
  }


  .research-area-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));
    gap: 16px;
  }

  #home-research {
    scroll-margin-top: 90px;
  }

  .research-area-item {
    display: block;
    border-left: 4px solid #389092;
    border-radius: 8px;
    padding: 16px 18px;
    color: #3f4a4c;
    background: #eef6f6;
    text-decoration: none;
  }

  .research-area-item h3 {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 10px;
    margin: 0 0 10px;
    color: #165f66;
    font-size: 1.05rem;
    line-height: 1.4;
  }

  .research-area-item:hover,
  .research-area-item:focus-visible {
    color: #3f4a4c;
    background: #e5f1f1;
    text-decoration: none;
  }

  .research-area-item:focus-visible {
    outline: 2px solid #1f7a7f;
    outline-offset: 3px;
  }

  .research-area-item p {
    margin: 0;
    line-height: 1.6;
  }

  .research-area-arrow {
    flex: 0 0 16px;
    width: 16px;
    height: 16px;
    margin-top: 4px;
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

  .carousel-slide video + figcaption {
    bottom: 44px;
    pointer-events: none;
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
    flex-wrap: wrap;
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

  .carousel-tabs .carousel-playback {
    width: auto;
    padding: 0 12px;
    border-radius: 17px;
    font: inherit;
    font-size: 0.8rem;
  }

  .carousel-tabs button:focus-visible {
    outline: 2px solid #1f7a7f;
    outline-offset: 3px;
  }

  .carousel-status {
    margin: 8px 0 0;
    color: #637174;
    font-size: 0.85rem;
    text-align: center;
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


  @media (max-width: 980px) {
    .carousel-stage,
    .carousel-slide {
      min-height: 380px;
    }

    .carousel-slide img,
    .carousel-slide video {
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

    .carousel-slide img,
    .carousel-slide video {
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
          The <strong>M</strong>odeling <strong>I</strong>nteraction, cog<strong>N</strong>ition, and <strong>D</strong>ecision-making by <strong>A</strong>rtificial <strong>I</strong>ntelligence (<strong>MINDxAI</strong>) Lab is directed by <a href="/Team.html#yunmei-liu"><strong>Dr. Yunmei Liu</strong></a>, Assistant Professor in the <b>Department of Industrial and Systems Engineering</b> at the <b>University of Louisville</b>. The lab develops human-centered AI and adaptive systems that improve how people interact with complex human-in-the-loop systems.
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
      <div class="mindxai-carousel" data-carousel role="region" aria-roledescription="carousel" aria-label="MINDxAI Lab highlights">
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
            <video controls muted playsinline preload="metadata" aria-label="Aggressive Driving in Mixed Traffic demonstration video">
              <source src="/assets/images/banners/aggressive%20driving.mp4" type="video/mp4">
              Your browser does not support the video element.
            </video>
            <figcaption>Aggressive Driving in Mixed Traffic</figcaption>
          </figure>
        </div>
        <button class="carousel-control prev" type="button" data-carousel-prev aria-label="Previous slide">&lsaquo;</button>
        <button class="carousel-control next" type="button" data-carousel-next aria-label="Next slide">&rsaquo;</button>
        <div class="carousel-tabs" aria-label="Slideshow controls">
          <button type="button" class="is-active" data-carousel-goto="0" aria-label="Show image 1">1</button>
          <button type="button" data-carousel-goto="1" aria-label="Show image 2">2</button>
          <button type="button" data-carousel-goto="2" aria-label="Show video 3">3</button>
          <button type="button" class="carousel-playback" data-carousel-playback hidden>Pause slideshow</button>
        </div>
        <p class="carousel-status" data-carousel-status role="status" hidden></p>
      </div>

      <section class="home-section" id="home-research" aria-labelledby="home-research-heading">
        <h2 id="home-research-heading">Research Areas</h2>
        <div class="research-area-grid">
          {% for topic in site.data.research_topics %}
          <a class="research-area-item" href="{{ '/Research.html' | relative_url }}#{{ topic[0] }}" aria-labelledby="home-area-{{ topic[0] }}">
            <h3 id="home-area-{{ topic[0] }}"><span>{{ topic[1].label | escape | replace: '/', '/<wbr>' }}</span><svg class="research-area-arrow" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M4 10h12M11 5l5 5-5 5" /></svg></h3>
            <p>{{ topic[1].summary | escape }}</p>
          </a>
          {% endfor %}
        </div>
      </section>

      {%- assign home_timeline_posts = site.posts | where_exp: 'post', "post.tags contains 'news'" -%}
      {% include news-timeline.html posts=home_timeline_posts id='home-news-timeline' title='News' %}

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

  </div>
</div>

<script src="{{ '/assets/js/news-calendar-axis.js' | relative_url }}" defer></script>
<script src="{{ '/assets/js/research-updates-timeline.js' | relative_url }}" defer></script>

<script src="{{ '/assets/js/home-carousel.js' | relative_url }}" defer></script>
