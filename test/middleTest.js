const middle = require('../middle');
const assertArrayEqual = require('../assertArraysEqual');

// Test Cases
assertArrayEqual(middle([1, 2, 3]), [2]);
assertArrayEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArrayEqual(middle([1]), []);
assertArrayEqual(middle([1, 2]), []);
