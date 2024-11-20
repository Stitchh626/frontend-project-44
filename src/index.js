import readlineSync from 'readline-sync';
import { greetUser } from './cli.js';  // Import greetUser from cli.js

const roundsCount = 3;

const runGame = (gameDescription, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = greetUser(); // Use greetUser for greets
  console.log(gameDescription);

  for (let round = 0; round < roundsCount; round++) {
    const { question, correctAnswer } = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGame;
