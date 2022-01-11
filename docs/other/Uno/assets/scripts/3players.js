namesP3 = ["Aleja", "Sergio", "Eunice"];
pCant3 = namesP3.length-1;

function threeP(button,ctrl) {
    if (button == "three") {
        setTimeout(() => {
            const textname = document.querySelector("#name");
            const right = document.querySelector("#right");
            const left = document.querySelector("#left");
            textname.innerHTML = namesP3[posi];
            nameNext();
            document.querySelector(".control-btns").innerHTML = ctrl;
            gameThree();
			goBack();
        }, 1000);
    }
}

function nameNext() {
    if ($(".grand__img img").hasClass("rotate")) {
        if (posi == 0) {
            posiN = pCant3;
        } else if (posi == 1) {
            posiN = 0;
        } else {
            posiN = posi - 1;
        }
    } else {
        if (posi == pCant3) {
            posiN = 0;
        } else if (posi == (pCant3-1)) {
            posiN = pCant3;
        } else {
            posiN = posi + 1;
        }
    }
    document.querySelector("#nextName").innerHTML = namesP3[posiN];
}

function negative() {
    if (posi == pCant3) {
        posi = posi - 1;
    } else if (posi == 0) {
        posi = pCant3;
    } else {
        posi = posi - 1;
    }
}
function positive() {
    if (posi == pCant3) {
        posi = 0;
    } else if (posi == 0) {
        posi = posi + 1;
    } else {
        posi = posi + 1;
    }
}

function changeName() {
    setTimeout(() => {
        document.querySelector("#name").innerHTML = namesP3[posi];
        nameNext()
    }, 500);
}
function nextName() {
    document.querySelector("#name").innerHTML = namesP3[posi];
    nameNext()
}

function arrowright() {
    right.innerHTML = '<i class="fas fa-arrow-right"></i>';
    left.innerHTML = '';
}
function arrowleft() {
    left.innerHTML = '<i class="fas fa-arrow-left"></i>';
    right.innerHTML = '';
}


// change.addEventListener("click", function () {
//     rotate.classList.toggle("rotate");
//     setTimeout(() => {
//         if (rotate.classList.contains("rotate")) {
//             arrowleft();
//             negative();
//         } else {
//             arrowright();
//             posi = posi + 1;
//         }
//     }, 500)
//     changeName();
// })

function gameThree() {
    $("#change").click(function () {
        let namesP3 = ["Aleja", "Sergio", "Eunice"];
        $(".grand__img img").toggleClass("rotate");
        // rotate.classList.toggle("rotate");
        setTimeout(() => {
            if ($(".grand__img img").hasClass("rotate")) {
                arrowleft();
                negative();
            } else {
                arrowright();
                positive();
            }
        }, 500)
        changeName();
    });
    
    // next.addEventListener("click", function () {
    //     if (rotate.classList.contains("rotate")) {
    //         if (posi == 0) {
    //             posi = pCant3;
    //         } else {
    //             posi = posi - 1;
    //         }
    //     } else {
    //         if (posi == pCant3) {
    //             posi = 0;
    //         } else {
    //             posi = posi + 1;
    //         }
    //     }
    //     nextName();
    // })
    
    $("#next").click(function () {
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
        nextName();
    }); 
    
    $("#ban").click(function () {
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
        nextName();
    });
}