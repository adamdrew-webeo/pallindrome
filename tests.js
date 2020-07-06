const expect = require('chai').expect;
const Palindrome = require('./palindrome')

describe('Palindrome', () => {
  it('should return true when string is palindrome', () => {
    const result = Palindrome('racecar');

    expect(result).to.be.true;
  });

  it('should return false when string is not palindrome', () => {
    const result = Palindrome('cactus');

    expect(result).to.be.false;
  });

  it('should ignore punctuation and numbers', () => {
    const result = Palindrome('racecar!.,/>?1234567890');
    expect(result).to.be.true;
  });
})
