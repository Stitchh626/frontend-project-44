import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const roundsCount = 3;

const runGame = (gameDescription, getQuestionAndAnswer) => {
  const name = greetUser();
  console.log(gameDescription);

  for (let round = 0; round < roundsCount; round += 1) {
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
