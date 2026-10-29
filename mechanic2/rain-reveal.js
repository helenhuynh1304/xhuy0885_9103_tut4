// CLASS 1: RAINDROP
class Raindrop {

  constructor() {
    this.reset(true);
  }

  reset(startAnywhere = false) {

    this.x = random(width);

    // Use if...else to set the raindrop position
    if (startAnywhere === true) {

      // Start at a random height
      this.y = random(-height, height);

    } else {

      // Restart above the canvas
      this.y = random(-50, 0);

    }

    this.length = random(10, 22);
    this.speed = random(1, 3);
  }

  update() {

    this.y += this.speed;

    // Subtle horizontal movement using frameCount
    this.x += sin(frameCount * 0.02) * 0.3;

    // Reset the raindrop when it reaches the bottom
    if (this.y > height + this.length) {
      this.reset(false);
    }
  }

  display() {

    stroke(100, 150, 200, 180);
    strokeWeight(1.5);

    line(this.x, this.y, this.x - 3, this.y + this.length);
  }
}


// CLASS 2: RAIN REVEAL
class RainReveal {

  constructor() {

    // Animation timing in milliseconds
    this.rainStart = 3000;
    this.fadeStart = 5000;
    this.fadeEnd = 15000;

    this.rainCount = 100;
    this.whiteOpacity = 255;
    this.startTime = millis();

    this.raindrops = [];

    // Create 100 raindrops
    for (let i = 0; i < this.rainCount; i++) {
      this.raindrops.push(new Raindrop());
    }
  }

  updateOpacity(elapsedTime) {

    // Stage 1: White screen
    if (elapsedTime < this.fadeStart) {

      this.whiteOpacity = 255;

    }

    // Stage 2: Garden gradually appears
    else if (elapsedTime < this.fadeEnd) {

      this.whiteOpacity = map(elapsedTime, this.fadeStart, this.fadeEnd,255, 0);

    }

    // Stage 3: Garden stays visible
    else {

      this.whiteOpacity = 0;

    }
  }

  drawOverlay() {

    // Calculate elapsed time
    let elapsedTime = millis() - this.startTime;

    // Update white screen transparency
    this.updateOpacity(elapsedTime);

    push();

    // Draw the white overlay
    noStroke();
    fill(255, 255, 255, this.whiteOpacity);
    rect(0, 0, width, height);

    // Rain starts after 3 seconds
    if (elapsedTime >= this.rainStart) {

    // Rain stops after 15 seconds
    if (elapsedTime < this.fadeEnd) {

    for (let drop of this.raindrops) {
      drop.update();
      drop.display();
    }
  }
}
    pop();
  }
}
