var student = {
  firstName: 'Arthas',
  lastName: 'Menethil',
  age: 42
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of firstName:', fullName);

student.livesInIrvine = false;
console.log('value of livesInIrvine:', student.livesInIrvine);

student.previousOccupation = 'The Lich King';
console.log('value of previousOccupation:', student.previousOccupation);

console.log('value of student:', student);

var vehicle = {
  make: 'Invincible',
  model: 'Steed',
  year: 597
};

vehicle['color'] = 'Blue and Gold';
console.log('value of color:', vehicle['color']);

vehicle['isConvertible'] = true;
console.log('value of isConvertible:', vehicle['isConvertible']);

console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Lalo',
  type: 'Pupper'
};
console.log('value of pet:', pet);

delete pet.name;
console.log('value of pet:', pet);

delete pet.type;
console.log('value of pet:', pet);
