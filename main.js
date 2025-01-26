import { ThemeToggle } from "./themeToggle.js";
import { PasswordGenerator } from "./passwordGenerator.js";
import { PasswordStrength } from "./passwordStrength.js";
import { PasswordList } from "./passwordList.js";

const passwordBox = document.getElementById("password-box");
const generateBtn = document.getElementById("generate-btn");
const copyBtn = document.getElementById("copy-btn");
const saveBtn = document.getElementById("save-btn");
const savedPasswordsList = document.getElementById("saved-passwords");
const themeToggle = document.getElementById("theme-toggle");
const strengthBar = document.getElementById("strength-bar");
const lengthInput = document.getElementById("length");
const includeLowercase = document.getElementById("include-lowercase");
const includeUppercase = document.getElementById("include-uppercase");
const includeNumbers = document.getElementById("include-numbers");
const includeSymbols = document.getElementById("include-symbols");

// Initialize Theme Toggle
ThemeToggle(themeToggle);

// Initialize Password List Manager
const passwordListManager = PasswordList(savedPasswordsList);

// Generate and evaluate password
generateBtn.addEventListener("click", () => {
  const length = parseInt(lengthInput.value);
  const newPassword = PasswordGenerator.generate(
    length,
    includeLowercase.checked,
    includeUppercase.checked,
    includeNumbers.checked,
    includeSymbols.checked
  );
  passwordBox.textContent = newPassword;
  PasswordStrength.evaluate(newPassword, strengthBar);
});

// Copy password to clipboard
copyBtn.addEventListener("click", () => {
  const password = passwordBox.textContent;
  if (password) {
    navigator.clipboard
      .writeText(password)
      .then(() => alert("Password copied!"))
      .catch(() => alert("Something went wrong!"));
  }
});

// Save password to the list
saveBtn.addEventListener("click", () => {
  const password = passwordBox.textContent;
  if (password) {
    passwordListManager.addPassword(password);
  }
});
