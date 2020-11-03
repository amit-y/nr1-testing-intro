const number = require('./number');

describe('in number module', () => {
  test('dollarFormatted fn to return correctly formatted', () => {
    expect(number.dollarFormatted(9.99)).toBe('$9.99');
  });
});
