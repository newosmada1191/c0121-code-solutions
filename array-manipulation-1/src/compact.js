/* exported compact */
// create a function that reads an array
function compact(array) {
  // create a new array
  var newArr = [];
  // we need to loop through all array values
  for (var i = 0; i < array.length; i++) {
    // we need to push true values to new array
    if (Boolean(array[i]) === true) {
      newArr.push(array[i]);
    }
  }
  // we need to return newArr;
  return newArr;
}
