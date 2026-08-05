/* Divyasri Krishnakumar, portfolio interactions.
   No external libraries: IntersectionObserver for reveals, plain DOM for
   the archive filter/search, requestAnimationFrame for the scroll progress
   strip. Kept dependency-free so the site works exactly the same wherever
   it ends up hosted. */

(() => {
  "use strict";

  /* ---------------------------------------------------------------------
   * Fix up the initial hash scroll. Google Fonts swap in after first paint
   * and shift section heights, so the browser's own jump-to-#hash (done
   * before fonts arrive) can land short. Redo it once, as soon as fonts
   * settle, but ONLY if the user hasn't already scrolled or clicked
   * somewhere themselves in the meantime, since that later correction
   * should never override a real user action.
   * ------------------------------------------------------------------- */
  if (location.hash) {
    let userInteracted = false;
    let corrected = false;
    const markInteracted = () => { userInteracted = true; };
    window.addEventListener("wheel", markInteracted, { once: true, passive: true });
    window.addEventListener("touchmove", markInteracted, { once: true, passive: true });
    window.addEventListener("keydown", markInteracted, { once: true });
    document.addEventListener("click", markInteracted, { once: true, capture: true });

    const correctHashScroll = () => {
      if (corrected || userInteracted) return;
      corrected = true;
      const target = document.querySelector(location.hash);
      target?.scrollIntoView({ behavior: "auto", block: "start" });
    };

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => requestAnimationFrame(correctHashScroll));
    }
    window.addEventListener("load", () => requestAnimationFrame(correctHashScroll), { once: true });
    // Safety net: never correct more than 2.5s after load, however late fonts resolve.
    setTimeout(() => { corrected = true; }, 2500);
  }

  /* ---------------------------------------------------------------------
   * Scroll progress strip
   * ------------------------------------------------------------------- */
  const gradientStrip = document.querySelector(".gradient-strip");
  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? scrollTop / docHeight : 0;
    gradientStrip.style.transform = `scaleX(${progress})`;
  }
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  /* ---------------------------------------------------------------------
   * Reveal-on-scroll
   * ------------------------------------------------------------------- */
  const revealTargets = document.querySelectorAll(".reveal, .reveal-line");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
  );
  revealTargets.forEach((el) => revealObserver.observe(el));

  /* ---------------------------------------------------------------------
   * Section scrollspy: side dots + top nav links
   * ------------------------------------------------------------------- */
  const sections = document.querySelectorAll("main .section[id]");
  const sideDots = document.querySelectorAll(".side-dots span");
  const navLinks = document.querySelectorAll(".nav-links a");

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;

        sideDots.forEach((dot) => dot.classList.toggle("active", dot.dataset.target === id));
        navLinks.forEach((link) => link.classList.toggle("active", link.dataset.nav === id));
      });
    },
    { threshold: 0.5 }
  );
  sections.forEach((s) => sectionObserver.observe(s));

  sideDots.forEach((dot) => {
    dot.style.cursor = "pointer";
    dot.addEventListener("click", () => {
      document.getElementById(dot.dataset.target)?.scrollIntoView({ behavior: "smooth" });
    });
  });

  /* ---------------------------------------------------------------------
   * Resume dropdown (two triggers: nav + contact footer)
   * ------------------------------------------------------------------- */
  const resumeMenu = document.getElementById("resume-menu");
  const resumeToggle = document.getElementById("resume-toggle");
  const resumeToggle2 = document.getElementById("resume-toggle-2");

  function toggleResumeMenu(forceClose) {
    const willOpen = forceClose === true ? false : !resumeMenu.classList.contains("open");
    resumeMenu.classList.toggle("open", willOpen);
    resumeToggle.setAttribute("aria-expanded", String(willOpen));
  }
  resumeToggle.addEventListener("click", (e) => { e.stopPropagation(); toggleResumeMenu(); });
  resumeToggle2?.addEventListener("click", (e) => {
    e.stopPropagation();
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => toggleResumeMenu(false), 500);
  });
  document.addEventListener("click", (e) => {
    if (!resumeMenu.contains(e.target) && e.target !== resumeToggle) toggleResumeMenu(true);
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") toggleResumeMenu(true); });

  /* ---------------------------------------------------------------------
   * Mobile nav burger
   * ------------------------------------------------------------------- */
  const burger = document.getElementById("nav-burger");
  const navLinksWrap = document.querySelector(".nav-links");
  burger?.addEventListener("click", () => {
    const open = navLinksWrap.classList.toggle("mobile-open");
    burger.classList.toggle("open", open);
    if (open) {
      navLinksWrap.style.cssText =
        "display:flex;flex-direction:column;position:fixed;top:78px;left:3%;right:3%;background:rgba(13,17,23,0.97);padding:22px;border-radius:20px;gap:18px;";
    } else {
      navLinksWrap.removeAttribute("style");
    }
  });
  navLinksWrap?.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      navLinksWrap.classList.remove("mobile-open");
      navLinksWrap.removeAttribute("style");
    })
  );

  /* ---------------------------------------------------------------------
   * Featured work grid (rendered from PROJECTS where featured === true)
   * ------------------------------------------------------------------- */
  const featuredGrid = document.getElementById("featured-grid");
  const featured = PROJECTS.filter((p) => p.featured);

  featuredGrid.innerHTML = featured
    .map(
      (p, i) => `
    <article class="featured-card reveal" style="transition-delay:${(i % 3) * 90}ms">
      <span class="featured-track">${TRACK_META[p.track].label}</span>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="featured-tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
      ${p.metric ? `<div class="featured-metric">${p.metric}</div>` : ""}
      ${p.repo ? `<a class="featured-repo-link" href="${p.repo}" target="_blank" rel="noopener" onclick="event.stopPropagation()">Code &#8599;</a>` : ""}
    </article>`
    )
    .join("");

  // Newly injected .reveal nodes need their own observer pass.
  featuredGrid.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  /* ---------------------------------------------------------------------
   * Full archive: render, filter by track, search
   * ------------------------------------------------------------------- */
  const archiveGrid = document.getElementById("archive-grid");
  const archiveFilters = document.getElementById("archive-filters");
  const archiveSearch = document.getElementById("archive-search");
  const archiveCount = document.getElementById("archive-count");
  const archiveEmpty = document.getElementById("archive-empty");

  let activeTrack = "all";

  // Build the tab bar from TRACK_META, with live counts, as a real ARIA
  // tablist: one tab per track, one shared panel (#archive-grid) whose
  // content swaps to match whichever tab is selected.
  function trackCount(track) {
    return track === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.track === track).length;
  }
  archiveFilters.setAttribute("role", "tablist");
  archiveFilters.setAttribute("aria-label", "Project tracks");
  archiveFilters.innerHTML = Object.keys(TRACK_META)
    .map((key) => {
      const isActive = key === "all";
      return `<button
        class="filter-pill${isActive ? " active" : ""}"
        role="tab"
        id="tab-${key}"
        aria-selected="${isActive}"
        aria-controls="archive-grid"
        tabindex="${isActive ? "0" : "-1"}"
        data-track="${key}"
      >${TRACK_META[key].label} <span class="pill-count">(${trackCount(key)})</span></button>`;
    })
    .join("");
  const tabButtons = () => Array.from(archiveFilters.querySelectorAll(".filter-pill"));

  function selectTab(btn) {
    activeTrack = btn.dataset.track;
    tabButtons().forEach((p) => {
      const isActive = p === btn;
      p.classList.toggle("active", isActive);
      p.setAttribute("aria-selected", String(isActive));
      p.tabIndex = isActive ? 0 : -1;
    });
    archiveGrid.setAttribute("aria-labelledby", btn.id);
    renderArchive();
  }

  function renderArchive() {
    const term = archiveSearch.value.trim().toLowerCase();

    const visible = PROJECTS.filter((p) => {
      const trackOk = activeTrack === "all" || p.track === activeTrack;
      if (!trackOk) return false;
      if (!term) return true;
      const haystack = `${p.title} ${p.desc} ${p.tags.join(" ")}`.toLowerCase();
      return haystack.includes(term);
    });

    archiveCount.textContent = `${visible.length} project${visible.length === 1 ? "" : "s"}`;
    archiveEmpty.hidden = visible.length !== 0;

    archiveGrid.innerHTML = visible.length
      ? visible
          .map(
            (p, i) => `
      <article class="archive-card" style="animation-delay:${Math.min(i, 12) * 35}ms">
        <div class="archive-card-top">
          <h4>${p.title}</h4>
          <span class="archive-track-dot track-${p.track}"></span>
        </div>
        <p>${p.desc}</p>
        <div class="archive-tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
        ${p.metric ? `<div class="archive-metric">${p.metric}</div>` : ""}
        ${p.repo ? `<a class="archive-repo-link" href="${p.repo}" target="_blank" rel="noopener" onclick="event.stopPropagation()">Code &#8599;</a>` : ""}
      </article>`
          )
          .join("")
      : "";
  }

  archiveFilters.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-pill");
    if (btn) selectTab(btn);
  });

  // Left/Right (and Home/End) move focus between tabs and activate them,
  // matching the standard ARIA tablist keyboard pattern.
  archiveFilters.addEventListener("keydown", (e) => {
    const tabs = tabButtons();
    const currentIndex = tabs.indexOf(document.activeElement);
    if (currentIndex === -1) return;

    let nextIndex = null;
    if (e.key === "ArrowRight") nextIndex = (currentIndex + 1) % tabs.length;
    else if (e.key === "ArrowLeft") nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    else if (e.key === "Home") nextIndex = 0;
    else if (e.key === "End") nextIndex = tabs.length - 1;
    else return;

    e.preventDefault();
    tabs[nextIndex].focus();
    selectTab(tabs[nextIndex]);
  });

  let searchDebounce;
  archiveSearch.addEventListener("input", () => {
    clearTimeout(searchDebounce);
    searchDebounce = setTimeout(renderArchive, 120);
  });

  archiveGrid.setAttribute("aria-labelledby", "tab-all");
  renderArchive();

  /* ---------------------------------------------------------------------
   * Nav bar background fades in once you leave the hero
   * ------------------------------------------------------------------- */
  const siteNav = document.getElementById("site-nav");
  const heroSection = document.getElementById("hero");
  const navBgObserver = new IntersectionObserver(
    ([entry]) => {
      siteNav.style.boxShadow = entry.isIntersecting ? "none" : "0 12px 40px rgba(0,0,0,0.25)";
    },
    { threshold: 0, rootMargin: "-90px 0px 0px 0px" }
  );
  navBgObserver.observe(heroSection);
})();
