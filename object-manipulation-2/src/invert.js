/* exported invert */
function invert(source) {
  var newObject = {};
  for (var i in source) {
    newObject[source[i]] = i;
  }
  return newObject;
}
