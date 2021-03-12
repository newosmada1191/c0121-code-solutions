const $span = document.querySelectorAll('span');
var i = 0;

window.addEventListener('keydown', function (event) {
  if ((event.code === 'Space') && ($span[i].getAttribute('class') === 'space')) {
    $span[i].className = 'space correct';
    i++;
  }
  if (event.key === $span[i].textContent) {
    $span[i].setAttribute('class', 'correct');
    i++;
  } else if (event.key !== $span[i].textContent) {
    $span[i].setAttribute('class', 'incorrect');
  }
  if (i > 29) {
    for (var k = 0; k < $span.length; k++) {
      $span[k].setAttribute('class', '');
    }
    i = 0;
  }
});
