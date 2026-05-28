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
    margin: 0 auto 26px;
    color: #4d5b5d;
    line-height: 1.65;
  }

  .research-section {
    margin-top: 64px;
    scroll-margin-top: 90px;
  }

  .research-section:first-of-type {
    margin-top: 36px;
  }

  .research-topic-header {
    margin-bottom: 22px;
    padding: 18px 22px;
    border-left: 5px solid #1f7a7f;
    border-radius: 8px;
    background: #eef6f6;
  }

  .research-topic-header h2 {
    margin: 0;
  }

  .research-section-subtitle {
    margin: 10px 0 0;
    color: #4d5b5d;
    line-height: 1.65;
    font-weight: 400;
  }

  .theme-focus {
    margin: 12px 0 0;
    color: #165f66;
    font-weight: 700;
    font-size: 1.04rem;
    line-height: 1.5;
  }

  .theme-focus strong {
    color: #3f4a4c;
  }

  .research-project {
    display: grid;
    grid-template-columns: 360px minmax(0, 1fr);
    gap: 28px;
    align-items: start;
    margin-top: 20px;
    padding: 20px;
    border: 1px solid #e2ecec;
    border-left: 4px solid #cfe8e8;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 1px 3px rgba(31, 122, 127, 0.07);
    scroll-margin-top: 90px;
  }

  .research-project + .research-project {
    margin-top: 24px;
  }

  .research-project img {
    width: 360px;
    height: 240px;
    object-fit: cover;
    border-radius: 8px;
  }

  .research-project figure {
    margin: 0;
  }

  .research-project figcaption {
    margin-top: 10px;
    font-size: 0.95rem;
    font-weight: 700;
    line-height: 1.35;
  }

  .research-project figcaption a {
    color: #389092;
  }

  .research-project figcaption span {
    display: block;
    margin-top: 4px;
    color: #4d5b5d;
    font-weight: 700;
  }

  .project-button {
    display: inline-block;
    margin-top: 3px;
    padding: 7px 16px;
    border-radius: 6px;
    color: #fff;
    background: #1f7a7f;
    text-decoration: none;
    font-weight: 700;
  }

  .project-button:hover,
  .project-button:focus {
    color: #fff;
    background: #185f63;
    text-decoration: none;
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

  .project-publications {
    margin-top: 18px;
    padding: 14px 16px;
    border-radius: 8px;
    background: #f7fbfb;
  }

  .project-publications h4 {
    margin: 0 0 8px;
    color: #454545;
    font-size: 1rem;
  }

  .project-publication-list {
    margin: 0;
    padding-left: 20px;
  }

  .project-publication-list li {
    margin-bottom: 8px;
    line-height: 1.55;
  }

  .project-publication-list a {
    color: #1f7a7f;
    font-weight: 400;
  }

  .project-outline-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 8px;
  }

  .project-outline-button {
    display: inline-block;
    padding: 7px 16px;
    border: 1px solid #1f7a7f;
    border-radius: 6px;
    color: #165f66;
    background: #fff;
    text-decoration: none;
    font-weight: 700;
  }

  .project-outline-button:hover,
  .project-outline-button:focus {
    color: #165f66;
    background: #eaf5f5;
    text-decoration: none;
  }

  @media (max-width: 760px) {
    .research-topic-header {
      padding: 15px 16px;
    }

    .research-project {
      grid-template-columns: 1fr;
      padding: 16px;
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
  <h1>Ongoing Research Projects</h1>
  <!-- <p class="research-subtitle">human state sensing → human-AI interaction → adaptive intervention</p> -->
  <section class="research-section" id="theme-adaptive-health-training-safety">
  <div class="research-topic-header">
    <h2>Research Theme I: Real-Time Adaptive System Design Guided by Human State Modeling</h2>
    <p class="theme-focus"><strong>Theme focus:</strong> This theme translates human-state information into the design and implementation of real-time adaptive systems.</p>
<p class="research-section-subtitle">
  We design and evaluate adaptive technologies that sense, model, and respond to human cognitive, emotional, physiological, and performance states in <b><u>real time</u></b>. Our applied research spans driving, rehabilitation, healthcare, immersive training, and complex work systems.
</p>


  </div>
      <article class="research-project" id="project-cognitive-emotional-driving-automation">
      <figure>
        <img src="/assets/images/banners/Updated Images/Picture2.jpg" alt="NSF EDSE automation intervention project graphic">
        <figcaption>
          <a href="https://www.nsf.gov/awardsearch/show-award/?AWD_ID=2535920&HistoricalAwards=false" target="_blank" rel="noopener">Sponsor: NSF EDSE</a>
          <span>PIs: Yunmei Liu and David Kaber</span>
        </figcaption>
      </figure>
      <div>
        <h3>Cognitive-Emotional State Assessment for Adaptive Automation Intervention</h3>
<p>
  This project aims to develop an integrated cognitive-emotional state assessment system to support real-time automation intervention and adaptive system design. By combining physiological sensing, behavioral performance data, and machine learning, the project aims to detect changes in human cognitive workload, emotional state, and task engagement during human-automation interaction.
</p>
<p>
  The resulting models will help identify when and how automation should intervene, adapt, or provide support in order to improve safety. This work contributes to the design of human-centered automation systems that respond not only to task conditions, but also to the evolving cognitive and emotional states of the human operator.
</p>
        <a class="project-button" href="https://mindxai-lab.github.io/nsf-edse-automation-intervention/" target="_blank" rel="noopener">Website</a>
        <a class="project-outline-button" href="https://openaccess-api.cms-conferences.org/articles/download/978-1-964867-75-5_71" target="_blank" rel="noopener">Paper 1: Kumar et al., 2025</a>
        <div class="project-publications">
<h4>Prior Related Work: Wearable Sensing and Real-Time Human-State Prediction</h4>
          <ol class="project-publication-list">
            <li>
            <a href="https://ieeexplore.ieee.org/document/10555690" target="_blank" rel="noopener"><b>Liu, Y.</b>, Grimaldi, N., Basnet, N., Wozniak, D., Chen, E., Zahabi, M., Kaber, D. B., and Ruiz, J. (2024). Classifying cognitive workload using machine learning techniques and non-intrusive wearable devices. <i>IEEE International Conference on Human-Machine Systems</i>, pp. 1-6.</a>
            </li>
            <li>
            <a href="https://ieeexplore.ieee.org/document/10555701" target="_blank" rel="noopener">Grimaldi, N., <b>Liu, Y.</b>, McKendrick, R., Ruiz, J., and Kaber, D. B. (2024). Deep learning forecast of cognitive workload using fNIRS data. <i>IEEE International Conference on Human-Machine Systems</i>, pp. 1-6.</a>
            </li>
            <li>
            <a href="https://openaccess.cms-conferences.org/publications" target="_blank" rel="noopener">Nadri, C., <b>Liu, Y.</b>, Zahabi, M., Kaber, D. B., Ruiz, J., Middleton, M., and McKendrick, R. (2024). Analysis of pre-flight and monitoring tasks using cognitive performance modeling. <i>International Conference on Applied Human Factors and Ergonomics</i>.</a>
            </li>
            <li>
            <a href="https://openaccess.cms-conferences.org/publications" target="_blank" rel="noopener">Grimaldi, N., <b>Liu, Y.</b>, Kaber, D. B., and McKendrick, R. (2024). Deep learning forecast of perceptual load using fNIRS data. <i>International Conference on Applied Human Factors and Ergonomics</i>.</a>
            </li>
          </ol>
<h4>Prior Related Work: Adaptive Automation in Aviation</h4>
          <ol class="project-publication-list">
            <!-- <li>
              <a href="https://doi.org/10.1016/j.ijhcs.2024.103287" target="_blank" rel="noopener">Zhang, W., <b>Liu, Y.</b>, and Kaber, D. B. (2024). Effect of interface design on cognitive workload in unmanned aerial vehicle control. <i>International Journal of Human-Computer Studies</i>.</a>
            </li> -->
            <li>
            <a href="https://ieeexplore.ieee.org/abstract/document/10937388" target="_blank" rel="noopener">Wen, S., Middleton, M., Ping, S., &hellip;, <b>Liu, Y.</b>, Kaber, D. B., Zahabi, M., McMahan, R., Quispe, S., McKendrick, R., Qian, J., and Silva, C. (2025). AdaptiveCoPilot: design and testing of a neuroadaptive LLM cockpit guidance system in both novice and expert pilots. <i>IEEE VR</i>.</a>
            </li>
          </ol>
        </div>
      </div>
    </article>
  <article class="research-project" id="project-prosthetic-control">
      <figure>
        <img src="/assets/images/banners/NSF.png" alt="EMG-based upper-limb prosthetic control evaluation setup">
        <figcaption>
          <!-- Sponsor: NSF -->
          <!-- <span>Collaborators: Yunmei Liu, Juhye Park, Jason Berman, David Kaber, H. Huang, J. Ruiz, Mahsa Zahabi, and team</span> -->
        </figcaption>
      </figure>
      <div>
        <h3>Human-Centered Design for Natural Upper-Limb Prosthetic Control</h3>
        <p>          This project focuses on advancing upper-limb prosthetic control from conventional control modes toward more natural and intuitive control. Our prior work compared alternative prosthetic control strategies, generated workload and usability evidence for early-stage design, and examined VR as a scalable platform for testing prosthetic manipulation tasks before full physical-device deployment. Together, these studies provide human-centered design guidance for selecting and refining prosthetic control interfaces that better align with users’ movement intentions, improve performance, reduce workload, and support rehabilitation training.
        </p>
        <a class="project-outline-button" href="https://doi.org/10.1109/TNSRE.2026.3652083" target="_blank" rel="noopener">Paper 1: Liu et al. 2026</a>
        <a class="project-outline-button" href="https://doi.org/10.1109/THMS.2024.3381094" target="_blank" rel="noopener">Paper 2: Liu et al. 2026</a>
        <a class="project-outline-button" href="https://doi.org/10.1080/00140139.2023.2221413" target="_blank" rel="noopener">Paper 3: Park et al., 2023a</a>
        <a class="project-outline-button" href="https://ieeexplore.ieee.org/document/10394286" target="_blank" rel="noopener">Paper 4: Park et al., 2023b</a>

        <a class="project-outline-button" href="https://ieeexplore.ieee.org/document/9980676" target="_blank" rel="noopener">Paper 5: Park et al., 2022</a>

      </div>
    </article>

  </section>



<section class="research-section" id="theme-physiological-biomedical-modeling">
  <div class="research-topic-header">
<h2>Research Theme II: Human-Centered Computing and Interaction-Aware Human State Modeling</h2>
<p class="theme-focus"><strong>Theme focus:</strong> This theme investigates the mechanisms and theoretical foundations of human-state changes through AI-enabled modeling and multimodal data analysis.</p>
<p class="research-section-subtitle">
  We develop methods to measure, model, and predict human states during interactions with intelligent systems. Our work integrates multimodal biosignals, performance data, and machine learning to support human-AI/robot teaming, neurological condition detection, and adaptive human-centered technologies. </p>
  </div>
      <article class="research-project" id="project-eeg-seizure-modeling">
      <figure>
        <img src="/assets/images/banners/Updated Images/Seizure.png" alt="Seizure-EEG project graphic">
        <figcaption>
          Sponsor: UofL and UNC-Chapel Hill
          <span>PIs: Yunmei Liu and Tianlong Chen</span>
        </figcaption>
      </figure>
      <div>
        <h3>AI-Driven Scalp EEG Modeling for Seizure Detection and Signal Enhancement</h3>
        <p>
          We develop AI methods that transform multichannel scalp EEG into spatial, visual, and geometry-aware representations for neurological condition detection. This work supports robust seizure detection, EEG spatial super-resolution, and reliable biomedical signal modeling for real-time and clinically meaningful assessment.

        </p>
        <!-- <a class="project-button" href="https://mindxai-lab.github.io/nsf-edse-automation-intervention/" target="_blank" rel="noopener">Website</a> -->

        <a class="project-outline-button" href="https://arxiv.org/pdf/2602.04769" target="_blank" rel="noopener">arXiv 1: Chen et al., 2026</a>

        <a class="project-outline-button" href="https://arxiv.org/pdf/2602.02238" target="_blank" rel="noopener">arXiv 2: Yao et al., 2026</a>
      </div>
    </article>


    <article class="research-project" id="project-communication-barriers-healthcare">
      <figure>
        <img src="/assets/images/banners/Updated Images/CB.png" alt="Communication Barriers project graphic">
        <figcaption>
          Sponsor: UofL
          <span>PI: Yunmei Liu</span>
        </figcaption>
      </figure>
      <div>
        <h3>Communication Barriers in Patient-Provider Interactions</h3>
        <p>
          This project examines how communication barriers disrupt patient-provider communication and affect patient experience, clinical decision-making, health outcomes, and healthcare system efficiency. Building on a scoping review of patient-provider communication studies, the work maps how barriers intersect and identifies intervention opportunities including interpreter services, cultural and empathy training, plain-language and visual supports, AI-enabled translation and chatbot tools, clinical note-taking agents, and wearable or remote-monitoring technologies. The goal is to inform adaptive, patient-centered communication systems that combine AI support with real-time human-state and context awareness.
        </p>

        <div class="project-publications">
          <h4>Forthcoming Work</h4>
          <ol class="project-publication-list">
            <li>
              Chowdhury, M. H., and <b>Liu, Y.</b> (2026). Communication barriers in patient-provider interactions in healthcare: a scoping review. <i>Journal of Medical Internet Research (JMIR)</i>. <b>Minor Revision</b> (May 2026).
            </li>
          </ol>
        </div>
      </div>
    </article>

  </section>

  <section class="research-section" id="theme-human-ai-automation">
    <div class="research-topic-header">
<h2>Research Theme III: Human Behavior Modeling in Transportation and Automation Systems</h2>
<p class="theme-focus"><strong>Theme focus:</strong> This theme models behavioral dynamics and system-level safety and efficiency outcomes in complex systems.</p>
<p class="research-section-subtitle">
  We study and model how humans behave, adapt, and make decisions in transportation contexts. Our work examines driver behavior, aggressive driving, mixed human-AV traffic, trust, workload, situation awareness, and human responses to automation, with the goal of informing safer and more human-aware transportation systems.</p>
    </div>
    <article class="research-project" id="project-aggressive-driving-mixed-traffic">
      <figure>
        <img src="/assets/images/banners/Updated Images/AD.png" alt="Aggressive Driving project graphic">
        <figcaption>
         Sponsor: UofL
          <span>PIs: Yunmei Liu, Yueshuai (Brian) He, Anthony D. McDonald, and Tianlong Chen</span>
        </figcaption>
      </figure>
      <div>
        <h3>Aggressive Driving in Mixed Traffic</h3>
        <p>
          This project studies how aggressive driving behaviors in mixed human-AV traffic propagate from individual driver state and local maneuvers to traffic-flow safety and efficiency. The work combines CARLA-SUMO human-in-the-loop experiments, empirical human driver modeling, SUMO/TraCI traffic-flow simulation, and human-aware adaptive AV control to understand how surrounding AV aggressiveness and human driver aggressiveness shape workload, trust, stress, speed choice, braking, lane changes, congestion, and surrogate safety outcomes.
        </p>
        <!-- <a class="project-button" href="https://mindxai-lab.github.io/nsf-edse-automation-intervention/" target="_blank" rel="noopener">Website</a> -->
        <a class="project-outline-button" href="https://hfesam2025.conference-program.com/presentation/?id=LECT696&sess=sess263" target="_blank" rel="noopener">Presentation 1: HFES 2025</a>
        <div class="project-publications">
    <h4>Prior Related Work: Driver Behavior Analysis</h4>
          <ol class="project-publication-list">
            <li>
              <a href="https://doi.org/10.1016/j.aap.2026.108427" target="_blank" rel="noopener">Yang, G., Chase, R. T., <b>Liu, Y.</b>, Pyo, K., Cunningham, C. M., and Kaber, D. B. (2026). Driver behavior analysis at alternative intersection corridors through driving simulator. <i>Accident Analysis & Prevention</i>.</a>
            </li>
            <li>
              <a href="https://doi.org/10.1016/j.apergo.2024.104287" target="_blank" rel="noopener"><b>Liu, Y.</b>, Kaber, D. B., Cunningham, C. M., Chase, R. T., and Pyo, K. (2024). Analysis of driver behavior at grade-separated intersections to support design. <i>Applied Ergonomics</i>.</a>
            </li>
          </ol>
    <h4>Prior Related Work: Human Behavior Modeling</h4>
          <ol class="project-publication-list">
            <li>
              <a href="https://pubmed.ncbi.nlm.nih.gov/41457446/" target="_blank" rel="noopener"><b>Liu, Y.</b> and Kaber, D. B. (2025). Models of automation proportion in human-in-the-loop systems and operator situation awareness responses. <i>Ergonomics</i>.</a>
            </li>
            <li>
              <a href="https://ieeexplore.ieee.org/document/9582630" target="_blank" rel="noopener"><b>Liu, Y.</b> and Kaber, D. B. (2021). Quantitative models for automation rate and situation awareness response: a case study of levels of driving automation. <i>IEEE International Conference on Human-Machine Systems</i>.</a>
            </li>
          </ol>
        </div>
      </div>
    </article>

  </section>


</div>




<!-- <div class="research-page">
  <h1>Completed Research Projects</h1>

</div> -->
