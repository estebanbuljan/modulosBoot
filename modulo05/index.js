console.log('Vamos a trabajar con un Fetch');
// Llamada para lo solicitud de recursos, datos , informaciones 
// tipo JSON: Objetos notacion JS



fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>{
        return response.json();
    })
    .then(usuarios =>{
        mostrarDatos(usuarios);
    })
    .catch( error =>{
        console.log(error);
    });


function mostrarDatos(usuarios) {
    for (const usuario of usuarios) {
        let div = document.createElement('div');
        div.innerHTML = `"<h2> ${usuario.name} - ${usuario.email} - ${usuario.phone} - ${usuario.website}</h2>`;
        document.body.append(div);
    }
}
