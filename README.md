# Midterm Study Repository

This repository provides starter code and problems for the midterm technical interview portion. It includes five main questions, each with an extra credit option and a rubric. 

## Mideterm Details 

1. You must schedule time to take the interview in person or virtually via Microsoft Teams.
1. Questions 1-4 will be chosen at random at the start of the interview, or you may elect to select the hardest question #5.
1. You will accept an assignment repository with the question and open it in a Codespace.
1. You will work with your instructor through the problem by sharing your codepase with the Liveshare extension. We will walk through how to set it up.
1. You will have 45 minutes to complete the assessment. Incomplete assessments will be graded as is.
1. Your grade will be posted on Brightspace within 24 hours.
1. Review the [tips](#tips-for-a-passing-grade) to understand how to earn a passing grade.

## Instructions for Use

1. **Open `index.html` in your browser (Right click on file, open with Liveserver).**  
   This page displays links to each of the questions.

2. **Click on a Question:**  
   Click on any of the links to view the corresponding starter code.  
   Each HTML file contains comments (indicated by `// TODO:`) that outline what you need to do.

3. **Complete the Tasks:**  
   Modify the code in the provided files to complete the tasks.  
   You are encouraged to attempt the extra credit task for additional points. These tasks were not covered in class and you might need to research them to attempt it. You can open it again in Liveserver to check your work.

---
## General Criteria (Per Question)
- **Code Functionality (15 pts):**  
  Correct use of variables, conditions, and output methods (`console.log()`, `alert()`, etc...); code runs without errors.
- **Follows Instructions (10 pts):**  
  Fulfills the given task requirements precisely.

## Question 1: Print a Personalized Greeting
- **Folder:** `q1`
- **Task:**
  - Create a variable named `username` and assign it a string value (e.g., `"Student"`).
  - Use `console.log()` to print the greeting `"Hello, Student!"`.
  - Use `alert()` to display the same message.
  - If the username is `"Student"`, also log `"Welcome back!"` to the console.
- **Extra Credit:**  
  Collect the user's name and display a personalized greeting based on the input with `prompt()`.

### Rubric:
- **Standard Task (25 pts):**
  - 15 pts: Correct declaration of `username`, proper use of `console.log()` and `alert()`, and conditional check.
  - 10 pts: All instructions are followed exactly.
- **Extra Credit (10 pts):**  
  Correctly implements user input via `prompt()` and adjusts the greeting accordingly.

---

## Question 2: Display and Style a Paragraph
- **Folder:** `q2`
- **Task:**
  - Add a `<p>` element with the text `"This is an important message."`
  - Apply a class named `important` to the paragraph.
  - In `style.css`, write CSS rules for the `important` class to style the text in red and bold.
- **Extra Credit:**  
  Add a hover effect so that when the mouse hovers over the paragraph, the text color changes.

### Rubric:
- **Standard Task (25 pts):**
  - 15 pts: Correct HTML structure with a `<p>` element and proper CSS styling for the `important` class.
  - 10 pts: External CSS is correctly linked and applied.
- **Extra Credit (10 pts):**  
  The hover effect is implemented using CSS, changing the text color on mouseover.

---

## Question 3: Pass or Fail Checker
- **Folder:** `q3`
- **Task:**
  - Create a variable called `score` and assign it a number.
  - Use an `if` statement: if the score is 70 or above, log `"Passing"`; otherwise, log `"Failing"`.
- **Extra Credit:**  
  Use `prompt()` to allow the user to enter a score, then evaluate and display the pass/fail status based on the input.

### Rubric:
- **Standard Task (25 pts):**
  - 15 pts: Correctly declares `score` and implements conditional logic to check the score.
  - 10 pts: Task instructions are fully met.
- **Extra Credit (10 pts):**  
  The solution uses `prompt()` to gather user input and dynamically evaluates the score.

---

## Question 4: Favorite Color Response
- **File:** `q4`
- **Task:**
  - Create a variable called `favColor` and assign it a string value.
  - If `favColor` is `"red"`, log `"That's a great choice!"`; otherwise, log `"Interesting pick!"`.
- **Extra Credit:**  
  Allow the user to input their favorite color using `prompt()` and display a custom message based on the input.

### Rubric:
- **Standard Task (25 pts):**
  - 15 pts: Correct variable declaration and conditional logic.
  - 10 pts: Task instructions are fully met.
- **Extra Credit (10 pts):**  
  Uses `prompt()` for user input and displays the appropriate message based on the entered color.

---

## Question 5 (Elective Question): Counter Increment/Decrement
_In lieu of recieving a random question during the interview, you may elect to select this question. Note that you can score 5 extra points for electing this harder question, and that extra credit is 15 points, meaning you can score a 70/50 (140%)._

- **File:** `q5`
- **Task:**
  - Add two `<button>` elements labeled `"Increment"` and `"Decrement"`.
  - Add a `<p>` element to display a numeric counter, initially set to `0`.
  - Use JavaScript to increment the counter when the "Increment" button is clicked and decrement when the "Decrement" button is clicked.
- **Extra Credit (15 pts):**
  - Prevent the counter from going below zero, and display a warning message in the paragraph if a decrement would cause it to drop below zero.
  
### Rubric:
- **Standard Task (30 pts):**
  - 15 pts: Correct HTML  and JavaScript logic for incrementing and decrementing the counter.
  - 15 pts: The displayed counter updates accurately with each button click.
- **Extra Credit (15 pts):**
  - Correctly prevents the counter from going negative and displays a warning message when the counter is at zero.
_________
## Tips for a passing grade

### Before the interview: 
- Review the topics covered in class, including variables, conditionals, DOM manipulation (if applicable), and simple styling. Solid basics are very helpful in problem solving.
- Fork and work through the study repo problems and extra credit challenges. 

### During the interview: 
- When you’re explaining your code during the interview, explain what you’re doing and why. Do this even if you’re stuck, discussing your thought process shows that you are trying to solve the problem.

- If any part of a problem is unclear, don’t hesitate to ask for clarification. Interviewers appreciate when you ensure you fully understand the task before diving in.
- Take your time, breathe, and work through each step logically.
- Leverage the browser it to check your syntax or verify how certain functions work. Just be sure to rely on your knowledge first and use external resources as a backup.
- Practice, Practice, Practice: The more you code and simulate the interview environment, the more natural it will feel. Practice with classmates, or record yourself.


Good luck!