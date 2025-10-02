#!/usr/bin/env node

import readline from "readline";
import chalk from "chalk";
import { readFileSync, writeFileSync, existsSync } from "fs";

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Define questions
const questions = [
  {
    type: "input",
    name: "name",
    message: chalk.green("What is your name?"),
  },
  {
    type: "input",
    name: "age",
    message: chalk.blue("How old are you?"),
    validate: (value) => {
      const num = parseInt(value);
      if (!isNaN(num) && num >= 0) {
        return true;
      } else {
        return chalk.red("Please enter a valid age (non-negative number).");
      }
    },
  },
  {
    type: "input",
    name: "city",
    message: chalk.cyan("Where do you live?"),
  },
  {
    type: "confirm",
    name: "agree",
    message: chalk.red("Do you agree to the terms & conditions?"),
    default: true,
  },
];

// Recursive function to ask questions
const askQuestion = (index = 0, answers = {}) => {
  // Base case: all questions answered
  if (index >= questions.length) {
    console.log(chalk.cyanBright("\nHere is your information:"));
    console.log(`Name: ${answers.name}`);
    console.log(`Age: ${answers.age}`);
    console.log(`City: ${answers.city}`);
    console.log(
      `Agreed: ${answers.agree ? chalk.green("Yes") : chalk.red("No")}`
    );

    // Initialize submissions array
    let submissions = [];

    // Try to load existing data
    if (existsSync("answers.json")) {
      try {
        const rawData = readFileSync("answers.json", "utf8");
        const parsed = JSON.parse(rawData);
        if (Array.isArray(parsed)) {
          submissions = parsed;
        } else {
          console.log(
            chalk.yellow("answers.json is not an array — starting fresh.")
          );
        }
      } catch (err) {
        console.log(
          chalk.red("Could not parse answers.json — starting fresh.")
        );
      }
    }

    // Add new submission (no timestamp)
    submissions.push(answers);

    // Save back to file (standard JSON array)
    writeFileSync("answers.json", JSON.stringify(submissions, null, 2));

    console.log(chalk.green("\nAnswers saved to answers.json"));

    rl.close();
    return;
  }

  // Get current question
  const question = questions[index];

  // Ask question
  rl.question(question.message + " ", (ans) => {
    if (question.type === "confirm") {
      const lowerAns = ans.trim().toLowerCase();
      if (lowerAns === "" && question.default !== undefined) {
        answers[question.name] = question.default;
      } else if (lowerAns === "y" || lowerAns === "yes") {
        answers[question.name] = true;
      } else if (lowerAns === "n" || lowerAns === "no") {
        answers[question.name] = false;
      } else {
        console.log(chalk.red("Please answer 'yes' or 'no'."));
        return askQuestion(index, answers); // Re-ask same question
      }
    } else {
      // Validate if needed
      if (question.validate) {
        const validation = question.validate(ans);
        if (validation !== true) {
          console.log(validation);
          return askQuestion(index, answers); // Re-ask
        }
      }
      answers[question.name] = ans;
    }

    // Move to next question
    askQuestion(index + 1, answers);
  });
};

// Start asking questions
console.log(chalk.bold.white.bgBlue(" Welcome to the User Info Form "));
askQuestion();
