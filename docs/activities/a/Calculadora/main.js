function sumar(){
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    document.getElementById('result')
    .innerHTML = "Resultado: " + (a+b);
    console.log ("Resultado de la Suma: " + (a+b));
}
function restar(){
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    document.getElementById('result')
    .innerHTML = "Resultado: " + (a-b);
    console.log ("Resultado de la Resta: " + (a-b));
}
function multiplicar(){
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    document.getElementById('result')
    .innerHTML = "Resultado: " + (a*b);
    console.log ("Resultado de la Multiplicación: " + (a*b));
}
function dividir(){
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    document.getElementById('result')
    .innerHTML = "Resultado: " + (a/b);
    console.log ("Resultado de la División: " + (a/b));
}
