/* exported initial */
function initial(array) {
  var newArr = [];
  // create a for loop
  // loop will cycle through the array array.length - 1
  // push new values into newArr
  // return newArr
  for (var i = 0; i < array.length - 1; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
