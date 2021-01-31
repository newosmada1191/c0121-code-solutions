/* exported getWords */
function getWords(string) {
  if (string.length === 0) {
    return [];
  } else {
    return string.split(' ');
  }
}
