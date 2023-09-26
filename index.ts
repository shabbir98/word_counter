#! /usr/bin/env node
import inquirer from 'inquirer';

function countWordsAndCharacters(input: string): {
  words: number;
  characters: number;
} {
  const words = input.split(/\s+/).filter((word) => word !== '').length;

  const characters = input.replace(/\s+/g, '').length;

  return { words, characters };
}

const questions = [
  {
    message: 'Enter a paragraph:',
    type: 'input',
    name: 'paragraph',
  },
];

let exitOrContinue = '';

do {
  await inquirer.prompt(questions).then((answers) => {
    const { words, characters } = countWordsAndCharacters(answers.paragraph);

    console.log(
      `Word count (without whitespace): ${words}\nCharacter count (without whitespace): ${characters}`
    );
  });

  const askAgain = await inquirer.prompt({
    message: 'Press "x" for exit or any key to continue:',
    type: 'input',
    name: 'x_or_y',
  });
  exitOrContinue = askAgain.x_or_y;

  console.clear();
} while (exitOrContinue !== 'x');
