// Theme management with smooth transitions

const themeToggle = document.getElementById("themeToggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Initialize theme
function initTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    // Use saved theme
    if (savedTheme === "dark") {
      document.body.classList.add("dark");
    }
  } else {
    // Use system preference
    if (prefersDarkScheme.matches) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }

  updateAriaLabel();
}

// Toggle theme
function toggleTheme() {
  const isDark = document.body.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  // Smooth transition
  document.body.style.transition =
    "background 0.3s ease, color 0.3s ease";

  updateAriaLabel();

  // Button animation
  if (themeToggle) {
    themeToggle.style.transform = "rotate(360deg)";
    setTimeout(() => {
      themeToggle.style.transform = "rotate(0deg)";
    }, 300);
  }
}

// Update aria-label for accessibility
function updateAriaLabel() {
  if (themeToggle) {
    const isDark = document.body.classList.contains("dark");
    themeToggle.setAttribute(
      "aria-label",
      isDark ? "Switch to light mode" : "Switch to dark mode"
    );
  }
}

// Event listener for toggle button
if (themeToggle) {
  themeToggle.addEventListener("click", toggleTheme);
  themeToggle.style.transition = "transform 0.3s ease";
}

// Listen for system theme changes
prefersDarkScheme.addEventListener("change", (e) => {
  // Only apply if user hasn't manually set a preference
  if (!localStorage.getItem("theme")) {
    if (e.matches) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    updateAriaLabel();
  }
});

// Initialize on load
initTheme();

// Keyboard shortcut: Ctrl/Cmd + Shift + T
document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "T") {
    e.preventDefault();
    toggleTheme();
  }
});
