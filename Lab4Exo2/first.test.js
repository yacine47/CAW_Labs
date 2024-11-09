




const first = require('./first');

describe("first function", () => {
  test('Display result of first function', () => {
    expect(first([0,1,2,3,5,9,],3)).toEqual([0,1,2]); 
  });
});