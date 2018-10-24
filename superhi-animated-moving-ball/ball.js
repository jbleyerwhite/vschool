
const ball = document.querySelector("div.ball")

let mouseX = 0
let mouseY = 0

let ballX = 0
let ballY = 0

let speed = 0.2

function animate() {
    let distX = mouseX - ballX
    let distY = mouseY - ballY

    ballX = ballX + (distX * speed)
    ballY = ballY + (distY * speed)
    // find where you currenty are - then find some of the distance
    // loop over & over again
    // wor out the distance where mouse & ball is currently
    // then, update th balls position, & some distance

    ball.style.left = ballX + "px"
    ball.style.top = ballY + "px"

    requestAnimationFrame(animate)
}

animate()