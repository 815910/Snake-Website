//Instaniate all variables
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
//Width and height of canvas
const width = 500;
const height = 500;
//Sets width and height of canvas to width and height variables
canvas.style.setProperty('--canvas-width', width + 'px');
canvas.style.setProperty('--canvas-height', height + 'px');
//Sets the scale and number of rows and columns
const scale = 10;
const rows = width/scale;
const columns = height/scale;
//Instaniate all objects
var snake = new Snake();


function drawGrid() {
  var i;
  // for(i = 0; i < (rows/scale); i++){
  //   ctx.beginPath();
  //   ctx.lineWidth = "3";
  //   ctx.moveTo(scale*(i+1), 0);
  //   ctx.lineTo(height, scale*(i+1));
  //   ctx.stroke();
  // }

  // ctx.beginPath();
  //  ctx.lineWidth = ".5";
  //  ctx.moveTo(50, 0);
  //  ctx.lineTo(height, 50);
  //  ctx.stroke();

}

function draw() {
  snake.drawSnake();
  drawGrid();
  console.log(rows);
}

draw();


// function move() {
//
// }
