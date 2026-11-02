
let vines = [];
const MAX_VINES = 300;

// Update vine growth based on the volume slider
function updateVines(volume) {
  let targetAmount = floor(map(volume, 0, 1, 0, MAX_VINES));

  while (vines.length < targetAmount) {
    vines.push(createVine());
  }

  for (let i = 0; i < vines.length; i++) {
    if (i < targetAmount) {
      vines[i].growth += 0.01;

      if (vines[i].growth > 1) {
        vines[i].growth = 1;
      }
    } else {
      vines[i].growth -= 0.02;

      if (vines[i].growth < 0) {
        vines[i].growth = 0;
      }
    }
  }

  // Remove vines that have shrunk completely
  for (let i = vines.length - 1; i >= 0; i--) {
    if (vines[i].growth == 0) {
      vines.splice(i, 1);
    }
  }
}

// Create an individual vine
function createVine() {
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

// Draw all vines
function drawVines() {
  for (let g of vines) {
    push();
    translate(g.x, g.y);

    stroke(150, 160, 60);
    strokeWeight(2);
    noFill();

    beginShape();

    for (let i = 0; i <= g.height * g.growth; i += 2) {
      let progress = i / g.height;
      let angle = g.phase + progress * progress * g.curl * TWO_PI;
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
