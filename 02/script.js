// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

// hier kun je op de canvas tekenen

function drawCircle()
{
    context.beginPath();
    context.fillStyle = "yellow";
    context.arc(Randomsomething(width), Randomsomething(height), 35, 0, Math.PI*2);
    context.stroke();
    context.fill();
    context.closePath();
}

function Randomsomething(max)
{
    return Math.floor(Math.random()*max);
}



for(let i = 0; i < 100; i++){
    drawCircle();
}