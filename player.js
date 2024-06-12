class Player {
  constructor(name, image, context) {
    this.name = name;
    this.image = image;
    this.context = context;
    this.speed = 5;
    this.x = 0;
    this.y = 260;
  }

  sayMyName() {
    console.log(`My name is ${this.name}`);
  }

  jump() {
    this.y = this.y-10;
    this.y = this.y+10;
  }

  duck() {}

  moveLeft() {
    this.x -= this.speed;
  }

  moveRight() {
    this.x += this.speed;
  }

  spit() {}

  draw() {
    this.context.drawImage(this.image, this.x, this.y);
  }
}

export default Player;
