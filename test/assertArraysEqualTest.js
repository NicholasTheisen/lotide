const assertArrayEqual = require('../assertArraysEqual');

assertArrayEqual([1, 2, 3], [1, 2, 3]);
assertArrayEqual([1, 2, 3], [3, 2, 1]);
assertArrayEqual([], []);
assertArrayEqual([1], [1]);
assertArrayEqual([1], []);