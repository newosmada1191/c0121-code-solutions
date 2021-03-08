/* exported zip */
function zip(first, second) {
  var newArray = [];
  var range = Math.min(first.length, second.length);
  for (var i = 0; i < range; i++) {
    var innerArray = [];
    innerArray.push(first[i], second[i])
    newArray.push(innerArray);
  }
  return newArray;
}
