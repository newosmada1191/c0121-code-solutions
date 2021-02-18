var $rightArrow = document.querySelector('#right-arrow-icon');
var $leftArrow = document.querySelector('#left-arrow-icon');
var $img = document.querySelector('#image-source');
var $circleOne = document.querySelector('#circle-one');
var $circleTwo = document.querySelector('#circle-two');
var $circleThree = document.querySelector('#circle-three');
var $circleFour = document.querySelector('#circle-four');
var $circleFive = document.querySelector('#circle-five');

var intervalId = setInterval(rightClick, 5000);

$rightArrow.addEventListener('click', rightClick);

function rightClick(event) {
  if ($img.getAttribute('src') === 'images/001.png') {
    $img.setAttribute('src', 'images/004.png');
    $circleOne.setAttribute('class', 'far fa-circle');
    $circleTwo.setAttribute('class', 'fas fa-circle');
  } else if ($img.getAttribute('src') === 'images/004.png') {
    $img.setAttribute('src', 'images/007.png');
    $circleTwo.setAttribute('class', 'far fa-circle');
    $circleThree.setAttribute('class', 'fas fa-circle');
  } else if ($img.getAttribute('src') === 'images/007.png') {
    $img.setAttribute('src', 'images/025.png');
    $circleThree.setAttribute('class', 'far fa-circle');
    $circleFour.setAttribute('class', 'fas fa-circle');
  } else if ($img.getAttribute('src') === 'images/025.png') {
    $img.setAttribute('src', 'images/039.png');
    $circleFour.setAttribute('class', 'far fa-circle');
    $circleFive.setAttribute('class', 'fas fa-circle');
  } else if ($img.getAttribute('src') === 'images/039.png') {
    $img.setAttribute('src', 'images/001.png');
    $circleFive.setAttribute('class', 'far fa-circle');
    $circleOne.setAttribute('class', 'fas fa-circle');
  }
}

$leftArrow.addEventListener('click', leftClick);

function leftClick(event) {
  if ($img.getAttribute('src') === 'images/001.png') {
    $img.setAttribute('src', 'images/039.png');
    $circleOne.setAttribute('class', 'far fa-circle');
    $circleFive.setAttribute('class', 'fas fa-circle');
  } else if ($img.getAttribute('src') === 'images/004.png') {
    $img.setAttribute('src', 'images/001.png');
    $circleTwo.setAttribute('class', 'far fa-circle');
    $circleOne.setAttribute('class', 'fas fa-circle');
  } else if ($img.getAttribute('src') === 'images/007.png') {
    $img.setAttribute('src', 'images/004.png');
    $circleThree.setAttribute('class', 'far fa-circle');
    $circleTwo.setAttribute('class', 'fas fa-circle');
  } else if ($img.getAttribute('src') === 'images/025.png') {
    $img.setAttribute('src', 'images/007.png');
    $circleFour.setAttribute('class', 'far fa-circle');
    $circleThree.setAttribute('class', 'fas fa-circle');
  } else if ($img.getAttribute('src') === 'images/039.png') {
    $img.setAttribute('src', 'images/025.png');
    $circleFive.setAttribute('class', 'far fa-circle');
    $circleFour.setAttribute('class', 'fas fa-circle');
  } else if (event.target) {
    clearInterval(intervalId);
  }
}
