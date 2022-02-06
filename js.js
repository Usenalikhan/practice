document.body.style.backgroundColor = "lightblue";

document.getElementById("li").innerHTML = " Year :  " + new Date().getFullYear()  +";" ;
document.getElementById("li1").innerHTML = " Today is :  " + new Date().getDate()+" day of week ;"  ;
document.getElementById("li2").innerHTML = " Date : " + new Date().getDate() +" day of month;";
document.getElementById("li3").innerHTML = " Month : " + new Date().getMonth() +" month;";
document.getElementById("li4").innerHTML = "Current time is : "+new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()+";";

var y = 2024 - new Date().getFullYear();
var m = 6 - new Date().getMonth() ;
var d1 = 30 - new Date().getDate();
var d = y*365 + m*30 + d1 ;


document.getElementById("left").innerHTML =  d +   " days left until the freedom!"  ;


var n1 = document.getElementById("n1");
var n2  = document.getElementById("n2");
var result = document.getElementById("result");

document.getElementById("mlt").addEventListener("click",function(){result.value = parseInt(n1.value)*parseInt(n2.value);});
document.getElementById("dvd").addEventListener("click",function(){result.value = parseInt(n1.value)/parseInt(n2.value);});
