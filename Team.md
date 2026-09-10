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
    max-width: 100%;
    margin: 0 auto 26px;
    text-align: center;
    line-height: 1.65;
  }

  .team-overview {
    display: block;
    width: 100%;
    max-width: 100%;
    margin: 0 auto 34px;
    border-radius: 8px;
  }

  .team-section {
    margin-top: 34px;
  }

  .team-section h2 {
    margin: 0 0 18px;
    padding-bottom: 12px;
    border-bottom: 1px solid #dfe6e7;
  }

  .director-profile {
    display: grid;
    grid-template-columns: 280px minmax(0, 1fr);
    gap: 32px;
    align-items: start;
  }

  .director-media {
    margin-left: -26px;
    width: 280px;
  }

  .director-photo {
    width: 280px;
    height: 320px;
    object-fit: cover;
    border-radius: 8px;
  }

  .profile-links {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 280px;
    margin-top: 12px;
  }

  .profile-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    text-decoration: none;
  }

  .profile-link img {
    width: 28px;
    height: 28px;
    object-fit: contain;
    display: block;
  }

  .profile-link:hover img {
    transform: translateY(-1px);
  }

  .director-profile p {
    line-height: 1.7;
    text-align: justify;
    text-justify: inter-word;
  }

  .student-profile {
    display: grid;
    grid-template-columns: 190px minmax(0, 1fr);
    gap: 26px;
    align-items: start;
    padding: 0 0 24px;
  }

  .student-profile > img {
    width: 190px;
    height: 190px;
    object-fit: cover;
    border-radius: 8px;
  }

  .student-profile .member-avatar {
    width: 110px;
    height: 110px;
    border-radius: 8px;
    font-size: 1.25rem;
  }

  .student-profile h3 {
    margin: 0 0 8px;
    font-size: 1.15rem;
  }

  .student-profile p {
    margin: 0 0 10px;
    line-height: 1.65;
    text-align: justify;
    text-justify: inter-word;
  }

  .team-compact-list h3 {
    margin: 0 0 2px;
    font-size: 1.15rem;
    line-height: 1.35;
  }

  .team-compact-list p {
    margin: 0 0 12px;
    line-height: 1.55;
  }

  .team-compact-list p:last-child {
    margin-bottom: 0;
  }

  .undergrad-list .undergrad-entry + .undergrad-entry {
    margin-top: 22px;
  }

  .undergrad-list h3 {
    margin: 0 0 3px;
    font-size: 1.15rem;
    line-height: 1.35;
  }

  .undergrad-list p {
    margin: 0 0 7px;
    color: #637174;
    font-size: 0.95rem;
    line-height: 1.5;
  }

  .undergrad-list ul {
    margin: 0;
    padding-left: 1.25rem;
    line-height: 1.55;
  }

  .undergrad-list li + li {
    margin-top: 3px;
  }

  .alumni-list .alumni-entry + .alumni-entry {
    margin-top: 22px;
  }

  .alumni-list h3 {
    margin: 0 0 3px;
    font-size: 1.15rem;
    line-height: 1.35;
  }

  .alumni-list p {
    margin: 0 0 7px;
    color: #637174;
    font-size: 0.95rem;
    line-height: 1.5;
  }

  .alumni-list ul {
    margin: 0;
    padding-left: 1.25rem;
    line-height: 1.55;
  }

  .alumni-list li + li {
    margin-top: 3px;
  }

  .student-profile p:last-child {
    margin-bottom: 0;
  }

  .student-contact {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;
    margin-top: 12px;
    line-height: 1.5;
  }

  .student-contact-label {
    font-weight: 700;
  }

  .student-contact-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: #2d8f92;
  }

  .student-contact-link img {
    width: 22px !important;
    height: 22px !important;
    min-width: 22px;
    max-width: 22px !important;
    max-height: 22px !important;
    object-fit: contain;
    display: inline-block;
    border-radius: 0;
    flex: 0 0 auto;
    vertical-align: middle;
  }

  .member-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 18px 24px;
  }

  .member-card {
    display: grid;
    grid-template-columns: 72px minmax(0, 1fr);
    gap: 14px;
    align-items: center;
    padding: 14px 0;
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

  @media (max-width: 980px) {
    .member-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 760px) {
    .director-profile,
    .student-profile,
    .member-grid {
      grid-template-columns: 1fr;
    }

    .director-media {
      margin-left: 0;
      width: 100%;
      max-width: 260px;
    }

    .director-photo {
      width: 100%;
      height: auto;
      max-width: 260px;
    }

    .profile-links {
      width: 100%;
      max-width: 260px;
    }

    .director-profile p {
      text-align: left;
    }

    .student-profile > img {
      width: 100%;
      height: auto;
      max-width: 220px;
    }

    .student-profile p {
      text-align: left;
    }
  }
</style>

<div class="team-page">
  <h1>Team Members</h1>
  <!-- <p class="team-intro">
    <strong>MINDxAI Lab</strong> brings together researchers studying human-centered AI, human-machine interaction, cognition, decision-making, and intelligent adaptive systems.
  </p> -->

  <!-- <img class="team-overview" src="/assets/images/banners/MINDxAI-signage.png" alt="MINDxAI Lab team overview"> -->

  <section class="team-section" id="yunmei-liu">
    <h2><a href="https://profiles.louisville.edu/yunmei.liu/about" target="_blank" rel="noopener"><b>Lab Director: Yunmei Liu</b></a></h2>
    <div class="director-profile">
      <div class="director-media">
        <img class="director-photo" src="/assets/images/banners/IMG_3208.jpeg" alt="Dr. Yunmei Liu">
        <div class="profile-links" aria-label="Dr. Liu profile links">
          <a class="profile-link" href="https://profiles.louisville.edu/yunmei.liu/about" target="_blank" rel="noopener" aria-label="Personal Website">
            <img src="/assets/images/banners/Updated%20Images/PW.png" alt="Personal Website">
          </a>
          <a class="profile-link" href="https://scholar.google.com/citations?hl=zh-CN&user=FeLtzgcAAAAJ&view_op=list_works&sortby=pubdate" target="_blank" rel="noopener" aria-label="Google Scholar">
            <img src="/assets/images/banners/Updated%20Images/GS.png" alt="Google Scholar">
          </a>
          <a class="profile-link" href="https://orcid.org/0000-0002-6045-7614" target="_blank" rel="noopener" aria-label="ORCID">
            <img src="/assets/images/banners/Updated%20Images/ID.png" alt="ORCID">
          </a>
          <a class="profile-link" href="https://www.linkedin.com/in/yunmei-liu-16a14023a/" target="_blank" rel="noopener" aria-label="LinkedIn">
            <img src="/assets/images/banners/Updated%20Images/IN.png" alt="LinkedIn">
          </a>
          <a class="profile-link" href="mailto:yunmei.liu@louisville.edu" aria-label="Email">
            <img src="/assets/images/banners/Updated%20Images/E.png" alt="Email">
          </a>
        </div>
      </div>
      <div>

<p>
  <a href="https://profiles.louisville.edu/yunmei.liu/about" target="_blank" rel="noopener"><b>Dr. Liu</b></a> is an <b>Assistant Professor</b> in the Department of Industrial and Systems Engineering at the University of Louisville and Director of the <strong>MINDxAI Lab</strong>. She also directs the <i>Human-Centric AI Theme</i> at the <a href="https://engineering.louisville.edu/chse/human-systems-engineering/people/" target="_blank" rel="noopener">Center for Human Systems Engineering (CHSE)</a> and is an affiliated faculty member of the <a href="https://engineering.louisville.edu/research/centersinstitutes/larri/larri-personnel/" target="_blank" rel="noopener">Louisville Automation & Robotics Research Institute (LARRI) </a> . Her research uses experimental and data-driven approaches to understand human limitations and inform the design of safer and more effective human-centered AI and human-in-the-loop systems.
</p>

<p>
  Dr. Liu’s research focuses on intelligent human-automation interaction, cognitive workload modeling, physiological computing, and human-centric AI. Across domains such as transportation, automation, rehabilitation, and interactive AI systems, her work aims to design intelligent technologies that better understand people, adapt to human needs, and support safer decision-making in complex real-world environments.

</p>

<p>
  Her research has been supported by funding agencies and organizations including the <b>National Science Foundation (NSF), the Defense Advanced Research Projects Agency (DARPA), and the U.S. Department of Transportation (DOT)</b>, and her work has appeared in leading journals, including <i>IEEE Transactions on Human-Machine Systems, IEEE Transactions on Neural Systems and Rehabilitation Engineering, Accident Analysis & Prevention, Applied Ergonomics, Ergonomics, and the International Journal of Human-Computer Studies</i>.
</p>

<p>
  She serves as an <b>Associate Editor</b> for <i>IEEE Transactions on Human-Machine Systems</i> and as <b>Vice Program Chair</b> of the Surface Transportation Technical Group of the Human Factors and Ergonomics Society. She also regularly reviews for leading journals and conferences in human factors and human-computer interaction.
</p>

<p>
  Before joining the University of Louisville, Dr. Liu received her Ph.D. in Industrial and Systems Engineering from the <b>University of Florida</b>, with a minor in Statistics. She also holds an M.S. in Management Science and Engineering from <b>Nanjing University </b>and a B.S. in Industrial Engineering from <b>Shandong University</b>.

</p>
      </div>
    </div>
  </section>

  <section class="team-section">
    <h2>Current Ph.D. Students</h2>
<div class="student-profile">
      <img src="/assets/images/banners/Updated%20Images/Yan%20Chen.png" alt="Yan Chen">
      <div>
        <h3>Yan Chen, Ph.D. Student</h3>
<p>
  Yan Chen holds a <b>B.S. </b>in Control Science and Engineering from Shandong University. <br>His research interests include human-centered driving systems, human adaptation in mixed traffic, aggressive driving behavior, and AI for healthcare. His current work develops vision-language model approaches for EEG analysis and examines how autonomous vehicle aggressiveness affects human driver behavior, safety, and traffic efficiency in mixed-traffic environments.
</p>

<p>
  <strong>Role in Lab Projects:</strong> Student lead for the lab’s projects on <a href="/Research.html#project-aggressive-driving-mixed-traffic">Aggressive Driving in Mixed Traffic</a> , smart manufacturing, rehabilitation robotics and <a href="/Research.html#project-eeg-seizure-modeling">AI-Driven Scalp EEG Modeling for Seizure Detection and Signal Enhancement</a>.
</p>
        <div class="student-contact">
          <span class="student-contact-label">Contact:</span>
          <a class="student-contact-link" href="mailto:yan.chen.1@louisville.edu">
            <img src="/assets/images/banners/Updated%20Images/E.png" alt="Email">
            <span>Email: yan.chen.1@louisville.edu</span>
          </a>
          <a class="student-contact-link" href="https://www.linkedin.com/in/yan-chen-9818a4324/" target="_blank" rel="noopener">
            <img src="/assets/images/banners/Updated%20Images/IN.png" alt="LinkedIn">
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
    <div class="student-profile">
      <img src="/assets/images/banners/Updated%20Images/Moajjem.png" alt="Moajjem Chowdhury">
      <div>
        <h3>Moajjem Chowdhury, Ph.D. Student</h3>
        <p>Moajjem Hossain Chowdhury holds an <b>M.S.</b>  in Electrical and Electronic Engineering from Universiti Kebangsaan Malaysia and a <b>B.S. </b>in Electrical and Electronic Engineering from North South University. <br>His research interests include human state modeling, multimodal learning, adaptive automation, human–AI collaboration, physiological signal analysis, and explainable AI. His work focuses on developing intelligent systems that integrate physiological, behavioral, and contextual data to better understand human cognitive and emotional states in complex environments. </p>
  <p>
  <strong>Role in Lab Projects:</strong> Student lead for the lab’s projects on <a href="/Research.html#project-cognitive-emotional-driving-automation">Cognitive-Emotional State Assessment for Adaptive Automation Intervention</a> and <a href="/Research.html#project-communication-barriers-healthcare">Communication Barriers in Patient-Provider Interactions</a>.
</p>
      <div class="student-contact">
          <span class="student-contact-label">Contact:</span>
          <a class="student-contact-link" href="mailto:moajjem.chowdhury@louisville.edu">
            <img src="/assets/images/banners/Updated%20Images/E.png" alt="Email">
            <span>Email: moajjem.chowdhury@louisville.edu</span>
          </a>
          <a class="student-contact-link" href="https://www.linkedin.com/in/moajjem04/" target="_blank" rel="noopener">
            <img src="/assets/images/banners/Updated%20Images/IN.png" alt="LinkedIn">
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
    <div class="student-profile">
      <img src="/assets/images/banners/Updated%20Images/Udit.png" alt="Udit Das">
      <div>
        <h3>Udit Kumar Das, Ph.D. Student</h3>
        <p>Udit Kumar has an <b>M.S.</b> Industrial and Systems Engineering from University of Louisville and an in Applied Statistics and Data Science from Jahangirnagar University and a <b>B.S.</b> in Petroleum and Mining Engineering from Military Institute of Science and Technology, Bangladesh. <br>His research focuses on human factors, driver behavior, cognitive workload, and human–AI interaction in transportation. His current research investigates how aggressive driving behaviors affect novice drivers’ visual attention, workload, and driving behavior in simulated driving environments.</p>
<p>
  <strong>Role in Lab Projects:</strong> Student lead for the lab’s project on Human-Autonomy/AI Teaming; Supports the lab’s project on <a href="/Research.html#project-aggressive-driving-mixed-traffic">Aggressive Driving in Mixed Traffic</a>.
</p>
    <div class="student-contact">
          <span class="student-contact-label">Contact:</span>
          <a class="student-contact-link" href="mailto:uditkumar.das@louisville.edu">
            <img src="/assets/images/banners/Updated%20Images/E.png" alt="Email">
            <span>Email: uditkumar.das@louisville.edu</span>
          </a>
          <a class="student-contact-link" href="https://www.linkedin.com/in/udit-kumar-das-09/" target="_blank" rel="noopener">
            <img src="/assets/images/banners/Updated%20Images/IN.png" alt="LinkedIn">
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>

    <div class="student-profile">
      <img src="/assets/images/banners/Updated%20Images/Qunli.png" alt="Qunli Liu">
      <div>
        <h3>Qunli Liu, Ph.D. Student</h3>
      <p>
      Qunli Liu holds a <b>M.S.</b> in Data Science from the University of California, Irvine and <b>B.A.</b> in Data Science from the University of California, Berkeley.
      <br>His research interests include physiological signal analysis, behavior data analysis and statistical modeling. His current work examines human operator performance in surveillance tasks and how environmental factors shape human activity and mobility behavior in urban environments.
    </p>
    <p>
      <strong>Role in Lab Projects:</strong> Supports the lab’s smart manufacturing and rehabilitation robotics projects.
    </p>
      <div class="student-contact">
          <span class="student-contact-label">Contact:</span>
          <a class="student-contact-link" href="mailto:qunli.liu@louisville.edu">
            <img src="/assets/images/banners/Updated%20Images/E.png" alt="Email">
            <span>Email: qunli.liu@louisville.edu</span>
          </a>
          <a class="student-contact-link" href="https://www.linkedin.com/in/qunli-liu-244a5822b/" target="_blank" rel="noopener">
            <img src="/assets/images/banners/Updated%20Images/IN.png" alt="LinkedIn">
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="team-section">
<h2>Undergraduate Researchers</h2>


<div class="undergrad-list">
  <div class="undergrad-entry">
    <h3>Michelle Gonzalez</h3><p>Undergraduate Co-op Researcher | Industrial &amp; Systems Engineering | 2026–present</p>
    <ul>
      <li>Receives hands-on training in VR development.</li>
      <li>Contributes to the design and implementation of immersive smart manufacturing scenarios.</li>
    </ul>
  </div>

  <div class="undergrad-entry">
    <h3>Rianna Pais</h3><p>Undergraduate Researcher | Computer Science and Engineering | 2026–present</p>
    <ul>
      <li>Receives hands-on training in VR development.</li>
      <li>Contributes to the development of immersive aggressive-driving research scenarios.</li>
    </ul>
  </div>

  <div class="undergrad-entry">
    <h3>Shane Arnold</h3><p>Undergraduate Researcher | Industrial &amp; Systems Engineering | 2025–present</p>
    <ul>
      <li>Contributes to research related to human factors and systems engineering.</li>
      <li>ISE 380 course project accepted as a poster at the ASPIRE HFES International Annual Meeting, making the team the first UofL undergraduate team to receive an international HFES acceptance. <a href="https://journals.sagepub.com/doi/full/10.1177/10711813251369862" target="_blank" rel="noopener">[Link]</a></li>
    </ul>
  </div>
</div>
  </section>

  <section class="team-section">
    <h2>Alumni</h2>
    <div class="alumni-list">
      <div class="alumni-entry">
<h3>Udit Kumar Das</h3> <p>M.S. Thesis Student | Industrial &amp; Systems Engineering | 2025–2026 | Continued in the lab as a Ph.D. student.</p> <ul> <li> Graduated with an M.S. in Industrial &amp; Systems Engineering from the University of Louisville in Summer 2026. Thesis: <i>A Vision-Based Framework for Identifying Overtaking Events and Characterizing Concurrent Driver Behavior in Continuous Simulator Traffic</i>. </li> <li>Secured a competitive research award through a student proposal to support experimental data collection for his M.S. thesis research.</li> <li>Published two first-authored conference papers at the AHFE International Conference in 2025 and 2026.</li> </ul>
      </div>
    </div>
  </section>

  <!-- <section class="team-section">
    <h2>Contact</h2>
    <div class="contact-block">
      University of Louisville<br>
      Department of Industrial and Systems Engineering<br>
      132 Eastern Pkwy, JS 309<br>
      Louisville, KY 40292<br>
      Email: <a href="mailto:yunmei.liu@louisville.edu">yunmei.liu@louisville.edu</a><br>
      Phone: 502-852-8858
    </div>
  </section> -->
</div>
