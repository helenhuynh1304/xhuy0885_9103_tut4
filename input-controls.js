/*
 * User Input mechanic — Creative Coding Final Project
 * Mechanic owner: ChenYini-Cynthia
 * AI acknowledgement: Initial implementation generated with assistance from ChatGPT (OpenAI).
 * Implements proximity-driven flower sway, click-to-create flowers, and keyboard controls.
 * Review and adapt this module before integrating with the team's sketch.js.
 */

class UserInputMechanic {
  constructor(options = {}) {
    this.flowers = [];
    this.bloomEnabled = true;
    this.proximityRadius = options.proximityRadius ?? 170;
    this.maxSway = options.maxSway ?? 0.28;
    this.onChange = options.onChange ?? (() => {});
  }

  // Adds a user-generated flower at the given canvas position.
  addFlower(x, y) {
    const flower = {
      x, y,
      size: random(18, 30),
      hue: random([330, 195, 38, 285]),
      phase: random(TWO_PI),
      growth: 0,
      sway: 0
    };
    this.flowers.push(flower);
    this.onChange('flower-created', flower);
    return flower;
  }

  // Uses p5.js dist() and map() to calculate stronger sway near the mouse.
  updateFlower(flower, dt = 1) {
    const distance = dist(mouseX, mouseY, flower.x, flower.y);
    const closeness = constrain(map(distance, 0, this.proximityRadius, 1, 0), 0, 1);
    const targetSway = sin(frameCount * 0.065 + flower.phase) * this.maxSway * (0.12 + closeness * 0.88);
    flower.sway = lerp(flower.sway, targetSway, 0.13);
    if (this.bloomEnabled) flower.growth = min(1, flower.growth + 0.028 * dt);
    return flower;
  }

  update() {
    for (const flower of this.flowers) this.updateFlower(flower);
  }

  // Standalone pilot rendering. The team can replace this with their own flower drawing.
  drawFlower(flower) {
    push();
    translate(flower.x, flower.y);
    rotate(flower.sway);
    const scaleFactor = max(0.08, flower.growth);
    scale(scaleFactor);
    stroke(69, 110, 60);
    strokeWeight(3);
    line(0, 0, 0, 38);
    noStroke();
    colorMode(HSB, 360, 100, 100, 1);
    fill(flower.hue, 65, 95);
    for (let i = 0; i < 6; i++) {
      const a = (TWO_PI * i) / 6;
      ellipse(cos(a) * flower.size * 0.36, sin(a) * flower.size * 0.36, flower.size * 0.55, flower.size * 0.55);
    }
    fill(44, 95, 98);
    circle(0, 0, flower.size * 0.42);
    colorMode(RGB, 255);
    pop();
  }

  draw() {
    for (const flower of this.flowers) this.drawFlower(flower);
  }

  // Call from the existing sketch's mousePressed() handler.
  handleMousePressed() {
    if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
      this.addFlower(mouseX, mouseY);
      return true;
    }
    return false;
  }

  // Call from the existing sketch's keyPressed() handler.
  handleKeyPressed(keyValue, keyCodeValue) {
    if (String(keyValue).toLowerCase() === 'r') {
      this.bloomEnabled = !this.bloomEnabled;
      this.onChange('bloom-toggled', this.bloomEnabled);
      return false;
    }
    if (keyCodeValue === 32) {
      this.flowers = [];
      this.onChange('flowers-reset');
      return false;
    }
    return undefined;
  }
}
