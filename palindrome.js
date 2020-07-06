const reverseString = (stringToReverse) => stringToReverse
    .split('')
    .reverse('')
    .join('');

module.exports = (testString) => {
  const cleanedTestString = testString.replace(/[^a-zA-Z]/g, '');
  return reverseString(cleanedTestString) === cleanedTestString;
}
