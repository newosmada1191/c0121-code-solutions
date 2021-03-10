var $span = document.querySelectorAll('.text')
var i = 0;

window.addEventListener('keypress', function (event) {
  console.log(event.key);
  if (event.key === $span[i].textContent) {
    $span[i].className = 'text correct';
    i++;
  } else if (event.key !== $span[i].textContent) {
    $span[i].className = 'text incorrect';
  }

  if ($span[i].className === 'text space' && event.key === ' ') {
    console.log('test');
    $span[i].className = 'text space correct';
    i++
  }
})
