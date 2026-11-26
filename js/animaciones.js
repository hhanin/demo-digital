"use strict";

// La entrada de la portada se hace solo con CSS (clase .js en <html>).
// Aquí está la línea del tiempo de la página Historia.
const sinMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const puntos = document.querySelectorAll(".tl-dot");

// Cada punto abre su hito en el acordeón de Bootstrap y lleva la vista hasta él.
puntos.forEach((punto) => {
  punto.addEventListener("click", () => {
    const panel = document.querySelector(punto.dataset.hito);
    if (!panel || typeof bootstrap === "undefined") return;
    bootstrap.Collapse.getOrCreateInstance(panel, { toggle: false }).show();
    puntos.forEach((otro) => otro.classList.toggle("on", otro === punto));
    panel.closest(".accordion-item").scrollIntoView({
      behavior: sinMovimiento ? "auto" : "smooth",
      block: "center"
    });
  });
});

// Si el hito se abre desde el propio acordeón, también se marca su punto.
document.querySelectorAll("#acordeonHitos .accordion-collapse").forEach((panel) => {
  panel.addEventListener("shown.bs.collapse", () => {
    puntos.forEach((punto) => punto.classList.toggle("on", punto.dataset.hito === "#" + panel.id));
  });
});
