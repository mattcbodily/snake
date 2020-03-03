function Fruit(){
    this.x;
    this.y;

    this.spawn = function(tail){
        this.x = (Math.floor(Math.random() * columns - 1) + 1) * scale;
        this.y = (Math.floor(Math.random() * rows - 1) + 1) * scale;

        for(let i = 0; i < tail.length; i++){
            if(this.x === tail[i].x && this.y === tail[i].y){
                console.log('hit', this.x, this.y)
                this.spawn(tail)
                this.draw();
            }
        }
    }

    this.draw = function() {
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(this.x, this.y, scale, scale)
    }
}