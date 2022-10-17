posi = 0;
newg = false;
namesP3 = [];
nombreColor = "";
activeSP = false;
upName = "";
gameMode = "";
activeC = false;
menu = false;

loading = '<img src="./assets/img/loading.gif" alt="•••">';

controlBtns = '<button class="btn btn-primary mt-3" id="change"><i class="fas fa-exchange-alt"></i> Cambiar sentido</button><button class="btn btn-success mt-3" id="next"><span id="left"></span> <span id="text"> Siguiente </span> <span id="right"><i class="fas fa-arrow-right"></i></span></button><button class="btn btn-danger mt-3" id="ban"><i class="fas fa-ban"></i> Bloqueo</button>';

turn2 = '<h3>Turno de:</h3> <h2 id="name" class="alert alert-primary">'+loading+'</h2> <h5>Siguiente:</h4> <h4 id="nextName" class="alert alert-info">'+loading+'</h4>';
turn3 = '<h5>Anterior:</h5> <h4 id="backName" class="alert alert-info">'+loading+'</h4> <h3>Turno de:</h3> <h2 id="name" class="alert alert-primary">'+loading+'</h2> <h5>Siguiente:</h4> <h4 id="nextName" class="alert alert-info">'+loading+'</h4>';

function nextColor(color,active) {
    if (active == true) {
        setTimeout(() => {
            document.querySelector("#history").innerHTML += "<span>Turno de "+ namesP3[posi]+": cambió el color a "+color+"</span><br><hr>";
            if (gameMode == "two") {
                next2();
            } else if (gameMode == "three") {
                next3();
            }
        }, 500);
    }

    return "", false;
    // setTimeout(() => {
    //     return active = false;
    // }, 500);
}

function colors() {
    $("#colordiv").delegate("button", "click", function () {
        document.querySelector("#name").innerHTML = loading;
        document.querySelector("#nextName").innerHTML = loading;
        if (gameMode == "three") {
            document.querySelector("#backName").innerHTML = loading;
        }
        nombreColor = $(this).attr("value");
        setTimeout(() => {
            if (nombreColor == "red") {
                $("#grand").addClass("red");
                $("#grand").removeClass("green");
                $("#grand").removeClass("yellow");
                $("#grand").removeClass("blue");
                $("#direction").attr("src", "./assets/img/direction-r.png")
                activeC = true;
            } else if (nombreColor == "green") {
                $("#grand").removeClass("red");
                $("#grand").addClass("green");
                $("#grand").removeClass("yellow");
                $("#grand").removeClass("blue");
                $("#direction").attr("src", "./assets/img/direction-g.png")
                activeC = true;
            } else if (nombreColor == "yellow") {
                $("#grand").removeClass("red");
                $("#grand").removeClass("green");
                $("#grand").addClass("yellow");
                $("#grand").removeClass("blue");
                $("#direction").attr("src", "./assets/img/direction-y.png")
                activeC = true;
            } else if (nombreColor == "blue") {
                $("#grand").removeClass("red");
                $("#grand").removeClass("green");
                $("#grand").removeClass("yellow");
                $("#grand").addClass("blue");
                $("#direction").attr("src", "./assets/img/direction-b.png")
                activeC = true;
            }
            setTimeout(() => {
                nextColor(nombreColor,activeC);
            }, 550);
        }, 500);
    });
}

$('#game').load('./assets/game/1select.html');
$(document).ready(() => {
    $("body").addClass("main");
	$("div").delegate("button", "click", function () {
        $("body").removeClass("main");
		button = $(this).attr("id");
		if (button=="two"||button=="three") {
            $('#game').load('./assets/game/play.html');
		}
		if (button == "two") {
            twoP(button,controlBtns);
            gameMode = "two";
		} else if (button == "three") {
            threeP(button,controlBtns);
            gameMode = "three";
		}
	});
	// two.addEventListener("click", function (){
	// $('#game').load('./assets/game/2players.html');
	// });
	// three.addEventListener("click", function (){
	// });
});

function names(names) {
    for (i = 0; i < names.length; i++) {
        names[i] = prompt("Jugador "+(i+1)+" de "+ names.length, "Jugador "+(i+1));
    }
    setTimeout(() => {
        nextName(names,names.length)
    }, 500);
}

function nameNext(cant,names) {
    if ($(".grand__img img").hasClass("rotate")) {
        if (posi == 0) {
            posiN = cant;
        } else if (posi == 1) {
            posiN = 0;
        } else {
            posiN = posi - 1;
        }
    } else {
        if (posi == cant) {
            posiN = 0;
        } else if (posi == (cant-1)) {
            posiN = cant;
        } else {
            posiN = posi + 1;
        }
    }
    nn = names[posiN];
    document.querySelector("#nextName").innerHTML = names[posiN];
}

function changeName(cname,cant) {
    document.querySelector("#name").innerHTML = '<img src="./assets/img/loading.gif" alt="•••">';
    setTimeout(() => {
        document.querySelector("#name").innerHTML = cname[posi];
        nameNext(cant,cname)
    }, 500);
}
function nextName(nname,cant) {
    document.querySelector("#name").innerHTML = nname[posi];
    na = nname[posi];
    nameNext(cant,nname)
}

function backName(player) {
    document.querySelector("#backName").innerHTML = player;
}

function goBack(names,cant) {
	$("#back").click(function () {
        newg = confirm("¿Deseas guardar los nombres actuales? \n" + names + " \n \n Si presionas aceptar no recarges esta pagina para que sigan guardados.");

        active = false;
        posi = 0;
        posiN = 0;
        $("#game").load("./assets/game/1select.html");
        $("body").addClass("main");
	})
}

function setting(type) {
    if (type == 2) {
        arreglo = namesP2;
    } else if (type == 3) {
        arreglo = namesP3;
    }

    $("#setting").click(function () {
        $("#settingBox").addClass("actives");
        $("#backS").addClass("darkS");
        $("#scMenu1").addClass("darkS");
        $("#scMenu2").addClass("darkS");
        menu = true;
    });
    $("#exitS").click(function () {
        $("#settingBox").removeClass("actives");
        $("#backS").addClass("darkS");
        $("#scMenu1").addClass("darkS");
        $("#scMenu2").addClass("darkS");
        $("#sMenu").removeClass("darkS");
        menu = false;
    });
    $("#backS").click(function () {
        $("#backS").addClass("darkS");
        $("#scMenu1").addClass("darkS");
        $("#scMenu2").addClass("darkS");
        $("#sMenu").removeClass("darkS");
    });
    $("nav").delegate("button","click", function () {
        configS = $(this).attr("id");
        if (configS == "players") {
            $("#sMenu").addClass("darkS");
            $("#backS").removeClass("darkS");
            $("#scMenu1").removeClass("darkS");
            if (gameMode == "two") {
                document.querySelector("#gameModeS").innerHTML = "<h3>Modo de Juego: 1 vs 1</h3>"
            } else if (gameMode == "three") {
                document.querySelector("#gameModeS").innerHTML = "<h3>Modo de Juego: 3 o más</h3>"
            }
            showS1(arreglo);
            $("#saveS1").hover(function () {
                $("#saveS1").removeClass("bi-save");
                $("#saveS1").addClass("bi-save-fill");
            }, function () {
                $("#saveS1").removeClass("bi-save-fill");
                $("#saveS1").addClass("bi-save");
            });
            $("#saveS2").hover(function () {
                $("#saveS2").removeClass("bi-save");
                $("#saveS2").addClass("bi-save-fill");
            }, function () {
                $("#saveS2").removeClass("bi-save-fill");
                $("#saveS2").addClass("bi-save");
            });
        } else if (configS == "historyS") {
            $("#sMenu").addClass("darkS");
            $("#backS").removeClass("darkS");
            $("#scMenu2").removeClass("darkS");
        }
    });
    $("#exitS").hover(function () {
        $("#exitS").removeClass("bi-door-closed");
        $("#exitS").addClass("bi-door-open");
    }, function () {
        $("#exitS").removeClass("bi-door-open");
        $("#exitS").addClass("bi-door-closed");
    });
    $("#backS").hover(function () {
        $("#backS").removeClass("bi-arrow-left-square");
        $("#backS").addClass("bi-arrow-left-square-fill");
    }, function () {
        $("#backS").removeClass("arrow-left-square-fill");
        $("#backS").addClass("bi-arrow-left-square");
    });
    $("#deleteSH").hover(function () {
        $("#deleteSH").removeClass("bi-trash");
        $("#deleteSH").addClass("bi-trash-fill");
    }, function () {
        $("#deleteSH").removeClass("bi-trash-fill");
        $("#deleteSH").addClass("bi-trash");
    });
}

function upPCANT3(){
    pcantl = document.getElementById('pcant').value;
    setTimeout(() => {
        if (pcantl == 2) {
            $("#errorMDiv").addClass("darkS");
            document.querySelector("#gameModeS").innerHTML = "<h3>Modo de Juego: 1 vs 1</h3>"
            twoP("two",controlBtns);
            gameMode = "two";
            arreglo = namesP2;
            showPlayers(arreglo);
            activeSP = true;
        } else if (pcantl >= 3) {
            if (gameMode == "two") {
                document.querySelector("#gameModeS").innerHTML = "<h3>Modo de Juego: 3 o más</h3>"
                threeP("three",controlBtns);
                gameMode = "three";
            }
            namesP3.length = pcantl;
            pCant3 = pcantl-1;
            arreglo = namesP3;
            showPlayers(arreglo);
            activeSP = true;
            $("#errorMDiv").addClass("darkS");
        } else if (pcantl <2) {
            document.querySelector("#errorM").innerHTML = "La cantidad de jugadores no puede ser menor a 2"
            $("#errorMDiv").removeClass("darkS");
        }
        
        document.querySelector("#nextName").innerHTML = '<img src="./assets/img/loading.gif" alt="•••">';
        setTimeout(() => {
            nameNext(pCant3,namesP3);
        }, 2000);
    }, 400);
}

function deleteH() {
    document.querySelector("#history").innerHTML = "";
}

function showS1(arreglo) {
    showNPlayers(arreglo);
    showPlayers(arreglo);
    activeSP = true;
}

function upNP(arreglo2) {
    arreglo2 = arreglo2+1;
    arrowsUPLOAD(arreglo2);
    $("#errorMDiv").addClass("darkS");
    return false;
}
function downNP(arreglo2) {
    if (arreglo2 == 2) {
        document.querySelector("#errorM").innerHTML = "La cantidad de jugadores no puede ser menor a 2"
        $("#errorMDiv").removeClass("darkS");
    } else {
        $("#errorMDiv").addClass("darkS");
        arreglo2 = arreglo2-1;
        arrowsUPLOAD(arreglo2);
    }
    return false;
}

function arrowsUPLOAD(newNumber) {
    if (gameMode == "two") {
        if (newNumber >= 3) {
            namesP3.length = newNumber;
            document.querySelector("#gameModeS").innerHTML = "<h3>Modo de Juego: 3 o más</h3>"
            threeP("three",controlBtns);
            gameMode = "three";
            showS1(namesP3);
        }
    } else if (gameMode == "three") {
        if (newNumber == 2) {
            document.querySelector("#gameModeS").innerHTML = "<h3>Modo de Juego: 1 vs 1</h3>"
            twoP("two",controlBtns);
            gameMode = "two";
            showS1(namesP2);
        } else if (newNumber >= 3) {
            namesP3.length = newNumber;
            showS1(namesP3);
            document.querySelector("#nextName").innerHTML = '<img src="./assets/img/loading.gif" alt="•••">';
            setTimeout(() => {
                nameNext(pCant3,namesP3);
            }, 2000);
        }
    }
}

function showNPlayers(arreglo) {
    document.querySelector("#SCplayers").innerHTML = '<div class="loadDiv"><center><h3>Cargando...</h3><br><img class="load" src="./assets/img/loading.gif" alt="•••"></center></div><hr>';
    setTimeout(() => {
        document.querySelector("#SCplayers").innerHTML = '<label for="nplayers">N° Jugadores: </label><input id="pcant" type="number" name="nplayers" value="'+arreglo.length+'"><button id="saveS1" type="submit" class="bi-arrow-up-short btn" onclick="upNP('+arreglo.length+')"></button><button id="saveS1" type="submit" class="bi-arrow-down-short btn" onclick="downNP('+arreglo.length+')"><button id="saveS1" type="submit" class="bi-save btn btn-success saveS" onclick="upPCANT3()"> Guardar</button><br>';
    }, 300);
}


function showPlayers(arreglo) {
    document.querySelector("#Splayers").innerHTML = '<div class="loadDiv"><center><h3>Cargando...</h3><br><img class="load" src="./assets/img/loading.gif" alt="•••"></center></div>';
    setTimeout(() => {
        if (activeSP == true) {
            document.querySelector("#Splayers").innerHTML = '';
            for (i = 0; i < arreglo.length; i++) {
                if (activeSP == true) {
                    if (arreglo[i] == undefined) {
                        arreglo[i] = "Jugador "+(i+1);
                    }
                    document.querySelector("#Splayers").innerHTML += '<br><label for="p'+i+'">Jugador '+(i+1)+': </label><input name="player" id="p'+i+'" type="text" value="'+arreglo[i]+'"><br>';
                }
                if (i == (arreglo.length-1)) {
                    document.querySelector("#Splayers").innerHTML += '<br><br><button id="saveS2" class="bi-arrow-repeat btn btn-dark" onclick="showS1(arreglo)"> Reestablecer</button><button id="saveS2" class="bi-save btn btn-success saveS" onclick="upPlayers(arreglo)"> Guardar</button>'
                    activeSP = false;
                }
            }
        }
    }, 500);
}

function upPlayers(arreglo) {
    for (i = 0; i < arreglo.length; i++) {
        upName = "p"+i;
        arreglo[i] = document.getElementById(upName).value;
    }
    namesP3 = arreglo;
    document.querySelector("#savedM").innerHTML = ' Nombres guardados correctamente';
    document.querySelector("#savedP").classList.add("blocked--active");
	setTimeout(() => {
		document.querySelector("#savedP").classList.remove("blocked--active");
	}, 3000);
}

function blocked(nextName,actualName) {
	document.querySelector("#blocked").innerHTML = '¡<span class="name"><b>' + nextName + '</b></span> ha sido bloquead@ por <span class="name"><b>' + actualName + '</b></span>!';
	document.querySelector("#history").innerHTML += '<span> Turno de ' + actualName + ': Ha sido bloqueado a ' + nextName + '</span><br><hr>';
	document.querySelector(".blocked").classList.add("blocked--active");
	setTimeout(() => {
		document.querySelector(".blocked").classList.remove("blocked--active");
	}, 3000);
}