/* exported reverseWords */
function reverseWords(string) {
  const stringArray = string.split(' ');
  let newString = '';
  for (let i = 0; i < stringArray.length; i++) {
    let reverseString = '';
    for (let j = stringArray[i].length - 1; j >= 0; j--) {
      reverseString += stringArray[i][j];
    }
    newString += reverseString + ' ';
  }
  return newString.trim();
}
