document.totalCaught.addEventListener("submit", function(e){
e.preventDefault()

var goombas = document.totalCaught.Goombas.value;
var bobombs = document.totalCaught.Bobombs.value;
var cheepcheeps = document.totalCaught.Cheepcheeps.value;

document.getElementById("totalBox").innerHTML = Number(goombas) * 5 + Number(bobombs) * 7 + Number (cheepcheeps) * 11;
})




//take input num  input name = name, form name, value
//calculate num coins
//total sum
//display num
//// var name inputName = document.formName, value


//CSS:
//input {
    //width: auto;
    //height: auto;
    //padding:  10px;}