import promptly from 'promptly';

const isEven = (number) => number % 2 === 0;
const randomNumber = () => Math.floor(Math.random() * 101);
const gameRound = 3;

export default async () => {
  for (let i = 1; i <= gameRound; i += 1) {
    const number = randomNumber();
    const check = isEven(number);
    const correctAnswer = check ? 'yes' : 'no';
    const userAnswer = await promptly.prompt(`Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ${number}\nYour answer:`);
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      if (i === gameRound) {
        console.log('Congratulations');
      }
    } else {
      console.error(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again`);
      break;
    }
  }
};
