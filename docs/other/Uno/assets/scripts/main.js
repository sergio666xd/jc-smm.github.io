posi = 1;
controlBtns = '<button class="btn btn-primary mt-3" id="change"><i class="fas fa-exchange-alt"></i> Cambiar sentido</button><button class="btn btn-success mt-3" id="next"><span id="left"></span> <span id="text"> Siguiente </span> <span id="right"><i class="fas fa-arrow-right"></i></span></button><button class="btn btn-danger mt-3" id="ban"><i class="fas fa-ban"></i> Bloqueo</button>';

$('#game').load('./assets/game/1select.html');
$(document).ready(() => {
	$("div").delegate("button", "click", function () {
		button = $(this).attr("id");
		if (button=="two"||button=="three") {
			$('#game').load('./assets/game/play.html');
		}
		if (button == "two") {
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

function goBack() {
	$("#back").click(function () {
		$("#game").load("./assets/game/1select.html");
	})
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