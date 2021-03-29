/* exported numVowels */
function numVowels(string) {
  let counter = 0;
  const str = string.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
      counter++;
    }
  }
  return counter;
}
