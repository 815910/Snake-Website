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
const width = pxWidth/3;
const height = pxHeight/4;
//Sets the scale and number of rows and columns
const scale = 10;
const rows = height/scale;
const columns = width/scale;
//Instaniate all objects
var snake = new Array();
snake.push(new Snake());
var apple = new Apple();

var eaten = false;
var eatenOne = false;
var direction = null;
var die = false;
var score = 0;

//*******MAKE SCORE

(function setup() {
  drawGrid();
  snake[0].setX(150);
  snake[0].setY(70);
  apple.setRandomLocation();
  apple.drawApple();
  snake[0].drawSnake(snake);
}())

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


function showScore() {
  ctx.fillStyle = "#000";
  ctx.font = "10px sans-serif";
  ctx.fillText("Score: " + score, 10, 10);
}


//Checks if arrow keys are pressed and moves snake in that direction
window.addEventListener('keydown', ((e) =>{
  if(e.key == 'ArrowUp'){
      snake[0].changeDirection(snake, 'Up');
      direction = 'Up';
  }
  else if(e.key == 'ArrowDown'){
      snake[0].changeDirection(snake, 'Down');
      direction = 'Down';
  }
  else if(e.key == 'ArrowLeft'){
      snake[0].changeDirection(snake, 'Left');
      direction = 'Left'
  }
  else if(e.key == 'ArrowRight'){
      snake[0].changeDirection(snake, 'Right');
      direction = 'Right'
  }
}))

//Reocurring loop (runs every 150 ms)
update = window.setInterval(() =>  {
  ctx.clearRect(0, 0, width, height);
  drawGrid();
  showScore();
  snake[0].move(snake);
  snake[0].checkDie(snake);
  apple.checkEaten(snake);
  apple.moveApple(eaten);
  apple.drawApple();
  snake[0].drawSnake(snake);
  console.log(score);
}, 150);
