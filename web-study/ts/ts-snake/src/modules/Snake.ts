// 蛇
class Snake {
  head: HTMLElement;
  bodies: HTMLCollection;
  element: HTMLElement;

  constructor() {
    this.element = document.getElementById('snake')!;
    this.head = document.querySelector('#snake > div') as HTMLElement;
    this.bodies = this.element.getElementsByTagName('div');
  }

  get X() {
    return this.head.offsetLeft;
  }

  get Y() {
    return this.head.offsetTop;
  }

  set X(val){
    this.head.style.left = val + 'px'
  }

  set Y(val){
    this.head.style.top = val + 'px'
  }

  // 添加身体
  addBody() {
    this.element.insertAdjacentHTML('beforeend', '<div></div>')
  }
}

export default Snake;
