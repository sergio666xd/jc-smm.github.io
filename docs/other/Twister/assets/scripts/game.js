function nextMove() {
    if (testmode == true) {
        console.log("Función nextMove() iniciada");
        out = 20;
    } else {
        animation();
        out = 3000;
    }
    setTimeout(() => {
        maxTurn = false;
        o=0
        if (testmode == true) {
            console.log("-Inicio selección");
        }
        for (i = 0; i < stepTurn.length; i++) {
            stepTurn[i] = stepTurn[i] + 1;
            if (stepTurn[i]==5) {
                maxTurn = true;
                maxTurnN = i;
            }
        }
        if (maxTurn == true) {
            step1 = arrayToStep(maxTurnN);
        } else {
            part = getRandomInt(2);
            side = getRandomInt(2);
            step1 = part.toString()+side.toString();
            while (step1 == step) {
                if (testmode == true) {
                    console.log("--Selección repetida");
                }
                part = getRandomInt(2);
                side = getRandomInt(2);
                step1 = part.toString()+side.toString();
            }
        }
        step = step1;
        if (testmode == true) {
            console.log("-Step seleccionado: "+step);
        }
        if (testmode == true) {
            console.log("-Selección Color");
        }
        color1 = color;
        color = getRandomInt(descartarLleno());
        while ($('#'+step).hasClass(colorsAvaiables[color])) {
            if (testmode == true) {
                console.log("-Color repetido: "+colorsAvaiables[color]+" en "+step);
            }
            color = getRandomInt(descartarLleno());
        }
        color = realColor(colorsAvaiables[color]);
        if (testmode == true) {
            console.log("-Color seleccionado: "+color);
        }
        if (testmode == true) {
            console.log("-Mostrando tabla");
        }
        $("#"+step).removeClass();
        show = document.getElementById(step);
        show.innerHTML = colorsT[color];
        if (testmode == true) {
            console.log("-Tabla Actualizada");
        }
        if (testmode == true) {
            console.log("-Preparando Notificación");
        }
        document.getElementById(step).classList.add(colorsT[color]);
        message = partT[part]+" "+sideName(part,side)+" <b>"+colorsT[color]+"</b>";
        notification(true,message,picture(step,color,message),colorToType(colorsT[color]));
        message = "";
        if (testmode == true) {
            console.log("-Notificación Mostrada");
        }
        if (testmode == true) {
            console.log("-Actualizando contadores");
        }
        posST = stepToArray(step);
        if (color != undefined) {
            colorT[stepCT[posST]] = colorT[stepCT[posST]]-1;
            stepCT[posST] = color;
        }
        stepTurn[posST] = 0;
        colorT[color] = colorT[color]+1;
        descartarLleno();
        if (testmode == true) {
            console.log("-Contadores actualizados");
        }
        if (testmode == true) {
            console.log("Función nextMove() terminada");
        }
    }, out);
}
function realColor(color) {
    if (testmode == true) {
        console.log("--Función realColor() iniciada");
    }
    if (color == "Amarillo") {
        rc = 0;
    } else if (color == "Azul") {
        rc = 1;
    } else if (color == "Rojo") {
        rc = 2;
    } else if (color == "Verde") {
        rc = 3;
    }
    if (testmode == true) {
        console.log("---"+color+"->"+rc)
        console.log("--Función realColor() terminada");
    }
    return rc;
}
function colorToType(color) {
    if (testmode == true) {
        console.log("--Función colorToType() iniciada");
    }
    if (color == "Amarillo") {
        ctt = "warning";
    } else if (color == "Azul") {
        ctt = "primary";
    } else if (color == "Rojo") {
        ctt = "danger";
    } else if (color == "Verde") {
        ctt = "success";
    }
    if (testmode == true) {
        console.log("---"+color+"->"+ctt)
        console.log("--Función colorToType() terminada");
    }
    return ctt;
}
function sideName(part,side) {
    if (testmode == true) {
        console.log("--Función sideName() iniciada");
    }
    if (part == 0) {
        if (side == 0) {
            sn = "Izquierda";
        } else {
            sn = "Derecha";
        }
    } else if (part == 1) {
        if (side == 0) {
            sn = "Izquierdo";
        } else {
            sn = "Derecho";
        }
    }
    if (testmode == true) {
        console.log("---"+part+side+"->"+sn);
        console.log("--Función sideName() terminada");
    }
    return sn;
}
function stepToArray(step) {
    if (testmode == true) {
        console.log("--Función stepToArray() iniciada");
    }
    if (step == "00") {
        sta = 0;
    }
    if (step == "01") {
        sta = 1;
    }
    if (step == "10") {
        sta = 2;
    }
    if (step == "11") {
        sta = 3;
    }
    if (testmode == true) {
        console.log("---"+step+"->"+sta)
        console.log("--Función stepToArray() terminada");
    }
    return sta;
}
function arrayToStep(arr) {
    if (testmode == true) {
        console.log("--Función arrayToStep() iniciada");
    }
    if (arr == 0) {
        ats = "00";
    }
    if (arr == 1) {
        ats = "01";
    }
    if (arr == 2) {
        ats = "10";
    }
    if (arr == 3) {
        ats = "11";
    }
    if (testmode == true) {
        console.log("---"+arr+"->"+ats)
        console.log("--Función arrayToStep() terminada");
    }
    return ats;
}
function descartarLleno() {
    if (testmode == true) {
        console.log("--Función descartarLleno() iniciada");
    }
    a = 0;
    colorsAvaiables = [];
    for (i = 0; i < colorT.length; i++) {
        if (colorT[i]<2) {
            colorsAvaiables[a] = colorsT[i];
            a = a+1
        }
    }
    if (testmode == true) {
        console.log("---Nombres: "+colorsT);
        console.log("---Contador colores: "+colorT);
        console.log("---Posición colores: "+stepCT);
        console.log("---Disponibles: "+colorsAvaiables);
        console.log("--Función descartarLleno() terminada");
    }
    return colorsAvaiables.length;
}

function picture(step,color,name) {
    if (testmode == true) {
        console.log("--Función picture() iniciada");
    }
    if (testmode == true) {
        console.log("---"+name+".png ["+o+"]");
    }
    if (testmode == true) {
        console.log("--Función picture() terminada");
    }
    return '<img id="picture" src="./assets/img/'+step+color+'.png" alt="'+name+'">';
}

function animation() {
    if (testmode == true) {
        console.log("-Función animation() iniciada");
    }
    o=0;
    for (i = 0; i < 30; i++) {
        time = 100*i;
        setTimeout(() => {
            o=o+1
            p = getRandomInt(2);
            s = getRandomInt(2);
            c = getRandomInt(4);
            t = p+s.toString();
            n = t+c.toString();
            notification(false,"Espera",picture(t,c,n),colorToType(colorsT[c]),1);
        }, time);
    }
    if (testmode == true) {
        setTimeout(() => {
            console.log("-Función animation() terminada");
        }, 2990);
    }
}