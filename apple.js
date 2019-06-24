function Apple() {
  this.x = 0;
  this.y = 0;


  //Draws a black square in one grid space at the x and y
  this.drawApple = function() {
    ctx.fillStyle = '#DC143C';
    ctx.fillRect(this.x, this.y, scale, scale);
  }

  this.moveApple = function(eaten) {
    if(eaten){
      this.setRandomLocation();
      eaten = false;
    }
  }

  this.setRandomLocation = function() {
    this.x = (Math.floor(Math.random()*30))*10;
    this.y = (Math.floor(Math.random()*15))*10;
  }

  this.checkEaten = function(snake) {
    if((snake[0].getX() == this.x) && (snake[0].getY() == this.y)){
      eatenOne = true;
      eaten = true;
      score++;
      snake[0].grow(snake, direction);
    }
    else {
      eaten = false;
    }
  }


  this.getX = function(){
    return this.x;
  }

  this.getY = function(){
    return this.y;
  }

  this.setX = function(newX){
    this.x = newX;
  }

  this.setY = function(newY){
    this.y = newY;
  }

}
