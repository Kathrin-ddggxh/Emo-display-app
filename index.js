let emojis = [];

// Button elements
const unshiftBtn = document.getElementById("add-start-btn");
const shiftBtn = document.getElementById("remove-start-btn");
const pushBtn = document.getElementById("add-end-btn");
const popBtn = document.getElementById("remove-end-btn");

const emojiEl = document.getElementById("emoji-container");
const emojiInput = document.getElementById("emoji-input");

emojiEl.style.fontSize = "80px";
// default display
emojiEl.innerHTML = "🐱‍👓 🐱‍🐉 🐱‍💻";

function renderEmojis() {
  emojiEl.innerHTML = "";
  for (let i = 0; i < emojis.length; i++) {
    emojiEl.innerHTML += emojis[i];
  }
}

// Add-to-start-Btn functionality
unshiftBtn.addEventListener("click", function () {
  if (emojiInput.value) {
    emojis.unshift(emojiInput.value);

    renderEmojis();

    emojiInput.value = "";
  }
});

// Remove-from-start-Btn functionality
shiftBtn.addEventListener("click", function () {
  emojis.shift();
  renderEmojis();
});

// Add-to-end-Btn functionality
pushBtn.addEventListener("click", function () {
  if (emojiInput.value) {
    emojis.push(emojiInput.value);

    renderEmojis();

    emojiInput.value = "";
  }
});

// Remove-from-end-Btn functionality
popBtn.addEventListener("click", function () {
  emojis.pop();
  renderEmojis();
});
