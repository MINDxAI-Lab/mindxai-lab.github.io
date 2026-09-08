---
layout: home
title: Opportunities
---

<style>
  .opportunities-page h1,
  .opportunities-page h2,
  .opportunities-page h3 { letter-spacing: 0; }

  .opportunities-page h1 { margin-bottom: 12px; text-align: center; }

  .opportunities-intro {
    max-width: 850px;
    margin: 0 auto 30px;
    color: #3f4a4c;
    text-align: center;
    line-height: 1.7;
  }

  .opportunity-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 22px;
    margin-bottom: 34px;
  }

  .opportunity-card {
    display: flex;
    flex-direction: column;
    padding: 24px;
    border: 1px solid #c9dddd;
    border-top: 5px solid #389092;
    border-radius: 10px;
    background: #f6fbfb;
    box-shadow: 0 5px 16px rgba(31, 82, 84, 0.08);
  }

  .opportunity-status {
    align-self: flex-start;
    margin-bottom: 12px;
    padding: 5px 10px;
    border-radius: 999px;
    color: #fff;
    background: #1f7a7f;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }

  .opportunity-card h2 { margin: 0 0 10px; color: #3f4a4c; line-height: 1.25; }
  .opportunity-card h3 { margin: 20px 0 7px; color: #1f7a7f; font-size: 1rem; }
  .opportunity-card p,
  .opportunity-card li { line-height: 1.65; }
  .opportunity-card ul { margin: 8px 0 0; padding-left: 20px; }
  .opportunity-card .email-format {
    margin-top: auto;
    padding: 14px 16px;
    background: #fff;
  }
  .email-format p { margin: 0 0 8px; }
  .email-format p:last-child { margin-bottom: 0; }
  .email-format code { color: #294e50; font-size: 0.92em; overflow-wrap: anywhere; }

  .pdf-section {
    margin-top: 26px;
    padding-top: 24px;
    border-top: 1px solid #dfe6e7;
  }

  .pdf-section h2 { margin: 0 0 8px; color: #3f4a4c; }
  .pdf-section > p { margin-top: 0; line-height: 1.65; }
  .opportunity-pdf {
    display: block;
    width: 100%;
    height: 820px;
    margin-top: 16px;
    border: 1px solid #c9dddd;
    border-radius: 8px;
    background: #fff;
  }

  @media (max-width: 760px) {
    .opportunity-grid { grid-template-columns: 1fr; }
    .opportunity-card { padding: 20px; }
    .opportunity-pdf { height: 650px; }
  }
</style>

<div class="opportunities-page">
  <h1>Opportunities</h1>
  <p class="opportunities-intro">
    The <strong>MINDxAI Lab</strong> is recruiting highly motivated researchers interested in human-centered AI, human factors, adaptive systems, simulation, multimodal data, transportation safety, and intelligent human-system interaction.
  </p>

  <div class="opportunity-grid">
    <section class="opportunity-card" aria-labelledby="phd-opportunity-heading">
      <div class="opportunity-status">Open</div>
      <h2 id="phd-opportunity-heading">One Fully Funded Ph.D. Position</h2>
      <p><strong>Start term:</strong> Spring, Summer, or Fall 2027</p>
      <p>
        The MINDxAI Lab is seeking one doctoral student in Industrial and Systems Engineering to conduct interdisciplinary research under the supervision of Dr. Yunmei Liu.
      </p>
      <h3>Research areas</h3>
      <ul>
        <li>Human-centered AI and human-AI/autonomy interaction</li>
        <li>Adaptive systems and adaptive automation</li>
        <li>Multimodal human-state and behavioral modeling</li>
        <li>VR, immersive systems, and simulation-based research</li>
        <li>Human factors and human-systems integration</li>
      </ul>
      <h3>Preferred background</h3>
      <p>
        A bachelor’s degree, or preferably a master’s degree, in Industrial and Systems Engineering, Human Factors, Biomedical Engineering, Mechanical Engineering, Electrical and Computer Engineering, Computer Science, Robotics, or a related field. Strong quantitative and technical preparation, prior research experience, scientific writing, and English communication skills are highly valued.
      </p>
      <div class="email-format">
        <p><strong>How to apply</strong></p>
        <p>Send your email to <a href="mailto:yunmei.liu@louisville.edu">yunmei.liu@louisville.edu</a>.</p>
        <p><strong>Subject:</strong> <code>2027 PhD position: [Your Name]</code></p>
        <p>Attach your CV and transcripts, and briefly describe your research interests, previous research experience, and technical background. Emails that do not follow this format may be treated as AI-generated and will not be reviewed.</p>
      </div>
    </section>

    <section class="opportunity-card" aria-labelledby="ra-opportunity-heading">
      <div class="opportunity-status">Hiring</div>
      <h2 id="ra-opportunity-heading">Paid Research Assistant Positions</h2>
      <p><strong>Eligibility:</strong> Current University of Louisville undergraduate or graduate students</p>
      <p><strong>Appointment:</strong> September 1, 2026 - September 30, 2027 &nbsp;|&nbsp; <strong>10-20 hours/week</strong></p>
      <p><strong>Compensation:</strong> $16-$25/hour, depending on qualifications and performance</p>
      <p>
        We are seeking 1-2 highly motivated researchers to support funded MINDxAI Lab projects under the supervision of Dr. Yunmei Liu in Industrial and Systems Engineering.
      </p>
      <h3>Primary role: Driving simulator scenario development</h3>
      <p>
        Assist with the design, development, implementation, debugging, and testing of VR and driving simulator scenarios for safety-critical driving experiments and adaptive automation studies. Responsibilities may include interactive traffic environments, experimental events and triggers, scenario logic, and simulator study preparation.
      </p>
      <h3>Preferred qualifications</h3>
      <ul>
        <li>Relevant major such as ISE, Computer Science, Computer Engineering, Electrical Engineering, Biomedical Engineering, or Data Science</li>
        <li>Experience with Unreal or Unity, C++, simulation development, or interactive scenario design</li>
        <li>Python API/interface integration and data-structure experience</li>
        <li>Interest in traffic simulation tools such as SUMO, Vissim, or RoadRunner</li>
        <li>Reliability, attention to detail, communication, and ability to work independently and collaboratively</li>
      </ul>
      <div class="email-format">
        <p><strong>How to apply</strong></p>
        <p>Send your email to <a href="mailto:yunmei.liu@louisville.edu">yunmei.liu@louisville.edu</a>.</p>
        <p><strong>Subject:</strong> <code>Undergraduate Research Assistant Application: [Your Major; Freshman/Sophomore/Junior/Senior]</code></p>
        <p>Attach a resume or CV and an unofficial transcript.</p>
      </div>
    </section>
  </div>

  <section class="pdf-section" aria-labelledby="phd-pdf-heading">
    <h2 id="phd-pdf-heading">Ph.D. Position Details</h2>
    <p>The full position announcement is displayed below for direct review.</p>
    <object class="opportunity-pdf" data="{{ '/assets/Documents/PhD position_2027.pdf' | relative_url }}" type="application/pdf">
      <p>Your browser cannot display this PDF inline. <a href="{{ '/assets/Documents/PhD position_2027.pdf' | relative_url }}">Open the Ph.D. position announcement</a>.</p>
    </object>
  </section>

  <section class="pdf-section" aria-labelledby="ra-pdf-heading">
    <h2 id="ra-pdf-heading">Paid Research Assistant Details</h2>
    <p>The full research assistant announcement is displayed below for direct review.</p>
    <object class="opportunity-pdf" data="{{ '/assets/Documents/MINDxAI_Paid RA.pdf' | relative_url }}" type="application/pdf">
      <p>Your browser cannot display this PDF inline. <a href="{{ '/assets/Documents/MINDxAI_Paid RA.pdf' | relative_url }}">Open the paid RA announcement</a>.</p>
    </object>
  </section>
</div>
