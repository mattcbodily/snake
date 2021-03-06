const canvas = document.getElementById('game-board');
const ctx = canvas.getContext('2d');
const active = false;

const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
let snake;
sessionStorage.setItem('highScore', 0)

function setup(){
    snake = new Snake();
    fruit = new Fruit();
    let highScore = sessionStorage.getItem('highScore');
    fruit.spawn(snake.tail)

    let gameTime = window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fruit.draw();
        snake.draw();
        snake.move();
        document.getElementById('game-score').innerText = `Your score: ${snake.total}`;

        if(snake.total > highScore){
            highScore = snake.total
        }
        document.getElementById('high-score').innerText = `High score: ${highScore}`;

        if(snake.eat(fruit)){
            fruit.spawn(snake.tail);
        }

        snake.checkCollision(gameTime, highScore);
      }, 1000 / 10);
}

window.addEventListener('keydown', ((e) => {
    if(e.keyCode !== 32){
        const direction = e.key.replace('Arrow', '');
        snake.changeDirection(direction);
    }
}));

window.addEventListener('keydown', (e => {
    if(e.keyCode === 32){
        setup()
    }
}))