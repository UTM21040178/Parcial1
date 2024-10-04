import{Schema, model} from "mongoose"


const EsquemaAlumnosReprobados = new Schema({

    name:{
        type: String
    }, 
    apepat:{
        type: String
    },
    apemat:{
        type: String
    },
    edad:{
        type: Number
    },
    carrera:{
        type: String
    }
})

export const ModeloAlumnosReprobados = new model("tabla de registro de alumnos que estan reprobados", EsquemaAlumnosReprobados)