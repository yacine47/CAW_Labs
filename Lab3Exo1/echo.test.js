// echo.test.js
const exf = require('./echo');

describe("exf function", () => {
  test('Display result exf function', () => {
    expect(exf("echo", 5)).toBe(undefined); 
  });
});
