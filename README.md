
# Interactive Garden

## Inspiration

Our team's interactive garden was inspired by *Bauerngarten* (1907), a painting by Gustav Klimt. The painting features colourful flowers, dense natural patterns and overlapping shapes that create a lively garden atmosphere.

We wanted to transform Klimt's still painting into an interactive digital experience using p5.js. By introducing animation, rainfall, sound and user interaction, our project explores how the garden can come to life and respond to the viewer.

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

### Mechanic 4 — User Interaction and Flowers

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
2. Wait for the rain animation to begin and the garden to gradually appear.
3. Click inside the garden to plant flowers and start the music.
4. Move the mouse near flowers to observe their movement.
5. Adjust the volume slider to change the music volume and influence vine growth.
6. Press R to pause or resume blooming, and Space to clear flowers.

## Project Structure

- `index.html` — Loads the project files.
- `sketch.js` — Main animation and interaction code.
- `mechanic1/` — Audio and vines.
- `mechanic2/rain-reveal.js` — Rain and reveal animation.
- `mechanic3/` — Grass.
- `mechanic4/` — User interaction and flowers.
  
