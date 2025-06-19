// Necessary boilerplate
// - Deliberately define initPoemGraphic variable as `var` so it has global scope!
// - But we only want to define it once, so check first
if (!initPoemGraphic) var initPoemGraphic;

// Every canvas-based poem needs to supply 2 functions to the wider system
initPoemGraphic = (poemGraphicFunctions) => {

  // Boilerplate - to keep the scrawl library clean
  const namespace = 'economic-migration',
    name = (n) => `${namespace}-${n}`;

  // This code will run once at the end of page (and script) loading
  poemGraphicFunctions.buildPoemGraphic = (scrawl) => {

    // Get a handle on the canvas element
    const canvas = scrawl.getCanvas(namespace);

    // Extract the poem lines from the canvas fallback content
    const domLines = canvas.domElement.querySelectorAll('.poem-line');
    const lines = [...domLines].map(l => l.innerText);

    // Background
    canvas.buildCell({

        name: name('trace-chamber'),
        dimensions: ['100%', '100%'],
        clearAlpha: 0.998,
        shown: false,
    });

    const myWorld = scrawl.makeWorld({

        name: name('my-world'),
        tickMultiplier: 2,
    });


    const emitter = scrawl.makeEmitter({

        name: name('emitter'),
        group: name('trace-chamber'),

        start: ['center', 'center'],

        world: myWorld,

        generationRate: 50,
        killAfterTime: 4,
        killBeyondCanvas: true,

        generateFromExistingParticles: true,

        fillMinimumColor: 'pink',
        fillMaximumColor: 'white',

        rangeX: 40,
        rangeFromX: -20,
        minimumVelocityX: 10,
        limitDirectionToAngleMultiples: 45,

        artefact: scrawl.makeWheel({
            name: name('trace'),
            radius: 2,
        }),

        stampAction: function (artefact, particle, host) {

            const history = particle.history;

            let start;

            if (history.length) {

                [ , , ...start] = history[0];

                artefact.simpleStamp(host, {
                    start,
                    fillStyle: particle.fill,
                });
            }
        },
    });

    scrawl.makePicture({

      name: name('background'),
      dimensions: ['100%', '100%'],
      copyDimensions: ['100%', '100%'],
      asset: name('trace-chamber'),
    });

    // Title
    scrawl.makeBlock({

      name: name('title-pin'),
      dimensions: [1, 1],
      start: ['center', 'center'],
      method: 'none'
    });

    scrawl.makeLabel({

      name: name('title'),
      fontString: '24px Arial, sans-serif',
      letterSpacing: 2,
      text: lines[0],
      pivot: name('title-pin'),
      handle: ['center', 'center'],
      lockTo: 'pivot',
      textIsAccessible: false,
      roll: -90,
    });

    scrawl.makeLine({

      name: name('title-top-line'),
      start: ['47%', '90%'],
      end: ['47%', '20%'],
      lineWidth: 4,
      method: 'draw',

    }).clone({

      name: name('title-base-line'),
      start: ['53.5%', '80%'],
      end: ['53.5%', '10%'],
    });

    const lineSpace = -20,
      lineIndent = -40;

    // Strophe 1
    scrawl.makeBlock({

      name: name('strophe-1-pin'),
      dimensions: [1, 1],
      start: ['5%', '41%'],
      method: 'none',
    });

    scrawl.makeLabel({

      name: name('strophe-1-line-1'),
      fontString: '16px Arial, sans-serif',
      letterSpacing: 1,
      text: lines[1],
      pivot: name('strophe-1-pin'),
      handleY: lineSpace * 0,
      lockTo: 'pivot',
      textIsAccessible: false,
      roll: -60,

    }).clone({

      name: name('strophe-1-line-2'),
      text: lines[2],
      handleY: lineSpace * 1,

    }).clone({

      name: name('strophe-1-line-3'),
      text: lines[3],
      handleY: lineSpace * 2,

    }).clone({

      name: name('strophe-1-line-4'),
      text: lines[4],
      handleY: lineSpace * 3,
    });

    // Strophe 2
    scrawl.makeBlock({

      name: name('strophe-2-pin'),
      dimensions: [1, 1],
      start: ['56%', '2%'],
      method: 'none',
    });

    scrawl.makeLabel({

      name: name('strophe-2-line-1'),
      fontString: '16px Arial, sans-serif',
      letterSpacing: 1,
      text: lines[5],
      pivot: name('strophe-2-pin'),
      handleX: 0,
      handleY: lineSpace * 0,
      lockTo: 'pivot',
      textIsAccessible: false,

    }).clone({

      name: name('strophe-2-line-2'),
      text: lines[6],
      handleX: lineIndent,
      handleY: lineSpace * 1,

    }).clone({

      name: name('strophe-2-line-3'),
      text: lines[7],
      handleX: 0,
      handleY: lineSpace * 2,

    }).clone({

      name: name('strophe-2-line-4'),
      text: lines[8],
      handleX: lineIndent,
      handleY: lineSpace * 3,

    }).clone({

      name: name('strophe-2-line-5'),
      text: lines[9],
      handleX: 0,
      handleY: lineSpace * 4,

    }).clone({

      name: name('strophe-2-line-6'),
      text: lines[10],
      handleX: lineIndent,
      handleY: lineSpace * 5,

    }).clone({

      name: name('strophe-2-line-7'),
      text: lines[11],
      handleX: 0,
      handleY: lineSpace * 6,

    }).clone({

      name: name('strophe-2-line-8'),
      text: lines[12],
      handleX: lineIndent,
      handleY: lineSpace * 7,

    }).clone({

      name: name('strophe-2-line-9'),
      text: lines[13],
      handleX: 0,
      handleY: lineSpace * 8,

    }).clone({

      name: name('strophe-2-line-10'),
      text: lines[14],
      handleX: lineIndent,
      handleY: lineSpace * 9,
    });

    // Strophe 3
    scrawl.makeBlock({

      name: name('strophe-3-pin'),
      dimensions: [1, 1],
      start: ['58%', '70%'],
      method: 'none',
    });

    scrawl.makeLabel({

      name: name('strophe-3-line-1'),
      fontString: '16px Arial, sans-serif',
      letterSpacing: 1,
      text: lines[15],
      pivot: name('strophe-3-pin'),
      handleY: lineSpace * 0,
      lockTo: 'pivot',
      textIsAccessible: false,
      roll: -90,

    }).clone({

      name: name('strophe-3-line-2'),
      text: lines[16],
      handleY: lineSpace * 1,

    }).clone({

      name: name('strophe-3-line-3'),
      text: lines[17],
      handleY: lineSpace * 2,

    }).clone({

      name: name('strophe-3-line-4'),
      text: lines[18],
      handleY: lineSpace * 3,

    }).clone({

      name: name('strophe-3-line-5'),
      text: lines[19],
      handleY: lineSpace * 4,
    });

    // Strophe 4
    scrawl.makeBlock({
      name: name('strophe-4-pin'),
      dimensions: [1, 1],
      start: ['57%', '94%'],
      method: 'none',
    });

    scrawl.makeLabel({

      name: name('strophe-4-line-1'),
      fontString: '16px Arial, sans-serif',
      letterSpacing: 1,
      text: lines[20],
      pivot: name('strophe-4-pin'),
      handleY: lineSpace * 0,
      lockTo: 'pivot',
      textIsAccessible: false,
      roll: -60,

    }).clone({

      name: name('strophe-4-line-2'),
      text: lines[21],
      handleY: lineSpace * 1,

    }).clone({

      name: name('strophe-4-line-3'),
      text: lines[22],
      handleY: lineSpace * 2,

    }).clone({

      name: name('strophe-4-line-4'),
      text: lines[23],
      handleY: lineSpace * 3,

    });

    // Strophe 5
    scrawl.makeBlock({

      name: name('strophe-5-title-template'),
      dimensions: ['40%', '8%'],
      start: ['2%', '51%'],
      method: 'none',

    }).clone({

      name: name('strophe-5-leftcol-template'),
      dimensions: ['18%', '35%'],
      start: ['2%', '61%'],

    }).clone({

      name: name('strophe-5-rightcol-template'),
      start: ['23%', '61%'],
    });

    scrawl.makeEnhancedLabel({

      name: name('strophe-5-title'),
      fontString: 'bold 26px Arial, sans-serif',
      text: lines[24],
      layoutTemplate: name('strophe-5-title-template'),
      justifyLine: 'space-between',
      lineSpacing: 1.2,
      textIsAccessible: false,
      lineAdjustment: 10,
    });

    scrawl.makeEnhancedLabel({

      name: name('strophe-5-leftcol'),
      fontString: '15px Arial, sans-serif',
      text: lines[25],
      layoutTemplate: name('strophe-5-leftcol-template'),
      justifyLine: 'space-between',
      lineSpacing: 1.2,
      textIsAccessible: false,
    });

    scrawl.makeEnhancedLabel({

      name: name('strophe-5-rightcol'),
      fontString: '15px Arial, sans-serif',
      text: lines[26],
      layoutTemplate: name('strophe-5-rightcol-template'),
      justifyLine: 'space-between',
      lineSpacing: 1.2,
      textIsAccessible: false,
    });


    scrawl.makeRender({
      name: name('animation'),
      target: canvas,
    });
  };

  // This code will run once when user navigates away from the poem
  poemGraphicFunctions.killPoemGraphic = (scrawl) => {

    scrawl.purge(namespace);
  };
};
