class Player {
  constructor(name, image, context) {
    this.name = name;
    this.image = image;
    this.context = context;
    this.speed = 5;
    this.x = 0;
    this.y = 260;
    this.vy = 0; // Initial vertical velocity
        this.gravity = 0.5; // Gravity
        this.jumpStrength = -10; // Strength of the jump
        this.grounded = true; // Whether the player is on the ground
  }

  // sayMyName() {
  //   console.log(`My name is ${this.name}`);
  // }

  jump() {
    if (this.grounded) {
            this.vy = this.jumpStrength;
            this.grounded = false;
        }
  }

  update() {
        this.vy += this.gravity; // Apply gravity
        this.y += this.vy; // Update vertical position

        // Simulate ground (simple example, y = 300 is the ground level)
        if (this.y >= 260) {
            this.y = 260;
            this.vy = 0;
            this.grounded = true;
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
