function Snake() {
  this.x = 0;
  this.y = 0;
  this.xSpeed = 0;
  this.ySpeed = 0;

  //Draws a red colored snake at x, y, to the scale
  this.drawSnake = function() {
    ctx.fillStyle = '#DC143C';
    ctx.fillRect(this.x, this.y, scale, scale);
  }

  this.changeDirection = function(dir) {
    if(dir == 'Up' && this.ySpeed !== 10){
      this.xSpeed = 0;
      this.ySpeed = -10;
    }
    else if(dir == 'Down' && this.ySpeed !== -10){
      this.xSpeed = 0;
      this.ySpeed = 10;
    }
    else if(dir == 'Left' && this.xSpeed !== 10){
      this.xSpeed = -10;
      this.ySpeed = 0;
    }
    else if(dir == 'Right' && this.xSpeed !== -10){
      this.xSpeed = 10;
      this.ySpeed = 0;
    }
  }

  this.move = function() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if(this.x+(scale/2) >= width){
      this.x -= scale;
      window.clearInterval(update);
    }

    else if(this.x <= 0){
      window.clearInterval(update);
    }

    else if(this.y+(scale/2) >= height){
      this.y -= scale;
      window.clearInterval(update);
    }

    else if(this.y <= 0){
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
}
