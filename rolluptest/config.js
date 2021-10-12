
const path = require('path');
module.exports = {
  input: path.join(__dirname,'./index.js'),
  output: {
    file: 'bundle.js',
    format: 'cjs'
  }
}