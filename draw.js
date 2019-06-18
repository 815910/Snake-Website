//Instaniate all variables
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
//Pixel width and height of canvas(for CSS)
const pxWidth = 900;
const pxHeight = 600;
//Sets width and height of canvas to pixel width and height variables
canvas.style.setProperty('--canvas-width', pxWidth + 'px');
canvas.style.setProperty('--canvas-height', pxHeight + 'px');
//Real width and height
const width = 300;
const height = 150;
//Sets the scale and number of rows and columns
const scale = 10;
const rows = height/scale;
const columns = width/scale;
//Instaniate all objects
var snake = new Snake();


function drawGrid() {
  var i;
  //Draws rows
  for(i = 0; i < rows; i++){
      ctx.beginPath();
      ctx.lineWidth = ".5";
      ctx.strokeStyle = "black";
      ctx.moveTo(0, scale*(i+1));
      ctx.lineTo(width, scale*(i+1));
      ctx.stroke();
  }
  //Draws columns
  for(i = 0; i < columns; i++){
      ctx.beginPath();
      ctx.lineWidth = ".5";
      ctx.strokeStyle = "#000";
      ctx.moveTo(scale*(i+1)+0.5, 0);
      ctx.lineTo(scale*(i+1)+0.5, height);
      ctx.stroke();
  }



}

function draw() {
  snake.drawSnake();
  drawGrid();
  console.log(columns);
}

draw();


// function move() {
//
// }
