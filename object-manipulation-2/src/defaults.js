/* exported defaults */
function defaults(target, source) {
  for (var i in source) {
    target[i] = source[i];
  }
}
