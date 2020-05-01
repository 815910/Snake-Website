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
var snake = new Array();
snake.push(new Snake());
var apple = new Apple();

var eaten = false;
var eatenOne = false;
var direction = null;
var die = false;
var score = 0;
var colorSetting = 0;
var snakeColor = "#0000cc";
var appleColor = "red";

//*******MAKE SCORE

function setup() {
  drawGrid();
  snake[0].setX(150);
  snake[0].setY(70);
  snake[0].setXSpeed(0);
  snake[0].setYSpeed(0);
  apple.setRandomLocation();
  apple.drawApple(appleColor);
  snake[0].drawSnake(snake, snakeColor);
}

//Draws a grid with (scale, scale) as the box size
function drawGrid() {
  var i;
  //Draws rows
  for(i = 0; i < rows; i++){
      ctx.beginPath();
      ctx.lineWidth = ".5";
      ctx.strokeStyle = "black";
      ctx.moveTo(0, scale*(i+1)+0.5);
      ctx.lineTo(width, scale*(i+1)+0.5);
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

function resetGame() {

    window.clearInterval(update);
    snake[0].resetSnake(snake);
    ctx.clearRect(0, 0, width, height);
    canvas.style.opacity = "1";
    score = 0;
    this.setup();
    console.log(snake[0].getX());
    console.log(snake[0].getY());
    update = window.setInterval(runGame, 150);

}

function changeColor() {
  if(colorSetting == 2){
    colorSetting = 0;
  }
  else
  colorSetting++;
  switch(colorSetting){
    case 0:
      document.body.style.background = "#FB9898";
      document.getElementById("resetButton").style.backgroundColor = "#008000";
      document.getElementById("colorButton").style.backgroundColor = "#008000";
      document.getElementById("canvas").style.backgroundColor = "#008000";
      snakeColor = "#0000cc";
      appleColor = "red";
      break;
    case 1:
      document.body.style.background = "#599bff";
      document.getElementById("resetButton").style.backgroundColor = "#ffbd59";
      document.getElementById("colorButton").style.backgroundColor = "#ffbd59";
      document.getElementById("canvas").style.backgroundColor = "#ffbd59";
      snakeColor = "#990000";
      appleColor = "yellow";
      break;
    case 2:
      document.body.style.background = "#ff7bd5";
      document.getElementById("resetButton").style.backgroundColor = "#7bffa5";
      document.getElementById("colorButton").style.backgroundColor = "#7bffa5";
      document.getElementById("canvas").style.backgroundColor = "#7bffa5";
      snakeColor = "#006600";
      appleColor = "#c02eff";
      break;
  }


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

setup();
function runGame(){
  ctx.clearRect(0, 0, width, height);
  drawGrid();
  snake[0].move(snake);
  snake[0].checkDie(snake);
  apple.checkEaten(snake);
  apple.moveApple(eaten);
  apple.drawApple(appleColor);
  snake[0].drawSnake(snake, snakeColor);
  document.getElementById("score").innerHTML = 'Score: '+score;
  console.log(score);
}

//Reocurring loop (runs every 150 ms)
update = window.setInterval(runGame, 150);
