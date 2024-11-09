


const concatenation = require('./concatenation');

describe("concatenation function", () => {
  test('Display result of concatenation function', () => {
    expect(concatenation(["Red", "Green", "White", "Black"])).toBe("RedGreenWhiteBlack"); 
  });
});