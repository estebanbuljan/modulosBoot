const fs = require('fs');

fs.writeFileSync('./escribir.txt', 'vamos Argentina par el mundial')


// si utilizamos el mismo archivo para la escritura lo sobreescribe.
let texto = 'en este archivo vamos a escribir un texto de tipo string.'


//si el archivo no existe este metodo lo crea
fs.writeFileSync('./texto.txt', `${texto}`);