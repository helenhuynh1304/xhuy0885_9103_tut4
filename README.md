Mechanic 3: Perlin Noise & Randomness – Grass Animation

Responsible Member: Wang Jing (jwan0462)
Main File: mechanic3/grassPilot01.js

Inspiration

My grass animation was inspired by Gustav Klimt’s Bauerngarten (1907), especially its dense vegetation, layered green colours, and expressive brushstrokes.

I wanted to recreate the rich texture of the painting using thousands of small coloured lines. Instead of making realistic grass, I focused on creating a painterly garden background.

The goal was to bring the static painting to life through gentle, natural movement while keeping the background visually consistent with the other mechanics.

Techniques and Implementation

Randomness

I used the p5.js random() function to create variations in the grass strokes, including their positions, colours, lengths, thicknesses, and individual movement parameters.

The animation uses 6,000 short strokes to create a dense and varied texture. These differences help the grass look organic rather than repetitive.

Perlin Noise

I used noise() to control the directions and subtle movement of the strokes.

A spatial noise field creates related directions across the grass, while slowly changing noise values produce a wind-like effect over time.

Small positional variations keep the grass moving gently around its original location, helping maintain the overall composition.

Design Decisions and Iteration

During development, I experimented with stroke density, colours, lengths, and movement.

I refined the animation to reduce excessive movement and create a more subtle visual effect. I also adjusted the length and sway ranges to help the grass blend with the flowers and other interactive elements.

The final design combines the irregularity of Randomness with the smooth movement of Perlin Noise.

Code Structure and Individual Contribution

My mechanic is stored in mechanic3/grassPilot01.js.

The shared sketch.js controller integrates the grass through setupGrass() and drawGrass().

I was responsible for designing, coding, testing, and refining the animated grass background. My contribution includes its visual texture, colour selection, random stroke generation, Perlin Noise movement, and GitHub development history.

AI Acknowledgement

I used ChatGPT to support the development of my grass animation, including understanding p5.js functions, exploring Randomness and Perlin Noise, debugging, and adjusting animation parameters.

I reviewed and refined the code during development to achieve the intended visual effect.


External References

* Klimt, G. (1907). Bauerngarten [Painting]. Artistic inspiration for the grass textures, dense vegetation, and colour palette.
* p5.js. (n.d.). Reference. https://p5js.org/reference/
* p5.js. (n.d.). random(). https://p5js.org/reference/p5/random/
* p5.js. (n.d.). noise(). https://p5js.org/reference/p5/noise/

Interaction Instructions

The grass animation runs automatically when the garden loads.

Users do not need to click or press any keys to activate the grass. It moves continuously and gently to create the impression of wind passing through the garden.
