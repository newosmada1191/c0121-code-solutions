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
    var dataView = event.target.getAttribute('data-view');
    for (var index = 0; index < viewElements.length; index++) {
      if (viewElements[index].getAttribute('data-view') === dataView) {
        viewElements[index].className = 'view';
      } else {
        viewElements[index].className = 'view hidden';
      }
    }
  }
});
