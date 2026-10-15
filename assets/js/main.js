(() => {
  const STORAGE_KEY = "lang";
  const SUPPORTED = ["en", "es"];
  const META_LOCALES = { en: "en_US", es: "es_AR" };

  const detectLanguage = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED.includes(stored)) return stored;
    return (navigator.language || "").toLowerCase().startsWith("es") ? "es" : "en";
  };

  const setMeta = (selector, value) => {
    const el = document.querySelector(selector);
    if (el) el.setAttribute("content", value);
  };

  const pick = (value, lang) => {
    if (value && typeof value === "object") return value[lang] ?? value.en ?? "";
    return value ?? "";
  };

  const el = (tag, props = {}, children = []) => {
    const node = document.createElement(tag);
    Object.entries(props).forEach(([key, value]) => {
      if (value === null || value === undefined || value === false) return;
      if (key === "text") node.textContent = value;
      else if (key === "html") node.innerHTML = value;
      else if (key === "class") node.className = value;
      else node.setAttribute(key, value);
    });
    (Array.isArray(children) ? children : [children]).forEach((child) => {
      if (child === null || child === undefined) return;
      node.appendChild(typeof child === "string" ? document.createTextNode(child) : child);
    });
    return node;
  };

  const YOUTUBE_ID = /^[A-Za-z0-9_-]{11}$/;

  const youtubeId = (value) => {
    const text = String(value ?? "").trim();
    if (YOUTUBE_ID.test(text)) return text;
    const found = text.match(/(?:youtu\.be\/|[?&]v=|\/(?:embed|shorts|live)\/)([A-Za-z0-9_-]{11})/);
    return found ? found[1] : null;
  };

  const renderShot = (entry, lang, className) => {
    const figure = el("figure", { class: className });

    const picture = el("a", {
      class: "media__link",
      href: entry.src,
      target: "_blank",
      rel: "noopener noreferrer",
      tabindex: "-1",
      "aria-hidden": "true"
    }, el("img", {
      src: entry.src,
      alt: pick(entry.alt, lang),
      loading: "lazy",
      decoding: "async",
      width: entry.width,
      height: entry.height
    }));

    const caption = el("a", {
      class: "media__caption",
      href: entry.src,
      target: "_blank",
      rel: "noopener noreferrer",
      text: pick(entry.caption, lang)
    });

    figure.appendChild(picture);
    figure.appendChild(el("figcaption", {}, caption));
    return figure;
  };

  const renderVideo = (entry, lang, className) => {
    const dict = window.I18N[lang];
    const id = youtubeId(entry.youtube);
    const title = pick(entry.title, lang) || dict["carousel.label"];
    const figure = el("figure", { class: className });
    const frame = el("div", { class: "video__frame" });

    if (id) {
      const play = el("button", {
        type: "button",
        class: "video__play",
        "aria-label": `${dict["video.play"]}: ${title}`
      }, [
        el("img", {
          class: "video__thumb",
          src: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
          alt: "",
          loading: "lazy",
          decoding: "async",
          width: "480",
          height: "360"
        }),
        el("span", { class: "video__badge", "aria-hidden": "true", text: "▶" })
      ]);

      play.addEventListener("click", () => {
        frame.textContent = "";
        frame.appendChild(el("iframe", {
          class: "video__embed",
          src: `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`,
          title,
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowfullscreen: "",
          referrerpolicy: "strict-origin-when-cross-origin"
        }));
      });

      frame.appendChild(play);
    } else {
      frame.appendChild(el("p", {
        class: "video__missing",
        text: `${dict["video.missing"]}: ${entry.youtube}`
      }));
    }

    figure.appendChild(frame);
    figure.appendChild(el("figcaption", {}, el("a", {
      class: "media__caption",
      href: id ? `https://www.youtube.com/watch?v=${id}` : "#",
      target: "_blank",
      rel: "noopener noreferrer",
      text: pick(entry.caption, lang) || dict["video.watch"]
    })));
    return figure;
  };

  const renderMedia = (entry, lang, className) => (
    entry.youtube ? renderVideo(entry, lang, className) : renderShot(entry, lang, className)
  );

  const setupCarousel = (region, track, items) => {
    const counter = region.querySelector(".carousel__counter");
    const prev = region.querySelector(".carousel__btn--prev");
    const next = region.querySelector(".carousel__btn--next");
    const total = items.length;
    let index = 0;

    const unload = (item, position) => {
      if (!item.isVideo || !item.node.querySelector(".video__embed")) return false;
      track.replaceChild(item.factory(), item.node);
      item.node = track.children[position];
      return true;
    };

    const sync = (item, position) => {
      const active = position === index;
      item.node.classList.toggle("is-active", active);
      item.node.setAttribute("aria-hidden", String(!active));
      item.node.querySelectorAll("a, button").forEach((control) => {
        if (control.classList.contains("media__link")) return;
        control.tabIndex = active ? 0 : -1;
      });
    };

    const show = (wanted) => {
      index = (wanted + total) % total;
      track.style.transform = `translateX(-${index * 100}%)`;
      items.forEach((item, position) => {
        if (position !== index) unload(item, position);
        sync(item, position);
      });
      counter.textContent = `${index + 1} / ${total}`;
    };

    prev.addEventListener("click", () => show(index - 1));
    next.addEventListener("click", () => show(index + 1));

    region.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") { show(index - 1); event.preventDefault(); }
      if (event.key === "ArrowRight") { show(index + 1); event.preventDefault(); }
    });

    let touchStart = null;
    region.addEventListener("touchstart", (event) => {
      touchStart = event.changedTouches[0].clientX;
    }, { passive: true });
    region.addEventListener("touchend", (event) => {
      if (touchStart === null) return;
      const delta = event.changedTouches[0].clientX - touchStart;
      if (Math.abs(delta) > 40) show(index + (delta < 0 ? 1 : -1));
      touchStart = null;
    }, { passive: true });

    if ("IntersectionObserver" in window) {
      new window.IntersectionObserver((entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) {
          items.forEach((item, position) => {
            if (unload(item, position)) sync(item, position);
          });
        }
      }).observe(region);
    }

    show(0);
  };

  const renderCarousel = (entries, lang) => {
    const dict = window.I18N[lang];
    const region = el("div", {
      class: "carousel",
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": dict["carousel.label"]
    });

    const track = el("div", { class: "carousel__track" });
    const items = entries.map((entry) => {
      const factory = () => renderMedia(entry, lang, "carousel__slide");
      const item = { isVideo: Boolean(entry.youtube), factory, node: null };
      item.node = factory();
      track.appendChild(item.node);
      return item;
    });
    region.appendChild(el("div", { class: "carousel__viewport" }, track));

    region.appendChild(el("div", { class: "carousel__controls" }, [
      el("button", {
        type: "button",
        class: "carousel__btn carousel__btn--prev",
        "aria-label": dict["carousel.prev"],
        text: "‹"
      }),
      el("p", { class: "carousel__counter", "aria-live": "polite" }),
      el("button", {
        type: "button",
        class: "carousel__btn carousel__btn--next",
        "aria-label": dict["carousel.next"],
        text: "›"
      })
    ]));

    setupCarousel(region, track, items);
    return region;
  };

  const renderGallery = (project, lang) => {
    const entries = Array.isArray(project.media) ? project.media : [];
    if (!entries.length) return null;
    if (entries.length > 1) return renderCarousel(entries, lang);

    const gallery = el("div", { class: "gallery" });
    gallery.appendChild(renderMedia(entries[0], lang, "gallery__item gallery__item--cover"));
    return gallery;
  };

  const renderSection = (section, lang) => {
    const fragment = document.createDocumentFragment();
    if (section.title) fragment.appendChild(el("h4", { text: pick(section.title, lang) }));

    if (section.type === "list" || section.type === "kv") {
      const list = el("ul");
      (section.items || []).forEach((item) => {
        const entry = el("li");
        if (section.type === "kv") {
          entry.appendChild(el("strong", { text: pick(item.label, lang) }));
          entry.appendChild(document.createTextNode(" " + pick(item.text, lang)));
        } else if (item.html) {
          entry.innerHTML = pick(item.html, lang);
        } else {
          entry.textContent = pick(item, lang);
        }
        list.appendChild(entry);
      });
      fragment.appendChild(list);
    } else if (section.body) {
      fragment.appendChild(el("p", section.type === "flow" ? {
        class: "flow-diagram",
        text: pick(section.body, lang)
      } : { text: pick(section.body, lang) }));
    }

    return fragment;
  };

  const renderCard = (project, lang) => {
    const card = el("article", { class: "project-card", id: project.id });

    const header = el("div", { class: "project-header" });
    header.appendChild(el("div", { class: "project-title" }, [
      el("h3", { text: pick(project.title, lang) }),
      el("div", { class: "tech-stack", text: project.stack })
    ]));
    header.appendChild(el("span", {
      class: `status status--${project.status.kind}`,
      text: pick(project.status.label, lang)
    }));
    card.appendChild(header);

    const gallery = renderGallery(project, lang);
    if (gallery) card.appendChild(gallery);

    const body = el("div", { class: "project-body" });
    (project.sections || []).forEach((section) => body.appendChild(renderSection(section, lang)));
    if (body.childNodes.length) card.appendChild(body);

    const links = project.links || [];
    if (links.length) {
      const actions = el("div", { class: "project-actions" });
      links.forEach((link) => actions.appendChild(el("a", {
        class: `btn btn--${link.variant || "primary"}`,
        href: link.href,
        target: link.target || "_blank",
        rel: "noopener noreferrer",
        text: pick(link.label, lang)
      })));
      card.appendChild(actions);
    }

    return card;
  };

  const renderProjects = (lang) => {
    const host = document.getElementById("project-list");
    if (!host) return;
    host.textContent = "";
    (window.PROJECTS || []).forEach((project) => host.appendChild(renderCard(project, lang)));
  };

  const applyLanguage = (lang) => {
    const dict = window.I18N[lang];
    if (!dict) return;

    document.documentElement.lang = lang;
    document.title = dict["page.title"];
    setMeta('meta[name="description"]', dict["page.description"]);
    setMeta('meta[property="og:title"]', dict["page.title"]);
    setMeta('meta[property="og:description"]', dict["page.description"]);
    setMeta('meta[property="og:locale"]', META_LOCALES[lang]);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const value = dict[el.dataset.i18n];
      if (value !== undefined) el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const value = dict[el.dataset.i18nAlt];
      if (value !== undefined) el.alt = value;
    });

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    renderProjects(lang);
  };

  const setLanguage = (lang) => {
    applyLanguage(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  };

  document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(detectLanguage());

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
    });

    const year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());
  });
})();