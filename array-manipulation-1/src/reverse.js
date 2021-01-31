/* exported reverse */
function reverse(array) {
  // create new array
  // creat a for loop
  // set i to the length of the array, i--
  // push the value of newarr.push(array[i]) into new array
  // return newArr
  var newArr = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArr.push(array[i]);
  }
  return newArr;
}
