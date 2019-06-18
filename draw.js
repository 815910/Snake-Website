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

//Draws a grid with (scale, scale) as the box size
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
      ctx.moveTo(scale*(i+1), 0);
      ctx.lineTo(scale*(i+1), height);
      ctx.stroke();
  }
}
drawGrid();
snake.setX(150);
snake.setY(70);
snake.drawSnake();

//Checks if arrow keys are pressed and moves snake in that direction
window.addEventListener('keydown', ((e) =>{
  if(e.key == 'ArrowUp'){
      snake.changeDirection('Up');
  }
  else if(e.key == 'ArrowDown'){
      snake.changeDirection('Down');
  }
  else if(e.key == 'ArrowLeft'){
      snake.changeDirection('Left');
  }
  else if(e.key == 'ArrowRight'){
      snake.changeDirection('Right');
  }


 }))

window.setInterval(() =>  {
  ctx.clearRect(0, 0, width, height);
  drawGrid();
  snake.move();
  snake.drawSnake();
}, 150);
