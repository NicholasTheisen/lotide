const assert = require('chai').assert;
const tail = require('../tail');
const assertEqual = require('../assertEqual');


describe("#tail", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]).length, 2);
  });
  it("returns 'Lighthouse' for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs'])[0], 'Lighthouse'); 
  });
  
});