
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
  updateAudioVines(volume);
  drawAudioVines();

  // Mechanic 4: Interactive flowers
  userInput.update();
  userInput.draw();

  // Mechanic 2: Rain reveal
  rainReveal.drawOverlay();
}

function mousePressed() {
  // Start music when the user clicks
  startGardenMusic();

  // Also plant a flower
  return userInput.handleMousePressed();
}

function keyPressed() {
  return userInput.handleKeyPressed(key, keyCode);
}
