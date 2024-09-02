import { getRandomNumber } from '../utils.js';
import playGame from '../index.js';

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const generateRound = () => {
  const randomNum1 = getRandomNumber(1, 100);
  const randomNum2 = getRandomNumber(1, 100);
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${randomNum1} ${randomOperator} ${randomNum2}`;
  const correctAnswer = String(calculate(randomNum1, randomNum2, randomOperator));

  return [question, correctAnswer];
};

export default () => playGame('What is the result of the expression?', generateRound);