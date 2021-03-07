/* exported union */
function union(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (newArray.indexOf(first[i]) === -1) {
      newArray.push(first[i])
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (newArray.indexOf(second[j]) === -1) {
      newArray.push(second[j])
    }
  }
  return newArray;
}
