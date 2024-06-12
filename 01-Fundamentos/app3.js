const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf8');

var words = content.split(' ');

// const reactWordCount = words.filter(
//     word => word.toLowerCase().includes('react')
// ).length;

// var reactWordCount = 0
// for (let word of words) {
//     if (word.toLowerCase().includes('react')) {
//         reactWordCount++;
//     }
// };

var reactWordCount = content.match(/(react)/gi ?? []).length;


console.log('Palabras: ', words.length)
console.log('Palabras react: ', reactWordCount)