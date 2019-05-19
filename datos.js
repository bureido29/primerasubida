/*
Como interesado necesito obtener la información de cursos ofertados por educación continua para así tener diferentes opciones para elegir posteriormente un curso al cual matricularme. 
Criterios de aceptación 
• Deben mostrar al menos tres cursos 
• Al mostrar cada curso debe indicar el id, el nombre, la duración y el valor 
• Al momento de listar los cursos, debe transcurrir un intervalo de tiempo de 2 segundos entre cada curso 
 
Como interesado necesito seleccionar un curso para ingresar mis datos y quedar como prematriculado. 
Criterios de aceptación 
• Debe obligatoriamente ingresar el id del curso, nombre del interesado y cedula 
• Debe buscar la información del curso y retonarme la información del mismo 
• Debe generar en un archivo de texto con la información del curso en conjunto con la mía 
• Generar un mensaje de alerta en caso de no encontrar un id. 
• En caso de no estar interesado debe mostrarme la lista de cursos, en caso de escribir “inscribir” debe hacer el proceso de inscripción 
*/

//usando un arreglo de objetos...
const curso = [{
    id: 1,
    nombre: 'Curso Introducción a Node.JS mediante el desarrollo de un proyecto ágil',
    descripcion: 'Desarrolle los conocimientos y habilidades correspondientes a los fundamentos de Node.js que permitan el desarrollo de un proyecto real siguiendo el marco de trabajo Scrum.',
    duracion: 32,
    valor: 0
},
{
    id: 2,
    nombre:'Curso de excel financiero',
    descripcion: 'Aprenderás a construir modelos financieros útiles para gestionar el análisis financiero, los presupuestos, la resolución de problemas de matemáticas financieras, la evaluación de proyectos y gestión de inversiones.',
    duracion: 16,
    valor: 125000
},
{
    id: 3,
    nombre:'Curso de Psicografología',
    descripcion: 'Con las herramientas adquiridas en el curso, los asistentes, podrán adquirir competencias explicativas y argumentativas a la hora de sustentar las teorías e informes psicológicos.',
    duracion: 24,
    valor: 210000
}]

function combine (id) {
    let valor = (id) => '$' + curso[id].valor + ' pesos.';
    let duracion = (id) => curso[id].duracion + ' horas';
    let texto = 'El "' + curso[id].nombre + '" incluye ' + duracion(id) + ' y tiene un valor de ' + valor(id) + ' ' + curso[id].descripcion + '\n';
    console.log(texto);
}

module.exports = {
    curso,
    combine
};




