const boardElement = document.getElementById( 'board');
const ctx = boardElement.getContext('2d');
let boardSize = 250;
boardElement.width = boardSize;
boardElement.height = boardSize;

var delay = 100; // how many ms between frames
var lastTime = 0;

var mouse =
{
    x : 0,
    y : 0
}

window.onload = function()
{  
    animate();
}

window.addEventListener("keydown", keyPressed);
function keyPressed(event)
{

}

window.addEventListener("mousemove", mousemovement);
function mousemovement(event)
{
    mouse.x = event.offsetX;
    mouse.y = event.offsetY;

    // to write position of mouse in top left corner //
    // let mousePos = mouse.x.toString() + " , " + mouse.y.toString();
    // ctx.clearRect(0, 0, 200, 30);
    // ctx.font = "16px courier";
    // ctx.fillStyle = "red";
    // ctx.fillText(mousePos, 5, 15); // top corner
}

function draw()
{

}

function update()
{
    
}

function animate()
{
    let currentTime = Date.now();
    let deltaTime = currentTime - lastTime;

    if (deltaTime >= delay)
    {
        lastTime = currentTime;
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        update();
        draw();
    }
    requestAnimationFrame(animate);
}