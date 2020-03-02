const canvas = document.getElementById('game-board');
const ctx = canvas.getContext('2d');
const active = false;

const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
let snake;

function setup(){
    snake = new Snake();
    fruit = new Fruit();
    let score;
    fruit.spawn()

    let gameTime = window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fruit.draw();
        snake.draw();
        snake.move();
        score = snake.total;
        document.getElementById('game-score').innerText = `Your score: ${score}`;

        if(snake.eat(fruit)){
            fruit.spawn();
        }

        snake.checkCollision(gameTime);
      }, 1000 / 8);
}

window.addEventListener('keydown', ((e) => {
    const direction = e.key.replace('Arrow', '');
    snake.changeDirection(direction);
}));

window.addEventListener('keydown', (e => {
    if(e.keyCode === 32){
        setup()
    }
}))