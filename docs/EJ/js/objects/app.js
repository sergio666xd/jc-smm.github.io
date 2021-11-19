const tabla = document.querySelector("#tabla");
let estudia = null;
let trabaja = null;

tabla.innerHTML = "<p>Cargando...</p>";

var amigos = [];

function Amigo(nombre, edad, estudia, trabaja, hobbies) {
    this.nombre = nombre;
    this.edad = edad;
    this.estudia = estudia;
    this.trabaja = trabaja;
    this.hobbies = hobbies;
}

var amigo1 = new Amigo("Sara", 15, true, false, ["Cantar", " Cocinar", " Bailar"]);
var amigo2 = new Amigo("Ana", 16, true, true, ["Jugar", " Cocinar"]);
var amigo3 = new Amigo("Miguel", 15, true, false, ["Futbol", " Bailar", " Voleybol"]);
var amigo4 = new Amigo("Emanuel", 16, false, true, ["Anime", " Música"]);
var amigo5 = new Amigo("Daniel", 15, false, false, "Jugar");


amigos.push(amigo1)
amigos.push(amigo2)
amigos.push(amigo3)
amigos.push(amigo4)
amigos.push(amigo5)
    
console.log(amigos)


function indexar() {
    tabla.innerHTML = "<p>Cargando...</p>";
    setTimeout(() => {
        tabla.innerHTML = "";
        for (let i = 0; i < amigos.length; i++) {
            let a=i+1;
            if (amigos[i].estudia == true) {
                estudia = "Sí";	
            } else if (amigos[i].estudia == false) {
                estudia = "No";
            }
            if (amigos[i].trabaja == true) {
                trabaja = "Sí";	
            } else if (amigos[i].trabaja == false) {
                trabaja = "No";
            }
            tabla.innerHTML += "<tr><th>" + a + "</th><td>" + amigos[i].nombre + "</td><td>" + amigos[i].edad + "</td><td>" + estudia + "</td><td>" + trabaja + "</td><td>" + amigos[i].hobbies + "</td></tr>";
        }
    }, 500);
}
window.onload = function() {
    indexar(); 
};

function addAmigo() {
    let nombre = document.getElementById('nombre').value;
    let edad = document.getElementById('edad').value;
    let estudia = document.getElementById('study').checked;
    let trabaja = document.getElementById('job').checked;
    let hobbies = document.getElementById('hobbies').value;

    var amigo = new Amigo(nombre, edad, estudia, trabaja, [hobbies]);

    console.log(nombre, edad, estudia, trabaja, hobbies)
    amigos.push(amigo)
    indexar()
}
