const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};  

const countLetters = function(sentence) {
  const letterCount = {};

  for (const letter of sentence) {
    if (letter !== ' ') {
      letterCount[letter] = (letterCount[letter] || 0) + 1;
    }
  }

  return letterCount;
};

const result = countLetters("LHL");
console.log(result);
