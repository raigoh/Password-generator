// themeToggle.js

export function ThemeToggle(button) {
  function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    button.textContent = document.body.classList.contains("dark-mode")
      ? "Light mode"
      : "Dark mode";
  }

  button.addEventListener("click", toggleTheme);
}
