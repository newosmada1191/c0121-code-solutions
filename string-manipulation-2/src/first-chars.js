/* exported firstChars */
function firstChars(length, string) {
  let newString = '';
  for (let i = 0; i < length; i++) {
    if (length > string.length) {
      return string;
    } else {
      newString += string[i];
    }
  }
  return newString;
}
