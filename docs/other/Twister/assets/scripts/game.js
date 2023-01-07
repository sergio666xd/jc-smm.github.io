function nextMove() {
    part = getRandomInt(2);
    side = getRandomInt(2);
    color = getRandomInt(4);
    step = part.toString()+side.toString();
    if ($('#'+step).hasClass(color)) {
        nextMove(); 
    } else {
        show = document.getElementById(step);
        show.innerHTML = colorsT[color];
        removeclasscolor();
        document.getElementById(step).classList.add(color);
    }
}
function removeclasscolor() {
    document.getElementById(step).classList.remove(0)
    document.getElementById(step).classList.remove(1)
    document.getElementById(step).classList.remove(2)
    document.getElementById(step).classList.remove(3)
}