const readline = require('readline');

class StringCalculator {
  constructor() {}
    add(numbers) {
    if (!numbers) {
      return 0;
    }

    let delimiter = ",";
    if (numbers.startsWith("//")) {
      const delimiterEndIndex = numbers.indexOf("\n");
      delimiter = numbers.substring(2, delimiterEndIndex);
      numbers = numbers.substring(delimiterEndIndex + 1);
    }

    numbers = numbers.replace(/\n/g, delimiter);
    const nums = numbers.split(delimiter).map(Number);
    this.checkNegativeNumbers(nums);
    return nums.reduce((sum, num) => sum + num, 0);
  }

  checkNegativeNumbers(numbers) {
    const negativeNumbers = numbers.filter((num) => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`Negatives not allowed: ${negativeNumbers.join(", ")}`);
    }
  }
}

// Create an instance of StringCalculator
const calculator = new StringCalculator();

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Prompt the user for input
function askUserInput() {
  rl.question('Enter a number string: ', (numberString) => {
    try {
      // Call the add method with user-provided input
      const result = calculator.add(numberString);
      console.log('Result:', result);
    } catch (error) {
      console.error('Error:', error.message);
    }

    // Ask for input again
    askUserInput();
  });
}

// Start asking for user input
askUserInput();
