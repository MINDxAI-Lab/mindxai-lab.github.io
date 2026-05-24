---
layout: home
title: Research
---

<style>
  .research-page h1,
  .research-page h2,
  .research-page h3 {
    letter-spacing: 0;
  }

  .research-page h1,
  .research-page .research-subtitle {
    text-align: center;
  }

  .research-subtitle {
    margin-top: -4px;
    color: #4d5b5d;
  }

  .research-section {
    margin-top: 36px;
  }

  .research-project {
    display: grid;
    grid-template-columns: 300px minmax(0, 1fr);
    gap: 22px;
    align-items: start;
    margin-top: 24px;
    padding-top: 24px;
    border-top: 1px solid #dfe6e7;
  }

  .research-project img {
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
  }

  .research-project h3 {
    margin-top: 0;
  }

  .research-project p {
    line-height: 1.68;
    text-align: justify;
    text-justify: inter-word;
  }

  .research-project a {
    font-weight: 700;
  }

  @media (max-width: 760px) {
    .research-project {
      grid-template-columns: 1fr;
    }

    .research-project img {
      width: 100%;
      height: auto;
      max-height: 260px;
    }

    .research-project p {
      text-align: left;
    }
  }
</style>

<div class="research-page">
  <h1>MINDxAI Lab Research</h1>
  <p class="research-subtitle">Human-centered AI, cognitive modeling, human-machine interaction, and safer intelligent systems.</p>

  <section class="research-section">
    <h2>Current Research Projects</h2>

    <article class="research-project">
      <img src="/assets/images/banners/NSF.png" alt="NSF project graphic">
      <div>
        <h3>EMG-Based Assistive Human-Machine Interface Design</h3>
        <p>
          This NSF-funded project develops models of powered-prosthetic user cognitive workload when applying different modes of electromyography (EMG)-based device control. These models can be used to predict workload associated with EMG-based control interfaces in other applications.
        </p>
        <a href="{% post_url 2019-12-01-NSF %}">Read more</a>
      </div>
    </article>

    <article class="research-project">
      <img src="/assets/images/banners/DARPA1.png" alt="DARPA project graphic">
      <div>
        <h3>Real-Time Perceptually Enabled Task Guidance in Extremes</h3>
        <p>
          This DARPA-funded project studies the use of augmented reality for providing knowledge task guidance in extreme situations. The research challenge is to create a data-to-knowledge pipeline from wearable devices to an intelligent agent that can determine what information or guidance to provide to human operators in real time.
        </p>
        <a href="{% post_url 2022-01-01-DARPA %}">Read more</a>
      </div>
    </article>

    <article class="research-project">
      <img src="/assets/images/banners/REU.png" alt="REU project graphic">
      <div>
        <h3>NSF REU Site in Advanced Manufacturing and Supply Chain</h3>
        <p>
          This three-year REU project at the University of Louisville provides a 10-week summer experiential training program. REU students work closely with faculty mentors on research projects motivated by real-world problems and participate in professional development opportunities including workshops, research presentations, and plant tours.
        </p>
        <a href="https://www.aqlanlab.org/research/reu/project-6" target="_blank" rel="noopener">Read more</a>
      </div>
    </article>
  </section>

  <section class="research-section">
    <h2>Past Research Projects</h2>

    <article class="research-project">
      <img src="/assets/images/banners/dissertation1.jpeg" alt="Automation rate and situation awareness research graphic">
      <div>
        <h3>Automation Rate and Situation Awareness Responses</h3>
        <p>
          During the operation of automated systems, if a user cannot accurately understand the structure and function of system automation, distrust or over-trust in the automation may occur. This research developed a continuous automation rate function to quantify levels of automation in complex systems and proposed a new relationship between the automation rate function and operator situation awareness responses.
        </p>
        <a href="{% post_url 2019-09-01-Dissertation %}">Read more</a>
      </div>
    </article>

    <article class="research-project">
      <img src="/assets/images/banners/dissertation0.png" alt="Roadway signage research graphic">
      <div>
        <h3>Roadway Signage for Novel Grade-Separated Interchanges</h3>
        <p>
          This NCDOT-funded project used a driving simulator to compare the driving performance and mental state of young and middle-aged drivers while navigating standard intersections and novel grade-separated interchange conditions. The experiment also manipulated driver exposure to different configurations of lane assignment and decision point signs.
        </p>
        <a href="{% post_url 2019-09-01-GSIX %}">Read more</a>
      </div>
    </article>

    <article class="research-project">
      <img src="/assets/images/banners/other1.png" alt="Other human factors research graphic">
      <div>
        <h3>Other Human Factors and Intelligent Systems Projects</h3>
        <p>
          In addition to the research studies highlighted above, the MINDxAI Lab works on systems safety analysis, unmanned aerial vehicle interface design, consistency in the design of interchanges in high-density traffic corridors, and non-safety-related in-vehicle and on-road message displays.
        </p>
        <a href="{% post_url 2019-09-01-Other %}">Read more</a>
      </div>
    </article>
  </section>
</div>
