const {curso,combine} = require ('./datos');
const fs = require ('fs');

const opciones = {
    cursoId: {
        demand: true,
        alias: 'i'
    },
    nombre: {
        demand: true,
        alias: 'n'
    },
    cedula: {
        demand: true,
        alias: 'x'
    }
};

let crearArchivo = (info) => {
    fs.writeFile('matricula.txt', info, (err) => {
        if (err) throw (err);
        console.log('se ha creado el archivo')
    })
};

const argv = require('yargs')
            .command ('inscribir','Inscribirme en un curso', opciones)
            .argv
            var inscribido = 'Nombre del estudiante: ' + argv.n + '\r\n' + 'Con cedula: ' + argv.x + '\r\n' + 'ID del curso: ' + argv.i + '\r\n' + '\r\n' + curso[argv.i].descripcion

if(argv.i > 3 || argv.i < 1) {
    console.log ('No hay curso con ese ID')
} else {
    crearArchivo(inscribido)
}

let descrip = curso => {
    i=0;
    time=0;
    written = '';

    while (i<3) {
        setTimeout(combine,time,i);
        i++;
        time += 2000;
    };
};

descrip(curso);



