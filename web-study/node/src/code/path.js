const path = require('path')

// console.log(path.sep)
// console.log(path.parse('/code'))

const p = path.resolve(__dirname, 'name.js')
console.log(path.parse(p));
console.log(path.basename(p));
console.log(path.dirname(p));
console.log(path.extname(p));

