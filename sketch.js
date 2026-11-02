 


let rainReveal;
let userInput;

function setup() {
  createCanvas(800, 600);

  // Mechanic 3: Grass background
  setupGrass();

  // Mechanic 1: Audio controls
  setupAudio();

  // Mechanic 4: Interactive flowers
  userInput = new UserInputMechanic({
    proximityRadius: 170,
    maxSway: 0.28
  });

  // Mechanic 2: Rain reveal
  rainReveal = new RainReveal();
}

function draw() {
  // Mechanic 3: Animated grass
  drawGrass();

  // Mechanic 1: Audio-controlled vines
  let volume = getVolume();

  updateAudio();
  updateVines(volume);
  drawVines();

  // Mechanic 4: Interactive flowers
  userInput.update();
  userInput.draw();

  // Mechanic 2: Rain reveal
  rainReveal.drawOverlay();
}

function mousePressed() {

  if (mouseX >= 0 && mouseX < width &&
      mouseY >= 0 && mouseY < height) {

    startGardenMusic();

    if (userInput) {
      userInput.handleMousePressed();
    }
  }
}

function keyPressed() {
  if (userInput) {
    return userInput.handleKeyPressed(key, keyCode);
  }
}
