let count = 3;

console.log(count);

const intervalID = setInterval(changeText, 1000);

function changeText() {
  count -= 1;
  if (count !== 0) {
  console.log(count);
  } else if (count === 0) {
    console.log('Blast off!')
    clearInterval(intervalID);
  }
}
