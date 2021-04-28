const $rightArrow = document.querySelector('#right-arrow-icon');
const $leftArrow = document.querySelector('#left-arrow-icon');
const $img = document.querySelector('#image-source');
const $icons = document.querySelector('#icon-container');
const $circleOne = document.querySelector('#circle-one');
const $circleTwo = document.querySelector('#circle-two');
const $circleThree = document.querySelector('#circle-three');
const $circleFour = document.querySelector('#circle-four');
const $circleFive = document.querySelector('#circle-five');
const $iconChildren = $icons.children;
const imgArray = [
  'images/001.png',
  'images/004.png',
  'images/007.png',
  'images/025.png',
  'images/039.png'
];
const iconClass = [
  'far fa-circle',
  'fas fa-circle'
];

let intervalID = setInterval(rightClick, 3000);

$rightArrow.addEventListener('click', rightClick);

function rightClick(event) {
  if ($img.getAttribute('src') === imgArray[0]) {
    $img.setAttribute('src', imgArray[1]);
    $circleOne.setAttribute('class', iconClass[0]);
    $circleTwo.setAttribute('class', iconClass[1]);
  } else if ($img.getAttribute('src') === imgArray[1]) {
    $img.setAttribute('src', imgArray[2]);
    $circleTwo.setAttribute('class', iconClass[0]);
    $circleThree.setAttribute('class', iconClass[1]);
  } else if ($img.getAttribute('src') === imgArray[2]) {
    $img.setAttribute('src', imgArray[3]);
    $circleThree.setAttribute('class', iconClass[0]);
    $circleFour.setAttribute('class', iconClass[1]);
  } else if ($img.getAttribute('src') === imgArray[3]) {
    $img.setAttribute('src', imgArray[4]);
    $circleFour.setAttribute('class', iconClass[0]);
    $circleFive.setAttribute('class', iconClass[1]);
  } else if ($img.getAttribute('src') === imgArray[4]) {
    $img.setAttribute('src', imgArray[0]);
    $circleFive.setAttribute('class', iconClass[0]);
    $circleOne.setAttribute('class', iconClass[1]);
  }
  clearInterval(intervalID);
  intervalID = setInterval(rightClick, 3000);
}

$leftArrow.addEventListener('click', leftClick);

function leftClick(event) {
  if ($img.getAttribute('src') === imgArray[0]) {
    $img.setAttribute('src', imgArray[4]);
    $circleOne.setAttribute('class', iconClass[0]);
    $circleFive.setAttribute('class', iconClass[1]);
  } else if ($img.getAttribute('src') === imgArray[1]) {
    $img.setAttribute('src', imgArray[0]);
    $circleTwo.setAttribute('class', iconClass[0]);
    $circleOne.setAttribute('class', iconClass[1]);
  } else if ($img.getAttribute('src') === imgArray[2]) {
    $img.setAttribute('src', imgArray[1]);
    $circleThree.setAttribute('class', iconClass[0]);
    $circleTwo.setAttribute('class', iconClass[1]);
  } else if ($img.getAttribute('src') === imgArray[3]) {
    $img.setAttribute('src', imgArray[2]);
    $circleFour.setAttribute('class', iconClass[0]);
    $circleThree.setAttribute('class', iconClass[1]);
  } else if ($img.getAttribute('src') === imgArray[4]) {
    $img.setAttribute('src', imgArray[3]);
    $circleFive.setAttribute('class', iconClass[0]);
    $circleFour.setAttribute('class', iconClass[1]);
  }
  clearInterval(intervalID);
  intervalID = setInterval(rightClick, 3000);
}

$icons.addEventListener('click', function (event) {
  for (let i = 0; i < $iconChildren.length; i++) {
    if ($iconChildren[i] === event.target) {
      $iconChildren[i].setAttribute('class', iconClass[1]);
      $img.setAttribute('src', imgArray[i]);
    } else {
      $iconChildren[i].setAttribute('class', iconClass[0]);
    }
  }
  clearInterval(intervalID);
  intervalID = setInterval(rightClick, 3000);
});
