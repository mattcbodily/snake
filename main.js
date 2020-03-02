const canvas = document.getElementById('game-board');
const ctx = canvas.getContext('2d');

const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
let snake;

(function setup(){
    snake = new Snake();
    fruit = new Fruit();
    fruit.spawn()

    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fruit.draw();
        snake.draw();
        snake.move();

        if(snake.eat(fruit)){
            fruit.spawn();
        }

        snake.checkCollision();
      }, 1000 / 8);
}())

window.addEventListener('keydown', ((evt) => {
    const direction = evt.key.replace('Arrow', '');
    snake.changeDirection(direction);
}));