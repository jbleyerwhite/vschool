var add = document.Add 
console.log(add)
add.addEventListener('submit', function(event){
    event.preventDefault();
    
    var num1 = add.num1.value
    var num2 = add.num2.value
    var sum = Number(num1) + Number(num2)
    console.log(sum)
})


var subtract = document.Sub

subtract.addEventListener('submit', function(event){
    event.preventDefault();
    
    var num1 = subtract.num1.value
    var num2 = subtract.num2.value
    var sum = Number(num1) - Number(num2)
    console.log(sum)
})


var multiply = document.Mult

multiply.addEventListener('submit', function(event){
    event.preventDefault();
    
    var num1 = multiply.num1.value
    var num2 = multiply.num2.value
    var sum = Number(num1) * Number(num2)
    console.log(sum)
})

//need to create “buttons” for inputting values 
//and a screen for displaying these values.
//a calculator is a table enclosed in a container. 
//tables are made of rows and columns with cells to contain table data.
