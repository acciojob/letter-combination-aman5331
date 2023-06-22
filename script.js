function letterCombinations(input_digit) {
  //Complete the function
	if (input_digit.length === 0) {
    return [];
  }

  const mappings = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };

  const combinations = [];

  function generateCombinations(currentCombination, index) {
    if (index === input_digit.length) {
      combinations.push(currentCombination);
      return;
    }

    const input_digit = input_digit[index];
    const letters = mappings[input_digit];

    for (let i = 0; i < letters.length; i++) {
      generateCombinations(currentCombination + letters[i], index + 1);
    }
  }

  generateCombinations('', 0);

  return combinations.sort();
}

module.exports = letterCombinations;
