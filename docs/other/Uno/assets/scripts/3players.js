namesP3 = [];
namesP3.length = 3;
pCant3 = namesP3.length-1;

function threeP(button,ctrl) {
    if (button == "three") {
        setTimeout(() => {
            const textname = document.querySelector("#name");
            const right = document.querySelector("#right");
            const left = document.querySelector("#left");
            document.querySelector(".control-btns").innerHTML = ctrl;
            gameThree();
			goBack(namesP3);
        }, 1000);
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

function gameThree() {
    $("#change").click(function () {
        $(".grand__img img").toggleClass("rotate");
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
        if (namesP3[0]==undefined) {
            names(namesP3);
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
    }); 
    
    $("#ban").click(function () {
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