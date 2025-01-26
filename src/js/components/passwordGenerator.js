// passwordGenerator.js

export const PasswordGenerator = {
  generate(length = 12, useLower, useUpper, useNumbers, useSymbols) {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{};:'\",.<>?~/";

    // Compile a set of characters according to the user's choices
    let chars = "";
    if (useLower) chars += lower;
    if (useUpper) chars += upper;
    if (useNumbers) chars += numbers;
    if (useSymbols) chars += symbols;

    // Check that at least one category is selected
    if (!chars) return "Please select at least one character type.";

    let password = "";

    // Add at least one star from each category selected
    if (useLower) password += lower[Math.floor(Math.random() * lower.length)];
    if (useUpper) password += upper[Math.floor(Math.random() * upper.length)];
    if (useNumbers)
      password += numbers[Math.floor(Math.random() * numbers.length)];
    if (useSymbols)
      password += symbols[Math.floor(Math.random() * symbols.length)];

    // Remaining password length
    for (let i = 4; i < length; i++) {
      password += chars[Math.floor(Math.random() * chars.length)];
    }

    // Mix password characters in random order
    return password
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");
  },
};
