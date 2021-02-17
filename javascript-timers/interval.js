var $h1 = document.querySelector('h1');
var count = 4;

var intervalID = setInterval(changeText, 1000);

function changeText() {
  count -= 1;
  $h1.textContent = count;
  if (count === 0) {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalID);
  }
}
