class Player {
  constructor(name) {
    this.name = name;
  }

  sayMyName() {
    console.log(`My name is ${this.name}`);
  }

  draw(context) {
    context.fillStyle = "blue";
    context.fillRect(0, 0, 40, 40);
  }
}

export default Player;
