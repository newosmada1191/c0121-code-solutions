var $form = document.querySelector('#contact-form');

function handleSubmit(event) {
  var objValue = {};
  event.preventDefault();
  objValue.name = $form.elements.name.value;
  objValue.email = $form.elements.email.value;
  objValue.message = $form.elements.message.value;
  console.log(objValue);
  $form.reset();
}

$form.addEventListener('submit', handleSubmit);
