
# Interactive Garden

## Inspiration

Our team's interactive garden was inspired by *Bauerngarten* (1907), a painting by Gustav Klimt. The painting features colourful flowers, dense natural patterns and overlapping shapes that create a lively garden atmosphere.

We wanted to transform Klimt's still painting into an interactive digital experience using p5.js. By introducing animation, rainfall, sound and user interaction, our project explores how the garden can come to life and respond to the viewer.

## Design Decisions and Changes from Our Preliminary Concept

During development, our team made several design decisions to improve visual balance, avoid overlapping mechanics and create a more cohesive interactive experience.

* **Mechanic 2 – Time-Based Animation:** We replaced the original concept of flowers blooming every 2 seconds with a rain reveal animation. This allowed Mechanic 2 to focus on gradually introducing the garden, while Mechanic 4 remained responsible for flower interactions.

* **Mechanic 3 – Perlin Noise Background:** We changed the background from multiple colours to grass-like green tones. This reduced visual competition with the colourful flowers and created a clearer distinction between the background and foreground.

* **Mechanic 1 – Audio-Controlled Vines:** We changed the vines to white so they would stand out against the green background without making the artwork too visually crowded.

Overall, these design decisions gave each mechanic a distinct purpose while maintaining the organic atmosphere, layered composition and colour harmony inspired by Gustav Klimt's *Bauerngarten* (1907).

## Techniques

Our team used **p5.js** to transform Gustav Klimt's *Bauerngarten* (1907) into an interactive garden. We combined animation, sound, rainfall, grass and user interaction to bring the artwork to life.

### Animation and Visual Effects

* We used `setup()` and `draw()` to continuously animate the garden.
* Functions such as `random()`, `line()`, `fill()` and `rect()` helped create natural-looking grass, vines, flowers and rainfall.

### Audio Interaction

* We used **p5.sound** and `loadSound()` to add background music.
* A slider created with `createSlider()` controls the music volume and influences vine growth.

### Timing and Transparency

* We used `millis()` and `map()` to control the rain animation and gradually reveal the garden through a fading white overlay.

### User Interaction

* We used `mousePressed()`, `keyPressed()` and mouse position to allow users to plant flowers and interact with the garden.

### Code Organisation

* Each team member developed a separate mechanic.
* We combined all four mechanics in the main `sketch.js` using shared `setup()` and `draw()` functions.


The separate mechanics are integrated through the main `sketch.js` file.

## Mechanic Ownership

### Mechanic 1 — Audio-Controlled Vines
**Team member:** Yulu Ma(yuma1056)

My mechanic uses an audio slider to control the growth of vines in the garden. Users can adjust the slider to change the number of vines, making the garden appear more or less dense.

The mechanic works as follows:
- At the beginning, the audio volume is set to zero, so no additional vines grow.
- When users increase the volume, the number of vines gradually increases.
- When users decrease the volume, the number of vines also decreases.
- However, the slider cannot activate the mechanic directly. Users must first click on the canvas to activate the interaction through the Click Mechanic. After that, they can use the audio slider to control the vines' growth.

The mechanic is implemented in two files:
- Audio.js: Controls the background audio and creates the volume slider, allowing users to adjust the audio volume.
- Sketch1.js: Contains the vine data and controls the creation, growth and display of the vines. It includes functions such as createWave(), updateWings() and drawWings() to generate, update and draw the vines.
### Mechanic 2 — Rain Reveal

**Team member:** Helen Huynh (xhuy0885)

My mechanic gradually reveals the interactive garden through a rain animation. It creates a sense of anticipation and discovery rather than showing the entire garden immediately.

At the beginning, a white overlay covers the canvas. After approximately 3 seconds, rain begins falling. At approximately 5 seconds, the white overlay starts fading to reveal the garden underneath. By approximately 15 seconds, the garden is fully visible and the rain stops.

The mechanic is implemented in `mechanic2/rain-reveal.js` using two classes:

- **Raindrop:** Creates individual raindrops with random positions, lengths and speeds. The `update()` method moves each raindrop downwards, while the `display()` method draws it.
- **RainReveal:** Controls the rainfall and white overlay. It uses `millis()` to track time and `map()` to reduce the overlay's opacity from 255 to 0.

The `drawOverlay()` method is called from the main `sketch.js` after the garden elements are drawn.

This mechanic supports the project's inspiration from Gustav Klimt's *Bauerngarten* by gradually revealing the colourful garden.

### Mechanic 3 — Grass Background
Team member: Wang Jing (jwan0462)

My mechanic creates an animated grass background inspired by Gustav Klimt’s Bauerngarten (1907). It uses thousands of small, coloured brushstrokes to recreate the painting’s dense vegetation and layered textures. The grass moves gently to make the garden feel more natural and alive.

At the beginning, 6,000 grass strokes are generated using the random() function. Each stroke has a different position, length, thickness, colour, and movement value. This creates a rich and varied texture instead of a repetitive pattern.

The animation uses noise() to create smooth, continuous movement. A spatial Perlin Noise field controls the general direction of the grass, while noise values changing over time create a gentle wind effect. Each stroke also has small individual movements, making the animation look more organic.

The mechanic is implemented in mechanic3/grassPilot01.js using two main functions:

* setupGrass(): Generates the grass strokes and their random properties.
* drawGrass(): Uses Perlin Noise to update the movement and draw the grass on the canvas.

The main sketch.js calls these functions to integrate the grass with the other mechanics.

This mechanic supports the project’s artistic inspiration by translating Klimt’s layered vegetation and expressive brushstrokes into a moving digital background. It provides a natural environment for the interactive flowers and other visual elements.
### Mechanic 4 — User Interaction and Flowers
Team Member: Yini Chen (yche0155)
Interaction Mechanism: User Input

My mechanic allows viewers to plant flowers and influence their movement, actively shaping the garden's composition.

The mechanic works as follows:

- Clicking inside the canvas creates a gradually blooming flower with a random size and one of five colours: pink, red, blue, purple or orange.
- Flower stems sway gently. Moving the mouse closer increases their swaying amplitude, providing immediate visual feedback.
- Pressing R pauses or resumes flower growth while swaying continues. Pressing Space clears all user-created flowers.

The mechanic is organised into two files:

- mechanic4/input-controls.js: Defines the UserInputMechanic class. addFlower() creates flowers; updateFlower() controls growth and uses dist(), sin() and lerp() for proximity-responsive, smoothly changing swaying; drawFlower() renders each flower using scaling and rotation. Input handlers process mouse clicks and keyboard controls.
- mechanic4/sketch4.js: Provides a standalone sketch that creates the canvas, initialises the mechanic, updates and draws flowers each frame, and forwards mouse and keyboard events to the class.

Inspired by the colourful, densely arranged flowers in  Gustav Klimt's Bauerngarten (1907), this mechanic lets viewers build their own floral composition. Randomised sizes and colours introduce variety, while stronger swaying near the mouse makes the viewer's influence visible. Together with the rain, grass and vines, it contributes direct participation to the team's interactive garden.

## AI Acknowledgement

ChatGPT (OpenAI) was used to assist with understanding p5.js, troubleshooting code integration and preparing documentation.

For Mechanic 2, AI assistance helped develop and refine the rain animation and timed reveal. The code uses Raindrop objects to animate falling rain and a RainReveal object to control the fading white overlay.


## External References

- **Gustav Klimt, Bauerngarten (1907):** Main artistic inspiration. https://en.wikipedia.org/wiki/Bauerngarten_(painting)
- **p5.js:** JavaScript library used to create the artwork. https://p5js.org/
- **p5.js Reference:** Documentation for functions including `random()`, `millis()`, `map()`, `fill()` and `rect()`. https://p5js.org/reference/
- **p5.sound:** Audio functionality used in the project. https://p5js.org/reference/p5.sound/


## Interaction Instructions

1. Open the interactive garden: https://helenhuynh1304.github.io/xhuy0885_9103_tut4/
2. The website may display "Loading..." for a few seconds before the interactive artwork appears. Please wait briefly for the artwork to load. Once loading is complete, the garden will appear and users can interact with it normally.
3. Wait for the rain animation to begin and the garden to gradually appear.
4. Click inside the garden to plant flowers and start the music.
5. Move the mouse near flowers to observe their movement.
6. Adjust the volume slider to change the music volume and influence vine growth.
7. Press R to pause or resume blooming, and Space to clear flowers.

## Project Structure

- `index.html` — Loads the project files.
- `sketch.js` — Main animation and interaction code.
- `mechanic1/` — Audio and vines.
- `mechanic2/rain-reveal.js` — Rain and reveal animation.
- `mechanic3/` — Grass.
- `mechanic4/` — User interaction and flowers.
  
