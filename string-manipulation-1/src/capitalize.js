/* exported capitalize */
function capitalize(word) {
  var lwrCse = word.toLowerCase();
  return word[0].toUpperCase() + lwrCse.slice(1);
}
