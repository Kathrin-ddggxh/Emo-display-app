let emojis = ["🐱‍👓", "🐱‍🐉", "🐱‍💻"];

// Button elements
const addStartBtn = document.getElementById("add-start-btn");
const removeStartBtn = document.getElementById("remove-start-btn");
const addEndBtn = document.getElementById("add-end-btn");
const removeEndBtn = document.getElementById("remove-end-btn");

const emojiEl = document.getElementById("emoji-container");

console.log(emojis);

for (let i = 0; i < emojis.length; i++) {
  emojiEl.innerHTML += emojis[i];
}

emojiEl.style.fontSize = "80px";
