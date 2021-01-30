/* exported isVowel */
function isVowel(character) {
  var v = character.toUpperCase();
  if (v === 'A' || v === 'I' || v === 'O' || v === 'U' || v === 'E') {
    return true;
  }
  return false;
}
