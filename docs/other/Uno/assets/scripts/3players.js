posi = 1;
namesP3 = ["Aleja", "Sergio", "Eunice"];
pCant = namesP3.length-1;

$("div").delegate("button", "click", function () {
    button = $(this).attr("id");
    buttonh = $(this).attr("id")+": "+$(this).attr("value");
    document.querySelector("#alertDiv").innerHTML += buttonh + "<hr>";
    if (button == "three") {
        setTimeout(() => {
            const textname = document.querySelector("#name");
            const right = document.querySelector("#right");
            const left = document.querySelector("#left");
            textname.innerHTML = namesP3[posi];
        }, 1000);
    }
});

function negative() {
    if (posi == pCant) {
        posi = posi - 1;
    } else if (posi == 0) {
        posi = pCant;
    } else {
        posi = posi - 1;
    }
}
function positive() {
    if (posi == pCant) {
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
    }, 500);
}
function nextName() {
    document.querySelector("#name").innerHTML = namesP3[posi];
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
//             posi = pCant;
//         } else {
//             posi = posi - 1;
//         }
//     } else {
//         if (posi == pCant) {
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
            posi = pCant;
        } else {
            posi = posi - 1;
        }
    } else {
        if (posi == pCant) {
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
            posi = pCant-1;
        } else if (posi == 1) {
            posi = pCant;
        } else {
            posi = posi - 2;
        }
    } else {
        if (posi == pCant) {
            posi = 1;
        } else if (posi == (pCant-1)) {
            posi = 0;
        } else {
            posi = posi + 2;
        }
    }
    nextName();
});