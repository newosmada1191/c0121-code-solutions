/* exported capitalizeWords */
function capitalizeWords(string) {
  const lwrString = string.toLowerCase();
  const newString = lwrString.split(' ');
  for (let i = 0; i < newString.length; i++) {
    newString[i] = newString[i].charAt(0).toUpperCase() +
      newString[i].substring(1, newString[i].length);
  }
  return newString.join(' ');
}
