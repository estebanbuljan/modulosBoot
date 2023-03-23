

const mongoCliente = require('mongodb').MongoClient;

const MONGO = 'mongodb://localhost:27017/';
const DATA = 'educacionit'

const MONGOATLAS = 'mongodb+srv://esteban_bul:fqzRwDWM2rJjoKJZ@cluster0.xjq2pdh.mongodb.net/educacionIt?retryWrites=true&w=majority';

mongoCliente.connect(MONGOATLAS, (error, db) => {
    if (error) {
        throw error;
    }else{
        console.log(`App conectada a la Base de Datos: ${DATA}`);
    }

    const dbo = db.db(DATA);
    const eliminar = { nombre: "Mario" };

    dbo.collection('personas').deleteOne(eliminar, (error, result) => {
        if (error) {
            throw error;
        }else{
            console.log('Hemos eliminado 1 documento.');
        }
    }); 

    dbo.collection('personas').deleteMany(eliminar, (error, result) => {
        if (error) {
            throw error;
        }else{
            console.log('Hemos eliminado todos los documentos.');
        }
    }); 
});