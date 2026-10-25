let strokes = [];
let strokeCount = 6000;

let grassColors = [
  "#315D59",
  "#427D79",
  "#588B65",
  "#789C63",
  "#A2A85C",
  "#C1AF52",
  "#658F98"
];

function setup() {
  createCanvas(700, 700);

  noiseSeed(18);
  randomSeed(12);

  for (let i = 0; i < strokeCount; i++) {
    strokes.push({
      x: random(width),
      y: random(height),
      length: random(4, 14),
      thickness: random(0.8, 2.5),
      colour: random(grassColors),
      phase: random(1000),
      sway: random(2, 7)
    });
  }
}

function draw() {
  background("#47796A");

  let time = frameCount * 0.006;

  for (let s of strokes) {

    // Smooth spatial flow field
    let baseNoise = noise(
      s.x * 0.005,
      s.y * 0.005
    );

    let baseAngle = baseNoise * TWO_PI * 2;

    // Slowly changing local wind
    let windNoise = noise(
      s.x * 0.008 + 100,
      s.y * 0.008 + 100,
      time
    );

    let wind = map(
      windNoise,
      0, 1,
      -0.7, 0.7
    );

    // Individual subtle movement
    let detailNoise = noise(
      s.phase,
      time * 0.8
    );

    let detail = map(
      detailNoise,
      0, 1,
      -0.2, 0.2
    );

    let angle = baseAngle + wind + detail;

    // Gentle movement around original position
    let drift = map(
      noise(s.phase + 200, time),
      0, 1,
      -s.sway, s.sway
    );

    let x = s.x + cos(baseAngle) * drift;
    let y = s.y + sin(baseAngle) * drift;

    stroke(s.colour);
    strokeWeight(s.thickness);
    strokeCap(ROUND);

    let x2 = x + cos(angle) * s.length;
    let y2 = y + sin(angle) * s.length;

    line(x, y, x2, y2);
  }
}