let emojis = ["🐱‍👓", "🐱‍🐉", "🐱‍💻"];

// Button elements
const unshiftBtn = document.getElementById("add-start-btn");
const shiftBtn = document.getElementById("remove-start-btn");
const pushBtn = document.getElementById("add-end-btn");
const popBtn = document.getElementById("remove-end-btn");

const emojiEl = document.getElementById("emoji-container");
const emojiInput = document.getElementById("emoji-input");

emojiEl.style.fontSize = "80px";

unshiftBtn.addEventListener("click", function () {
  emojis = [];

  emojis.unshift(emojiInput.value);

  for (let i = 0; i < emojis.length; i++) {
    emojiEl.innerHTML += emojis[i];
  }

  emojiInput.value = "";
});
