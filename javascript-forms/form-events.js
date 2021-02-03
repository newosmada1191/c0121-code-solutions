var $name = document.forms.myform.elements.name;
var $email = document.querySelector('#user-email');
var $message = document.forms[0].elements[2];

function handleEvent(event) {
  console.log('focus event fired');
  console.log('event.target.name', event.target.name);
}

$name.addEventListener('focus', handleEvent);
$email.addEventListener('focus', handleEvent);
$message.addEventListener('focus', handleEvent);

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name', event.target.name);
}

$name.addEventListener('blur', handleBlur);
$email.addEventListener('blur', handleBlur);
$message.addEventListener('blur', handleBlur);

function handleInput(event) {
  console.log('value of', event.target.name + ':', event.target.value);
}

$name.addEventListener('input', handleInput);
$email.addEventListener('input', handleInput);
$message.addEventListener('input', handleInput);
