function clock(){
var a = new Date();
var b = a.getHours();
var c = a.getMinutes();
var d = a.getSeconds();
var e = a.getMillieconds();
if (b < 10){
  b = "0" + b;
}
if (c < 10) {
  c = "0" + c;
}
if (d < 10){
  d = "0" + d;
}
if(e < 10){
  e = "0" + e;
}

document.getElementById("hours").innerHTML =  b;
document.getElementById("minutes").innerHTML =  ": " + c;
document.getElementById("seconds").innerHTML =  ": " + d;
document.getElementById("milliSeconds").innerHTML = ": " + e;
}
setInterval(clock , 1);
function signup(){
document.getElementById("signup").style.display = "block"
}
function login(){
document.getElementById("login").style.display = "block";
document.getElementById("signup").style.display = "none";
}
