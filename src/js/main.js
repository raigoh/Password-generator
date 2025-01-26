// main.js
import { ThemeToggle } from "./components/themeToggle.js";
import { PasswordManager } from "./components/passwordManager.js";

// Initialize Theme Toggle
ThemeToggle(document.getElementById("theme-toggle"));

// Initialize Password Manager with all required elements
new PasswordManager({
  passwordBox: document.getElementById("password-box"),
  generateBtn: document.getElementById("generate-btn"),
  copyBtn: document.getElementById("copy-btn"),
  saveBtn: document.getElementById("save-btn"),
  savedPasswordsList: document.getElementById("saved-passwords"),
  strengthBar: document.getElementById("strength-bar"),
  lengthInput: document.getElementById("length"),
  includeLowercase: document.getElementById("include-lowercase"),
  includeUppercase: document.getElementById("include-uppercase"),
  includeNumbers: document.getElementById("include-numbers"),
  includeSymbols: document.getElementById("include-symbols"),
  passwordForm: document.getElementById("password-form"),
});
