document.totalCaught.addEventListener("submit", function(e){
e.preventDefault()

//take input num  input name = name, form name, value
//calculate num coins
//total sum
//display num
//// var name inputName = document.formName, value
var goombas = document.totalCaught.Goombas.value;
var bobombs = document.totalCaught.Bobombs.value;
var cheepcheeps = document.totalCaught.Cheepcheeps.value;

document.getElementById("totalBox").innerHTML = Number(goombas) + Number(bobombs) + Number (cheepcheeps);
})



