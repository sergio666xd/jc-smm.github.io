function enviar(){
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const genero = document.getElementsByName('genero').id;
    const password = document.getElementById('password').value;
	console.log('Nombre completo: ' + nombre + ' ' + apellido);
	console.log('Sexo: ' + genero);
	console.log('Contraseña: ' + password);
}