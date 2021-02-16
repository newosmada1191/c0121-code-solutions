function ExampleConstructor() {

}
console.log('value of ExampleConstructor:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor:', typeof ExampleConstructor.prototype);

var exampleConstructor = new ExampleConstructor();
console.log('value of exampleCunstructor:', exampleConstructor);

var valueVariable = exampleConstructor instanceof ExampleConstructor;
console.log('instanceof value of valueVariable:', valueVariable);
