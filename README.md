# Password-generator

A modern, secure password generator built with vanilla JavaScript that helps users create strong, customizable passwords with an intuitive interface and dark mode support.

![Light-mode](/assets/images/Light-mode.png)
![Dark-mode](/assets/images/Dark-mode.png)

## Features

- **Customizable Password Generation**: Control length and character types (lowercase, uppercase, numbers, symbols)
- **Password Strength Evaluation**: Real-time strength assessment based on multiple criteria
- **Modern Interface**: Clean, responsive design with dark mode support
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Save & Copy**: Save generated passwords and copy them to clipboard
- **Mobile-First**: Fully responsive design that works on all devices

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local development server (optional)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/raigoh/Password-generator.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Password-generator
   ```

3. Open index.html in your browser or serve through a local development server.

## Usage

1. **Set Password Length**: Use the number input to specify password length (8-122 characters)

2. **Choose Character Types**: Select desired character types:

   - Lowercase letters (a-z)
   - Uppercase letters (A-Z)
   - Numbers (0-9)
   - Special characters (!@#$%^&\*()\_+-=[]{};:'\",.<>?~/)

3. **Generate Password**: Click "Generate Password" to create a new password

4. **Password Strength**: View the strength indicator to assess password security

5. **Save or Copy**: Use the buttons to save the password or copy it to clipboard

## Architecture

The project follows a modular architecture with separate components:

- **PasswordGenerator**: Handles password creation logic
- **PasswordStrength**: Evaluates password security
- **PasswordList**: Manages saved passwords
- **ThemeToggle**: Controls dark/light mode

## Security Features

- Cryptographically secure random number generation
- Minimum length enforcement (12 characters)
- Multiple character type requirements
- Pattern detection for common weak password patterns
- Real-time strength evaluation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Acknowledgments

- Password strength criteria based on NIST guidelines
- Icons provided by native emoji icons
- Color scheme inspired by Accessibility standards

## Contact

Raigo Hoim - vikationu@gmail.com

Project Link: [https://github.com/raigoh/Password-generator.git](https://github.com/raigoh/Password-generator.git)
