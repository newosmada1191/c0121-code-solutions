const $span = document.querySelectorAll('span');
var $prompt = document.querySelector('.prompt');
var $okay = document.querySelector('.okay');
var i = 0;

window.addEventListener('keydown', function (event) {
  if ((event.code === 'Space') && ($span[i].getAttribute('class') === 'space')) {
    $span[i].setAttribute('class', 'space correct');
    i++;
  }
  if (event.key === $span[i].textContent) {
    $span[i].setAttribute('class', 'correct');
    i++;
  } else if ((event.key !== $span[i].textContent) && ($span[i].getAtttribute('class') !== 'space')) {
    $span[i].setAttribute('class', 'incorrect');
  }
  if (i > 29) {
    $prompt.setAttribute('class', 'prompt');
  }
});

$okay.addEventListener('click', function (event) {
  for (var k = 0; k < $span.length; k++) {
    if ($span[k].getAttribute('class') === 'space correct') {
      $span[k].setAttribute('class', 'space');
    } else if ($span[k].getAttribute('class') !== 'space correct') {
      $span[k].setAttribute('class', '');
    }
  }
  i = 0;
  $prompt.setAttribute('class', 'prompt hidden');
});
