/* exported pick */
function pick(source, keys) {
  var newObject = {};
  for (var i in source) {
    if (source[i] !== undefined && keys.includes(i)) {
      newObject[i] = source[i];
    }
  }
  return newObject;
}
