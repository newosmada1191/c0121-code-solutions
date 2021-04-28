/* exported isAnagram */
function isAnagram(firstString, secondString) {
  const newFirstString = firstString.split(' ').join('');
  const newSecondString = secondString.split(' ').join('');
  if (newFirstString.length !== newSecondString.length) {
    return false;
  }
  for (let i = 0; i < newFirstString.length; i++) {
    if (!newFirstString.includes(newSecondString[i])) {
      return false;
    }
  }
  return true;
}
