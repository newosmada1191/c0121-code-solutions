/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var theArray = [];
  for (var i = 0; i < words.length; i++) {
    theArray[i] = words[i] + suffix;
  }
  return theArray;
}
