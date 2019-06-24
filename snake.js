function Snake() {
  this.x = 0;
  this.y = 0;
  this.xSpeed = 0;
  this.ySpeed = 0;
  this.snakeXLocations = new Array();
  this.snakeYLocations = new Array();

  //Draws a red colored snake at x, y, to the scale
  this.drawSnake = function(snake) {
    var i;
    ctx.fillStyle = '#0000cc';
    for(i = 0; i < snake.length; i++){
      ctx.strokeRect(snake[i].getX(), snake[i].getY(), scale, scale);
      ctx.fillRect(snake[i].getX(), snake[i].getY(), scale, scale);
    }
  }


  this.changeDirection = function(snake, dir) {
    var i;
    if(dir == 'Up' && this.ySpeed !== 10){

          snake[0].setXSpeed(0);
          snake[0].setYSpeed(-10);

      }
    else if(dir == 'Down' && this.ySpeed !== -10){

        snake[0].setXSpeed(0);
        snake[0].setYSpeed(10);

    }
    else if(dir == 'Left' && this.xSpeed !== 10){

        snake[0].setXSpeed(-10);
        snake[0].setYSpeed(0);

    }
    else if(dir == 'Right' && this.xSpeed !== -10){

        snake[0].setXSpeed(10);
        snake[0].setYSpeed(0);

    }


  }


  this.move = function(snake) {
    var i;

    if(eatenOne == true){
      this.oldXLocations(snake);
      this.oldYLocations(snake);
    }


    snake[0].setX(snake[0].getX() + snake[0].getXSpeed());
    snake[0].setY(snake[0].getY() + snake[0].getYSpeed());

    this.moveTail(snake, this.snakeXLocations, this.snakeYLocations);

}
    //Checks if snake ran into wall
    //****If length is greater than 1 snake will move into wall
    this.checkDie = function(snake) {
    //Right
    if(snake[0].getX()+(scale/2) >= width){
      if(snake.length == 1){
        snake[0].setX(width-(scale));
      }
      else if(snake.length > 1){
        snake[0].setX(width-(scale*2));
      }
      die = true;
    }
    //Left
    else if(snake[0].getX() <= -10){
      die = true;
    }
    //Down
    else if(snake[0].getY()+(scale/2) >= height){
      if(snake.length == 1){
        snake[0].setY(snake[0].getY() - scale);
      }
      else if(snake.length > 1){
        snake[0].setY(snake[0].getY() - (scale*2));
      }
      die = true;
    }
    //Up
    else if(snake[0].getY() <= -10){

      die = true;
    }


      var i;
      var j;
      for(i = 0; i < snake.length; i++){
        for(j = 0; j < snake.length; j++){
          if(i !== j){
            if(snake[i].getX() == snake[j].getX() && snake[i].getY() == snake[j].getY()){
              die = true;
            }
          }
        }
      }

      this.dieScreen();

  }

  this.moveTail = function(snake, snakeXLocations, snakeYLocations) {
      var i;
      for(i = 1; i < snake.length; i++){
        snake[i].setX(snakeXLocations[snakeXLocations.length-i]);
        snake[i].setY(snakeYLocations[snakeYLocations.length-i]);
      }

  }

  this.oldXLocations = function(snake) {
      this.snakeXLocations.push(snake[0].getX());
  }

  //Records Y location of head of snake
  this.oldYLocations = function(snake) {
      this.snakeYLocations.push(snake[0].getY());
  }

  //Adds new snake to array in correct direction
  this.grow = function(snake, direction) {
    snake.push(new Snake());
    var newSegment = snake.length-1;
    var oldSegment = snake.length-2;
    var oldSegmentX = snake[oldSegment].getX();
    var oldSegmentY = snake[oldSegment].getY();
    if(direction == 'Up') {
      snake[newSegment].setX(oldSegmentX);
      snake[newSegment].setY(oldSegmentY+scale);
    }
    else if(direction == 'Down') {
      snake[newSegment].setX(oldSegmentX);
      snake[newSegment].setY(oldSegmentY-scale);
    }
    else if(direction == 'Left') {
      snake[newSegment].setX(oldSegmentX-scale);
      snake[newSegment].setY(oldSegmentY);
    }
    else if(direction == 'Right') {
      snake[newSegment].setX(oldSegmentX+scale);
      snake[newSegment].setY(oldSegmentY);
    }
  }



  this.dieScreen = function() {
    if(die == true){
      alert("Game Over. Press CTRL + R or refresh the page to restart.");
      window.clearInterval(update);
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

  this.getXSpeed = function(){
    return this.xSpeed;
  }

  this.getYSpeed = function(){
    return this.ySpeed;
  }

  this.setXSpeed = function(newXSpeed){
    this.xSpeed = newXSpeed;
  }

  this.setYSpeed = function(newYSpeed){
    this.ySpeed = newYSpeed;
  }

}
