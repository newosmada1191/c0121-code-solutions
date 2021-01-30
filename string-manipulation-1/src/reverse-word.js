/* exported reverseWord */
function reverseWord(word) {
  var newVar = '';
  for (var i = word.length - 1; i >= 0; i--) {
    newVar = newVar + word[i];
  }
  return newVar;
}
