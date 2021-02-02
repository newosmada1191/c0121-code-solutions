var one = document.querySelector('.dark-container');
var two = document.querySelector('.dark');

function clicks(event) {
  var onOff;
  if (one.className === 'dark-container') {
    onOff = 'light';
  } else if (one.className === 'light-container') {
    onOff = 'dark';
  }
  one.className = onOff + '-container';
  two.className = onOff;
}

two.addEventListener('click', clicks);
