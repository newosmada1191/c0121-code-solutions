/* exported student */
var student = {
  firstName: 'Arthas',
  lastName: 'Menethil',
  subject: 'The Power of the Light',
  getFullName: function () {
    var fullName = this.firstName + ' ' + this.lastName;
    return fullName;
  },
  getIntroduction: function () {
    var message = 'Hello, my name is ' + this.firstName + ' ' + this.lastName + ' and I am studying ' + this.subject + '.';
    return message;
  }
};
