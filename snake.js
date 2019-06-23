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
    ctx.fillStyle = '#DC143C';
    for(i = 0; i < snake.length; i++){
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
    //Sets speed of segment in front if speed of segment in front is different
    // for(i = 1; i < snake.length; i++){
    //
    //   if(snake.length > 1 && (snake[0].getXSpeed() !== 0 || snake[0].getYSpeed() !== 0)){
    //     var totalSpeedInFront = snake[i-1].getXSpeed() + snake[i-1].getYSpeed();
    //     var totalSpeed =  snake[i].getXSpeed() + snake[i].getYSpeed();
    //     console.log(totalSpeed)
    //     if(totalSpeedInFront !== totalSpeed){
    //       snake[i].setXSpeed(snake[i-1].getXSpeed());
    //       snake[i].setYSpeed(snake[i-1].getYSpeed());
    //     }
    //   }
    // }

  }


  this.move = function(snake) {
    var i;
    // for(i = 0; i < snake.length; i++){
    //   snake[i].setX(snake[i].getX() + snake[i].getXSpeed());
    //   snake[i].setY(snake[i].getY() + snake[i].getYSpeed());
    // }
    if(eatenOne == true){
      this.oldXLocations(snake);
      this.oldYLocations(snake);
    }


    snake[0].setX(snake[0].getX() + snake[0].getXSpeed());
    snake[0].setY(snake[0].getY() + snake[0].getYSpeed());

    // var up = -10;
    // var down = 10;
    // var left = -10;
    // var right = 10;
    // var move = false;
    // //sets X or Y of tail based on direction previous segment is going
    //   for(i = 1; i < snake.length; i++){
    //   if(snake[i-1].getYSpeed() == up) {
    //     snake[i].setX(snake[i-1].getX());
    //     snake[i].setY(snake[i-1].getY()+scale);
    //   }
    //   else if(snake[i-1].getYSpeed() == down) {
    //     snake[i].setX(snake[i-1].getX());
    //     snake[i].setY(snake[i-1].getY()-scale);
    //   }
    //   else if(snake[i-1].getXSpeed() == left) {
    //     snake[i].setX(snake[i-1].getX()+scale);
    //     snake[i].setY(snake[i-1].getY());
    //   }
    //   else if(snake[i-1].getXSpeed() == right) {
    //     snake[i].setX(snake[i-1].getX()-scale);
    //     snake[i].setY(snake[i-1].getY());
    //   }
    // }

    this.moveTail(snake, this.snakeXLocations, this.snakeYLocations);


      // //sets X or Y of tail based on where the previous segment is
      // for(i = 2; i < snake.length; i++){
      // //Up
      // if(snake[i-1].getY() < snake[i].getY()) {
      //   snake[i].setX(snake[i-1].getX());
      //   snake[i].setY(snake[i-1].getY()+scale);
      // }
      // //Down
      // else if(snake[i-1].getY() > snake[i].getY()) {
      //   snake[i].setX(snake[i-1].getX());
      //   snake[i].setY(snake[i-1].getY()-scale);
      // }
      // //Left
      // else if(snake[i-1].getX() < snake[i].getX()) {
      //   snake[i].setX(snake[i-1].getX()+scale);
      //   snake[i].setY(snake[i-1].getY());
      // }
      // //Right
      // else if(snake[i-1].getX() > snake[i].getX()) {
      //   snake[i].setX(snake[i-1].getX()-scale);
      //   snake[i].setY(snake[i-1].getY());
      // }
      //
      //
      // console.log("length = " + snake.length);
      // }

    //Checks if snake ran into wall
    //****If length is greater than 1 snake will move into wall
    if(snake[0].getX()+(scale/2) >= width){
      snake[0].setX(width-(scale));
      window.clearInterval(update);
    }

    else if(snake[0].getX() <= 0){
      window.clearInterval(update);
    }

    else if(snake[0].getY()+(scale/2) >= height){
      snake[0].setY(snake[0].getY() - scale);
      window.clearInterval(update);
    }

    else if(snake[0].getY() <= 0){
      window.clearInterval(update);
    }
  }

  this.moveTail = function(snake, snakeXLocations, snakeYLocations) {

      var i;
      for(i = 1; i < snake.length; i++){
        console.log(snake.length);
        snake[i].setX(snakeXLocations[snakeXLocations.length-i]);
        snake[i].setY(snakeYLocations[snakeYLocations.length-i]);
      }



  }

  this.oldXLocations = function(snake) {

    var i;
    for(i = 0; i < 1; i++){
      this.snakeXLocations.push(snake[i].getX());
    }


  }

  this.oldYLocations = function(snake) {
    var i;
    for(i = 0; i < 1; i++){
      this.snakeYLocations.push(snake[i].getY());
    }

  }

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
