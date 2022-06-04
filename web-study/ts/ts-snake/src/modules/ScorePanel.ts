// 记分牌
class ScorePanel {
  score: number = 0;
  level: number = 1;

  scoreEle: HTMLElement;
  levelEle: HTMLElement;

  maxLevel: number;
  // 多少分数升一级
  scoreLevel: number;

  constructor(maxLevel: number = 10, scoreLevel: number = 10) {
    this.scoreEle = document.getElementById('score')!;
    this.levelEle = document.getElementById('panel')!;
    this.maxLevel = maxLevel
    this.scoreLevel = scoreLevel
  }

  // 分数
  addScore() {
    this.scoreEle.innerHTML = ++this.score + '';
    if (this.score % this.scoreLevel)
      this.levelUp();
  }

  // 等级
  levelUp() {
    if (this.level < this.maxLevel)
      this.levelEle.innerHTML = ++this.level + '';
  }

}

export default ScorePanel;
