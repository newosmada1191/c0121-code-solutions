/* exported firstChars */
function firstChars(length, string) {
  let newString = '';
  if (length > string.length) {
    return string;
  }
  for (let i = 0; i < length; i++) {
    newString += string[i];
  }
  return newString;
}
