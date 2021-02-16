/* exported defaults */
function defaults(target, source) {
  for (var i in source) {
    if (!(i in target)) {
      target[i] = source[i];
    }
  }
}
