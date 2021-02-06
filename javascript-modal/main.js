var $popup = document.querySelector('.pop-up-background');
var $open = document.querySelector('#open');
var $close = document.querySelector('#close');

function openClose(event) {
  if ($popup.className === 'pop-up-background') {
    $popup.className = 'pop-up-background hidden';
  } else {
    $popup.className = 'pop-up-background';
  }
}

$open.addEventListener('click', openClose);
$close.addEventListener('click', openClose);
