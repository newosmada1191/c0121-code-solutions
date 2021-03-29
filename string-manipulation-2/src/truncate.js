/* exported truncate */
function truncate(length, string) {
  let newString = '';
  const dotString = '...';
  if (string.length === 0) {
    newString += dotString;
  }
  if (string.length < length) {
    newString = string + dotString;
  } else {
    for (let i = 0; i < length; i++) {
      newString += string[i];
    }
    newString += dotString;
  }
  return newString;
}
