// Necessary boilerplate
// - Deliberately define initPoemGraphic variable as `var` so it has global scope!
// - But we only want to define it once, so check first
if (!initPoemGraphic) var initPoemGraphic;

// Every canvas-based poem needs to supply 2 functions to the wider system
initPoemGraphic = (poemGraphicFunctions) => {

  // Boilerplate - to keep the scrawl library clean
  const namespace = 'kingfisher-pool',
    name = (n) => `${namespace}-${n}`;

  // This code will run once at the end of page (and script) loading
  poemGraphicFunctions.buildPoemGraphic = (scrawl) => {

    // Get a handle on the canvas element
    const canvas = scrawl.getCanvas(namespace);

    // Get the canvas dimensions
    const [width, height] = canvas.get('dimensions'),
      rnd = (min, extra) => min + Math.floor(Math.random() * extra),
      eWidth = width / 4,
      eHeight = height / 4;


    // Create the waterfall origin
    scrawl.makeLine({
      name: name('waterfall-origin'),
      start: ['30%', 25],
      end: ['70%', 25],
      method: "none",
      useAsPath: true,
    });

    // Add in the waterfall particle system
    scrawl.makeEmitter({

      name: name('waterfall-emitter'),

      world: scrawl.makeWorld({
        name: name('waterfall-world'),
        tickMultiplier: 1,
      }),

      generationRate: 200,
      generateAlongPath: name('waterfall-origin'),
      killBeyondCanvas: true,

      forces: ['gravity'],

      rangeFrom: {
        x: -9,
        y: -20,
        z: 0
      },
      range: {
        x: 18,
        y: 50,
        z: 0
      },

      artefact: scrawl.makeWheel({

        name: name('water-template'),
        handle: ['center', 'center'],
        radius: 3.5,
        visibility: false,
        noUserInteraction: true,
        noPositionDependencies: true,
        noFilters: true,
        noDeltaUpdates: true
      }),

      fillMinimumColor: 'rgb(0 0 160 / 0.5)',
      fillMaximumColor: 'rgb(230 230 255 / 0.5)',

      stampFirst: 'newest',

      stampAction: function (artefact, particle, host) {

        const history = particle.history;
        let start;

        if (history.length) {

          [, , ...start] = history[0];

          artefact.simpleStamp(host, {
            start,
            fillStyle: particle.fill
          });
        }
      }
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
