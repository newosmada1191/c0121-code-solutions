/* exported difference */
function difference(first, second) {
  const newArray = [];
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      newArray.push(first[i]);
    }
  }
  for (let j = 0; j < second.length; j++) {
    if (second[j] !== first[j]) {
      newArray.push(second[j]);
    }
  }
  return newArray;
}
