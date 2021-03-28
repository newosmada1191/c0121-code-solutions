/* exported numVowels */
function numVowels(string) {
  const strArray = [];
  const str = string.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
      strArray.push(str[i]);
    }
  }
  return strArray.length;
}
