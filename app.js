// const argv = require("yargs").argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');


// console.log(argv);
let comando = argv._[0];
switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        console.log('Mostrar las tareas por hacer')
        let listado = porHacer.getListado();
        for (const tarea of listado) {
            console.log('====Por hacer======='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ',tarea.completado);
            console.log('===================='.green);
        }
        break;
    case 'actualizar':
        console.log('Actualizar una tarea por hacer')
        let actualizado = porHacer.actualizar(argv.descripcion,argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        console.log('Borrar una tarea por hacer')
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('comando no reconocido')
        break;
}