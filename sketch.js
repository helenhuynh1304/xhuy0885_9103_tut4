
 // Shared main controller for Mechanics 2, 3 and 4.
 // Do not load mechanic2/sketch2.js or mechanic4/sketch4.js
 // because they contain their own setup() and draw().

let rainReveal;
let userInput;

function setup() {
  createCanvas(800, 600);

  // Mechanic 3: Grass
  setupGrass();

  // Mechanic 4: Interactive flowers
  userInput = new UserInputMechanic({
    proximityRadius: 170,
    maxSway: 0.28
  });

  // Mechanic 2: Rain reveal
  rainReveal = new RainReveal();
}

function draw() {
  // Mechanic 3: Garden background
  drawGrass();

  // Mechanic 1: Audio-controlled vines
  // Add this later.

  // Mechanic 4: Interactive flowers
  userInput.update();
  userInput.draw();

  // Mechanic 2: Rain overlay
  rainReveal.drawOverlay();

  // Instructions
  push();
  noStroke();

  fill(255, 255, 255, 210);
  rect(10, 10, 280, 105, 8);

  fill(35, 60, 45);
  textAlign(LEFT);
  textSize(16);

  text('Collaborative Flower Garden', 20, 34);

  textSize(12);
  text('Click: plant a flower', 20, 55);
  text('Move mouse: sway flowers', 20, 72);
  text('R: pause bloom   SPACE: clear flowers', 20, 89);

  pop();
}

function mousePressed() {
  return userInput.handleMousePressed();
}

function keyPressed() {
  return userInput.handleKeyPressed(key, keyCode);
}

