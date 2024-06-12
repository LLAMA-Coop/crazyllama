import Player from "./player.js";
import update from "./update.js";

const cvs = document.getElementById("game");
const ctx = cvs.getContext("2d");
const image = new Image();
image.src = "./llama.gif"

let player = new Player("Kiz", image, ctx);
player.sayMyName();

player.draw(ctx);

cvs.addEventListener("click", (e) => {
    console.log("click")
})

document.addEventListener("keyup", (e) => {
    console.log("Keying");
    switch (e.key) {
        case "ArrowUp":
            player.jump();
            break;
        case "ArrowDown":
            player.duck();
            break;
        case "ArrowLeft":
            console.log("Left key released");
            // Move player left
            player.moveLeft();
            break;
        case "ArrowRight":
            console.log("Right key released");
            // Move player right
            player.moveRight();
            break;
        default:
            console.log(`Key released: ${e.key}`);
            break;
    }

    // Redraw the player after movement
    ctx.clearRect(0, 0, cvs.width, cvs.height); // Clear the canvas
    player.draw();
})