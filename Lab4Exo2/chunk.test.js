




const chunk = require('./chunk');

describe("concatenation function", () => {
  test('Display result of concatenation function', () => {
    expect(chunk([0,1,2,3,5,9],2)).toEqual([ [ 0, 1 ], [ 2, 3 ], [ 5, 9 ] ]); 
  });
});