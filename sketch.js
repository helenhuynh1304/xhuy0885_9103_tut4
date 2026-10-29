/*
 * Interactive Flower Garden
 * User Input Mechanic integration
 * AI acknowledgement: Code developed with ChatGPT assistance.
 */

let userInput;

function setup() {
  createCanvas(800, 600);

  // Initialise Yini's User Input Mechanic
  userInput = new UserInputMechanic({
    proximityRadius: 170,
    maxSway: 0.28
  });
}

function draw() {
  // Garden background
  background(245, 250, 240);

  // Update flower movement and growth
  userInput.update();

  // Draw all user-created flowers
  userInput.draw();

  // Instructions
  push();
  fill(60, 85, 65);
  noStroke();
  textSize(18);
  textAlign(LEFT);
  text("Interactive Flower Garden", 20, 35);

  textSize(13);
  text("Click: Create a flower", 20, 65);
  text("Move mouse: Flowers sway", 20, 85);
  text("R: Pause / resume blooming", 20, 105);
  text("SPACE: Clear all flowers", 20, 125);
  pop();
}

// Mouse interaction: create flowers
function mousePressed() {
  return userInput.handleMousePressed();
}

// Keyboard interaction
function keyPressed() {
  return userInput.handleKeyPressed(key, keyCode);
}
