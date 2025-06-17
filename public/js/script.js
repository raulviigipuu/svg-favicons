// =========================
// Constants & DOM References
// =========================
const faviconLink = document.getElementById("favicon");
const emojiInput = document.getElementById("emojiInput");
const faviconCode = document.getElementById("faviconCode");
const copyButton = document.getElementById("copyButton");
const copyFeedback = document.getElementById("copyFeedback");
const emojiCategoriesContainer = document.getElementById("emojiCategories");

// =========================
// Emoji Data
// =========================
function getEmojiCategories() {
  return {
    "Smileys & Emotion": ["😀","😁","😂","😃","😄","😅","😆","😇","😈","😉","😊","😋","😌","😍","😎","😏","😐","😑","😒","😓","😔","😕","😖","😗","😘","😙","😚","😛","😜","😝","😞","😟","😠","😡","😢","😣","😤","😥","😦","😧","😨","😩","😪","😫","😬","😭","😮","😯","😰","😱","😲","😳","😴","😵","😶","😷","😸","😹","😺","😻","😼","😽","😾","😿","🙀","🙁","🙂","🙃","🙄","🙅","🙆","🙇","🙈","🙉","🙊","🙋","🙌","🙍","🙎","🙏","🤐","🫠","👾"],
    "People & Body": ["👋", "🤚", "🖐️", "✌️", "🤞", "👍", "🙏", "💪", "🧠", "🦵", "🦶"],
    "Animals & Nature": ["🐶", "🐱", "🦁", "🐮", "🐸", "🐵"],
    "Food & Drink": ["🍎", "🍔", "🍟", "🍕", "🍩", "🍰", "🍉", "🍇"],
    "Travel & Places": ["🚗", "🚕", "🚌", "🚀", "✈️", "🚢"],
    "Activities": ["⚽", "🏀", "🏈", "⚾", "🎾", "🎮", "🎲", "🎯", "🎵", "🎤"],
    "Objects": ["💡", "🔑", "🪙", "🧲", "📱", "💻"],
    "Flags": ["🇺🇸", "🇪🇪", "🇯🇵", "🇫🇮", "🇫🇷", "🏴‍☠️"]
  };
}


// =========================
// Favicon Update Logic
// =========================
function updateFavicon(emoji) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>${emoji}</text></svg>`;
  const encoded = encodeURIComponent(svg);
  faviconLink.href = `data:image/svg+xml,${encoded}`;
}

// =========================
// Snippet Generation
// =========================
function generateFaviconHTML(emoji) {
  return `<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>${emoji}</text></svg>">`;
}

function setEmojiAndGenerateSnippet(emoji) {
  updateFavicon(emoji);
  emojiInput.value = emoji;
  faviconCode.value = generateFaviconHTML(emoji);
}

// =========================
// Rendering Emoji Grid
// =========================
function renderEmojiButtons() {
  const categories = getEmojiCategories();

  for (const [category, emojis] of Object.entries(categories)) {
    const section = document.createElement("div");
    section.className = "category";

    const title = document.createElement("h3");
    title.textContent = category;
    section.appendChild(title);

    const grid = document.createElement("div");
    grid.className = "favicon-grid";

    emojis.forEach(emoji => {
      const button = document.createElement("button");
      button.textContent = emoji;
      button.addEventListener("click", () => {
        setEmojiAndGenerateSnippet(emoji);
      });
      grid.appendChild(button);
    });

    section.appendChild(grid);
    emojiCategoriesContainer.appendChild(section);
  }
}

// =========================
// Event Listeners
// =========================
emojiInput?.addEventListener("input", () => {
  const emoji = emojiInput.value.trim();
  if (emoji) {
    updateFavicon(emoji);
    faviconCode.value = generateFaviconHTML(emoji);
  } else {
    faviconCode.value = "";
  }
});

copyButton?.addEventListener("click", () => {
  const code = faviconCode.value;
  if (!code) return;

  navigator.clipboard.writeText(code).then(() => {
    copyFeedback.style.display = "inline";
    setTimeout(() => {
      copyFeedback.style.display = "none";
    }, 1500);
  });
});

// =========================
// Init on Page Load
// =========================
document.addEventListener("DOMContentLoaded", () => {
  renderEmojiButtons();
});
