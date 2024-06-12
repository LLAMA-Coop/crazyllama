import Player from "./player.js";
import update from "./update.js";

const cvs = document.getElementById("game");
const ctx = cvs.getContext("2d");
const image = new Image();
image.src = "./llama.gif";

let player = new Player("Kiz", image, ctx);
player.sayMyName();
player.draw(ctx);

const keyState = {};

// Listen for keydown events
document.addEventListener("keydown", (e) => {
    keyState[e.key] = true;
    handleKeys();
});

// Listen for keyup events
document.addEventListener("keyup", (e) => {
    keyState[e.key] = false;
});

function handleKeys() {
    if (keyState["ArrowUp"]) {
        player.jump();
    }
    if (keyState["ArrowDown"]) {
        player.duck();
    }
    if (keyState["ArrowLeft"]) {
        player.moveLeft();
    }
    if (keyState["ArrowRight"]) {
        player.moveRight();
    }

    // Redraw the player after movement
    ctx.clearRect(0, 0, cvs.width, cvs.height); // Clear the canvas
    player.draw();
}

// Game loop to continuously check for key states and update the game
function gameLoop() {
    handleKeys();
    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();
