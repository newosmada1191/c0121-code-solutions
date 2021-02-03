var $whiteBg = document.querySelector('.white-background');
var $hidden = document.querySelector('.hidden');
var $openModal = document.querySelector('.open-modal');
var $decline = document.querySelector('.decline');

function clicks(event) {
  var firstVar;
  var secondVar;
  var thirdVar;
  if ($whiteBg.className === 'white-background') {
    firstVar = 'shade-background';
  }
  if ($hidden.className === 'hidden') {
    secondVar = 'pop-up';
  }
  if ($openModal.className === 'open-modal') {
    thirdVar = 'disabled-modal';
  }
  $whiteBg.className = firstVar;
  $hidden.className = secondVar;
  $openModal.className = thirdVar;
}

function clicksTwo(event) {
  $whiteBg.className = 'white-background';
  $hidden.className = 'hidden';
  $openModal.className = 'open-modal';
}

$openModal.addEventListener('click', clicks);
$decline.addEventListener('click', clicksTwo);
