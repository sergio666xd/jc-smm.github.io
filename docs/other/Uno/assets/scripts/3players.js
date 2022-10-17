active = false;

function threeP(button,ctrl) {
    if (button == "three") {
        setTimeout(() => {
            document.querySelector(".turn").innerHTML = turn3;
            const textname = document.querySelector("#name");
            const right = document.querySelector("#right");
            const left = document.querySelector("#left");
            document.querySelector(".control-btns").innerHTML = ctrl;
            gameThree();
            if (active == false) {
                goBack(namesP3);
                if (newg == false) {
                    setnames();
                }
            } else {
                p3cantl = namesP3.length;
            }
            setting(3);
            if (menu == true) {
                document.querySelector("#name").innerHTML = namesP3[posi];
            }
            colors();
        }, 1000);
    }
}
function setnames() {
    p3cantl = prompt("Número de Jugadores:");
    if (p3cantl == 2) {
        twoP("two",controlBtns);
        gameMode = "two";
    } else if (p3cantl){
        namesP3.length = p3cantl;
        names(namesP3);
        pCant3 = p3cantl-1;
        active = true;
    }
}

function negative3() {
    if (posi == pCant3) {
        posi = posi - 1;
    } else if (posi == 0) {
        posi = pCant3;
    } else {
        posi = posi - 1;
    }
}
function positive3() {
    if (posi == pCant3) {
        posi = 0;
    } else if (posi == 0) {
        posi = posi + 1;
    } else {
        posi = posi + 1;
    }
}

function arrowright() {
    right.innerHTML = '<i class="fas fa-arrow-right"></i>';
    left.innerHTML = '';
}
function arrowleft() {
    left.innerHTML = '<i class="fas fa-arrow-left"></i>';
    right.innerHTML = '';
}

function next3() {
    backName(namesP3[posi]);
    if (namesP3[0]==undefined) {
        posi = 0;
        nextName(namesP3,pCant3);
    } else {
        if ($(".grand__img img").hasClass("rotate")) {
            if (posi == 0) {
                posi = pCant3;
            } else {
                posi = posi - 1;
            }
        } else {
            if (posi == pCant3) {
                posi = 0;
            } else {
                posi = posi + 1;
            }
        }
        nextName(namesP3,pCant3);
    }
}

function gameThree() {
    $("#change").click(function () {
        backName(namesP3[posi]);
        document.querySelector("#history").innerHTML += "<span>Turno de "+ namesP3[posi]+": Ha cambiado el sentido</span><br><hr>";
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
                negative3();
            } else {
                arrowright();
                positive3();
            }
        }, 500)
        changeName(namesP3,pCant3);
    });
    
    $("#next").click(function () {
        document.querySelector("#history").innerHTML += "<span>Turno de "+ namesP3[posi]+"</span><br><hr>";
        next3();
    }); 
    
    $("#ban").click(function () {
        backName(nn);
        blocked(nn,namesP3[posi])
        if ($(".grand__img img").hasClass("rotate")) {
            if (posi == 0) {
                posi = pCant3-1;
            } else if (posi == 1) {
                posi = pCant3;
            } else {
                posi = posi - 2;
            }
        } else {
            if (posi == pCant3) {
                posi = 1;
            } else if (posi == (pCant3-1)) {
                posi = 0;
            } else {
                posi = posi + 2;
            }
        }
        nextName(namesP3,pCant3);
    });
}