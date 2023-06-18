const fs = require('fs');
const createFile = async( number= 1, listar = false, cant = 5) => {

    try{
        let salida, consola = '';

        for(let i = 1; i<=cant; i++){
            salida += `${ number }x ${i} = ${5*i}\n`;
            consola += `${ number }x ${i} = ${5*i}\n`; //aqui poner los colores
        }
        if(listar)
            console.log(consola);

        fs.writeFileSync(`./salida/tablamultiplicar${number}.txt`, salida);

        return('Archivo creado');
    }catch(err){
        throw err
    }
    
}

module.exports = {
    createFile
}