/* exported difference */
function difference (first, second) {
  return [
    ...first.filter(x => !second.includes(x)),
    ...second.filter(x => !first.includes(x))
  ];
}
