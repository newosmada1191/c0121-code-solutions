/* exported flatten */
function flatten(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    var arrayValue = array[i];
    if (!Array.isArray(arrayValue)) {
      newArray.push(arrayValue);
    } else {
    for (var j = 0; j < arrayValue.length; j++) {
      newArray.push(arrayValue[j]);
    }
    }
  }
  return newArray;
}
