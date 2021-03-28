/* exported lastChars */
function lastChars(length, string) {
  if (length > string.length) {
    return string;
  } else {
    const numIndex = string.length - length;
    const newString = string.slice(numIndex);
    return newString;
  }
}
