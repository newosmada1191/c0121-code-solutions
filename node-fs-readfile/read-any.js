const fs = require('fs');

const textFile = process.argv[2];

if (textFile === 'hopper.txt') {
  fs.readFile('./hopper.txt', 'utf8', (err, data) => {
    console.log(data);
  })
} else if (textFile === 'cunningham.txt') {
  fs.readFile('./cunningham.txt', 'utf8', (err, data) => {
    console.log(data);
  })
} else if (textFile === 'hipster-ipsum.txt') {
  fs.readFile('./hipster-ipsum.txt', 'utf8', (err, data) => {
    console.log(data);
  })
} else if (textFile === 'dijkstra.txt') {
  fs.readFile('./djikstra.txt', 'utf8', (err, data) => {
    console.log(data);
  })
}
