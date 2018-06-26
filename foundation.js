function clock(){
var a = new Date();
var b = a.getHours();
var c = a.getMinutes();
var d = a.getSeconds();
if (b < 10){
  b = "0" + b;
}
if (c < 10) {
  c = "0" + c;
}
if (d < 10){
  d = "0" + d;
}

document.getElementById("hours").innerHTML =  b;
document.getElementById("minutes").innerHTML =  ": " + c;
document.getElementById("seconds").innerHTML =  ": " + d;
}
setInterval(clock , 1000);
function signup(){
document.getElementById("signup").style.display = "block"
}
function login(){
document.getElementById("login").style.display = "block";
document.getElementById("signup").style.display = "none";
}
