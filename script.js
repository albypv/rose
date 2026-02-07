const noBtn = document.getElementById("no");
const msg = document.getElementById("message");
const yesBtn = document.getElementById("yes");

const funnyTexts = [
  "Haha 😜 try again!",
  "Oops… wrong choice 💕",
  "Nice try 😏",
  "The universe says NO to NO",
  "You know the right answer 😌"
];

// NO button moves
noBtn.addEventListener("click", () => {
  const x = Math.random() * 60;
  const y = Math.random() * 60;

  noBtn.style.left = x + "%";
  noBtn.style.top = y + "%";

  msg.innerText = funnyTexts[Math.floor(Math.random() * funnyTexts.length)];
});

// YES button action
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div class="yes-screen">
      <div>
        <h2>YAYYY 💖💖💖</h2>
        <p>You make me the happiest person ever 🥰</p>
        <p>Happy Propose Day, my Valentine 🌹</p>
      </div>
    </div>
  `;
});

// Floating hearts generator
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 2 + "s";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 4000);
}, 300);
