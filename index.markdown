---
layout: home
title: Home
---

<style>
  .lab-hero {
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.8fr);
    gap: 28px;
    align-items: start;
  }

  .lab-hero img {
    width: 100%;
    max-width: 420px;
    border-radius: 8px;
  }

  .lab-section {
    margin-top: 28px;
  }

  .lab-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px 24px;
  }

  .lab-people {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 18px;
  }

  .lab-person {
    border-left: 3px solid #389092;
    padding-left: 12px;
  }

  @media (max-width: 760px) {
    .lab-hero,
    .lab-grid,
    .lab-people {
      grid-template-columns: 1fr;
    }
  }
</style>

<h1 align="center">MINDxAI Lab</h1>
<h2 align="center">Modeling Interaction, cogNition, and Decision-making x AI</h2>

<div class="lab-hero">
  <div>
    <font size=3>
      <p style="text-align:justify; text-justify:inter-ideograph;">
        The Modeling Interaction, cogNition, and Decision-making x AI (MINDxAI) Lab develops human-centered AI and human-in-the-loop systems grounded in human factors and data-driven modeling. Our research focuses on understanding human states, cognition, interaction, and decision-making so intelligent systems can support people in safer and more effective ways.
      </p>

      <p style="text-align:justify; text-justify:inter-ideograph;">
        The lab is directed by Dr. Yunmei Liu in the Department of Industrial and Systems Engineering at the University of Louisville. We use experimental methods, wearable sensing, physiological measures, machine learning, statistical modeling, and interface evaluation to study human performance across complex sociotechnical systems.
      </p>
    </font>
  </div>

  <div>
    <img src="/assets/images/banners/MINDxAI-signage.png" alt="MINDxAI Lab overview signage"/>
  </div>
</div>

<div class="lab-section">
  <h3>Research Areas</h3>
  <div class="lab-grid">
    <div><b>Human States Modeling</b><br/>Multimodal learning from behavioral, physiological, and performance data.</div>
    <div><b>Human-Automation Interaction</b><br/>Design and evaluation of human-centered AI and automation systems.</div>
    <div><b>Performance Modeling</b><br/>Data-driven models of cognition, workload, situation awareness, and decision-making.</div>
    <div><b>Application Domains</b><br/>Healthcare, transportation, automated driving, aviation, robotics, and adaptive systems.</div>
  </div>
</div>

<div class="lab-section">
  <h3>Lab Director</h3>
  <font size=3>
    <p>
      <b>Dr. Yunmei Liu</b> is an Assistant Professor in the Industrial and Systems Engineering Department. Her research uses experimental and data-driven approaches to understand human limitations and inform the design of safer, more effective systems.
    </p>
  </font>
</div>

<div class="lab-section">
  <h3>Ph.D. Students</h3>
  <div class="lab-people">
    <div class="lab-person"><b>Moajjem Chowdhury</b><br/>Human States Modeling<br/>Multimodal Learning</div>
    <div class="lab-person"><b>Yan Chen</b><br/>Human-Automation Interaction<br/>Human-Centered AI</div>
    <div class="lab-person"><b>Udit Das</b><br/>Performance Modeling<br/>Human-AI Teaming</div>
    <div class="lab-person"><b>Qunli Liu</b><br/>Behavioral Data Analysis<br/>Statistical Modeling</div>
    <div class="lab-person"><b>Ming Lu</b><br/>Human-Robot Interaction<br/>Intelligent Adaptive Systems</div>
  </div>
</div>

<div class="lab-section">
  <h3>Explore</h3>
  <font size=3>
    <p>
      Learn more about our <a href="/Lab.html">lab mission</a>, <a href="/Projects.html">research projects</a>, <a href="/Publications.html">publications</a>, and <a href="/News.html">news</a>.
    </p>
  </font>
</div>
