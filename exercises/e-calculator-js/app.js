document.addEventListener.addEventListener("submit", function(e){
    e.preventDefault();
    var add1 = document.add.add1.value;
    var add2 = document.add.add2.value;

    document.getElementById("display").innerHTML = Number(add1) + Number(add2);
})

document.addEventListener.addEventListener("submit", function(e){
    e.preventDefault();
    var sub1 = document.subtract.sub1.value;
    var sub2 = document.subtract.sub2.value;

    document.getElementById("display").innerHTML = Number(sub1) - Number(sub2);
})
//*must put Number because the a string, so you do not confuse with concat + when adding

document.addEventListener.addEventListener("submit", function(e){
    e.preventDefault();
    var mult1 = document.multiply.mult1.value;
    var mult2 = document.multiply.mult2.value;

    document.getElementById("display").innerHTML = Number(mult1) * Number(mult2);
})

// row 14  removed 

//You are going to create a simple calculator that can Add, Subtract, and Multiply.

//You will have one section (<div>) for each math operation:  div1-add, div2-sub, div3-mult
//Each section has two inputs to take the first and second numbers:  num1 & num2
//Each section will have a button to perform the operation:  <button>equals</button>
//You will inject the result into the HTML (not an alert):  
//<input> name="add1" type="number" placeholder="First Number"</input> 
//<input> name="add2" tupe="num,ber" placeholder="Second Number"</input>
//Your website will have 3 colors:  assign to css & create <div's in html to line up in css (ex:  <div class="inputs"
//, h1, #calc)
//Your website will have proper padding/spacing to lay things out nicely:  add to #addition, #subtraction



















// document.add.addEventListener(“submit”, function (e){
//     e.preventDefault();
//     var add1 = document.add.add1.value;
//     var add2 = document.add.add2.value;
 
//     document.getElementById(“screen”).innerHTML = Number(add1) + Number(add2);
 
//  })
 
//  document.subtract.addEventListener(“submit”, function (e){
//     e.preventDefault();
//     var sub1 = document.subtract.sub1.value;
//     var sub2 = document.subtract.sub2.value;
 
//     document.getElementById(“screen”).innerHTML = Number(sub1) - Number(sub2);
 
//  })
 
//  document.multiply.addEventListener(“submit”, function (e){
//     e.preventDefault();
//     var mult1 = document.multiply.mult1.value;
//     var mult2 = document.multiply.mult2.value;
 
//     document.getElementById(“screen”).innerHTML = Number(mult1) * Number(mult2);
 
//  })