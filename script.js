// Flashcards da Roça — interação de virar carta e progresso de colheita
document.addEventListener("DOMContentLoaded", () => {
  const cards = Array.from(document.querySelectorAll(".card"));
  const progressFill = document.getElementById("progressFill");
  const progressMarker = document.getElementById("progressMarker");
  const progressLabel = document.getElementById("progressLabel");
  const total = cards.length;
  const seen = new Set();

  function updateProgress() {
    const percent = Math.round((seen.size / total) * 100);
    progressFill.style.width = percent + "%";
    progressMarker.style.left = percent + "%";
    progressLabel.textContent = seen.size + " de " + total + " sementes colhidas";
  }

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const flipped = card.classList.toggle("is-flipped");
      card.setAttribute("aria-pressed", flipped ? "true" : "false");

      if (flipped) {
        card.classList.add("is-seen");
        seen.add(card.dataset.index);
        updateProgress();
      }
    });
  });

  updateProgress();
});
