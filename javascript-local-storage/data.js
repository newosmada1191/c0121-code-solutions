/* exported todos */
// An empty array is being assigned to the value of the variable todos
var todos = [];
// The getItem mothod of the localStorage object is being called with one
// argument, 'javascript-local-storage' and the return value is being
// assigned to the value of the variable prevjiousTodosJSON
var previousTodosJSON = localStorage.getItem('javascript-local-storage');

// An if statement is being called with the conditional previousTodosJson
// absolutely does not equal to null followed by an opening curly brace to
// to the declaration code block
if (previousTodosJSON !== null) {
  // The parse method of the JSON object is being called with one argument,
  // the value of the variable previousTodosJSON which is being returned
  // to the value of variable todos
  todos = JSON.parse(previousTodosJSON);
}

// The addEventListern method of the window object is being called with two
// arguments, the string 'beforeunload' followed by the function definition
// with the parameter event followed by an opening curly brace { for the
// function definition block
window.addEventListener('beforeunload', function (event) {
  // the stringify method of the JSON object is being called with one argument
  // todos which is being returned to the value of the variable todosJSON
  var todosJSON = JSON.stringify(todos);
  // the setItem method of the localStorage object is being called with two
  // two arguments, the string 'javascript-local-storage' followed by the
  // the value of the variable todosJSON
  localStorage.setItem('javascript-local-storage', todosJSON);
// There is a closing curly brace for the function code block
});
