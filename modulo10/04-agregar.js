const fs = require('fs');

let texto = '\n dato que sumamos a el contenido anterior'


//recordar separar los contenidos a escribir
fs.appendFileSync('./archivo.txt', `${texto}`)