var count = 0;

var clickCount = document.querySelector('.click-count');
var hotButton = document.querySelector('.hot-button');

function clicks(event) {
  count += 1;
  var colour;
  if (count < 3) {
    colour = 'cold';
  } else if (count < 7) {
    colour = 'cool';
  } else if (count < 10) {
    colour = 'tepid';
  } else if (count < 13) {
    colour = 'warm';
  } else if (count < 16) {
    colour = 'hot';
  } else {
    colour = 'nuclear';
  }
  clickCount.textContent = 'Clicks: ' + count;
  hotButton.className = 'hot-button ' + colour;
}

hotButton.addEventListener('click', clicks);
