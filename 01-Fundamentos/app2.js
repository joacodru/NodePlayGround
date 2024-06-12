const fs = require('fs');

const data = fs.readFileSync('README.md', 'utf8');

const newData = data.replace(/React/ig, 'Angular');

fs.writeFileSync('README1.md', newData);

console.log(newData)