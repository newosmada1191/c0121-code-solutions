/* exported difference */
function difference (first, second) {
  var newArray = [];
  var length = Math.max(first.length, second.length);
  for (var i = 0; i < length; i++) {
    if (first[i] !== second[i]) {
      newArray.push(first[i]);
      console.log(first[i])
    }
  }
  for (var j = 0; j < length; j++) {
    if (second[j] !== first[j]) {
      newArray.push(second[j]);
      console.log(second[j])
    }
  }
  return newArray;
}
