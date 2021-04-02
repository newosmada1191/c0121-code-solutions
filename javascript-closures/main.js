function graduate(credential) {
  return function (fullName) {
    return fullName + ', ' + credential;
  };
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

console.log('calling medicalSchool:',
  medicalSchool('Owen Adams'));
console.log('calling lawSchool:',
  lawSchool('Owen Adams'));
