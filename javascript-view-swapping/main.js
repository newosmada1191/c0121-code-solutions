var tabContainer = document.querySelector('.tab-container');

var tabElements = document.querySelectorAll('.tab');

var viewElements = document.querySelectorAll('.view');

tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < tabElements.length; i++) {
      if (tabElements[i] === event.target) {
        tabElements[i].className = 'tab active';
      } else {
        tabElements[i].className = 'tab';
      }
    }
    // var dataView = event.target.getAttribute('data-view');
    // console.log(dataView);
    // I could not figure this out. I tried many different if conditionals.
    // I know I can just put the className modifiers in the for loop above
    // this. I'm just leaving this here so you can tell me why I am big suck.
    // I got it to work though!
    for (var index = 0; index < viewElements.length; index++) {
      if (tabElements[index] === event.target) {
        viewElements[index].className = 'view';
      } else {
        viewElements[index].className = 'view hidden';
      }
    }
  }
});
