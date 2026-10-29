
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
  // Mechanic 3: Grass background
  drawGrass();

  // Mechanic 4: Interactive flowers
  userInput.update();
  userInput.draw();

  // Mechanic 2: Rain reveal
  rainReveal.drawOverlay();
}

function mousePressed() {
  return userInput.handleMousePressed();
}

function keyPressed() {
  return userInput.handleKeyPressed(key, keyCode);
}
