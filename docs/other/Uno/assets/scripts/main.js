let name = ["Aleja", "Sergio", "Eunice"];

const change = document.querySelector("#change");
const rotate = document.querySelector(".grand__img img");
const next = document.querySelector("#next");
const textname = document.querySelector("#name")

let right = false;
let posi = 2;

$(document).ready(function (){
				textname.innerHTML = name[posi];
});

function negative() {
				if (posi == 2) {
								posi = 0;
				}else {
								posi = posi - 1;
				}
}																												

function changeName() {
				textname.innerHTML = name[posi];
}
function nextName() {
				textname.innerHTML = name[posi];
}

change.addEventListener("click", ()=>{
				rotate.classList.toggle("rotate");
				setTimeout(()=>{
								if (rotate.classList.contains("rotate")) {
								negative();
				}else {
								posi = posi + 1;
				}
				}, 500)
				changeName();
});

next.addEventListener("click", ()=>{
				if (rotate.classList.contains("rotate")) {
								posi = posi - 1;
				}else {
								posi = posi + 1;
				}
				nextName();
});
