/* exported isPalindromic */
function isPalindromic(string) {
  const newString = string.split(' ').join('');
  let reverseString = '';
  for (let i = newString.length - 1; i >= 0; i--) {
    reverseString += newString[i];
  }
  if (newString === reverseString) {
    return true;
  } else {
    return false;
  }
}
