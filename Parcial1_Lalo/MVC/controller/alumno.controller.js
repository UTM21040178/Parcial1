import { ModeloAlumnosReprobados } from "../Model/alumno.model.js"

ModeloAlumnosReprobados.create({
    name:"Juanito",
    apepat:"Perez",
    apemat: "Jimenez",
    edad: 16,
    carrera: "RHH",
},
{
    name:"Eduardo",
    apepat:"Lara",
    apemat: "Beltran",
    edad: 21,
    carrera: "TICS",
    
},
{
    name:"Salma",
    apepat:"tapia",
    apemat: "Padilla",
    edad: 20,
    carrera: "TICS",

},
{
   
    name:"Mayo",
    apepat:"zambada",
    apemat: "Escutia",
    edad: 40,
    carrera: "TICS",

    name:"Michael",
    apepat:"Myers",
    apemat: "Smith",
    edad: 22,
    carrera: "Negocios internacionales",
}

   

)

export const test = ()=>{
    console.log ("funciona el controlador")
}