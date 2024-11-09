


const mean = require('./notation');

describe("mean function", () => {
  test('Display result of mean function', () => {
    expect(mean([1,2,50,162])).toBe(53.75); 
  });
});