function Snake(){
    this.x = 60;
    this.y = 60;
    this.xSpeed = 20;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];

    this.draw = function(){
        ctx.fillStyle = '#FFFFFF';
        for (let i = 0; i < this.tail.length; i++) {
            ctx.fillRect(this.tail[i].x,
              this.tail[i].y, scale, scale);
        }

        ctx.fillRect(this.x, this.y, scale, scale);
    }

    this.move = function(){
        for (let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];
        }
      
        this.tail[this.total - 1] = { x: this.x, y: this.y };

        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x > canvas.width - scale) {
            this.x = 0;
          }
      
        if (this.y > canvas.height - scale) {
            this.y = 0;
        }
      
        if (this.x < 0) {
            this.x = canvas.width - scale;
        }
      
        if (this.y < 0) {
            this.y = canvas.height - scale;
        }
    }

    this.changeDirection = function(direction){
        switch(direction){
            case 'Up':
                if(this.ySpeed <= 0 || this.total === 0){
                    this.xSpeed = 0;
                    this.ySpeed = -scale * 1;
                }
                break;
            case 'Down':
                if(this.ySpeed >= 0 || this.total === 0){
                    this.xSpeed = 0;
                    this.ySpeed = scale * 1;
                }
                break;
            case 'Left':
                if(this.xSpeed <= 0 || this.total === 0){
                    this.xSpeed = -scale * 1;
                    this.ySpeed = 0;
                }
                break;
            case 'Right':
                if(this.xSpeed >= 0 || this.total === 0){
                    this.xSpeed = scale * 1;
                    this.ySpeed = 0;
                }
                break;
        }
    }

    this.eat = function(fruit){
        if(this.x === fruit.x && this.y === fruit.y){
            this.total++;
            return true;
        }
        return false;
    }

    this.checkCollision = function(interval){
        for (let i = 0; i < this.tail.length; i++) {
            if (this.x === this.tail[i].x &&
              this.y === this.tail[i].y) {
              this.total = 0;
              this.tail = [];
              clearInterval(interval)
              ctx.font = '30px Orbitron';
              ctx.textAlign = 'center';
              ctx.fillText('Game Over', 250, 50)
            }
        }
    }
}