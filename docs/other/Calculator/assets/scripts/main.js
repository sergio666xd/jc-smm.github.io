replace = true;
operator = NaN;
newC = true;

$(document).ready(() => {
    $(() => {
        document.addEventListener('keydown', (event) => {
            tecla = event.key;
            if (tecla >= 0 & tecla <= 9) {
                if (tecla != "\t" & tecla != ' ') {
                    addNumber(Number(tecla));
                }
            } else if (tecla == "/" || tecla == "*" || tecla == "-" || tecla == "+") {
                operation(tecla)
            } else if (tecla == "Enter") {
                result();
            } else if (tecla == "Backspace") {
                backSpace();
            }
        }, false);

        $("nav").delegate("input", "click", function () {
            if ($(this).hasClass("num") == true) {
                addNumber($(this).attr("id"))
            } else if ($(this).hasClass("sim") == true) {
                operation($(this).attr("id"));
            } else if ($(this).is("#CE")) {
                document.querySelector("#topLCD").innerHTML = "";
            } else if ($(this).is("#C")) {
                document.querySelector("#bottomLCD").innerHTML = "";
            } else if ($(this).is("#res")) {
                result();
            } else if ($(this).is("#dec")) {
                document.querySelector("#bottomLCD").innerHTML += "."
            }

        });
        $("#del").click(function () {
            backSpace()
        });
        function operation(op) {
            if (op == "/" || op == "*" || op == "-" || op == "+") {
                switch (op) {
                    case "/":
                        op = "div"
                        break;
                    case "*":
                        op = "mul"
                        break;
                    case "-":
                        op = "min"
                        break;
                    case "+":
                        op = "mor"
                        break;

                    default:
                        break;
                }
            }
            a = Number(document.querySelector("#bottomLCD").innerHTML);
            document.querySelector("#topLCD").innerHTML = "";
            document.querySelector("#topLCD").innerHTML += document.querySelector("#bottomLCD").innerHTML;
            document.querySelector("#topLCD").innerHTML += (" " + $("#" + op).attr("value"));
            operator = op;
            replace = true;
        }
        function result() {
            if (newC == true) {
                b = Number(document.querySelector("#bottomLCD").innerHTML);
            } else {
                a = Number(document.querySelector("#bottomLCD").innerHTML);
                document.querySelector("#topLCD").innerHTML = "";
                document.querySelector("#topLCD").innerHTML += document.querySelector("#bottomLCD").innerHTML;
                document.querySelector("#topLCD").innerHTML += (" " + $("#" + operator).attr("value"));
                document.querySelector("#topLCD").innerHTML += (" " + b);
            }
            switch (operator) {
                case "div":
                    if (newC == true) {
                        document.querySelector("#topLCD").innerHTML += (" " + document.querySelector("#bottomLCD").innerHTML);
                    }
                    document.querySelector("#bottomLCD").innerHTML = (a / b);
                    break;
                case "mul":
                    if (newC == true) {
                        document.querySelector("#topLCD").innerHTML += (" " + document.querySelector("#bottomLCD").innerHTML);
                    }
                    document.querySelector("#bottomLCD").innerHTML = (a * b);
                    break;
                case "min":
                    if (newC == true) {
                        document.querySelector("#topLCD").innerHTML += (" " + document.querySelector("#bottomLCD").innerHTML);
                    }
                    document.querySelector("#bottomLCD").innerHTML = (a - b);
                    break;
                case "mor":
                    if (newC == true) {
                        document.querySelector("#topLCD").innerHTML += (" " + document.querySelector("#bottomLCD").innerHTML);
                    }
                    document.querySelector("#bottomLCD").innerHTML = (a + b);
                    break;

                default:
                    break;
            }

            newC = false;
            replace = true;
        }
        function backSpace() {
            newC = true;
            var alfa = document.querySelector("#bottomLCD");
            alfa.innerHTML = alfa.innerHTML.slice(0, alfa.innerHTML.length - 1);
        }
        function addNumber(num) {
            newC = true;
            if (replace == true) {
                document.querySelector("#bottomLCD").innerHTML = num;
                replace = false;
            } else if (replace == false) {
                if (document.querySelector("#bottomLCD").innerHTML == "0") {
                    document.querySelector("#bottomLCD").innerHTML = num;
                } else {
                    document.querySelector("#bottomLCD").innerHTML += num;
                }
            }
        }
    });
});