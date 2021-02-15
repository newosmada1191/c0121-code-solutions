/* exported chunk */
function chunk(array, size) {
  var chunkArray = [];
  for (var i = 0; i < array.length; i += size) {
    var value = array.slice(i, i + size);
    chunkArray.push(value);
  }
  return chunkArray;
}
