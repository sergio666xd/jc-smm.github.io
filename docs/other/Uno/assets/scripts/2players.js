namesP2 = [];
namesP2.length = 2;
pCant2 = namesP2.length-1;

function twoP(button,ctrl) {
    if (button == "two") {
        setTimeout(() => {
            document.querySelector(".turn").innerHTML = turn2;
            const textname = document.querySelector("#name");
            const right = document.querySelector("#right");
            const left = document.querySelector("#left");
            document.querySelector(".control-btns").innerHTML = ctrl;
            gameTwo();
            gameMode = "two";
            if (active == false) {
                if (newg == false) {
                    starting = true;
                    start(namesP2,2);
                } else {
                    document.querySelector("#startplay").innerHTML = "";
                    document.querySelector("#startplay").classList.add("darkS");
                    setTimeout(() => {
                        document.querySelector("#name").innerHTML = namesP2[posi];
                        nameNext(pCant2,namesP2);
                    }, 500);
                }
            } else {
                p2cantl = namesP2.length;
            }
            goBack(namesP2);
            setting(2);
            if (menu == true) {
                document.querySelector("#name").innerHTML = namesP2[posi];
            }
            $(".turn")
            colors();
        }, 1000);
    }
}

function next2() {
    if ($(".grand__img img").hasClass("rotate")) {
        if (posi == 0) {
            posi = pCant2;
        } else {
            posi = posi - 1;
        }
    } else {
        if (posi == pCant2) {
            posi = 0;
        } else {
            posi = posi + 1;
        }
    }
    nextName(namesP2,pCant2);
}

function gameTwo() {
    $("#change").click(function () {
        document.querySelector("#history").innerHTML += "<span>Cambio de sentido por "+ namesP2[posi]+"</span><br><hr>";
        if ($(".grand__img img").hasClass("rotate")) {
            $(".grand__img img").removeClass("rotate");
            $(".grand__img img").addClass("rotateNo");
        } else {
            $(".grand__img img").removeClass("rotateNo");
            $(".grand__img img").addClass("rotate");
        }
        // rotate.classList.toggle("rotate");
        setTimeout(() => {
            if ($(".grand__img img").hasClass("rotate")) {
                arrowleft();
            } else {
                arrowright();
            }
        }, 500)
        changeName(namesP2,pCant2);
    });
    
    $("#next").click(function () {
        document.querySelector("#history").innerHTML += "<span>Turno de "+ namesP2[posi]+"</span><br><hr>";
        next2();
    }); 
    
    $("#ban").click(function () {
        blocked(nn,namesP2[posi])
        if ($(".grand__img img").hasClass("rotate")) {
            if (posi == 0) {
                posi = pCant2-1;
            } else if (posi == 1) {
                posi = pCant2;
            } else {
                posi = posi - 2;
            }
        } else {
            if (posi == pCant2) {
                posi = 1;
            } else if (posi == (pCant2-1)) {
                posi = 0;
            } else {
                posi = posi + 2;
            }
        }
        nextName(namesP2,pCant2);
    });
}