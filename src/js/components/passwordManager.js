// passwordManager.js
import { PasswordGenerator } from "./passwordGenerator.js";
import { PasswordStrength } from "./passwordStrength.js";
import { PasswordList } from "./passwordList.js";

/**
 * Manages password generation, evaluation, and storage functionality.
 * Coordinates between the UI elements and the underlying password-related operations.
 */
export class PasswordManager {
  // Creates a new PasswordManager instance.
  constructor(elements) {
    this.elements = elements;
    this.passwordListManager = null;
    this.init();
  }

  /**
   * Initializes the password manager by setting up the password list
   * and attaching event listeners to UI elements.
   */
  init() {
    this.initializePasswordList();
    this.attachEventListeners();
  }

  // Creates a new instance of PasswordList to manage saved passwords.
  initializePasswordList() {
    this.passwordListManager = PasswordList(this.elements.savedPasswordsList);
  }

  /**
   * Attaches event listeners to form submission and button clicks.
   * Handles password generation, copying, and saving actions.
   */
  attachEventListeners() {
    this.elements.passwordForm.addEventListener("submit", (event) => {
      event.preventDefault();
      this.generateNewPassword();
    });

    this.elements.generateBtn.addEventListener("click", () => {
      this.generateNewPassword();
    });

    this.elements.copyBtn.addEventListener("click", () => {
      this.copyToClipboard();
    });

    this.elements.saveBtn.addEventListener("click", () => {
      this.savePassword();
    });
  }

  /**
   * Generates a new password based on user-selected criteria.
   * Validates input length and selected character types before generation.
   * Updates the UI with the new password and its strength evaluation.
   */
  generateNewPassword() {
    const length = parseInt(this.elements.lengthInput.value);

    // Validate password length before proceeding
    const validationError = PasswordGenerator.validate(length);
    if (validationError) {
      this.displayError(validationError);
      return;
    }

    // Generate password with selected character types
    const newPassword = PasswordGenerator.generate(
      length,
      this.elements.includeLowercase.checked,
      this.elements.includeUppercase.checked,
      this.elements.includeNumbers.checked,
      this.elements.includeSymbols.checked
    );

    // Handle case where no character types are selected
    if (newPassword === "Please select at least one character type.") {
      this.displayError(newPassword);
      return;
    }

    this.displayPassword(newPassword);
  }

  // Displays an error message in the password box and updates UI state.
  displayError(error) {
    this.elements.passwordBox.textContent = error;
    this.elements.passwordBox.classList.add("error");
    this.elements.strengthBar.removeAttribute("data-strength");
  }

  // Updates the UI to display a newly generated password and its strength.
  displayPassword(password) {
    this.elements.passwordBox.textContent = password;
    this.elements.passwordBox.classList.remove("error");
    PasswordStrength.evaluate(password, this.elements.strengthBar);
  }

  /**
   * Copies the currently displayed password to the system clipboard.
   * Shows a success or error message via alert.
   */
  copyToClipboard() {
    const password = this.elements.passwordBox.textContent;
    if (password) {
      navigator.clipboard
        .writeText(password)
        .then(() => alert("Password copied!"))
        .catch(() => alert("Something went wrong!"));
    }
  }

  // Saves the currently displayed password to the password list.
  savePassword() {
    const password = this.elements.passwordBox.textContent;
    if (password) {
      this.passwordListManager.addPassword(password);
    }
  }
}
