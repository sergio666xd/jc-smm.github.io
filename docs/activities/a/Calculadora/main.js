function sumar(){
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    document.getElementById('result')
        .innerHTML += "Resultado: " + a + "+" + b + " = " + (a+b) + "<br>";
    console.log("Resultado de la Suma (" + a + "+" + b +"): " + (a+b));
}
function restar(){
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    document.getElementById('result')
    .innerHTML += "Resultado: " + a + "-" + b + " = " + (a-b) + "<br>";
    console.log("Resultado de la Resta (" + a + "-" + b +"): " + (a-b));
}
function multiplicar(){
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    document.getElementById('result')
    .innerHTML += "Resultado: " + a + "*" + b + " = " + (a*b) + "<br>";
    console.log("Resultado de la Multiplicación (" + a + "*" + b +"): " + (a*b));
}
function dividir(){
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    document.getElementById('result')
    .innerHTML += "Resultado: " + a + "÷" + b + " = " + (a/b) + "<br>";
    console.log("Resultado de la División (" + a + "÷" + b +"): " + (a/b));
}
