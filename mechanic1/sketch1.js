
let audioVines = [];
const MAX_AUDIO_VINES = 300;

// Update the number of vines according to volume
function updateAudioVines(volume) {
  let targetAmount = floor(
    map(volume, 0, 1, 0, MAX_AUDIO_VINES)
  );

  while (audioVines.length < targetAmount) {
    audioVines.push(createAudioVine());
  }

  // Grow or shrink vines
  for (let i = 0; i < audioVines.length; i++) {
    if (i < targetAmount) {
      audioVines[i].growth += 0.01;

      if (audioVines[i].growth > 1) {
        audioVines[i].growth = 1;
      }
    } else {
      audioVines[i].growth -= 0.02;

      if (audioVines[i].growth < 0) {
        audioVines[i].growth = 0;
      }
    }
  }

  // Remove vines that have disappeared
  for (let i = audioVines.length - 1; i >= 0; i--) {
    if (audioVines[i].growth === 0) {
      audioVines.splice(i, 1);
    }
  }
}

// Create vines in a triangular distribution
function createAudioVine() {
  let progress = pow(random(), 0.55);

  let y = lerp(height * 0.12, height, progress);

  let x = width / 2 + random(
    -width * 0.45 * progress,
    width * 0.45 * progress
  );

  return {
    x: x,
    y: y,
    height: random(
      lerp(12, 45, progress),
      lerp(28, 145, progress)
    ),
    curl: random(0.2, 0.35),
    phase: random(TWO_PI),
    growth: 0
  };
}

// Draw the growing vines
function drawAudioVines() {
  for (let g of audioVines) {
    push();

    translate(g.x, g.y);

    stroke(150, 160, 60);
    strokeWeight(2);
    noFill();

    beginShape();

    for (let i = 0; i <= g.height * g.growth; i += 2) {
      let progress = i / g.height;

      let angle =
        g.phase +
        progress * progress * g.curl * TWO_PI;

      let radius = 5 + progress * 25;

      curveVertex(
        cos(angle) * radius,
        -i + sin(angle) * radius
      );
    }

    endShape();

    pop();
  }
}
