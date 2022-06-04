// 食物
import scorePanel from "./ScorePanel";

class Food {
  element: HTMLElement;

  constructor() {
    this.element = document.getElementById('snake-food')!;
  }

  get X() {
    return this.element.offsetLeft;
  }

  get Y() {
    return this.element.offsetTop;
  }

  // 食物随机坐标
  change() {
    let left = Math.round(Math.random() * 29) * 10;
    let top = Math.round(Math.random() * 29) * 10;

    this.element.style.left = left + 'px';
    this.element.style.top = top + 'px'
  }
}

export default Food;
