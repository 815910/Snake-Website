function Snake() {
  this.x = 150;
  this.y = 70;

  //Draws a red colored snake at x, y, to the scale
  this.drawSnake = function() {
    ctx.fillStyle = '#DC143C';
    ctx.fillRect(this.x, this.y, scale, scale);
  }

  this.getX = function(){
    return this.x;
  }

  this.getY = function(){
    return this.y;
  }
}
