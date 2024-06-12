class Player {
  constructor(name, context) {
    this.name = name;
    this.context = context;
  }

  sayMyName() {
    console.log(`My name is ${this.name}`);
  }

  jump() {

  }

  spit() {
    
  }

  draw() {
    this.context.fillStyle = "blue";
    this.context.fillRect(0, 0, 40, 40);
  }
}

export default Player;
