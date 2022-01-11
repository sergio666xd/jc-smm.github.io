namesP2 = [];
namesP2.length = 2;
pCant2 = namesP2.length-1;

function twoP(button,ctrl) {
    if (button == "two") {
        setTimeout(() => {
            const textname = document.querySelector("#name");
            const right = document.querySelector("#right");
            const left = document.querySelector("#left");
            document.querySelector(".control-btns").innerHTML = ctrl;
            gameTwo();
			goBack(namesP2);
        }, 1000);
    }
}

function gameTwo() {
    $("#change").click(function () {
        $(".grand__img img").toggleClass("rotate");
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
        if (namesP2[0]==undefined) {
            names(namesP2);
            posi = 0;
            nextName(namesP2,pCant2);
        } else {
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