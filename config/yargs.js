
const argv = require('yargs')
                .option('n',{
                    alias: 'numbers',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es el numero que se va a multiplicar'
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: false,
                    description: 'Muestra los resultados en consola'
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    demandOption: false,
                    description: 'Indica la cantidad de veces que multiplicara'
                })
                .check((argv, options) =>{
                    if( isNaN(argv.n)){
                        throw 'The base has that be number'
                    }
                    return true;
                })
                .argv;
module.exports = argv;
