// Necessary boilerplate
// - Deliberately define initPoemGraphic variable as `var` so it has global scope!
// - But we only want to define it once, so check first
if (!initPoemGraphic) var initPoemGraphic;

// Every canvas-based poem needs to supply 2 functions to the wider system
initPoemGraphic = (poemGraphicFunctions) => {

  // Boilerplate - to keep the scrawl library clean
  const namespace = 'flaw',
    name = (n) => `${namespace}-${n}`;

  // This code will run once at the end of page (and script) loading
  poemGraphicFunctions.buildPoemGraphic = (scrawl) => {

    // Get a handle on the canvas element
    const canvas = scrawl.getCanvas(namespace);

    // Extract the poem lines from the canvas fallback content
    const domLines = canvas.domElement.querySelectorAll('.poem-line');
    const lines = [...domLines].map(l => l.innerText);

    console.log(lines);

    // Helper variables and functions
    const rows = 18,
      columns = 8,
      rowDistance = 640 / rows,
      columnDistance = 400 / columns;


    // Create the ball
    const ballRadius = 90;

    const ball = scrawl.makeWheel({

      name: name('ball'),
      radius: ballRadius,
      handle: ['center', 'center'],
      method: 'none',
      lockTo: 'mouse'
    });

    // Ball repeller force
    scrawl.makeForce({

      name: name('ball-repellor'),

      action: (particle, world, host) => {
        const { load, position } = particle;
        const ballPos = ball.get('position');

        const v = scrawl.requestVector(ballPos).vectorSubtract(position);
        const mag = v.getMagnitude();

        if (mag && mag < ballRadius) {
          v.scalarMultiply(1 / (mag / 2000));
          load.vectorSubtract(v);
        }
        scrawl.releaseVector(v);
      }
    });

    // Create the Net that drives the spaghetti
    scrawl.makeWorld({

      name: name('spaghetti-world'),
      tickMultiplier: 1
    });

    scrawl.makeNet({

      name: name('spaghetti-net'),
      order: 1,
      start: [64, 40],

      rows,
      columns,
      rowDistance,
      columnDistance,

      world: name('spaghetti-world'),
      mass: 1,
      springConstant: 50,
      damperConstant: 2,
      engine: 'runge-kutta',
      generate: 'weak-net',

      forces: [name('ball-repellor')],

      artefact: scrawl.makeBlock({
        name: name('spaghetti-net-artefact'),
        visibility: false
      }),

      postGenerate: function () {

        this.particleStore.forEach((particle) => {

          if (
            particle.name.includes('-0') ||
            (particle.name.includes(`-${columns - 1}`) &&
              particle.name.lastIndexOf(`-${columns - 1}`) >
                particle.name.length - 4)
          ) {

            this.springs.forEach((spring) => {

              if (
                spring &&
                spring.particleFrom &&
                spring.particleFrom.name === particle.name
              ) {

                spring.particleFromIsStatic = true;
              }

              if (
                spring &&
                spring.particleTo &&
                spring.particleTo.name === particle.name
              ) {

                spring.particleToIsStatic = true;
              }
            });

            particle.set({ forces: [] });
          }
        });
      }
    });


    // Create line spaghetti
    for (let i = 1; i < 18; i++) {
      const pins = [];

      for (let j = 0; j < 8; j++) {
        pins.push(`${name('spaghetti-net')}-${i}-${j}`);
      }

      scrawl.makePolyline({
        name: name(`spaghetti-${i}`),
        tension: 0.3,
        pins,
        mapToPins: true,
        useParticlesAsPins: true,
        useAsPath: true,
        method: 'none',
      });
    }


    // Add poem lines to spaghetti
    lines.forEach((line, index) => {

      let indent = 0,
        pathIndex = (index < 8) ? index + 1 : index + 2;

      if (index % 4 === 3) indent = 0.16;

      scrawl.makeEnhancedLabel({

        name: name(`poem-line-${index}`),
        text: line,
        fontString: '18px "Roboto Mono", monospace',
        path: name(`spaghetti-${pathIndex}`),

        layoutTemplate: name(`spaghetti-${pathIndex}`),
        useLayoutTemplateAsPath: true,
        pathPosition: 0.01 + indent,
        alignTextUnitsToPath: true,

        breakTextOnSpaces: false,
        textHandle: ['center', 'alphabetic'],

        // Switch off accessible text 
        // - The poem is already present in the canvas fallback content
        // - No need to make the screen reader read out the poem twice
        textIsAccessible: false,
      });
    });


    // Animate the scene
    scrawl.makeRender({
      name: name('animation'),
      target: canvas,
    });

console.log(scrawl.library)
  };

  // This code will run once when user navigates away from the poem
  poemGraphicFunctions.killPoemGraphic = (scrawl) => {

    scrawl.purge(namespace);
  };
};
