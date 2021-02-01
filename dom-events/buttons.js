// Click Me! event
function handleClick(event) {
  var $buttonClicked = 'button clicked';
  console.log('$buttonClicked', $buttonClicked);
  console.log('event:', event);
  console.log('event.target:', event.target);
}

var $clickButton = document.querySelector('.click-button');
$clickButton.addEventListener('click', handleClick);

// Hover Me! event
function handleMouseover(event) {
  var $buttonHovered = 'button hovered';
  console.log('$buttonHovered:', $buttonHovered);
  console.log('event:', event);
  console.log('event.target:', event.target);
}

var $hoverButton = document.querySelector('.hover-button');
$hoverButton.addEventListener('mouseover', handleMouseover);

// Double Click Me! event
function handleDoubleClick(event) {
  var dblMsg = 'button double-clicked';
  console.log('dblMsg:', dblMsg);
  console.log('event:', event);
  console.log('event.target:', event.target);
}

var doubleClick = document.querySelector('.double-click-button');
doubleClick.addEventListener('dblclick', handleDoubleClick);
