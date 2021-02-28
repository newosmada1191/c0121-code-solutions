/* exported zip */
function zip(first, second) {
  var newArray = [];
  if (first.length < second.length) {
    for (var i = 0; i < first.length; i++) {
      var innerArray = [];
      innerArray.push(first[i], second[i]);
      newArray.push(innerArray);
    }
  }
  if (first.length > second.length) {
    for (var j = 0; j < second.length; j++) {
      var innerArrayTwo = [];
      innerArrayTwo.push(first[j], second[j]);
      newArray.push(innerArrayTwo);
    }
  }
  if (first.length === second.length) {
    for (var k = 0; k < first.length; k++) {
      var innerArrayThree = [];
      innerArrayThree.push(first[k], second[k])
      newArray.push(innerArrayThree);
    }
  }
  return newArray;
}
