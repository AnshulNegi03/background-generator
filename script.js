var css= document.querySelector("h3");
var color1= document.querySelector(".color1");
var color2= document.querySelector(".color2");
var body= document.querySelector("body");
body.style.background="linear-gradient(to right,"+ color1.value+","+color2.value+")";
css.textContent = body.style.background + ";";
function create(){
	body.style.background="linear-gradient(to right,"+ color1.value+","+color2.value+")";
	css.textContent = body.style.background + ";";
}
color1.addEventListener("input",create);

color2.addEventListener("input",create);