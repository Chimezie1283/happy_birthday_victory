const heartsLayer = document.getElementById("heartsLayer");
const surpriseButton = document.getElementById("surpriseButton");
const secretMessage = document.getElementById("secretMessage");
const celebrateButton = document.getElementById("celebrateButton");

function createHeart() {
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = ["♥", "♡", "❤", "💕"][Math.floor(Math.random() * 4)];
  heart.style.left = Math.random() * 100 + "%";
  heart.style.fontSize = 16 + Math.random() * 24 + "px";
  heart.style.animationDuration = 7 + Math.random() * 7 + "s";
  heartsLayer.appendChild(heart);
  heart.addEventListener("animationend", () => heart.remove());
}

// A gentle stream of floating hearts in the background.
for (let i = 0; i < 12; i++) {
  setTimeout(createHeart, i * 350);
}
setInterval(createHeart, 850);

surpriseButton.addEventListener("click", () => {
  const isHidden = secretMessage.hidden;
  secretMessage.hidden = !isHidden;
  surpriseButton.setAttribute("aria-expanded", String(isHidden));
  surpriseButton.textContent = isHidden
    ? "Close Love Note 💌"
    : "Open Your Little Love Note 💌";
  if (isHidden) {
    secretMessage.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }
});

celebrateButton.addEventListener("click", () => {
  for (let i = 0; i < 28; i++) {
    setTimeout(createHeart, i * 65);
  }
  celebrateButton.textContent = "You Deserve All the Love! ❤️";
  setTimeout(() => {
    celebrateButton.textContent = "Celebrate You! 🎉";
  }, 2400);
});
