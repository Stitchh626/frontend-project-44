// src/games/prime.js

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) { // заменили i++ на i += 1
    if (num % i === 0) return false;
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const number = Math.floor(Math.random() * 100) + 1; // Генерируем случайное число от 1 до 100
  const question = number.toString();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return {
    question,
    correctAnswer,
  };
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export { gameDescription, getQuestionAndAnswer };
