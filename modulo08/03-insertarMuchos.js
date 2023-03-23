

//Conexión a la Base de Datos de Mongo
//1. Creamos la constante para utilizar mongodb
const mongoCliente = require('mongodb').MongoClient;

//2. Pasamos la url local de la ubicación de la db de mongo y la db
const MONGO = '';
const DATA = 'test'

//3. Pasamos la url remota de la ubicación de la db de mongo y la db
const MONGOATLAS = 'mongodb+srv://esteban_bul:fqzRwDWM2rJjoKJZ@cluster0.xjq2pdh.mongodb.net/?retryWrites=true&w=majority';

//4. Conectamos nuestra app a Mongo
mongoCliente.connect(MONGOATLAS, (error, db) => {
    if (error) {
        throw error;
    }else{
        console.log(`App conectada a la Base de Datos: ${DATA}`);
    }

    //Seteamos la base de datos elegida
    const dbo = db.db(DATA);

    let dato = [
        { 
        nombre: "Juan",
        apellido: "Pérez",
        edad: 20
        },
        { 
            nombre: "Pepe",
            apellido: "Pérez",
            edad: 20
        },
        { 
            nombre: "Mario",
            apellido: "Pérez",
            edad: 20
        },
        { 
            nombre: "María",
            apellido: "Pérez",
            edad: 20
        },
        { 
            nombre: "Sergio",
            apellido: "Pérez",
            edad: 20
        }
    ];

    //Insertamos un dato
    dbo.collection('personas').insertMany(dato, (error, result) => {
        if (error) {
            throw error;
        }else{
            console.log(`Insertamos ${result.insertedCount} documentos a la Colección`);
        }
    });
});
