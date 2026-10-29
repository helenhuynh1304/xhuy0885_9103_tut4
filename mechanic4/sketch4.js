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


// Mouse interaction: create flowers
function mousePressed() {
  return userInput.handleMousePressed();
}

// Keyboard interaction
function keyPressed() {
  return userInput.handleKeyPressed(key, keyCode);
}
