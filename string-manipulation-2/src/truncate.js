/* exported truncate */
function truncate(length, string) {
  var newString = '';
  if (string.length !== 0) {
    if (string.length < length) {
      newString = string + '...';
    } else {
      for (let i = 0; i < length; i++) {
        newString += string[i];
      }
      newString += '...';
    }
  } else {
    newString += '...';
  }
  return newString;
}
