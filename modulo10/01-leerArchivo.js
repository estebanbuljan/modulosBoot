//no necesitamos descargar alguna libredia

const fs = require('fs');

const datos = fs.readFileSync('./archivo.txt', 'utf-8');

console.log(datos);