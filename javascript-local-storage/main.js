/* global uuid, todos */
// The querySelector method of the document object is being called with the
// argument string #todo-form which is being returned as the value of the
// variable #todoForm
var $todoForm = document.querySelector('#todo-form');

// The addEventListener method of the $todoForm object is being called with
// two arguments string 'submit' followed by a function definition with a
// parameter of event followed by an opening curly brace for the definition
// code block
$todoForm.addEventListener('submit', function (event) {
  // The preventDefault method of the event object is being called with
  // zero arguments
  event.preventDefault();
  // An object literal value is being assigned to the variable todo
  var todo = {
    // The v4 method of the uuid object is being called with zero arguments
    // which is being returned to the property todoId
    todoId: uuid.v4(),
    // The value method of the task object of the elements object of the
    // $todoForm which is being returned to the property task
    task: $todoForm.elements.task.value,
    // A boolean value of false is being assigned to the property isCompleted
    isCompleted: false
  // There is a closing curly brace for the object literal
  };
  // The push method of the todos object is being called with one argument
  // todo
  todos.push(todo);
  // The append method of the $todoList object is being called with one
  // one argument the function definition of renderTodo with one argument
  // todo
  $todoList.append(renderTodo(todo));
  // The reset method of the $todoForm object is being called with zero
  // arguments
  $todoForm.reset();
// There is a closing curly brace for the function definition codeblock
// followed by a  right parentheses for the function arguments
});

// The querySelector method of the document object is being called with one
// argument with a string '#todo-list' which is being returned to the value
// of the variable #todoList
var $todoList = document.querySelector('#todo-list');

// The addEventListener of the $todoList method is being called with two
// arguments, string 'change' followed by a function definition with the
// parameter event followed by an opening curly brace for the definition block
$todoList.addEventListener('change', function (event) {
  // The getAttribute method of the target object of the event object is being
  // called with one argument of the string 'id' which is being returned as
  // the value of the variable todoID
  var todoId = event.target.getAttribute('id');
  // a for loop is being called with the initialization 0 is being assigned to
  // the value of the variable i followed by the condition i < todos.length
  // followed by the iteration of i increased by 1 followed by an opening-
  // curly brace for the code block
  for (var i = 0; i < todos.length; i++) {
    // if conditional is being called that if the todoId method of the
    // todos at i object absolutely equals to todoID then execute
    // the following code block followed by an opening curly brace for the
    // code block
    if (todos[i].todoId === todoId) {
      // the isCompleted method of the todos at i object equals to the checked
      // method of the target object of the event object
      todos[i].isCompleted = event.target.checked;
      // break point
      break;
    // closing curly brace for the if conditional code block
    }
  // closing curly brace for the for loop code block
  }
// closing curly brace for the function code block and a closing parantheses
// for the addEventListeener call block
});

// a for loops is being called with the initialization 0 is being assigned to
// the value of the variable i followed by i is less than todos.length followed
// by the interation of i increased by 1 followed by an opening curly brace
// for the code block
for (var i = 0; i < todos.length; i++) {
  // function definition renderTodo is being called with the argument todos
  // at [i] which is being returned to the value of the variable $todo
  var $todo = renderTodo(todos[i]);
  // the appendChild method of the $todoList object is being called with the
  // argument $todo
  $todoList.appendChild($todo);
}

// the fucking definition renderTodoo is being called with one parameter todo
// followed by the opening curly brace for the code definition block
function renderTodo(todo) {

  /**
   * <li class="list-group-item">
   *   <div class="form-check d-flex">
   *     <input
   *       type="checkbox"
   *       id="{todo.todoId}"
   *       class="form-check-input">
   *     <label
   *       for="{todo.todoId}"
   *       class="form-check-label flex-grow-1 ml-2">
   *       {todo.task}
   *     </label>
   *   </div>
   * </li>
   */

  // The createElement method of the document object is being called with one argument
  // string li which is being returned as the value of the variable $todo
  var $todo = document.createElement('li');
  // The setAttribute method of the $todo object is being called with two
  // arguments, the string 'class' followed by the string 'list-group-item'
  $todo.setAttribute('class', 'list-group-item');

  // The createElement object of the document method is being called with one
  // argument, the string 'div'
  var $formCheck = document.createElement('div');
  // The setAttribute method of the $formCheck object is being called with
  // two arguments, string 'class' followed by the string 'form-check d-flex'
  $formCheck.setAttribute('class', 'form-check d-flex');

  // The createElement method of the document object is being called with one
  // argument, the string 'input'
  var $checkbox = document.createElement('input');
  // the method isCompleted of the todo object is being assigned to the checked
  // method of the $checkbox object
  $checkbox.checked = todo.isCompleted;
  // The setAttribute method of the $checkbox object is being called with two
  // arguments, string 'id' followed by the todoId method of the todo object
  $checkbox.setAttribute('id', todo.todoId);
  // The setAttribute method of the $checkbox object is being called with two
  // arguments, string 'type' followed by the string 'checkbox'
  $checkbox.setAttribute('type', 'checkbox');
  // The setAttribute method of the $checkbox object is being called with two
  // arguments, string 'class' followed by the string 'form-check-input'
  $checkbox.setAttribute('class', 'form-check-input');

  // The createElement method of the document object is being called with one
  // string 'label' and the return is being assigned to the value of the
  // variable $lable
  var $label = document.createElement('label');
  // The setAttribute method of the $label object is being called with two
  // arguments, string 'for' followed by the todoId method of the todo object
  $label.setAttribute('for', todo.todoId);
  // The setAttribute method of the $label object is being called with two
  // arguments, string 'class' followed by the string
  // 'form-check-label flex-grow-1 ml-2'
  $label.setAttribute('class', 'form-check-label flex-grow-1 ml-2');
  // The method task of the todo object return is being assigned to the
  // value of the method textContent of the $label object
  $label.textContent = todo.task;

  // The append method of the $todo object is being called with one argument
  // the value of the variable $formCheck
  $todo.append($formCheck);
  // The append method of the $formCheck object is being called with two
  // arguments, the value of the variable $checkbox followed by the value
  // of the variable $lablel
  $formCheck.append($checkbox, $label);

  // the value of the $todo object is being returned
  return $todo;
// The closing curly brace to the renderTodo code block
}
