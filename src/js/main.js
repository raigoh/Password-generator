import { ThemeToggle } from "./components/themeToggle.js";
import { PasswordGenerator } from "./components/passwordGenerator.js";
import { PasswordStrength } from "./components/passwordStrength.js";
import { PasswordList } from "./components/passwordList.js";

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
const passwordForm = document.getElementById("password-form");

passwordForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission and page refresh

  // Trigger password generation when form is submitted
  const length = parseInt(lengthInput.value);

  // First check for validation errors
  const validationError = PasswordGenerator.validate(length);
  if (validationError) {
    passwordBox.textContent = validationError;
    passwordBox.classList.add("error");
    strengthBar.removeAttribute("data-strength");
    return;
  }

  // Generate the password
  const newPassword = PasswordGenerator.generate(
    length,
    includeLowercase.checked,
    includeUppercase.checked,
    includeNumbers.checked,
    includeSymbols.checked
  );

  // Check if the result is an error message (no character types selected)
  if (newPassword === "Please select at least one character type.") {
    passwordBox.textContent = newPassword;
    passwordBox.classList.add("error");
    strengthBar.removeAttribute("data-strength");
    return;
  }

  // If we get here, we have a valid password
  passwordBox.textContent = newPassword;
  passwordBox.classList.remove("error");
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
