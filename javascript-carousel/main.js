var $rightArrow = document.querySelector('#right-arrow-icon');
var $leftArrow = document.querySelector('#left-arrow-icon');
var $img = document.querySelector('#image-source');
var $circleOne = document.querySelector('#circle-1');
var $circleTwo = document.querySelector('#circle-2');
var $circleThree = document.querySelector('#circle-3');
var $circleFour = document.querySelector('#circle-4');
var $circleFive = document.querySelector('#circle-5');
const imgArray = [
  'images/001.png',
  'images/004.png',
  'images/007.png',
  'images/025.png',
  'images/039.png'
];
let currentImg = '';

$rightArrow.addEventListener('click', () => {
  currentImg = $img.getAttribute('src');
  rightClick(currentImg);
});

function rightClick(currentImg) {
  const currentImgIndex = imgArray.indexOf(currentImg);
  let nextImgIndex;
  if (currentImgIndex === imgArray.length - 1) {
    nextImgIndex = 0;
  } else {
    nextImgIndex = currentImgIndex + 1;
  }
  $img.setAttribute('src', imgArray[nextImgIndex]);
  const $currentCircle = document.querySelector(`#circle-${currentImgIndex + 1}`);
  const $nextCircle = document.querySelector(`#circle-${nextImgIndex + 1}`);
  $currentCircle.classList.remove('fas');
  $currentCircle.classList.add('far');
  $nextCircle.classList.remove('far');
  $nextCircle.classList.add('fas');
}

var intervalID = setInterval(() => {
  const currentImg = $img.getAttribute('src');
  rightClick(currentImg);
}, 3000);

$leftArrow.addEventListener('click', () => {
  currentImg = $img.getAttribute('src');
  rightClick(currentImg);
});

$circleOne.addEventListener('click', function (event) {
  $img.setAttribute('src', 'images/001.png');
  $circleOne.setAttribute('class', 'fas fa-circle');
  $circleTwo.setAttribute('class', 'far fa-circle');
  $circleThree.setAttribute('class', 'far fa-circle');
  $circleFour.setAttribute('class', 'far fa-circle');
  $circleFive.setAttribute('class', 'far fa-circle');
  clearInterval(intervalID);
  intervalID = setInterval(rightClick, 3000);
});

$circleTwo.addEventListener('click', function (event) {
  $img.setAttribute('src', 'images/004.png');
  $circleOne.setAttribute('class', 'far fa-circle');
  $circleTwo.setAttribute('class', 'fas fa-circle');
  $circleThree.setAttribute('class', 'far fa-circle');
  $circleFour.setAttribute('class', 'far fa-circle');
  $circleFive.setAttribute('class', 'far fa-circle');
  clearInterval(intervalID);
  intervalID = setInterval(rightClick, 3000);
});

$circleThree.addEventListener('click', function (event) {
  $img.setAttribute('src', 'images/007.png');
  $circleOne.setAttribute('class', 'far fa-circle');
  $circleTwo.setAttribute('class', 'far fa-circle');
  $circleThree.setAttribute('class', 'fas fa-circle');
  $circleFour.setAttribute('class', 'far fa-circle');
  $circleFive.setAttribute('class', 'far fa-circle');
  clearInterval(intervalID);
  intervalID = setInterval(rightClick, 3000);
});

$circleFour.addEventListener('click', function (event) {
  $img.setAttribute('src', 'images/025.png');
  $circleOne.setAttribute('class', 'far fa-circle');
  $circleTwo.setAttribute('class', 'far fa-circle');
  $circleThree.setAttribute('class', 'far fa-circle');
  $circleFour.setAttribute('class', 'fas fa-circle');
  $circleFive.setAttribute('class', 'far fa-circle');
  clearInterval(intervalID);
  intervalID = setInterval(rightClick, 3000);
});

$circleFive.addEventListener('click', function (event) {
  $img.setAttribute('src', 'images/039.png');
  $circleOne.setAttribute('class', 'far fa-circle');
  $circleTwo.setAttribute('class', 'far fa-circle');
  $circleThree.setAttribute('class', 'far fa-circle');
  $circleFour.setAttribute('class', 'far fa-circle');
  $circleFive.setAttribute('class', 'fas fa-circle');
  clearInterval(intervalID);
  intervalID = setInterval(rightClick, 3000);
});
