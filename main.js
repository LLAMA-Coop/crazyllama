import Player from "./player.js";
import update from "./update.js";

const cvs = document.getElementById("game");
const ctx = cvs.getContext("2d");

let player = new Player("Kiz");
player.sayMyName();

player.draw(ctx);

cvs.addEventListener("keyup", (e) => {
    switch (e.key) {
        case "ArrowUp":
            console.log("Up key released");
            // Move player up
            player.moveUp();
            break;
        case "ArrowDown":
            console.log("Down key released");
            // Move player down
            player.moveDown();
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
    player.draw(ctx);
})