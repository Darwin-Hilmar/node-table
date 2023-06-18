const color = require('colors');
const {createFile } = require('./helpers/multiplicar');
const argv  = require('./config/yargs');



console.clear();

console.log(argv);

// console.log('numbers: yargs', argv.numbers);


// const [ , , arg3 = 'number=5'] = process.argv;
// const [, number=5] = arg3.split('=');

createFile(argv.n, argv.l, argv.h)
    .then( nameFile => console.log(nameFile, 'create'.underline.green))
    .catch( err => console.log(err));
