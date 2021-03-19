/* exported capitalizeWords */
function capitalizeWords(word) {
  var newString = '';
  word = word.toLowerCase();
  if (word === 'javascript') {
    return 'JavaScript';
  }
  newString = word[0].toUpperCase();
  newString += word.slice(1);
  return newString;
}
