//btn is eventlistenter, store it w/var
//get element from html using getElementById and call it square
//btn or window can be used - depending on where in the page the function to run
var btn = document.getElementById("square")
console.log(btn)
//btn or use event.code, then use if (event.code === "Keyf"), console.log(')

//CALL eventListener & instruct eventListener w a function-tell it what to do:
//Blue when the mouse HOOVERS
btn.addEventListener("mouseover", function(){
    btn.style.backgroundColor = 'blue'
})

//Red when the mouse button is HELD DOWN over the square
btn.addEventListener("mousedown", function(){
    btn.style.backgroundColor = 'red'
})

//Yellow when the mouse button is let go over the square
btn.addEventListener("mouseout", function(){
    btn.style.backgroundColor = 'yellow'
})

//Green when the mouse is double clicked in the square
btn.addEventListener("dblclick", function(){
    btn.style.backgroundColor = 'green'
})

//Orange when the mouse scroll is used somewhere in the window (not just over the square).
window.addEventListener("wheel", function(){
    btn.style.backgroundColor = 'orange'
})

//Notes:
//HTML-create <div w id="name it what you are creating EX: square">
//    </head><body><div id="square"></div></body>
//    add <script src= > & set it = to app.js <script src="app.js"></script>
//    <script> can be placed in body or head section of html
//CSS-create box - set it equal to the id you set it in html (id="square").
//    size/color it in CSS, give it h,w,bg color
//    add padding in body-box on page
//JS-add eventListener - set it as var
//  call the var BTN & assign it to ‘ADD EVENT LISTENER w a function






