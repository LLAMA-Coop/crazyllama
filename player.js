class Player {
  constructor(name, image, context) {
    this.name = name;
    this.image = image;
    this.context = context;
    this.speed = 5;
    this.x = 0;
    this.y = 50;
  }

  sayMyName() {
    console.log(`My name is ${this.name}`);
  }

  jump() {
    for (let i = 0; i < 10; i++) {
      
    }
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
