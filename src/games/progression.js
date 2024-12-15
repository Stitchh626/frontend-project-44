// src/games/progression.js

const generateProgression = () => {
  const length = Math.floor(Math.random() * (10 - 5)) + 5; // Progression length
  const start = Math.floor(Math.random() * 50); // Progression even number
  const step = Math.floor(Math.random() * 10) + 1; // Progression step

  const progression = [];
  for (let i = 0; i < length; i += 1) { // заменили i++ на i += 1
    progression.push(start + i * step);
  }

  return progression;
};

const getQuestionAndAnswer = () => {
  const progression = generateProgression();
  const hiddenIndex = Math.floor(Math.random() * progression.length);
  const correctAnswer = progression[hiddenIndex];

  const question = progression
    .map((num, index) => (index === hiddenIndex ? '..' : num))
    .join(' ');

  return {
    question,
    correctAnswer: correctAnswer.toString(),
  };
};

const gameDescription = 'What number is missing in the progression?';

export { gameDescription, getQuestionAndAnswer };
