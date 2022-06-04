import Food from './Food';
import Snake from './Snake';
import ScorePanel from './ScorePanel';

// 控制器
class GameControl {
  food: Food;
  snake: Snake;
  scorePanel: ScorePanel;

  snakeDirection: string = '';

  constructor() {
    this.food = new Food();
    this.snake = new Snake();
    this.scorePanel = new ScorePanel();

    this.init();
  }

  // 初始化
  init() {
    document.addEventListener('keydown', this.keydownHandler.bind(this));
    this.run();
  }

  keydownHandler(event: KeyboardEvent) {
    this.snakeDirection = event.key
  }

  run() {
    let X = this.snake.X;
    let Y = this.snake.Y;
    switch (this.snakeDirection) {
      case 'Up':
      case 'ArrowUp':
        Y -= 10;
        break;
      case 'Down':
      case 'ArrowDown':
        Y += 10;
        break;
      case 'Left':
      case 'ArrowLeft':
        X -= 10;
        break;
      case 'Right':
      case 'ArrowRight':
        X += 10;
        break;
    }
    this.snake.X = X;
    this.snake.Y = Y;

    setTimeout(this.run.bind(this), 300)
  }


}

export default GameControl;
