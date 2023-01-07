partT = ["Mano","Pie"];
sideT = ["Izquierda", "Derecha"];
colorsT = ["Amarillo","Azul","Rojo","Verde"];

loading = '<img src="./assets/img/loading.gif" alt="•••">';

controlBtns = '<button class="btn btn-primary mt-3" id="change"><i class="fas fa-exchange-alt"></i> Cambiar sentido</button><button class="btn btn-success mt-3" id="next"><span id="left"></span> <span id="text"> Siguiente </span> <span id="right"><i class="fas fa-arrow-right"></i></span></button><button class="btn btn-danger mt-3" id="ban"><i class="fas fa-ban"></i> Bloqueo</button>';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function notification(content,type,time) {
    if (time == "" || time == undefined) {
        setTime = 3000;
    } else {
        setTime = time*1000
    }
    tipoNot = "alert-"+type;
    $('.notification').addClass(tipoNot);
    document.querySelector("#notification").innerHTML = '<h3>'+content+'</h3>';
	document.querySelector(".notification").classList.add("notification--active");
	setTimeout(() => {
		document.querySelector(".notification").classList.remove("notification--active");
        $('#notification').removeClass(tipoNot);
        tipoNot = "";
        document.querySelector("#notification").innerHTML = "";
	}, setTime);
}

$(document).ready(() => {
    document.querySelector("#game").innerHTML = loading;

    setTimeout(() => {
        $('#game').load('./assets/game/1select.html')
    }, 1980);

    $("body").addClass("main");
	$("div").delegate("button", "click", function () {
        viewmode = $(this).attr('id');
        if (viewmode == "landscape" || viewmode == "portrait") {
            notification(viewmode,"info",2);
            $('#game').load('./assets/game/play.html');
        }
	});
});