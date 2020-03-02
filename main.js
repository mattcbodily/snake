const canvas = document.getElementById('game-board');
const ctx = canvas.getContext('2d');

const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
let snake;

(function setup(){
    snake = new Snake();
    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        snake.draw();
        snake.move();
      }, 250);
}())