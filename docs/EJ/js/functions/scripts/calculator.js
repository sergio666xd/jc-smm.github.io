function sumar() {
    var numa = parseInt(document.getElementById("numa").value);
    var numb = parseInt(document.getElementById("numb").value);
    document.getElementById('history')
        .innerHTML += numa + "+" + numb + " = " + (numa+numb) + "<br><hr>";
    console.log("Resultado de la Suma (" + numa + "+" + numb +"): " + (numa+numb));
}
function restar() {
    var numa = parseInt(document.getElementById("numa").value);
    var numb = parseInt(document.getElementById("numb").value);
    document.getElementById('history')
    .innerHTML += numa + "-" + numb + " = " + (numa-numb) + "<br><hr>";
    console.log("Resultado de la Resta (" + numa + "-" + numb +"): " + (numa-numb));
}
function multiplicar() {
    var numa = parseInt(document.getElementById("numa").value);
    var numb = parseInt(document.getElementById("numb").value);
    document.getElementById('history')
    .innerHTML += numa + "*" + numb + " = " + (numa*numb) + "<br><hr>";
    console.log("Resultado de la Multiplicación (" + numa + "*" + numb +"): " + (numa*numb));
}
function dividir() {
    var numa = parseInt(document.getElementById("numa").value);
    var numb = parseInt(document.getElementById("numb").value);
    document.getElementById('history')
    .innerHTML += numa + "÷" + numb + " = " + (numa/numb) + "<br><hr>";
    console.log("Resultado de la División (" + numa + "÷" + numb +"): " + (numa/numb));
}
function clearh() {
    document.getElementById("history").innerHTML = "";
}