/*
 * User Input Mechanic — Creative Coding Final Project
 * Mechanic owner: ChenYini-Cynthia
 * AI acknowledgement: Code developed with ChatGPT assistance.
 *
 * Features:
 * 1. Click to create flowers
 * 2. Move mouse to make flowers sway
 * 3. Press R to pause/resume blooming
 * 4. Press SPACE to clear all flowers
 *
 * Flower colours:
 * Pink, Red, Blue, Purple, Orange
 */

class UserInputMechanic {
  constructor(options = {}) {
    this.flowers = [];
    this.bloomEnabled = true;
    this.proximityRadius = options.proximityRadius ?? 170;
    this.maxSway = options.maxSway ?? 0.28;
    this.onChange = options.onChange ?? (() => {});
  }

  // Create a flower when the user clicks
  addFlower(x, y) {

    // Five flower colours in HSB format
    const flowerColors = [
      [330, 65, 95],  // Pink
      [0, 85, 95],    // Red
      [195, 65, 95],  // Blue
      [285, 65, 95],  // Purple
      [25, 85, 95]    // Orange
    ];

    const selectedColor = random(flowerColors);

    const flower = {
      x: x,
      y: y,
      size: random(18, 30),

      hue: selectedColor[0],
      saturation: selectedColor[1],
      brightness: selectedColor[2],

      phase: random(TWO_PI),
      growth: 0,
      sway: 0
    };

    this.flowers.push(flower);
    this.onChange('flower-created', flower);

    return flower;
  }

  // Update flower movement and growth
  updateFlower(flower, dt = 1) {

    const distance = dist(
      mouseX,
      mouseY,
      flower.x,
      flower.y
    );

    const closeness = constrain(
      map(
        distance,
        0,
        this.proximityRadius,
        1,
        0
      ),
      0,
      1
    );

    const targetSway =
      sin(frameCount * 0.065 + flower.phase) *
      this.maxSway *
      (0.12 + closeness * 0.88);

    flower.sway = lerp(
      flower.sway,
      targetSway,
      0.13
    );

    if (this.bloomEnabled) {
      flower.growth = min(
        1,
        flower.growth + 0.028 * dt
      );
    }

    return flower;
  }

  // Update all flowers
  update() {
    for (const flower of this.flowers) {
      this.updateFlower(flower);
    }
  }

  // Draw a flower
  drawFlower(flower) {
    push();

    translate(flower.x, flower.y);
    rotate(flower.sway);

    const scaleFactor = max(
      0.08,
      flower.growth
    );

    scale(scaleFactor);

    // Green stem
    stroke(69, 110, 60);
    strokeWeight(3);
    line(0, 0, 0, 38);

    noStroke();

    // Flower petal colour
    colorMode(HSB, 360, 100, 100, 1);

    fill(
      flower.hue,
      flower.saturation,
      flower.brightness
    );

    // Draw six petals
    for (let i = 0; i < 6; i++) {
      const a = (TWO_PI * i) / 6;

      ellipse(
        cos(a) * flower.size * 0.36,
        sin(a) * flower.size * 0.36,
        flower.size * 0.55,
        flower.size * 0.55
      );
    }

    // Yellow flower centre
    fill(44, 95, 98);
    circle(
      0,
      0,
      flower.size * 0.42
    );

    colorMode(RGB, 255);

    pop();
  }

  // Draw all flowers
  draw() {
    for (const flower of this.flowers) {
      this.drawFlower(flower);
    }
  }

  // Mouse interaction
  handleMousePressed() {

    if (
      mouseX >= 0 &&
      mouseX <= width &&
      mouseY >= 0 &&
      mouseY <= height
    ) {
      this.addFlower(mouseX, mouseY);
      return true;
    }

    return false;
  }

  // Keyboard interaction
  handleKeyPressed(keyValue, keyCodeValue) {

    // R: Pause or resume blooming
    if (String(keyValue).toLowerCase() === 'r') {

      this.bloomEnabled = !this.bloomEnabled;

      this.onChange(
        'bloom-toggled',
        this.bloomEnabled
      );

      return false;
    }

    // SPACE: Clear all flowers
    if (keyCodeValue === 32) {

      this.flowers = [];

      this.onChange('flowers-reset');

      return false;
    }

    return undefined;
  }
} 
