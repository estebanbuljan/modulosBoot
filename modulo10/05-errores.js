const fs = require('fs');

//lectura con manejo de errores
try {
    const datos = fs.readFileSync('./archivo.txt', 'utf-8');
    console.log(datos);
    console.log('=============================================');
    console.log('=============================================');
} catch (error) {
    console.log(error);
}

//Ver funciÃ³n
/* 
lectura con callback
fs.readFileSync('./archivo.txt', 'utf-8', (err, data) => {
    if (err){
        console.log('error:', err);
    }else{
        console.log('data:', data);
    }
}); */