class Player {
  constructor(name, image, context) {
    this.name = name;
    this.image = image;
    this.context = context;
    this.x = 0;
    this.y = 10;
  }

  sayMyName() {
    console.log(`My name is ${this.name}`);
  }

  jump() {}

  duck() {}

  moveLeft() {}

  moveRight() {}

  spit() {}

  draw() {
    // this.context.fillStyle = "blue";
    // this.context.fillRect(this.x, this.y, 40, 40);
    console.log("drawing player");
    this.context.drawImage(this.image, this.x, this.y);
  }
}

export default Player;
