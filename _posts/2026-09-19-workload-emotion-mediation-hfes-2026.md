---
layout: post
title: "Multilevel Mediation Analysis Quantifies Workload and Emotion Pathways to Supervision Performance"
subtitle: "Proceedings of the Human Factors and Ergonomics Society Annual Meeting, 2026"
date: 2026-09-19
display_date: "September 19, 2026"
categories: news
tags: [news, conferences]
summary: "A new MINDxAI Lab paper quantifies the direct and statistical mediation pathways from task demands through workload and emotion to supervision performance."
image: "/assets/images/banners/publications/workload-emotion-mediation-figure-2.jpg"
image_alt: "Figure 2: Mediation model linking robot speed and camera count to success rate through workload, arousal, and valence, with significant paths highlighted in red."
card_image_fit: contain
permalink: /news/workload-emotion-mediation-hfes-2026.html
publication_doi: "10.1177/10711813261484464"
publication_date_basis: first-online
publication_date_source: "https://journals.sagepub.com/doi/10.1177/10711813261484464"
hidden:
  - navigator
  - related_posts
  - comments
---

<style>
  .mediation-news { max-width: 100%; }
  .mediation-news-figure { max-width: 900px; margin: 0 auto 26px; }
  .mediation-news-figure img { display: block; width: 100%; height: auto; border-radius: 8px; background: #fff; }
  .mediation-news-figure figcaption { margin-top: 10px; color: #5a6668; font-size: 0.92rem; line-height: 1.6; }
  .mediation-news .lead { color: #3f4a4c; font-size: 1.08rem; line-height: 1.7; }
  .mediation-news h2 { margin: 28px 0 12px; color: #3f4a4c; font-size: 1.2rem; line-height: 1.35; }
  .mediation-news p { line-height: 1.7; }
</style>

<div class="mediation-news">
  <figure class="mediation-news-figure">
    <a href="{{ page.image | relative_url }}" aria-label="View Figure 2 at full size">
      <img src="{{ page.image | relative_url }}" alt="{{ page.image_alt | escape }}" width="1145" height="605">
    </a>
    <figcaption>
      Figure 2. Mediation model illustrating workload, arousal, and valence as potential statistical mediators linking task variables to overall success rate.
      Source: <a href="https://doi.org/10.1177/10711813261484464" target="_blank" rel="noopener">Chowdhury, Wang, and Liu (2026)</a>.
    </figcaption>
  </figure>

  <p class="lead">
    A new MINDxAI Lab paper, <strong>“Mediation Analysis of Workload and Emotion on the Performance of Supervision Tasks,”</strong> was published online in the <i>Proceedings of the Human Factors and Ergonomics Society Annual Meeting</i> on September 19, 2026. The study was authored by <strong>Moajjem Hossain Chowdhury, Shuoyang Wang, and Yunmei Liu</strong>.
  </p>

  <h2>Connecting Task Demands, Operator States, and Performance</h2>
  <p>
    Prior research has established individual links among task demands, operator states, and performance, but has rarely tested the full pathway connecting them. This study examines whether workload and emotion statistically mediate the relationship between task conditions and performance.
  </p>
  <p>
    Using the open-source MOCAS dataset, the researchers analyzed 21 participants monitoring robot swarms across nine conditions that varied robot speed and camera count. A <strong>multilevel, multivariate mediation framework</strong> jointly modeled workload, arousal, and valence to estimate indirect associations with success rate, alongside the direct effects of task conditions that remained after accounting for these states.
  </p>

  <h2>What the Findings Mean for Adaptive Automation</h2>
  <p>
    Several task conditions showed significant total indirect effects, with <strong>valence—the pleasantness or unpleasantness of an emotional state—showing the most consistent mediator-specific role</strong>. Significant direct effects also remained, indicating that workload and emotion explained part, but not all, of the relationship between task conditions and performance.
  </p>
  <p>
    These findings provide a quantitative foundation for state-aware adaptive automation. They suggest that assistance responsive to operator states should be complemented by interface support that also addresses task demands, such as prioritizing anomalies or filtering camera streams.
  </p>

  <p>
    Congratulations to Moajjem Hossain Chowdhury for leading this work, and thanks to Shuoyang Wang for the collaboration!
  </p>

  <p>
    <a href="https://doi.org/10.1177/10711813261484464" target="_blank" rel="noopener">Read the paper in the HFES Annual Meeting Proceedings</a>
  </p>
</div>
