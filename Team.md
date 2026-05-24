---
layout: home
title: Team
---

<style>
  .team-page h1,
  .team-page h2,
  .team-page h3 {
    letter-spacing: 0;
  }

  .team-page h1 {
    text-align: center;
  }

  .team-intro {
    max-width: 880px;
    margin: 0 auto 26px;
    text-align: center;
    line-height: 1.65;
  }

  .team-overview {
    display: block;
    width: 100%;
    max-width: 760px;
    margin: 0 auto 34px;
    border-radius: 8px;
  }

  .team-section {
    margin-top: 34px;
  }

  .director-profile {
    display: grid;
    grid-template-columns: 220px minmax(0, 1fr);
    gap: 24px;
    align-items: start;
  }

  .director-profile img {
    width: 220px;
    height: 260px;
    object-fit: cover;
    border-radius: 8px;
  }

  .director-profile p {
    line-height: 1.7;
    text-align: justify;
    text-justify: inter-word;
  }

  .member-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px;
  }

  .member-card {
    display: grid;
    grid-template-columns: 72px minmax(0, 1fr);
    gap: 14px;
    align-items: center;
    padding: 14px 0;
    border-top: 1px solid #dfe6e7;
  }

  .member-avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 72px;
    height: 72px;
    border-radius: 50%;
    color: #fff;
    background: #389092;
    font-weight: 700;
  }

  .member-card h3 {
    margin: 0 0 4px;
    font-size: 1.05rem;
  }

  .member-card p {
    margin: 0;
    line-height: 1.45;
  }

  .contact-block {
    margin-top: 10px;
    line-height: 1.7;
  }

  @media (max-width: 760px) {
    .director-profile,
    .member-grid {
      grid-template-columns: 1fr;
    }

    .director-profile img {
      width: 100%;
      height: auto;
      max-width: 260px;
    }

    .director-profile p {
      text-align: left;
    }
  }
</style>

<div class="team-page">
  <h1>Group Members</h1>
  <p class="team-intro">
    MINDxAI Lab brings together researchers studying human-centered AI, human-machine interaction, cognition, decision-making, and intelligent adaptive systems.
  </p>

  <!-- <img class="team-overview" src="/assets/images/banners/MINDxAI-signage.png" alt="MINDxAI Lab team overview"> -->

  <section class="team-section">
    <h2>Lab Director</h2>
    <div class="director-profile">
      <img src="/assets/images/banners/Updated Images/LIU, YUNMEI.jpg" alt="Dr. Yunmei Liu">
      <div>
        <h3>Dr. Yunmei Liu</h3>
        <p>
          Dr. Yunmei Liu is an Assistant Professor in the Department of Industrial and Systems Engineering at the University of Louisville and director of the MINDxAI Lab. Her research uses experimental and data-driven approaches to understand human limitations and inform the design of safer, more effective human-centered AI and human-in-the-loop systems.
        </p>
        <p>
          Her work spans human states modeling, cognitive workload, situation awareness, decision-making, human-automation interaction, multimodal sensing, machine learning, and statistical modeling.
        </p>
      </div>
    </div>
  </section>

  <section class="team-section">
    <h2>Ph.D. Students</h2>
    <div class="member-grid">
      <div class="member-card">
        <div class="member-avatar">MC</div>
        <div>
          <h3>Moajjem Chowdhury</h3>
          <p>Human States Modeling<br>Multimodal Learning</p>
        </div>
      </div>
      <div class="member-card">
        <div class="member-avatar">YC</div>
        <div>
          <h3>Yan Chen</h3>
          <p>Human-Automation Interaction<br>Human-Centered AI</p>
        </div>
      </div>
      <div class="member-card">
        <div class="member-avatar">UD</div>
        <div>
          <h3>Udit Das</h3>
          <p>Performance Modeling<br>Human-AI Teaming</p>
        </div>
      </div>
      <div class="member-card">
        <div class="member-avatar">QL</div>
        <div>
          <h3>Qunli Liu</h3>
          <p>Behavioral Data Analysis<br>Statistical Modeling</p>
        </div>
      </div>
      <div class="member-card">
        <div class="member-avatar">ML</div>
        <div>
          <h3>Ming Lu</h3>
          <p>Human-Robot Interaction<br>Intelligent Adaptive Systems</p>
        </div>
      </div>
    </div>
  </section>

  <section class="team-section">
    <h2>Contact</h2>
    <div class="contact-block">
      University of Louisville<br>
      Department of Industrial and Systems Engineering<br>
      132 Eastern Pkwy, JS 309<br>
      Louisville, KY 40292<br>
      Email: <a href="mailto:yunmei.liu@louisville.edu">yunmei.liu@louisville.edu</a><br>
      Phone: 502-852-8858
    </div>
  </section>
</div>
