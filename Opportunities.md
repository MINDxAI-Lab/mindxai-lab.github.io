---
layout: home
title: Opportunities
---

<style>
  .opportunities-page h1,
  .opportunities-page h2,
  .opportunities-page h3 {
    letter-spacing: 0;
  }

  .opportunities-page h1 {
    text-align: center;
  }

  .opportunities-intro {
    max-width: 100%;
    margin: 0 auto 26px;
    text-align: center;
    line-height: 1.65;
  }

  .opportunity-section {
    margin-top: 30px;
    padding-top: 22px;
    border-top: 1px solid #dfe6e7;
  }

  .opportunity-section p,
  .opportunity-section li {
    line-height: 1.68;
  }

  .opportunity-link {
    display: inline-block;
    margin-top: 8px;
    padding: 9px 12px;
    border: 1px solid #389092;
    border-radius: 8px;
    color: #1f6f70;
    text-decoration: none;
    font-weight: 700;
  }

  .visitor-map-section {
    margin-top: 42px;
    padding-top: 26px;
    border-top: 1px solid #dfe6e7;
  }

  .visitor-map-section h2 {
    margin-bottom: 10px;
  }

  .visitor-map-note,
  .visitor-map-privacy {
    color: #4d5b5d;
    line-height: 1.6;
  }

  .visitor-map-widget {
    min-height: 560px;
    margin-top: 16px;
    overflow: hidden;
    border: 1px solid #d7e0e1;
    border-radius: 8px;
    background: #fff;
  }

  .visitor-map-frame {
    display: block;
    width: 100%;
    min-height: 560px;
    border: 0;
  }

  .visitor-map-tracker {
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
    pointer-events: none;
  }

  .visitor-map-placeholder {
    max-width: 560px;
    margin: 0;
    padding: 20px;
    color: #4d5b5d;
    line-height: 1.6;
  }

  .visitor-map-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    margin-top: 12px;
  }

  .visitor-map-actions button {
    padding: 7px 10px;
    border: 1px solid #389092;
    border-radius: 6px;
    color: #1f6f70;
    background: #fff;
    cursor: pointer;
    font-weight: 700;
  }

  .visitor-map-status {
    color: #5c6b6d;
    font-size: 0.92rem;
  }

  @media (max-width: 760px) {
    .visitor-map-widget {
      min-height: 460px;
    }

    .visitor-map-frame {
      min-height: 460px;
    }
  }
</style>

<div class="opportunities-page">
  <h1>Opportunities</h1>
  <p class="opportunities-intro">
    <strong>MINDxAI Lab</strong> welcomes students and collaborators interested in human-centered AI, human-machine interaction, cognitive modeling, wearable sensing, and intelligent adaptive systems.
  </p>

  <section class="opportunity-section">
    <h2>Prospective Ph.D. Students</h2>
    <p>
      At this time, we have already filled all available Ph.D. positions for this year. We appreciate your interest in our lab, and encourage you to keep an eye on future opportunities as they become available.
      <!-- Prospective Ph.D. students with interests in human factors, industrial engineering, computer science, cognitive science, data science, robotics, healthcare systems, transportation, or related areas are encouraged to contact Dr. Yunmei Liu. -->
    </p>
    <p>
      <!-- Please include a brief statement of research interests, a CV or resume, unofficial transcripts, and any representative publications, project reports, or portfolio links. -->
    </p>
    <a class="opportunity-link" href="/assets/Documents/PhD%20position_2026.pdf">Prior Ph.D. position requirements</a>
  </section>

  <section class="opportunity-section">
    <h2>Master's and Undergraduate Research Assistants</h2>
    <p>
      Students interested in research experience can contribute to experimental studies, data analysis, interface evaluation, machine learning modeling, literature reviews, and prototype development. Prior experience with statistics, programming, human subjects research, or sensing systems is helpful but not required for every project.
    </p>
  </section>

  <section class="opportunity-section">
    <h2>Visiting Scientists and Student Internships</h2>
    <p>
      If you are interested in visiting our lab for collaboration or sabbatical, or if you are an undergraduate or graduate student enrolled at other universities and want short-term visit or internship, please contact Dr. Liu.
    </p>
  </section>

  <section class="visitor-map-section" aria-labelledby="visitor-map-heading">
    <h2 id="visitor-map-heading">Visitor Map</h2>
    <div
      id="visitor-map-widget"
      class="visitor-map-widget"
      data-widget-script=""
      data-tracker-image="https://mapmyvisitors.com/map.png?d=SFvrJgpkKTZj33-y5mlUPOZFv4EhwslWeCYQDS2IJ-o&cl=ffffff"
      data-map-page="https://mapmyvisitors.com/web/1c4ru">
      <p class="visitor-map-placeholder">
        Loading visitor map...
      </p>
    </div>


  </section>
</div>

<script>
  (function () {
    var storageKey = "mindxaiVisitorMapOptOut";
    var params = new URLSearchParams(window.location.search);
    var widget = document.getElementById("visitor-map-widget");
    var status = document.querySelector("[data-visitor-map-status]");

    if (!widget) {
      return;
    }

    if (params.get("mindxai_no_track") === "1") {
      window.localStorage.setItem(storageKey, "1");
      window.history.replaceState(null, "", window.location.pathname + window.location.hash);
    }

    if (params.get("mindxai_track") === "1") {
      window.localStorage.removeItem(storageKey);
      window.history.replaceState(null, "", window.location.pathname + window.location.hash);
    }

    function setStatus(message) {
      if (status) {
        status.textContent = message;
      }
    }

    function removePlaceholder() {
      var placeholder = widget.querySelector(".visitor-map-placeholder");
      if (placeholder) {
        placeholder.remove();
      }
    }

    function loadVisitorMap() {
      var scriptSrc = widget.getAttribute("data-widget-script").trim();
      var trackerImageSrc = widget.getAttribute("data-tracker-image").trim();
      var mapPageSrc = widget.getAttribute("data-map-page").trim();

      if (mapPageSrc) {
        removePlaceholder();
        var frame = document.createElement("iframe");
        frame.className = "visitor-map-frame";
        frame.title = "Visitor map for the MINDxAI Lab website";
        frame.loading = "lazy";
        frame.src = mapPageSrc;
        widget.appendChild(frame);
      }

      if (window.localStorage.getItem(storageKey) === "1") {
        widget.classList.add("is-disabled");
        setStatus("Visitor map is shown, but tracking is disabled for this browser.");
        return;
      }

      if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
        setStatus("Visitor map is shown, but tracking is disabled on local preview.");
        return;
      }

      if (trackerImageSrc) {
        var tracker = document.createElement("img");
        tracker.className = "visitor-map-tracker";
        tracker.src = trackerImageSrc;
        tracker.alt = "";
        tracker.setAttribute("aria-hidden", "true");
        widget.appendChild(tracker);
        setStatus("Visitor map is active.");
        return;
      }

      if (scriptSrc) {
        removePlaceholder();
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.id = "visitor-map-tracker";
        script.async = true;
        script.src = scriptSrc;
        widget.appendChild(script);
        setStatus("Visitor map is active.");
        return;
      }

      setStatus("Visitor map is not active yet.");
    }

    document.querySelectorAll("[data-visitor-map-disable]").forEach(function (button) {
      button.addEventListener("click", function () {
        window.localStorage.setItem(storageKey, "1");
        window.location.reload();
      });
    });

    document.querySelectorAll("[data-visitor-map-enable]").forEach(function (button) {
      button.addEventListener("click", function () {
        window.localStorage.removeItem(storageKey);
        window.location.reload();
      });
    });

    loadVisitorMap();
  })();
</script>
