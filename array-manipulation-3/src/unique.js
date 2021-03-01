/* exported unique */
function unique(array) {
  var uniqueArray = [];
  for (var i = 0; i < array.length; i++) {
    if (uniqueArray.indexOf(array[i]) === -1) {
      uniqueArray.push(array[i])
    }
  }
  return uniqueArray;
}
