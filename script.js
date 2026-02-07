const garden = document.getElementById("garden");
const messageBox = document.getElementById("messageBox");

const messages = [
  "You make my world bloom 🌹",
  "Every rose here is for you ❤️",
  "I fall for you more every day 💕",
  "You’re my forever favorite 🌸",
  "This garden exists because of you 💖"
];

const ROSE_COUNT = 35; // more roses = fuller screen

for (let i = 0; i < ROSE_COUNT; i++) {
  const rose = document.createElement("div");
  rose.className = "rose";
  rose.textContent = "🌹";

  rose.style.left = Math.random() * 90 + "vw";
  rose.style.top = Math.random() * 85 + "vh";
  rose.style.animationDuration = 3 + Math.random() * 4 + "s";

  rose.addEventListener("click", () => {
    messageBox.textContent =
      messages[Math.floor(Math.random() * messages.length)];
    messageBox.classList.remove("hidden");
  });

  garden.appendChild(rose);
}

/* Close message when clicking outside */
document.body.addEventListener("click", (e) => {
  if (!e.target.classList.contains("rose")) {
    messageBox.classList.add("hidden");
  }
});
