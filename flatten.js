const eqArrays = function (arr1, arr2) {
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

const assertArrayEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const flatten = function(array) {
  const flattenedArray = [];

  for (let element of array) {
    if (Array.isArray(element)) {
      for (let nestedElement of element) {
        flattenedArray.push(nestedElement);
      }
    } else {
      flattenedArray.push(element);
    }
  }

  return flattenedArray;
};