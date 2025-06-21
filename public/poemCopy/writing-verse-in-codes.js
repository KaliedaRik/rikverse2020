// Necessary boilerplate
// - Deliberately define initPoemGraphic variable as `var` so it has global scope!
// - But we only want to define it once, so check first
if (!initPoemGraphic) var initPoemGraphic;

// Every canvas-based poem needs to supply 2 functions to the wider system
initPoemGraphic = (poemGraphicFunctions) => {

  // Boilerplate - to keep the scrawl library clean
  const namespace = 'writing-verse-in-codes',
    name = (n) => `${namespace}-${n}`;

  // This code will run once at the end of page (and script) loading
  poemGraphicFunctions.buildPoemGraphic = (scrawl) => {

    // Get a handle on the canvas element
    const canvas = scrawl.getCanvas(namespace);

    // Generate the pin
    const pin = scrawl.makeWheel({
      name: name('pin'),
      start: ['50%', '20%'],
      handle: ['center', 'center'],
      lineWidth: 6,
      radius: 50,
      strokeStyle: 'red',
      method: 'draw'
    });

    // Build the ticker
    const ticker = scrawl.makeTicker({
      name: name('ticker'),
      duration: 19000,
      cycles: 0,
    });

    // Extract the poem lines from the canvas fallback content
    const domLines = [...canvas.domElement.querySelectorAll('.line')],
      lineLen = domLines.length;

    domLines.forEach((line, index) => {

      const data = line.dataset;

      const item = scrawl.makeLabel({

        name: name(`text-${index}`),
        handle: [-60, '50%'],
        pivot: pin,
        lockTo: 'pivot',
        roll: -90,
        fontString: data.font,
        direction: data.direction,
        text: line.innerText,
        textIsAccessible: false,
        scale: 0.1,
      });

      scrawl.makeTween({

        name: name(`text-${index}-tween-out`),
        ticker: name('ticker'),
        targets: [item],
        time: 100 + 200 * index,
        duration: 6000,
        definitions: [{
          attribute: 'scale',
          start: 0.1,
          end: 1,
          engine: 'easeOut3',
        }, {
          attribute: "roll",
          start: -90,
          end: 90,
          engine: 'easeOut3',
        }],

      }).clone({

        name: name(`text-${index}-tween-in`),
        time: 6100 + 200 * index,
        definitions: [{
          attribute: 'scale',
          start: 1,
          end: 0.1,
          engine: 'easeIn3',
        }, {
          attribute: 'roll',
          start: 90,
          end: 270,
          engine: 'easeIn3',
        }],
      });
    });

    scrawl.makeRender({
      name: name('animation'),
      target: canvas,
    });

    ticker.run();

    console.log(scrawl.library)
  };

  // This code will run once when user navigates away from the poem
  poemGraphicFunctions.killPoemGraphic = (scrawl) => {

    scrawl.purge(namespace);
  };
};
