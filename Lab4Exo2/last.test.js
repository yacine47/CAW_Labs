



const last = require('./last');

describe("last function", () => {
  test('Display result of last function', () => {
    expect(last([0,1,2,3,5,9,],4)).toEqual([ 2, 3, 5, 9 ]); 
  });
});