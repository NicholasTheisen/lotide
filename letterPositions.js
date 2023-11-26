const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    if (char !== ' ') {
      if (!results[char]) {
        results[char] = [];
      }
      results[char].push(i);
    }
  }
  return results;
};

assertEqual(eqArrays(letterPositions("hello").e, [1]), true);
assertEqual(eqArrays(letterPositions("Good Day").a, [6]), true);
assertEqual(eqArrays(letterPositions("Nicholas").h, [0]), true);
assertEqual(eqArrays(letterPositions("Vancouver").o, [4]), true);
assertEqual(eqArrays(letterPositions("Canada").n, [1]), true);
