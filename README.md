# Java POO Quiz Application

## Overview
The **Java POO Quiz Application** is a dynamic and visually appealing web application designed to test your knowledge of Java's Object-Oriented Programming (OOP) concepts. The quiz features engaging animations, a responsive design, and intuitive interactions.

## Features
- **Dynamic Background**: Animated gradient background enhances visual appeal.
- **Interactive Quiz**: Immediate feedback with correct and incorrect answers highlighted in green and red.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Restart Option**: Restart the quiz at any time.

## Technologies Used
- **HTML**: For structuring the web page.
- **CSS**: For styling and animations.
- **JavaScript**: For quiz logic and dynamic interactions.

## Project Structure
```
project-folder/
├── index.html        # Main HTML file
├── style.css         # Contains styles and animations
├── script.js         # JavaScript logic for quiz functionality
└── README.md         # Project documentation
```

## How to Run
1. Clone or download the project to your local machine.
2. Open the `index.html` file in any modern web browser.

## Usage Instructions
1. The title screen welcomes users with a description of the quiz.
2. Click the "Start Quiz" button to begin.
3. Read the question and click on one of the available answers.
4. Correct answers are highlighted in **green**, while incorrect ones are shown in **red**.
5. At the end of the quiz, your score will be displayed.
6. Use the "Restart Quiz" button to take the quiz again.

## Customization
To modify the questions or answers:
1. Open the `script.js` file.
2. Locate the `quizData` array.
3. Update the `question`, `answers`, and `correct` index as needed.

Example:
```javascript
const quizData = [
    {
        question: "What is encapsulation in Java?",
        answers: ["Hiding implementation details", "Inheritance", "Polymorphism", "Abstraction"],
        correct: 0
    },
    // Add or modify questions here
];
```

## Contributing
Feel free to fork this repository and submit pull requests. Suggestions for improvements and additional features are always welcome!

## License
This project is licensed under the MIT License. You are free to use, modify, and distribute it as per the license terms.

## Acknowledgments
- Background gradient animation inspired by modern UI/UX trends.
- Built with love for Java programming enthusiasts!

