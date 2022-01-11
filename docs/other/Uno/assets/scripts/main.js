posi = 0;
controlBtns = '<button class="btn btn-primary mt-3" id="change"><i class="fas fa-exchange-alt"></i> Cambiar sentido</button><button class="btn btn-success mt-3" id="next"><span id="left"></span> <span id="text"> Siguiente </span> <span id="right"><i class="fas fa-arrow-right"></i></span></button><button class="btn btn-danger mt-3" id="ban"><i class="fas fa-ban"></i> Bloqueo</button>';

$('#game').load('./assets/game/1select.html');
$(document).ready(() => {
	$("div").delegate("button", "click", function () {
		button = $(this).attr("id");
		if (button=="two"||button=="three") {
			$('#game').load('./assets/game/play.html');
		}
		if (button == "two") {
			twoP(button,controlBtns);
		} else if (button == "three") {
			threeP(button,controlBtns);
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
        names[i] = prompt("Jugador "+(i+1)+" de "+ names.length);
    }
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
    setTimeout(() => {
        document.querySelector("#name").innerHTML = cname[posi];
        nameNext(cant,cname)
    }, 500);
}
function nextName(nname,cant) {
    document.querySelector("#name").innerHTML = nname[posi];
    nameNext(cant,nname)
}

function goBack(names) {
	$("#back").click(function () {
		$("#game").load("./assets/game/1select.html");
		posi = 0;
		posiN = 0;
		names[0] = undefined;
		names[1] = undefined;
	})
}

function blocked(nextName,actualName) {
	document.querySelector("#blocked").innerHTML = '¡<b>' + nextName + '</b> ha sido bloquead@ por <b>' + actualName + '</b>!';
	document.querySelector(".blocked").classList.add("blocked--active");
	setTimeout(() => {
		document.querySelector(".blocked").classList.remove("blocked--active");
	}, 3000);
}

function color() {
    if (nombreColor == "red") {
        $("#grand").addClass("red");
        $("#grand").removeClass("green");
        $("#grand").removeClass("yellow");
        $("#grand").removeClass("blue");
    } else if (nombreColor == "green") {
        $("#grand").removeClass("red");
        $("#grand").addClass("green");
        $("#grand").removeClass("yellow");
        $("#grand").removeClass("blue");
    } else if (nombreColor == "yellow") {
        $("#grand").removeClass("red");
        $("#grand").removeClass("green");
        $("#grand").addClass("yellow");
        $("#grand").removeClass("blue");
    } else {
        $("#grand").removeClass("red");
        $("#grand").removeClass("green");
        $("#grand").removeClass("yellow");
        $("#grand").addClass("blue");
    }
}

$("#color").click(function () {
    nombreColor = $(this).attr("value");
    if (nombreColor == "red") {
        $("#grand").addClass("red");
        $("#grand").removeClass("green");
        $("#grand").removeClass("yellow");
        $("#grand").removeClass("blue");
    } else if (nombreColor == "green") {
        $("#grand").removeClass("red");
        $("#grand").addClass("green");
        $("#grand").removeClass("yellow");
        $("#grand").removeClass("blue");
    } else if (nombreColor == "yellow") {
        $("#grand").removeClass("red");
        $("#grand").removeClass("green");
        $("#grand").addClass("yellow");
        $("#grand").removeClass("blue");
    } else {
        $("#grand").removeClass("red");
        $("#grand").removeClass("green");
        $("#grand").removeClass("yellow");
        $("#grand").addClass("blue");
    }
})