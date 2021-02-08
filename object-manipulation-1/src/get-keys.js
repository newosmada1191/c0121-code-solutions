/* exported getKeys */
function getKeys(object) {
  var newArr = [];
  for (var i in object) {
    newArr.push(i);
  }
  return newArr;
}
