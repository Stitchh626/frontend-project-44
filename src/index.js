import readLineSync from 'readline-sync';

const countOfRound = 3;

export default (task, startRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readLineSync.question('May i have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(task);

  for (let i = 0; i < countOfRound; i += 1) {
    const [question, isAnswer] = startRound();
    console.log(`Question: ${question}`);
    const userAnswer = readLineSync.question('Your answer: ');
    if (userAnswer !== isAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${isAnswer}`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct ');
  }

  console.log(`Congratulations, ${userName}!`);
};
