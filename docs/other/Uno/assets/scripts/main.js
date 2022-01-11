$('#game').load('./assets/game/1select.html');
$(document).ready(() => {
	$("div").delegate("button", "click", function () {
		button = $(this).attr("id");
		if (button == "two") {
			$('#game').load('./assets/game/2players.html');
		} else if (button == "three") {
			$('#game').load('./assets/game/3players.html');
		}
	});
	// two.addEventListener("click", function (){
	// $('#game').load('./assets/game/2players.html');
	// });
	// three.addEventListener("click", function (){
	// });
});


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