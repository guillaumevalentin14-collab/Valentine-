const yes = document.getElementById("yes");
const no = document.getElementById("no");
const result = document.getElementById("result");

// Fonction qui crée une pluie de cœurs
function heartsRain() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = Math.random() > 0.5 ? "💖" : "💘";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = 18 + Math.random() * 20 + "px";
    heart.style.animationDuration = 2 + Math.random() * 2 + "s";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }
}

// Quand on clique sur OUI
yes.addEventListener("click", () => {
  result.style.display = "block";
  heartsRain();
  yes.style.transform = "scale(1.3)";
  yes.style.fontSize = "20px";
  yes.textContent = "OUIII 😍";
});

// Le bouton NON esquive
function dodge() {
  const dx = Math.random() * 260 - 130;
  const dy = Math.random() * 180 - 90;
  no.style.transform = `translate(${dx}px, ${dy}px)`;
}

no.addEventListener("mouseenter", dodge);
no.addEventListener("click", dodge);
no.addEventListener("touchstart", (e) => {
  e.preventDefault();
  dodge();
}, { passive: false });
