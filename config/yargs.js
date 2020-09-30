const descripcion = {
    demand:true,
    alias: 'd',
    desc:'Descripcion de la tarea por hacer'
}

const completado = {
    alias : 'c',
    default : true,
    desc:'Marca como completado o pendiente la tarea'
}
const argv = require('yargs')
                .command('crear','Se crea un elemento por hacer',{
                    descripcion
                })
                .command('actualizar','Se actualiza una tarea',{
                    descripcion,
                    completado
                })
                .command('borrar','Se borra una tarea',{
                    descripcion
                })
                .help()
                .argv;
module.exports = {
    argv
}