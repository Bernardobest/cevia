// ============ Année automatique ============
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ============ Menu mobile ============
const burger = document.getElementById("burgerBtn");
const nav = document.getElementById("mainNav");
if (burger && nav) {
  burger.addEventListener("click", () => {
    nav.classList.toggle("open");
    burger.classList.toggle("active");
  });
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      burger.classList.remove("active");
    })
  );
}

// ============ Header au scroll ============
const header = document.getElementById("siteHeader");
if (header) {
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 40);
  });
}

// ============ Rendu de la galerie ============
const galleryGrid = document.getElementById("galleryGrid");
if (galleryGrid && typeof GALLERY !== "undefined") {
  galleryGrid.innerHTML = GALLERY.map((piece, i) => `
    <article class="artwork-card" data-index="${i}">
      <div class="artwork-media">
        <img src="${piece.image}" alt="${piece.titre}" loading="lazy">
        <span class="artwork-status status-${piece.statut.replace(/\s+/g, "-")}">${statusLabel(piece.statut)}</span>
      </div>
      <div class="artwork-info">
        <h3>${piece.titre}</h3>
        <p class="artwork-meta">${piece.technique}${piece.dimensions ? " — " + piece.dimensions : ""}${piece.annee ? " — " + piece.annee : ""}</p>
        <p class="artwork-desc">${piece.description}</p>
        <a href="#contact" class="artwork-link">Se renseigner sur cette toile →</a>
      </div>
    </article>
  `).join("");
}

function statusLabel(statut) {
  if (statut === "vendue") return "Vendue";
  if (statut === "disponible") return "Disponible";
  return "Sur demande";
}

// ============ Reveal au scroll ============
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && revealEls.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("in-view"));
}
