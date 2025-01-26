// passwordStrength.js

export const PasswordStrength = {
  evaluate(password, strengthBar) {
    let score = 0;
    // Minimum required length for a password to potentially be considered medium or strong
    const minLength = 12;

    // Award points based on password length (up to 3 points)
    // 1 point for every 4 characters, capped at 3 points
    if (password.length >= minLength) {
      score += Math.min(Math.floor(password.length / 4), 3);
    }

    // Define regex patterns to check for different character types
    const patterns = {
      lowercase: /[a-z]/g,
      uppercase: /[A-Z]/g,
      numbers: /[0-9]/g,
      symbols: /[!@#$%^&*()_+\-=\[\]{};:'",.<>?~/]/g,
    };

    // Count occurrences of each character type and award points
    const counts = {};
    for (const [type, pattern] of Object.entries(patterns)) {
      const matches = password.match(pattern) || [];
      counts[type] = matches.length;

      // Award 1 point for having at least one character of this type
      // Award additional point if there are 3 or more characters of this type
      if (matches.length > 0) {
        score += 1;
        if (matches.length >= 3) score += 1;
      }
    }

    // Define patterns that weaken password strength
    const penalties = {
      consecutive: /(.)\1{2,}/g, // Three or more consecutive identical characters
      sequential:
        /(?:abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz|012|123|234|345|456|567|678|789)/i, // Sequential letters or numbers
      keyboard: /(?:qwer|asdf|zxcv|tyui|ghjk|bnm)/i, // Common keyboard patterns
    };

    // Apply penalties for weak patterns (-2 points each)
    for (const pattern of Object.values(penalties)) {
      if (pattern.test(password)) {
        score -= 2;
      }
    }

    // Clear any existing strength indication
    strengthBar.removeAttribute("data-strength");

    // Determine password strength based on score and additional criteria
    if (password.length < minLength || score <= 4) {
      // Weak if below minimum length or low score
      strengthBar.setAttribute("data-strength", "weak");
    } else if (score <= 7) {
      // Medium if score is moderate
      strengthBar.setAttribute("data-strength", "medium");
    } else {
      // Check for strong password criteria:
      // - At least 2 characters of each type
      // - Minimum length of 14 characters
      const isStrong =
        counts.lowercase >= 2 &&
        counts.uppercase >= 2 &&
        counts.numbers >= 2 &&
        counts.symbols >= 2 &&
        password.length >= 14;

      strengthBar.setAttribute("data-strength", isStrong ? "strong" : "medium");
    }
  },
};
