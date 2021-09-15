import promptly from 'promptly';

const isEven = (number) => number % 2 === 0;
const randomNumber = () => Math.floor(Math.random() * 101);

export default async () => {
  const number = randomNumber();
  const check = isEven(number);
  const correctAnswer = check ? 'yes' : 'no';
  const userAnswer = await promptly.prompt(`Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ${number}\nYour answer:`);
  if (correctAnswer === userAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  }
};
