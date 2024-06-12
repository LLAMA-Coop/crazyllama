import Player from "./player.js";
import update from "./update.js";

const cvs = document.getElementById("game");
const ctx = cvs.getContext("2d");

let player = new Player("Kiz");
player.sayMyName();

player.draw(ctx);

cvs.addEventListener("keyup", (e) => {
    
})