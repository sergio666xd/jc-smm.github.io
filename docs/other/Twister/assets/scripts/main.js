testmode = false;
color = undefined;
partT = ["Mano","Pie"];
sideT = ["left", "right"];
colorsT = ["Amarillo","Azul","Rojo","Verde"];
colorT = [0,0,0,0];
stepCT = [];
stepCT.length = 4;
stepTurn = [0,0,0,0];
stepTurn.length = 4;
pushactive = false;
let push;
let step;

loading = '<img src="./assets/img/loading.gif" alt="•••">';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function notification(testlog,content,img,type,time) {
    if (time == "" || time == undefined) {
        setTime = 3000;
    } else {
        setTime = time*1000;
    }
    if (pushactive == true) {
        clearTimeout(push);
        $(".notification").removeClass("notification--active");
        $('#notification').removeClass(tipoNot);
        tipoNot = "";
        pushactive = false;
        if (testmode == true) {
            console.log("---Notificación reemplazada");
        }
    } else {
        if (testmode == true) {
            console.log("--Función notification() iniciada");
        }
    }
    tipoNot = "alert-"+type;
    pushactive = true;
    $('.notification').addClass(tipoNot);
    if (content != undefined) {
        document.querySelector("#notification").innerHTML = '<h1>'+content+'</h1>';
    }
    if (img != undefined) {
        document.querySelector("#notification").innerHTML += "<br>"+img;
    }
    $(".notification").addClass("notification--active");
    push = setTimeout(() => {
            $(".notification").removeClass("notification--active");
            $('#notification').removeClass(tipoNot);
            pushactive = false;
            if (testmode == true) {
                console.log("--Función notification() terminada");
            }
        }, setTime);
    return push;
}

$(document).ready(() => {
    clickToHide()
    if (testmode == false) {
        document.querySelector("#game").innerHTML = loading;
        setTimeout(() => {
            $('#game').load('./assets/game/1select.html')
        }, 1980);
    } else if (testmode == true) {
        $('#game').load('./assets/game/play.html')
        console.log("Modo de pruebas activado");
        notification(true,"Modo de Pruebas",undefined,"warning",2);
    }


    $("body").addClass("main");
	$("div").delegate("button", "click", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();

        button = $(this).attr('id');
        if (button == "landscape" || button == "portrait") {
            notification(true,button,undefined,"info",2);
            $('#game').load('./assets/game/play.html');
        }
        if (testmode == true) {
            console.log("Botón: "+button);
        }
	});
});

function clickToHide() {
    $("#notification").click(() => {
        clearTimeout(push);
        $(".notification").removeClass("notification--active");
        $('#notification').removeClass(tipoNot);
        tipoNot = "";
        document.querySelector("#notification").innerHTML = "";
        pushactive = false;
        if (testmode == true) {
            console.log("--Función notification() terminada por clickToHide()");
        }
    });
}