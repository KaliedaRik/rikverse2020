/*
Tags:

- Cat:              All things cat
- Communication:    Written, spoken, non-spoken
- Culture:          Arts and artistry; craft and craftery
- Ekphrasis:        Meditation on an object, idea, etc 
- Embodiment:       Things made flesh
- Eulogy:           Commemorating the passing of things
- Faith:            Religious and otherwise
- Family:           Anything to do with close relations (but not lovers), childhood, etc
- Inheritance:      Intergenerational, historical, or imposed 
- Light:            Because not everything has to be serious or even profound (Poetry is Fun!)
- Love:             Anything that makes the world go round
- Machine:          Technological and industrial
- Noir:             Anything dark
- Object:           Anything (supposedly) inanimate
- Office:           Corporate life
- Olympic:          Anything to do with Olympian endeavour
- Other-published:  The poem has also been published by a third party
- Outsider:         On the edges of society, or beyond them
- Performance:      How people act to others
- Power:            Commercial, economic, religious, political - the unseen structures we inhabity
- Rural:            Not of the city
- Sex:              Usually gratuitous
- Surreal:          Imagined, perhaps
- Translation:      Specifically a poem translated into English
- Urban:            Of the city
- Violence:         Generally physical, sometimes emotional, occasionally spiritual
- Voyeur:           Generally with a tourist's eye
- Wonder:           A moment of transformation
*/

/*
Data structure

  {
    id:               String;     // alphanumeric and '-' only
    title:            String;
    description:      String;     // First line of the poem
    publishdate:      String;     // 'YYYY-MM-01' - date last edited (if edit is significant)
    tags:             String[];   // Tag strings defined above
    complete:         Boolean;    // Is considered to be publishable

    showcase?:        Boolean;    // Can be randomly selected
    statusText?:      String;     // eg publication details

    audiofile?:       String;     // URL to audio file
    videofile?:       String;     // URL to video file
    imagefile?:       String;     // URL to image file
    imageCaption?:    String;     // Required if imagefile attribute is used
    imagePosition?:   String;     // 'bottom' | 'top'
  },

*/

// ["Cat", "Communication", "Culture", "Ekphrasis", "Embodiment", "Eulogy", "Faith", "Family", "Inheritance", "Light", "Love", "Machine", "Noir", "Object", "Office", "Olympic", "Other-published", "Outsider", "Performance", "Power", "Rural", "Sex", "Surreal", "Translation", "Urban", "Violence", "Voyeur", "Wonder"]


const poems = [
  {
    id: "a-growl-for-sweet-complaint",
    title: "A Growl for Sweet Complaint",
    description: "I have a fear: a loss of wonder glimpsed",
    publishdate: "2025-06-01",
    statusText: "After 'Soneto de la dulce queja' by Federico García Lorca",
    tags: ["Translation"],
    complete: true
  },
  {
    id: "a-howl-for-garland-roses",
    title: "A Howl for Garland Roses",
    description: "Know this: I'm dying! Now! A pretty crown!",
    publishdate: "2025-06-01",
    statusText: "After 'Soneto de la guirnalda de rosas' by Federico García Lorca",
    tags: ["Translation"],
    complete: true
  },
  {
    id: "a-sassanid-vase",
    title: "A Sassanid Vase, at Rest",
    description: "Within its clear lattice, a history of hands:",
    publishdate: "2025-05-01",
    tags: ["Culture", "Ekphrasis", "Inheritance", "Object"],
    imagefile: "/images/poem-a-sassanid-vase.webp",
    imageCaption: "The 'Elinor of Aquitaine' Sassanid vase, Louvre, Paris",
    imagePosition: "bottom",
    complete: true
  },
  {
    id: "a-scene-undated",
    title: "A Scene, undated",
    description: "A gargoyle sits in its arch and watches",
    publishdate: "2018-04-01",
    tags: ["Performance", "Urban", "Voyeur"],
    complete: false
  },
  {
    id: "a-tribute-of-sorts",
    title: "A tribute, of sorts",
    description: "Snow on the bough snuggles about",
    publishdate: "2017-10-01",
    statusText: "Included in the collection 'And Still I Breathe'",
    tags: ["Culture", "Eulogy"],
    complete: true
  },
  {
    id: "a-walk-in-the-woods",
    title: "A Walk in the Woods",
    description: "This miniature version of man",
    publishdate: "2005-11-01",
    tags: ["Family", "Inheritance", "Wonder"],
    complete: false
  },
  {
    id: "accessory",
    title: "Accessory",
    description: "Such a stupid hat",
    publishdate: "2006-05-01",
    statusText: "Included in the collection 'Poems to Quote to your Lover'",
    tags: ["Love", "Performance", "Surreal"],
    complete: true
  },
  {
    id: "acolyte",
    title: "Acolyte",
    description: "He's tall in his pew, this ladding man",
    publishdate: "2006-01-01",
    statusText: "Included in the collection 'From Each Skull, A Story'",
    tags: ["Communication", "Faith", "Performance", "Power", "Violence"],
    showcase: true,
    complete: true
  },
  {
    id: "after-class",
    title: "After Class",
    description: "After the first class, we went to the bar. Introduced",
    publishdate: "1999-07-01",
    statusText: "Included in the collection 'Play Time'",
    tags: ["Love", "Performance"],
    showcase: true,
    complete: true
  },
  {
    id: "alice",
    title: "Alice",
    description: "She can see faces of loves and lovers",
    publishdate: "1990-05-01",
    tags: ["Eulogy", "Family", "Inheritance", "Outsider"],
    complete: false
  },
  {
    id: "an-egg-from-the-earth",
    title: "An Egg from the Earth",
    description: "You've taken a beating over the years",
    publishdate: "2017-04-01",
    tags: ["Ekphrasis", "Object", "Performance"],
    imagefile: "/images/poem-an-egg-from-the-earth.webp",
    imageCaption: "The Sutton Hoo Helm (2016) - Wikimedia Commons",
    imagePosition: "bottom",
    complete: false
  },
  {
    id: "an-office-acquaintance",
    title: "An Office Acquaintance Offers Advice",
    description: "He said: love is",
    publishdate: "2025-06-01",
    statusText: "Included in the collection 'Poems to Quote to your Lover'",
    tags: ["Communication", "Office", "Performance", "Sex", "Voyeur"],
    complete: true
  },
  {
    id: "and-still-i-breathe",
    title: "And Still I Breathe",
    description: "The sky ripened and the sun bled",
    publishdate: "2017-10-01",
    statusText: "Included in the collection 'And Still I Breathe'",
    tags: ["Communication", "Wonder"],
    showcase: true,
    complete: true
  },
  {
    id: "annie",
    title: "Annie",
    description: "Annie sees dragons in all things",
    publishdate: "2017-10-01",
    statusText: "Included in the collection 'And Still I Breathe'",
    tags: ["Office", "Outsider", "Surreal"],
    showcase: true,
    complete: true
  },
  {
    id: "anniversary",
    title: "Anniversary",
    description: "The shock wears thin",
    publishdate: "2010-09-01",
    statusText: "Included in the collection 'To Posterity'",
    tags: ["Embodiment", "Power"],
    complete: true
  },
  {
    id: "appreciation",
    title: "Appreciation",
    description: "In the kingdom of time suspended",
    publishdate: "1992-08-01",
    statusText: "Published in 'Magma 1' (March 1994)\nIncluded in the collection 'Play Time'",
    tags: ["Culture", "Other-published", "Performance", "Power", "Sex"],
    videofile: "/video/appreciation.mp4",
    showcase: true,
    complete: true
  },
  {
    id: "arcelormittal-orbit",
    title: "ArcelorMittal Orbit",
    description: "It might be a hundred",
    publishdate: "2025-06-01",
    tags: ["Culture", "Light", "Object", "Olympic"],
    complete: true
  },
  {
    id: "art",
    title: "Art",
    description: "It was speeded and slowed",
    publishdate: "1992-03-01",
    statusText: "Included in the collection 'Play Time'",
    tags: ["Culture", "Outsider", "Urban", "Violence", "Voyeur"],
    complete: true
  },
  {
    id: "as-silk-strokes-amber",
    title: "As Silk Strokes Amber",
    description: "If the cholera had achieved its aim to drain the last drops",
    publishdate: "2019-01-01",
    statusText: "Included in the collection 'More Love Poems Innit'",
    tags: ["Communication", "Love", "Machine", "Wonder"],
    showcase: true,
    complete: true
  },
  {
    id: "attic",
    title: "Attic",
    description: "It takes more than a ladder",
    publishdate: "2017-10-01",
    statusText: "Included in the collection 'And Still I Breathe'",
    tags: ["Communication", "Eulogy", "Inheritance"],
    complete: true
  },
  {
    id: "autumn",
    title: "Autumn",
    description: "This year autumn arrives in August",
    publishdate: "1999-08-01",
    statusText: "Included in the collection 'Play Time'",
    tags: ["Embodiment", "Eulogy", "Outsider", "Wonder"],
    complete: true
  },
  {
    id: "banshee",
    title: "Banshee",
    description: "She dabs his hot form",
    publishdate: "2010-08-01",
    statusText: "Included in the collection 'To Posterity'",
    tags: ["Embodiment", "Eulogy", "Surreal"],
    complete: true
  },
  {
    id: "beachhead",
    title: "Beachhead",
    description: "Here lie brittlestars, evicted from deep-channel muds",
    publishdate: "1999-05-01",
    statusText: "Included in the collection 'Play Time'",
    tags: ["Inheritance", "Love", "Rural", "Urban"],
    complete: true
  },
  {
    id: "beko-cda648fs-silver",
    title: "Beko CDA648FS Silver",
    description: "My new box sits in a corner",
    publishdate: "2010-09-01",
    statusText: "Included in the collection 'To Posterity'",
    tags: ["Eulogy", "Family", "Object"],
    complete: true
  },
  {
    id: "between-the-flints",
    title: "Between the Flints",
    description: "An amber chain links",
    publishdate: "2012-07-01",
    statusText: "From 'Snowdrop - a story in verse'",
    tags: ["Noir", "Rural", "Wonder"],
    complete: true
  },
  {
    id: "blank-vista",
    title: "Blank Vista",
    description: "The day my shadow left I found a scrape",
    publishdate: "2025-06-01",
    tags: ["Inheritance", "Machine", "Rural", "Violence", "Wonder"],
    complete: true
  },
  {
    id: "blue",
    title: "Blue",
    description: "Indulge me, please: I don't see emotions when I write",
    publishdate: "2025-05-01",
    tags: ["Communication", "Culture"],
    complete: true
  },
  {
    id: "building-for-the-future",
    title: "Building for the Future",
    description: "Beyond Stratford station's rust fence",
    publishdate: "2025-06-01",
    tags: ["Culture", "Machine", "Olympic", "Urban", "Voyeur"],
    complete: true
  },
  {
    id: "burn",
    title: "Burn",
    description: "I've been lost in memories so long",
    publishdate: "2019-01-01",
    statusText: "Included in the collection 'More Love Poems Innit'",
    tags: ["Embodiment", "Eulogy", "Love", "Sex"],
    complete: true
  },
  {
    id: "candle",
    title: "Candle",
    description: "In an island of hard-polished desk",
    publishdate: "1991-11-01",
    statusText: "Published in Magma 4 (Spring 1995)\nIncluded in the collection 'Play Time'",
    tags: ["Eulogy", "Other-published", "Outsider", "Wonder"],
    videofile: "/video/candle.mp4",
    showcase: true,
    complete: true
  },
  {
    id: "cap",
    title: "Cap",
    description: "We first met when I threw the ornament",
    publishdate: "2025-06-01",
    tags: ["Ekphrasis", "Eulogy", "Faith", "Object", "Power"],
    imagefile: "/images/poem-cap.webp",
    imageCaption: "Bust of the God Attis",
    imagePosition: "bottom",
    complete: true
  },
  {
    id: "casework",
    title: "Casework",
    description: "Like all happy things, my commissions come in threes",
    publishdate: "2018-01-01",
    tags: ["Noir"],
    complete: false
  },
  {
    id: "catch",
    title: "Catch",
    description: "Shall I make the wave stop mid-tumble, salt",
    publishdate: "2019-01-01",
    statusText: "Included in the collection To 'More Love Poems Innit'",
    tags: ["Love", "Surreal", "Wonder"],
    showcase: true,
    complete: true
  },
  {
    id: "caveat-emptor",
    title: "Caveat Emptor",
    description: "It's the latest must-have accoutrement! Drape back",
    publishdate: "2005-10-01",
    tags: ["Communication", "Light", "Power"],
    complete: false
  },
  {
    id: "central-station-islington",
    title: "Central Station, Islington",
    description: "His walk is a stammer of toe pokes and heel scuffs",
    publishdate: "2019-01-01",
    statusText: "Included in the collection 'More Love Poems Innit'",
    tags: ["Performance", "Voyeur"],
    complete: true
  },
  {
    id: "chariot",
    title: "Chariot",
    description: "In grey overalls, you are the greatest car",
    publishdate: "2001-01-01",
    statusText: "Included in the collection '22 Facets of my Father'",
    tags: ["Family", "Machine"],
    audiofile: "/audio/chariot",
    videofile: "/video/chariot.mp4",
    complete: true
  },
  {
    id: "chickoan",
    title: "Chic|k|oan",
    description: "I see the face of a neoglyph within a mirror's frame",
    publishdate: "2025-06-01",
    tags: ["Family", "Inheritance", "Outsider", "Wonder"],
    complete: true
  },
  {
    id: "choice",
    title: "Choice no Choice",
    description: "Into the left eye shimmers a desert",
    publishdate: "2025-06-01",
    statusText: "Included in the collection 'PaleoRik'",
    tags: ["Embodiment", "Surreal", "Violence"],
    complete: true
  },
  {
    id: "city",
    title: "City",
    description: "One Tuesday, I tasted a different city",
    publishdate: "1994-05-01",
    statusText: "Included in the collection 'PaleoRik'",
    tags: ["Office", "Urban", "Wonder"],
    complete: true
  },
  {
    id: "city-hall",
    title: "City Hall",
    description: "A welcome now for London's fair unlauded Mayor",
    publishdate: "2002-07-01",
    statusText: "Included in the collection 'From Each Skull, A Story'",
    tags: ["Inheritance", "Power", "Urban"],
    complete: true
  },
  {
    id: "cliff",
    title: "Cliff",
    description: "As the hovercraft puffed its skirts",
    publishdate: "2006-03-01",
    statusText: "Included in the collection 'Poems to Quote to your Lover'",
    tags: ["Family", "Sex"],
    showcase: true,
    complete: true
  },
  {
    id: "communion",
    title: "Communion",
    description: "For my first burlesque in the warm May sun",
    publishdate: "2025-06-01",
    tags: ["Embodiment", "Faith", "Performance"],
    complete: true
  },
  {
    id: "commuting",
    title: "Commuting",
    description: "Whitechapel, 8:38. We shuffle-pack onto the train, a mix",
    publishdate: "1999-05-01",
    statusText: "Included in the collection 'Play Time'",
    tags: ["Office", "Performance", "Sex", "Urban"],
    complete: true
  },
  {
    id: "competitive-plucking",
    title: "Competitive Plucking",
    description: "My goose hisses as I walk the length",
    publishdate: "2025-06-01",
    tags: ["Light", "Performance", "Power", "Surreal"],
    complete: true
  },
  {
    id: "consent",
    title: "Consent",
    description: "It is contrived to a practiced degree",
    publishdate: "1996-11-01",
    statusText: "Included in the collection 'Play Time'",
    tags: ["Embodiment", "Inheritance", "Love", "Violence"],
    complete: true
  },
  {
    id: "coots",
    title: "Coots",
    description: "Look at you, sloven shortwings, your nests",
    publishdate: "2006-07-01",
    statusText: "Featured in the Guardian Unlimited Poetry Workshop (July 2006)\nPublished in Shit Creek Review, Summer 2007\nIncluded in the collection 'From Each Skull, A Story'",
    tags: ["Ekphrasis", "Other-published", "Power", "Violence", "Voyeur"],
    showcase: true,
    complete: true
  },
  {
    id: "cremations",
    title: "Cremations",
    description: "The sun has swilled caskets of Spanish wine",
    publishdate: "1990-11-01",
    statusText: "Included in the collection 'PaleoRik'",
    tags: ["Embodiment", "Eulogy", "Outsider", "Urban", "Wonder"],
    complete: true
  },
  {
    id: "crime-of-passion",
    title: "Crime of Passion",
    description: "He is a cold witness, as chill",
    publishdate: "2025-06-01",
    tags: ["Communication", "Faith", "Noir"],
    complete: true
  },
  {
    id: "croutons",
    title: "Croutons",
    description: "I bought us salad",
    publishdate: "2025-06-01",
    tags: ["Love"],
    complete: true
  },
  {
    id: "culling-a-dog-in-june",
    title: "Culling a Dog in June",
    description: "Put down the messenger, the dog who barked",
    publishdate: "2001-06-01",
    statusText: "Included in the collection 'From Each Skull, A Story'",
    tags: ["Power", "Violence"],
    complete: true
  },
  {
    id: "cusp",
    title: "Cusp",
    description: "On the last morning of Summer",
    publishdate: "1993-11-01",
    statusText: "Published in Magma 1 (March 1994)\nIncluded in the collection 'Play Time'",
    tags: ["Other-published", "Urban", "Wonder"],
    complete: true
  },
  {
    id: "cyber-frustrations",
    title: "Cyber Frustrations",
    description: "There exists this old outfit called Google",
    publishdate: "2018-04-01",
    tags: ["Light"],
    complete: false
  },
  {
    id: "dad-somethings-wrong",
    title: "Dad, Something's Wrong with Nanna",
    description: "Son, you know it takes some time to see",
    publishdate: "2004-10-01",
    statusText: "Included in the collection 'From Each Skull, A Story'",
    tags: ["Communication", "Family", "Noir", "Violence"],
    showcase: true,
    complete: true
  },
  {
    id: "daisy",
    title: "Daisy",
    description: "Where is Daisy's baby?",
    publishdate: "1991-11-01",
    statusText: "Published in Magma 5 (Summer 1995)\nIncluded in the collection 'Play Time'",
    tags: ["Faith", "Family", "Other-published", "Outsider", "Urban"],
    complete: true
  },
  {
    id: "davey",
    title: "Davey",
    description: "Davey wants to swim",
    publishdate: "1990-08-01",
    tags: ["Outsider", "Power", "Voyeur"],
    complete: false
  },
  {
    id: "dear-irene",
    title: "Dear Irene",
    description: "How sweet of your husband to die",
    publishdate: "2025-06-01",
    tags: ["Culture", "Ekphrasis", "Family", "Power"],
    imagefile: "/images/poem-dear-irene.webp",
    imageCaption: "Irina Pala d'Oro - Wikimedia Commons",
    imagePosition: "bottom",
    complete: true
  },
  {
    id: "dear-john",
    title: "Dear John",
    description: "You laugh like a gutter - a whoop",
    publishdate: "2025-06-01",
    tags: ["Performance", "Sex"],
    complete: true
  },
  {
    id: "death",
    title: "Death",
    description: "I wake to find a ladybird trundling",
    publishdate: "2001-03-01",
    statusText: "Included in the collection '22 Facets of my Father'",
    tags: ["Embodiment", "Family", "Inheritance"],
    audiofile: "/audio/death",
    complete: true
  },
  {
    id: "death-of-a-poem",
    title: "Death of a Poem",
    description: "They dragged it from its rank cell tied to a bookshelf bier",
    publishdate: "2025-06-01",
    tags: ["Communication", "Culture", "Noir", "Power", "Surreal", "Violence"],
    complete: true
  },
  {
    id: "debate",
    title: "Debate",
    description: "So I sit myself on a step to wait for buses",
    publishdate: "2025-06-01",
    tags: ["Power"],
    complete: true
  },
  {
    id: "decorating",
    title: "Decorating",
    description: "I start with the lights. Good friends I've loved",
    publishdate: "2001-12-01",
    statusText: "Included in the collection 'PaleoRik'",
    tags: ["Communication", "Inheritance", "Outsider", "Performance"],
    complete: true
  },
  {
    id: "democracy",
    title: "Democracy",
    description: "I smile to the video in the shop window",
    publishdate: "1992-07-01",
    statusText: "Included in the collection 'PaleoRik'",
    tags: ["Communication", "Performance", "Power"],
    complete: true
  },
  {
    id: "demolish-dig-design",
    title: "Demolish Dig Design",
    description: "Each day a fresh terrain: dirt-yellow ants",
    publishdate: "2025-06-01",
    tags: ["Inheritance", "Machine", "Olympic", "Urban"],
    complete: true
  },
  {
    id: "devil",
    title: "Devil",
    description: "Wally's World is a wonder of the art",
    publishdate: "2001-03-01",
    statusText: "Published in Magma 24 (Autumn 2002)\nIncluded in the collection '22 Facets of my Father'",
    tags: ["Family", "Other-published", "Performance"],
    audiofile: "/audio/devil",
    complete: true
  },
  {
    id: "dieu-et",
    title: "Dieu Et",
    description: "We knew it would happen; I know that life",
    publishdate: "2025-06-01",
    tags: ["Communication", "Eulogy", "Performance", "Power"],
    complete: true
  },
  {
    id: "dinosaur",
    title: "Dinosaur",
    description: "I have a dinosaur perched in my palm",
    publishdate: "1990-09-01",
    statusText: "Included in the collection 'PaleoRik'",
    tags: ["Cat", "Embodiment", "Wonder"],
    complete: true
  },
  {
    id: "discovery",
    title: "Discovery",
    description: "This is a strange territory: I met it last",
    publishdate: "1994-09-01",
    statusText: "Published in Magma 4 (Spring 1995)\nIncluded in the collection 'PaleoRik'",
    tags: ["Family", "Love", "Other-published", "Wonder"],
    complete: true
  },
  {
    id: "dollpuss",
    title: "Dollpuss",
    description: "A patch of sunshine moves: stripes stretch",
    publishdate: "2011-04-01",
    tags: ["Cat"],
    complete: false
  },
  {
    id: "drafting",
    title: "Drafting",
    description: "I suppose a pen and a scrap of envelope",
    publishdate: "2001-03-01",
    statusText: "Included in the collection 'Play Time'",
    tags: ["Communication", "Culture", "Performance"],
    complete: true
  },
  {
    id: "driving-not-driven",
    title: "Driving, not Driven",
    description: "Did I notice the signs? Perhaps",
    publishdate: "2010-04-01",
    statusText: "Included in the collection 'To Posterity'",
    tags: ["Machine", "Object"],
    complete: true
  },
  {
    id: "east-of-islington",
    title: "East of Islington",
    description: "Half-six of an evening and already",
    publishdate: "1991-12-01",
    statusText: "Included in the collection 'PaleoRik'",
    tags: ["Office", "Urban"],
    complete: true
  },
  {
    id: "eating-out",
    title: "Eating Out",
    description: "When he laughs his tongue",
    publishdate: "2007-02-01",
    statusText: "Included in the collection 'Poems to Quote to your Lover'",
    tags: ["Love", "Performance", "Voyeur"],
    showcase: true,
    complete: true
  },
  {
    id: "eclipse",
    title: "Eclipse",
    description: "For some you are pretty to look at; to others",
    publishdate: "1999-08-01",
    statusText: "Included in the collection 'PaleoRik'",
    tags: ["Inheritance", "Power"],
    complete: true
  },
  {
    id: "economic-migration",
    title: "Economic Migration is an Eighty Mile Trek",
    description: "Economic Migration is an Eighty Mile Trek",
    publishdate: "2007-04-01",
    tags: ["Power"],
    imagefile: "/images/economic-migration.webp",
    imageCaption: "Economic Migration is an Eighty Mile Trek - an image poem",
    imagePosition: "top",
    complete: false
  },
  {
    id: "elemental-friend",
    title: "Elemental Friend",
    description: "Peter watches his lion lie",
    publishdate: "2010-08-01",
    statusText: "Included in the collection 'To Posterity'",
    tags: ["Embodiment", "Noir", "Surreal", "Violence"],
    complete: true
  },
  {
    id: "emperor",
    title: "Emperor",
    description: "You bought the first calculator",
    publishdate: "2001-01-01",
    statusText: "Included in the collection '22 Facets of my Father'",
    tags: ["Family", "Machine"],
    audiofile: "/audio/emperor",
    videofile: "/video/emperor.mp4",
    complete: true
  },
  {
    id: "empress",
    title: "Empress",
    description: "The night your mum died I slunk",
    publishdate: "2001-01-01",
    statusText: "Included in the collection '22 Facets of my Father'",
    tags: ["Family", "Inheritance", "Performance"],
    audiofile: "/audio/empress",
    videofile: "/video/empress.mp4",
    complete: true
  },
  {
    id: "english-breakfast",
    title: "English Breakfast",
    description: "Where you spill milk across marble",
    publishdate: "2017-04-01",
    tags: ["Love"],
    complete: false
  },
  {
    id: "exercising-my-right",
    title: "Exercising my Right",
    description: "I voted for sausage, once, at a winter",
    publishdate: "2017-10-01",
    statusText: "Included in the collection 'And Still I Breathe'",
    tags: ["Power"],
    showcase: true,
    complete: true
  },
  {
    id: "exhale",
    title: "Exhale",
    description: "And on the last day",
    publishdate: "2008-04-01",
    tags: ["Wonder"],
    complete: false
  },
  {
    id: "exhibits",
    title: "Exhibits",
    description: "She was skipping over the rope, her body",
    publishdate: "2006-02-01",
    statusText: "Included in the collection 'Poems to Quote to your Lover'",
    tags: ["Culture", "Love", "Performance", "Power", "Sex"],
    showcase: true,
    complete: true
  },
  {
    id: "fags",
    title: "Fagorettes",
    description: "They, the Authorities, the ones who know",
    publishdate: "2017-04-01",
    tags: ["Communication", "Power", "Urban"],
    complete: true
  },
  {
    id: "faith",
    title: "Faith",
    description: "His fortune lies in heaps",
    publishdate: "2006-04-01",
    statusText: "Included in the collection 'From Each Skull, A Story'",
    tags: ["Faith", "Surreal"],
    complete: true
  },
  {
    id: "fall-tide",
    title: "Fall Tide",
    description: "A winter-withered wordman's remains",
    publishdate: "2025-06-01",
    tags: ["Communication", "Power"],
    complete: true
  },
  {
    id: "fallen",
    title: "Fallen",
    description: "Here lies a church: its bricks, dis-mortared",
    publishdate: "1994-06-01",
    statusText: "Published in Magma 2 (June 1994)\nIncluded in the collection 'PaleoRik'",
    tags: ["Ekphrasis", "Eulogy", "Inheritance", "Other-published"],
    complete: true
  },
  {
    id: "fiend",
    title: "Fiend",
    description: "Now you have a voice you are a terror",
    publishdate: "2025-06-01",
    tags: ["Cat"],
    complete: true
  },
  {
    id: "first-love",
    title: "First Love",
    description: "You're drowning me: water",
    publishdate: "2006-03-01",
    statusText: "Included in the collection 'Poems to Quote to your Lover'",
    tags: ["Embodiment", "Love", "Violence"],
    complete: true
  },
  {
    id: "first-night",
    title: "First Night",
    description: "It was your eyes that sobered me: ice",
    publishdate: "2006-09-01",
    statusText: "Included in the collection 'Poems to Quote to your Lover'",
    tags: ["Love", "Surreal"],
    showcase: true,
    complete: true
  },
  {
    id: "flame",
    title: "Flame",
    description: "Such a brief story",
    publishdate: "2009-01-01",
    tags: ["Object", "Olympic", "Power"],
    complete: false
  },
  {
    id: "flaw",
    title: "Flaw",
    description: "Flaw sits in my cupboards",
    publishdate: "1993-11-01",
    statusText: "Included in the collection 'PaleoRik'",
    tags: ["Inheritance", "Surreal"],
    complete: true
  },
  {
    id: "float",
    title: "Float",
    description: "She lets the sunlight warm her toes, and beak",
    publishdate: "2008-04-01",
    tags: ["Eulogy"],
    imagefile: "/images/poem-float.webp",
    imageCaption: "A former coot floating in the Lee Navigation canal",
    imagePosition: "bottom",
    complete: false
  },
  {
    id: "flotsam",
    title: "Flotsam",
    description: "A parade of waves renders pale fat, salty",
    publishdate: "2017-10-01",
    statusText: "Included in the collection 'And Still I Breathe'",
    tags: ["Communication", "Ekphrasis", "Eulogy", "Power", "Violence"],
    showcase: true,
    complete: true
  },
  {
    id: "fogshifts",
    title: "Fogshifts",
    description: "Remember the day",
    publishdate: "2025-06-01",
    tags: ["Eulogy", "Wonder"],
    complete: true
  },
  {
    id: "fool",
    title: "Fool",
    description: "The present you conceived for my mum",
    publishdate: "2000-10-01",
    statusText: "Included in the collection '22 Facets of my Father'",
    tags: ["Family"],
    audiofile: "/audio/fool",
    videofile: "/video/fool.mp4",
    complete: true
  },
  {
    id: "fortune",
    title: "Fortune",
    description: "I cracked the foundation of Mum's love. Ten weeks",
    publishdate: "2001-02-01",
    statusText: "Included in the collection '22 Facets of my Father'",
    tags: ["Family", "Violence"],
    audiofile: "/audio/fortune",
    videofile: "/video/fortune.mp4",
    complete: true
  },
  {
    id: "foxed-verse",
    title: "Foxed Verse",
    description: "(various and sundry)",
    publishdate: "2099-01-01",
    tags: ["Light"],
    complete: false
  },
  {
    id: "fritz-2006",
    title: "Fritz: Jan 1986 - Mar 2006",
    description: "I cannot sing for you, my cat",
    publishdate: "2006-03-01",
    tags: ["Cat", "Eulogy"],
    complete: false
  },
  {
    id: "from-the-asss-jaw",
    title: "From the Ass's Jaw",
    description: "Do you believe in destiny?",
    publishdate: "2025-06-01",
    tags: ["Faith", "Noir"],
    complete: true
  },
  {
    id: "garden-party",
    title: "Garden Party",
    description: "I spot a crease in the lap",
    publishdate: "2019-01-01",
    statusText: "Included in the collection 'More Love Poems Innit'",
    tags: ["Love"],
    showcase: true,
    complete: true
  },
  {
    id: "god",
    title: "God",
    description: "My God has skin that tints alongside time:",
    publishdate: "2000-02-01",
    statusText: "Included in the collection 'Play Time'",
    tags: ["Faith", "Surreal"],
    complete: true
  },
  {
    id: "good-friday-1",
    title: "Good Friday #1",
    description: "Two hot spring weeks and already",
    publishdate: "2011-04-01",
    tags: ["Rural"],
    complete: false
  },
  {
    id: "good-friday-2",
    title: "Good Friday #2",
    description: "They fish in silence — the man",
    publishdate: "2011-04-01",
    tags: ["Rural"],
    complete: false
  },
  {
    id: "gossip",
    title: "Gossip",
    description: "I heard your news. A quarrel of tits",
    publishdate: "2007-012-01",
    statusText: "Published in Magma Poetry 42 (Winter 2008)\nIncluded in the collection 'To Posterity'",
    tags: ["Communication", "Other-published"],
    imagefile: "/images/poem-gossip.webp",
    imageCaption: "Gossip - Instagram",
    imagePosition: "bottom",
    showcase: true,
    complete: true
  },
  {
    id: "gran-says",
    title: "Gran Says",
    description: "Look at the state of you! You're late again",
    publishdate: "2012-07-01",
    statusText: "From 'Snowdrop - a story in verse'",
    tags: ["Family", "Noir", "Surreal"],
    complete: true
  },
  {
    id: "hangman",
    title: "Hangman",
    description: "I'm hunting you down — drafting a list",
    publishdate: "2001-02-01",
    statusText: "Included in the collection '22 Facets of my Father'",
    tags: ["Family", "Machine"],
    audiofile: "/audio/hangman",
    complete: true
  },
  {
    id: "happening",
    title: "Happening",
    description: "This new prefab pop-up diner is a popular show",
    publishdate: "2025-06-01",
    tags: ["Power", "Surreal"],
    showcase: true,
    complete: true
  },
  {
    id: "harry",
    title: "Harry",
    description: "Harry has found a niche for the afternoon",
    publishdate: "1991-10-01",
    statusText: "Included in the collection 'From Each Skull, A Story'",
    tags: ["Outsider", "Urban"],
    complete: true
  },
  {
    id: "headbreak",
    title: "Headbreak",
    description: "I've never had my heart broken. Never",
    publishdate: "2019-01-01",
    statusText: "Included in the collection 'More Love Poems Innit'",
    tags: ["Communication", "Love"],
    complete: true
  },
  {
    id: "heat",
    title: "Heat",
    description: "It spackles my winter-worn face",
    publishdate: "2018-04-01",
    tags: ["Embodiment"],
    complete: false
  },
  {
    id: "hedgeman",
    title: "Hedgeman",
    description: "We wake before dawn, a welcome-mat frost laid",
    publishdate: "2001-02-01",
    statusText: "Included in the collection '22 Facets of my Father'",
    tags: ["Family", "Inheritance", "Rural"],
    audiofile: "/audio/hedgeman",
    videofile: "/video/hedgeman.mp4",
    showcase: true,
    complete: true
  },
  {
    id: "hemmingway-ate-here",
    title: "Hemmingway Ate Here",
    description: "He starts to build the fire before the sun",
    publishdate: "2025-06-01",
    tags: ["Urban", "Voyeur"],
    showcase: true,
    complete: true
  },
  {
    id: "hero",
    title: "Hero",
    description: "Each evening, when we tell our day over dinner",
    publishdate: "2019-01-01",
    statusText: "Included in the collection 'More Love Poems Innit'",
    tags: ["Love", "Outsider", "Violence"],
    showcase: true,
    complete: true
  },
  {
    id: "hierophant",
    title: "Hierophant",
    description: "This morning we work together: I need",
    publishdate: "2001-03-01",
    statusText: "Included in the collection '22 Facets of my Father'",
    tags: ["Family", "Inheritance", "Rural"],
    audiofile: "/audio/hierophant",
    videofile: "/video/hierophant.mp4",
    complete: true
  },
  {
    id: "history",
    title: "History",
    description: "Here lies the portrait of a woman long lost",
    publishdate: "1991-10-01",
    statusText: "Published in Magma 4 (Spring 1995)\nIncluded in the collection 'Play Time'",
    tags: ["Communication", "Ekphrasis", "Other-published", "Performance"],
    showcase: true,
    complete: true
  },
  {
    id: "home",
    title: "Home",
    description: "When the wind was warm and the day",
    publishdate: "1993-03-01",
    statusText: "Included in the collection 'Play Time'",
    tags: ["Rural", "Surreal"],
    complete: true
  },
  {
    id: "hunt",
    title: "Hunt",
    description: "Beneath the moil of muddied pelts",
    publishdate: "2012-07-01",
    statusText: "From 'Snowdrop - a story in verse'",
    tags: ["Noir", "Rural", "Surreal", "Violence"],
    complete: true
  },
  {
    id: "hunted",
    title: "Hunted",
    description: "She hides in curtains. There's a whiff",
    publishdate: "2025-06-01",
    tags: ["Outsider", "Surreal"],
    complete: true
  },
  {
    id: "hunters",
    title: "Hunters",
    description: "From the desert brush a dappled cat",
    publishdate: "1992-03-01",
    statusText: "Included in the collection 'PaleoRik'",
    tags: ["Cat", "Surreal"],
    complete: true
  },
  {
    id: "hutton",
    title: "Hutton",
    description: "Now the fair Lord has parsed the story's text and let",
    publishdate: "2004-01-01",
    statusText: "Included in the collection 'From Each Skull, A Story'",
    tags: ["Communication", "Eulogy", "Performance", "Power"],
    showcase: true,
    complete: true
  },
  {
    id: "i-managed-to-write",
    title: "I Managed to Write that Rant Poem",
    description: "Arthur still sleeps",
    publishdate: "2017-04-01",
    tags: ["Power", "Surreal"],
    complete: false
  },
  {
    id: "ickyu",
    title: "Ickyu",
    description: "You can't go far wrong",
    publishdate: "2025-06-01",
    tags: ["Faith", "Inheritance", "Light"],
    showcase: true,
    complete: true
  },
  {
    id: "in-dark-places",
    title: "In Dark Places",
    description: "Cold in the ice — sparkles on needles",
    publishdate: "2007-12-01",
    statusText: "Included in the collection 'To Posterity'",
    tags: ["Inheritance", "Surreal"],
    imagefile: "/images/poem-in-dark-places.webp",
    imageCaption: "In dark places - Instagram",
    imagePosition: "bottom",
    showcase: true,
    complete: true
  },
  {
    id: "in-deo-speramus",
    title: "In Deo Speramus",
    description: "They say it takes a thief to catch a diamond:",
    publishdate: "2025-06-01",
    tags: ["Faith", "Noir"],
    showcase: true,
    complete: true
  },
  {
    id: "in-memoriam",
    title: "In memoriam: Rik's upper right molar",
    description: "Chattermay, cattermay",
    publishdate: "2008-04-01",
    tags: ["Light"],
    complete: false
  },
  {
    id: "in-the-airless-night",
    title: "In the Airless Night",
    description: "A man asked me today: did you ever",
    publishdate: "2025-06-01",
    tags: ["Faith", "Noir"],
    complete: true
  },
  {
    id: "intel",
    title: "Intel",
    description: "Guns do not rattle. They punch through bones",
    publishdate: "2025-06-01",
    tags: ["Faith", "Noir"],
    complete: true
  },
  {
    id: "intermission",
    title: "Intermission",
    description: "I have a task half done. It stares",
    publishdate: "2015-04-01",
    tags: ["Office"],
    complete: false
  },
  {
    id: "james",
    title: "James",
    description: "James watches the monkey organ-chained",
    publishdate: "1991-02-01",
    statusText: "Published in Magma 5 (Summer 1995)\nIncluded in the collection 'PaleoRik'",
    tags: ["Other-published", "Outsider"],
    complete: true
  },
  {
    id: "jennifer",
    title: "Jennifer",
    description: "For solace, she turns to paper",
    publishdate: "2025-06-01",
    tags: ["Outsider"],
    complete: true
  },
  {
    id: "joe",
    title: "Joe",
    description: "Joe is invisible today. He's lowered",
    publishdate: "2025-06-01",
    tags: ["Outsider"],
    complete: true
  },
  {
    id: "jojo",
    title: "JoJo",
    description: "When you glove my hand in yours I hold",
    publishdate: "2019-01-01",
    statusText: "Included in the collection 'More Love Poems Innit'",
    tags: ["Cat", "Love"],
    complete: true
  },
  {
    id: "joke-news",
    title: "Joke News",
    description: "Did you read the news?",
    publishdate: "2025-06-01",
    tags: ["Olympic"],
    complete: true
  },
  {
    id: "joy",
    title: "Joy",
    description: "You're fun! Not as funny as the time",
    publishdate: "2007-06-01",
    statusText: "Included in the collection 'Poems to Quote to your Lover'",
    tags: ["Love"],
    complete: true
  },
  {
    id: "judgement",
    title: "Judgement",
    description: "This was not the way for a man to die",
    publishdate: "2001-05-01",
    statusText: "Published in Avocado 1 (Spring 2003)\nIncluded in the collection '22 Facets of my Father'",
    tags: ["Eulogy", "Family", "Other-published", "Violence"],
    audiofile: "/audio/judgement",
    videofile: "/video/judgement.mp4",
    showcase: true,
    complete: true
  },
  {
    id: "just-do-it",
    title: "Just Do It",
    description: "It's like that moment when",
    publishdate: "2019-01-01",
    statusText: "Included in the collection 'More Love Poems Innit'",
    tags: ["Love"],
    complete: true
  },
  {
    id: "justice",
    title: "Justice",
    description: "On the carpeted court I place the players. First you",
    publishdate: "2001-02-01",
    statusText: "Included in the collection '22 Facets of my Father'",
    tags: ["Family", "Violence"],
    audiofile: "/audio/justice",
    complete: true
  },
  {
    id: "king-worm",
    title: "King Worm",
    description: "You said: we can pop them",
    publishdate: "2008-04-01",
    tags: ["Love"],
    complete: false
  },
  {
    id: "kingfisher-pool",
    title: "Kingfisher Pool",
    description: "Once I found a waterfall",
    publishdate: "1990-11-01",
    statusText: "Published in Magma 1 (March 1994)\nIncluded in the collection 'PaleoRik'",
    tags: ["Embodiment", "Other-published", "Sex"],
    complete: true
  },
  {
    id: "language",
    title: "Language",
    description: "So when did we begin to evolve",
    publishdate: "2007-06-01",
    statusText: "Included in the collection 'Poems to Quote to your Lover'",
    tags: ["Communication", "Love"],
    showcase: true,
    complete: true
  },
  {
    id: "legend",
    title: "Legend",
    description: "He says: I was not the first superhero",
    publishdate: "2017-04-01",
    tags: ["Noir", "Surreal"],
    complete: false
  },
  {
    id: "limericks",
    title: "Limericks",
    description: "(various and sundry)",
    publishdate: "2099-01-01",
    tags: ["Light"],
    complete: false
  },
  {
    id: "little-arthur",
    title: "Little Arthur",
    description: "Hail the spore as it kisses the ant!",
    publishdate: "2025-06-01",
    tags: ["Embodiment", "Power"],
    showcase: true,
    complete: true
  },
  {
    id: "locus-delicti",
    title: "Locus Delicti",
    description: "Would you wear a killer's cardigan?",
    publishdate: "2010-08-01",
    statusText: "Included in the collection 'To Posterity'",
    tags: ["Love", "Noir"],
    complete: true
  },
  {
    id: "london",
    title: "London",
    description: "Should he ever speak of home",
    publishdate: "1990-10-01",
    statusText: "Included in the collection 'PaleoRik'",
    tags: ["Inheritance", "Rural", "Urban"],
    complete: true
  },
  {
    id: "lovers",
    title: "Lovers",
    description: "Your habits are a comfort. Tonight, Tuesday",
    publishdate: "2001-03-01",
    statusText: "Included in the collection '22 Facets of my Father'",
    tags: ["Family"],
    audiofile: "/audio/lovers",
    videofile: "/video/lovers.mp4",
    complete: true
  },
  {
    id: "lucy-plays-with-her-friends",
    title: "Lucy Plays with her Friends",
    description: "She lines them up in rows",
    publishdate: "2006-04-01",
    statusText: "Included in the collection 'From Each Skull, A Story'",
    tags: ["Noir", "Outsider", "Sex"],
    imagefile: "/images/poem-lucy-plays-with-her-friends.webp",
    imageCaption: "Lucy plays with her friends - Instagram",
    imagePosition: "bottom",
    complete: true
  },
  {
    id: "lych-woman",
    title: "Lych Woman",
    description: "They hoist old Grandad Clegg",
    publishdate: "2009-01-01",
    statusText: "Included in the collection 'To Posterity'",
    tags: ["Eulogy", "Outsider", "Rural"],
    showcase: true,
    complete: true
  },
  {
    id: "mad-mary",
    title: "Mad Mary",
    description: "She plucks history from the soil",
    publishdate: "2006-04-01",
    statusText: "Included in the collection 'From Each Skull, A Story'",
    tags: ["Communication", "Outsider"],
    complete: true
  },
  {
    id: "madchen",
    title: "Mädchen",
    description: "She is, above all, a drama of curves",
    publishdate: "2025-06-01",
    tags: ["Culture", "Ekphrasis", "Inheritance", "Object"],
    imagefile: "/images/poem-madchen.webp",
    imageCaption: "Venus of Hohle Fels - Urgeschichtliches Museum Blaubeuren",
    imagePosition: "bottom",
    showcase: true,
    complete: true
  },
  {
    id: "magpies",
    title: "Magpies",
    description: "It's the way they eye you",
    publishdate: "2017-10-01",
    statusText: "Included in the collection 'And Still I Breathe'",
    tags: ["Light", "Noir", "Performance", "Urban"],
    showcase: true,
    complete: true
  },
  {
    id: "mandarins",
    title: "Mandarins",
    description: "It takes a squint to glimpse him",
    publishdate: "2010-09-01",
    statusText: "Included in the collection 'To Posterity'",
    tags: ["Communication", "Inheritance", "Office"],
    complete: true
  },
  {
    id: "manhattan-flower",
    title: "Manhattan Flower",
    description: "My tall dahlia. Scythed",
    publishdate: "2001-11-01",
    statusText: "Included in the collection 'To Posterity'",
    tags: ["Eulogy", "Power", "Violence", "Voyeur"],
    showcase: true,
    complete: true
  },
  {
    id: "march-tease",
    title: "March Tease",
    description: "This year the world around",
    publishdate: "2007-10-01",
    statusText: "Included in the collection 'And Still I Breathe'",
    tags: ["Wonder"],
    complete: true
  },
  {
    id: "menses",
    title: "Menses",
    description: "A new year: my goodwill drains away with the dregs",
    publishdate: "1993-05-01",
    statusText: "Published in Magma 2 (June 1994)\nIncluded in the collection 'Play Time'",
    tags: ["Office", "Other-published", "Performance", "Sex", "Urban"],
    imagefile: "/images/poem-menses.webp",
    imageCaption: "Menses - Instagram",
    imagePosition: "bottom",
    complete: true
  },
  {
    id: "midnap",
    title: "Midnap",
    description: "Be warned, I keep this dreamhouse",
    publishdate: "2019-01-01",
    statusText: "Included in the collection 'More Love Poems Innit'",
    tags: ["Love", "Surreal"],
    complete: true
  },
  {
    id: "model",
    title: "Model",
    description: "Do you know me?",
    publishdate: "2025-06-01",
    tags: ["Communication", "Machine", "Performance"],
    showcase: true,
    complete: true
  },
  {
    id: "monkey-knows-all",
    title: "Monkey Knows All",
    description: "Somewhere light-less he shakes a page",
    publishdate: "2025-06-01",
    tags: ["Communication", "Culture", "Surreal"],
    complete: true
  },
  {
    id: "moon",
    title: "Moon",
    description: "You share a little secret with me, a monstrous",
    publishdate: "2001-04-01",
    statusText: "Included in the collection '22 Facets of my Father'",
    tags: ["Family", "Performance", "Rural"],
    audiofile: "/audio/moon",
    complete: true
  },
  {
    id: "morsels",
    title: "Morsels",
    description: "When I fed you I set you three courses",
    publishdate: "2006-03-01",
    statusText: "Included in the collection 'Poems to Quote to your Lover'",
    tags: ["Love", "Performance"],
    complete: true
  },
  {
    id: "nigel",
    title: "Nigel",
    description: "You snatched me back in ninety three",
    publishdate: "2019-01-01",
    statusText: "Included in the collection 'More Love Poems Innit'",
    tags: ["Love"],
    complete: true
  },
  {
    id: "nocturne",
    title: "Nocturne",
    description: "I wish for rain",
    publishdate: "2015-04-01",
    tags: ["Noir", "Urban"],
    complete: false
  },
  {
    id: "not-a-good-fit",
    title: "Not a Good Fit",
    description: "Our cozy office echoes more today",
    publishdate: "2017-10-01",
    statusText: "Included in the collection 'And Still I Breathe'",
    tags: ["Office", "Power"],
    showcase: true,
    complete: true
  },
  {
    id: "nothing-much",
    title: "Nothing Much",
    description: "Look how quiet the room is: a cat",
    publishdate: "2006-06-01",
    statusText: "Included in the collection 'Poems to Quote to your Lover'",
    tags: ["Love"],
    complete: true
  },
  {
    id: "novel",
    title: "Novel",
    description: "The last word typed, I thank",
    publishdate: "2010-08-01",
    statusText: "Included in the collection 'To Posterity'",
    tags: ["Culture", "Surreal"],
    showcase: true,
    complete: true
  },
  {
    id: "oistins-on-friday",
    title: "Oistins on Friday",
    description: "Fish scales blue as chop sea",
    publishdate: "2025-06-01",
    tags: ["Voyeur"],
    complete: true
  },
  {
    id: "nonsense",
    title: "Onas 28 Berk",
    description: "I crost a manch at sefan dibes",
    publishdate: "2025-06-01",
    tags: ["Light"],
    complete: true
  },
  {
    id: "on-the-front-door-line",
    title: "On the Front (Door) Line: v2010",
    description: "They start already, a !crack! as chrome",
    publishdate: "2025-06-01",
    tags: ["Communication", "Power"],
    complete: true
  },
  {
    id: "on-the-wounds-of-love",
    title: "On the Wounds of Love",
    description: "This searchlight beam, this fire that sears and eats",
    publishdate: "2025-06-01",
    statusText: "After 'Llagas de amor' by Federico García Lorca",
    tags: ["Translation"],
    complete: true
  },
  {
    id: "painting",
    title: "Painting",
    description: "Walls are not blank. They soak in lives, each pore",
    publishdate: "2009-04-01",
    statusText: "Included in the collection 'To Posterity'",
    tags: ["Inheritance", "Love"],
    showcase: true,
    complete: true
  },
  {
    id: "paradise",
    title: "Paradise",
    description: "An exile in paradise",
    publishdate: "1992-08-01",
    statusText: "Included in the collection 'PaleoRik'",
    tags: ["Outsider", "Performance", "Power", "Violence", "Voyeur"],
    complete: true
  },
  {
    id: "party",
    title: "Party",
    description: "Said the man to the key",
    publishdate: "2025-06-01",
    tags: ["Light"],
    complete: true
  },
  {
    id: "party-political-fortune-cookies",
    title: "Party Political Fortune Cookies",
    description: "Labour: a mass of sweat",
    publishdate: "2025-06-01",
    tags: ["Communication", "Performance", "Power"],
    complete: true
  },
  {
    id: "perhaps",
    title: "Perhaps",
    description: "The desk sits square on the side of the room",
    publishdate: "1992-01-01",
    statusText: "Included in the collection 'Play Time'",
    tags: ["Ekphrasis", "Outsider", "Surreal"],
    complete: true
  },
  {
    id: "plus",
    title: "Plus",
    description: "Today I tested positive",
    publishdate: "2009-04-01",
    statusText: "Included in the collection 'To Posterity'",
    tags: ["Embodiment", "Violence"],
    complete: true
  },
  {
    id: "poppie",
    title: "Poppie",
    description: "Within the clutter, a clay cat",
    publishdate: "2025-06-01",
    tags: ["Communication", "Family", "Object"],
    complete: true
  },
  {
    id: "poppy",
    title: "Poppy",
    description: "They say: we must remember!",
    publishdate: "2017-10-01",
    statusText: "Included in the collection 'And Still I Breathe'",
    tags: ["Ekphrasis", "Object", "Performance", "Power"],
    complete: true
  },
  {
    id: "portsmouth-thoughts",
    title: "Portsmouth Thoughts",
    description: "With the marksman's lead threaded",
    publishdate: "2009-02-01",
    statusText: "Included in the collection 'To Posterity'",
    tags: ["Eulogy", "Inheritance"],
    showcase: true,
    complete: true
  },
  {
    id: "post-murder",
    title: "Post-murder",
    description: "I adore this stinking city. So many ways",
    publishdate: "2018-01-01",
    statusText: "",
    tags: ["Noir", "Surreal", "Violence"],
    complete: false
  },
  {
    id: "postcard",
    title: "Postcard",
    description: "Molyvos must be",
    publishdate: "1999-10-01",
    statusText: "Included in the collection 'Play Time'",
    tags: ["Communication", "Voyeur"],
    complete: true
  },
  {
    id: "poverty",
    title: "Poverty",
    description: "I want to write of iced desolations",
    publishdate: "2017-10-01",
    statusText: "Included in the collection 'And Still I Breathe'",
    tags: ["Communication", "Culture", "Performance"],
    complete: true
  },
  {
    id: "priestess",
    title: "Priestess",
    description: "A friend of the family had a donkey",
    publishdate: "2000-11-01",
    statusText: "Included in the collection '22 Facets of my Father'",
    tags: ["Family", "Rural"],
    audiofile: "/audio/priestess",
    videofile: "/video/priestess.mp4",
    complete: true
  },
  {
    id: "priss",
    title: "Priss",
    description: "A shadow has stalked from the room,",
    publishdate: "2000-04-01",
    statusText: "Included in the collection 'Play Time'",
    tags: ["Cat", "Eulogy"],
    complete: true
  },
  {
    id: "prophets",
    title: "Prophets",
    description: "Her pivot is her globe",
    publishdate: "2009-04-01",
    statusText: "Included in the collection 'To Posterity'",
    tags: ["Communication", "Embodiment"],
    complete: true
  },
  {
    id: "prosopagnosia",
    title: "Prosopagnosia",
    description: "On good days all I see are mouths. Some pout",
    publishdate: "2019-01-01",
    statusText: "Included in the collection 'More Love Poems Innit'",
    tags: ["Ekphrasis", "Embodiment", "Outsider", "Surreal"],
    complete: true
  },
  {
    id: "prowler",
    title: "Prowler",
    description: "I see you! I have no clue why you stand",
    publishdate: "2019-01-01",
    statusText: "Included in the collection 'More Love Poems Innit'",
    tags: ["Performance", "Sex"],
    complete: true
  },
  {
    id: "puppy-love",
    title: "Puppy Love",
    description: "When I heard that song on the radio",
    publishdate: "2007-04-01",
    statusText: "Included in the collection 'Poems to Quote to your Lover'",
    tags: ["Love", "Performance"],
    complete: true
  },
  {
    id: "rachel-the-ewe-seeks-her-lambs",
    title: "The Ewe Seeks Her Lambs",
    description: "She has the prim hips of one",
    publishdate: "2025-06-01",
    tags: ["Noir", "Surreal"],
    complete: false
  },
  {
    id: "rain-in-venice",
    title: "Rain in Venice",
    description: "We find her hidden from invaders beyond a tight arched alley",
    publishdate: "2019-01-01",
    statusText: "Included in the collection 'More Love Poems Innit'",
    tags: ["Love", "Voyeur"],
    complete: true
  },
  {
    id: "rainbow-fukyus",
    title: "Rainbow Fukyus",
    description: "Red for the surge of",
    publishdate: "2018-04-01",
    tags: ["Love", "Sex"],
    complete: false
  },
  {
    id: "rapture-v2",
    title: "Rapture v2",
    description: "One day I woke and the world was stacked",
    publishdate: "2017-10-01",
    statusText: "Included in the collection 'And Still I Breathe'",
    tags: ["Machine"],
    showcase: true,
    complete: true
  },
  {
    id: "red-cross",
    title: "Red Cross",
    description: "I met you first on the back of a boot boy",
    publishdate: "2015-04-01",
    tags: ["Ekphrasis"],
    complete: false
  },
  {
    id: "reductions",
    title: "Reductions",
    description: "I saw you dead, a smorgasbord",
    publishdate: "2025-06-01",
    tags: ["Communication", "Love"],
    complete: true
  },
  {
    id: "regents-canal",
    title: "Regent's Canal",
    description: "Dogs walking their owners",
    publishdate: "2025-06-01",
    tags: ["Urban", "Voyeur"],
    showcase: true,
    complete: true
  },
  {
    id: "relativity",
    title: "Relativity",
    description: "Today I am left in bed, my head tethered",
    publishdate: "1995-11-01",
    statusText: "Included in the collection 'PaleoRik'",
    tags: ["Eulogy"],
    complete: true
  },
  {
    id: "renewal",
    title: "Renewal",
    description: "We severed the band together, took a saw",
    publishdate: "2007-04-01",
    statusText: "Included in the collection 'Poems to Quote to your Lover'",
    tags: ["Love", "Object"],
    showcase: true,
    complete: true
  },
  {
    id: "respect",
    title: "Respect",
    description: "It's strange how our fingers",
    publishdate: "2006-06-01",
    statusText: "Included in the collection 'Poems to Quote to your Lover'",
    tags: ["Communication", "Love", "Performance"],
    complete: true
  },
  {
    id: "resurrection",
    title: "Resurrection",
    description: "February: finger bones",
    publishdate: "2000-02-01",
    statusText: "Included in the collection 'PaleoRik'",
    tags: ["Urban", "Wonder"],
    complete: true
  },
  {
    id: "reverie-inc",
    title: "Reverie Inc.",
    description: "We've assembled a new dream for you",
    publishdate: "2009-04-01",
    statusText: "Included in the collection 'To Posterity'",
    tags: ["Culture", "Machine", "Noir", "Power"],
    showcase: true,
    complete: true
  },
  {
    id: "riot",
    title: "Riot",
    description: "The savageness takes me as I step through the door",
    publishdate: "1996-01-01",
    tags: ["Office", "Urban"],
    complete: false
  },
  {
    id: "rita",
    title: "Rita",
    description: "We gather like clotting scrapes, a clutter",
    publishdate: "2017-10-01",
    statusText: "Included in the collection 'And Still I Breathe'",
    tags: ["Eulogy", "Outsider", "Performance", "Urban"],
    showcase: true,
    complete: true
  },
  {
    id: "rituals",
    title: "Rituals",
    description: "Autumn would bring us rituals to school",
    publishdate: "1990-10-01",
    statusText: "Included in the collection 'PaleoRik'",
    tags: ["Inheritance", "Performance", "Power", "Rural"],
    complete: true
  },
  {
    id: "roadkill",
    title: "Roadkill",
    description: "Carhorns on Christmas Eve: a feather slaps the road",
    publishdate: "2003-04-01",
    statusText: "Included in the collection 'From Each Skull, A Story'",
    tags: ["Eulogy", "Faith", "Outsider", "Power", "Urban", "Violence"],
    complete: true
  },
  {
    id: "rogues",
    title: "Rogues",
    description: "A grift of sunshine teases bulbs to bloom",
    publishdate: "2006-06-01",
    statusText: "Included in the collection 'From Each Skull, A Story'",
    tags: ["Inheritance", "Performance", "Urban"],
    showcase: true,
    complete: true
  },
  {
    id: "rush-hour",
    title: "Rush Hour",
    description: "A surl of girls at bicker, their satchels",
    publishdate: "2017-10-01",
    statusText: "Included in the collection 'And Still I Breathe'",
    tags: ["Communication", "Office", "Urban"],
    complete: true
  },
  {
    id: "safe",
    title: "Safe",
    description: "You walked in my footsteps, once in time",
    publishdate: "2019-01-01",
    statusText: "Included in the collection 'More Love Poems Innit'",
    tags: ["Love", "Rural"],
    complete: true
  },
  {
    id: "scared",
    title: "Scared",
    description: "When the angels came to take the world",
    publishdate: "1992-03-01",
    statusText: "Included in the collection 'PaleoRik'",
    tags: ["Eulogy", "Family"],
    showcase: true,
    complete: true
  },
  {
    id: "search",
    title: "Search",
    description: "I only search for him at the weekend",
    publishdate: "1991-10-01",
    statusText: "Included in the collection 'PaleoRik'",
    tags: ["Sex", "Surreal"],
    complete: true
  },
  {
    id: "second-sin",
    title: "Second Sin",
    description: "He brings a harsh heat into the room",
    publishdate: "2025-06-01",
    tags: ["Noir", "Surreal"],
    complete: true
  },
  {
    id: "seduction",
    title: "Seduction",
    description: "Can you hear the dogs?",
    publishdate: "2025-06-01",
    tags: ["Embodiment", "Sex"],
    complete: true
  },
  {
    id: "serving-the-muse",
    title: "Serving the Muse",
    description: "I chose to dine at A's establishment",
    publishdate: "2005-12-01",
    statusText: "Included in the collection 'From Each Skull, A Story'",
    tags: ["Culture", "Performance", "Power"],
    complete: true
  },
  {
    id: "7-a-prickle-of-new-berries",
    title: "Sevenling (A prickle of new berries)",
    description: "A prickle of new berries where once",
    publishdate: "2025-06-01",
    tags: ["Love"],
    complete: true
  },
  {
    id: "7-as-he-settles-in-his-pot",
    title: "Sevenling (as he settles in his pot)",
    description: "As he settles in his pot his bones",
    publishdate: "2025-06-01",
    tags: ["Eulogy"],
    complete: true
  },
  {
    id: "7-so-the-devils-own-cur",
    title: "Sevenling (so the Devil's own cur)",
    description: "So the Devil's own cur must hang, his command chain",
    publishdate: "2025-06-01",
    tags: ["Power", "Violence"],
    complete: true
  },
  {
    id: "7-there-are-no-rules",
    title: "Sevenling (there are no rules)",
    description: "There are no rules for those who wait",
    publishdate: "2006-06-01",
    tags: ["Surreal"],
    complete: false
  },
  {
    id: "she-forgets-and-remembers",
    title: "She Forgets and Remembers by Touch",
    description: "She hums for Jesus as she cleans",
    publishdate: "2025-06-01",
    statusText: "Included in the collection 'From Each Skull, A Story'",
    tags: ["Faith", "Outsider", "Sex"],
    complete: true
  },
  {
    id: "shoes-in-the-charity-shop",
    title: "Shoes in the Charity Shop",
    description: "Like a stack of footfalls they pile in tangles",
    publishdate: "2025-06-01",
    tags: ["Eulogy", "Object"],
    showcase: true,
    complete: true
  },
  {
    id: "shot",
    title: "Shot",
    description: "The fox is shot",
    publishdate: "1993-07-01",
    statusText: "Published in Magma 1 (March 1994)\nIncluded in the collection 'Play Time'",
    tags: ["Other-published", "Power", "Urban", "Violence"],
    showcase: true,
    complete: true
  },
  {
    id: "showman",
    title: "Showman",
    description: "I am wonderstruck by the way",
    publishdate: "2000-10-01",
    statusText: "Included in the collection '22 Facets of my Father'",
    tags: ["Family"],
    audiofile: "/audio/showman",
    videofile: "/video/showman.mp4",
    complete: true
  },
  {
    id: "sic-transit-gloria-mundi",
    title: "Sic transit gloria mundi",
    description: "Glorious is the cat who's caught",
    publishdate: "2009-04-01",
    tags: ["Cat"],
    complete: false
  },
  {
    id: "sirens",
    title: "Sirens",
    description: "There is a deep-sea Jesus who once hammered",
    publishdate: "2019-01-01",
    statusText: "Included in the collection 'More Love Poems Innit'",
    tags: ["Faith", "Sex"],
    showcase: true,
    complete: true
  },
  {
    id: "slap-stick",
    title: "Slap Stick",
    description: "Imagine a copse of clown-trees",
    publishdate: "2007-12-01",
    statusText: "Included in the collection 'To Posterity'",
    tags: ["Surreal"],
    complete: true
  },
  {
    id: "sniper",
    title: "Sniper",
    description: "Focus just here - I'll frame you in the street",
    publishdate: "2003-07-01",
    statusText: "Included in the collection 'From Each Skull, A Story'",
    tags: ["Communication", "Power", "Violence"],
    complete: true
  },
  {
    id: "something-watches",
    title: "Something Watches",
    description: "Something watches. The woods are silent",
    publishdate: "2012-07-01",
    statusText: "From 'Snowdrop - a story in verse'",
    tags: ["Noir", "Rural", "Surreal"],
    showcase: true,
    complete: true
  },
  {
    id: "spring-fling",
    title: "Spring Fling",
    description: "We first furled as brown trees blushed pink",
    publishdate: "2019-01-01",
    statusText: "Included in the collection 'More Love Poems Innit'",
    tags: ["Performance", "Sex"],
    showcase: true,
    complete: true
  },
  {
    id: "spring-haiku",
    title: "Spring Haiku",
    description: "The arch of the branch",
    publishdate: "2025-06-01",
    tags: ["Rural", "Urban"],
    complete: true
  },
  {
    id: "spring-in-the-lower-lea-valley",
    title: "Spring in the Lower Lea Valley",
    description: "From tilled earths grow strange plants",
    publishdate: "2025-06-01",
    tags: ["Machine", "Olympic", "Urban"],
    complete: true
  },
  {
    id: "stanley-in-moonlight",
    title: "Stanley in Moonlight",
    description: "He lopes slow-motioned, each foot-stride",
    publishdate: "2025-06-01",
    statusText: "Included in the collection 'From Each Skull, A Story'",
    tags: ["Embodiment", "Inheritance", "Power", "Voyeur"],
    showcase: true,
    complete: true
  },
  {
    id: "star",
    title: "Star",
    description: "Blackmanstone: your first home, a tumbled house",
    publishdate: "2001-04-01",
    statusText: "Included in the collection '22 Facets of my Father'",
    tags: ["Family", "Inheritance", "Rural"],
    audiofile: "/audio/star",
    showcase: true,
    complete: true
  },
  {
    id: "stars-on-the-water",
    title: "Stars on the Water",
    description: "The pool is a portrait: it captures the sky",
    publishdate: "2012-07-01",
    statusText: "From 'Snowdrop - a story in verse'",
    tags: ["Noir", "Rural"],
    complete: true
  },
  {
    id: "stood-outside-the-office",
    title: "Stood outside the office, smoking",
    description: "Winter spit taps on my skull",
    publishdate: "2007-01-01",
    statusText: "Included in the collection 'Poems to Quote to your Lover'",
    tags: ["Love", "Office", "Urban"],
    complete: true
  },
  {
    id: "streetlamp-theatre",
    title: "Streetlamp Theatre",
    description: "Maggie stands tall tonight",
    publishdate: "2009-04-01",
    statusText: "Published in Shit Creek Review Issue 15 (December 2011)",
    tags: ["Noir", "Other-published", "Outsider", "Performance", "Urban", "Violence", "Voyeur"],
    showcase: true,
    complete: true
  },
  {
    id: "strength",
    title: "Strength",
    description: "Evening arrives with a clear sky and a hard frost",
    publishdate: "2001-01-01",
    statusText: "Included in the collection '22 Facets of my Father'",
    tags: ["Family", "Inheritance"],
    audiofile: "/audio/strength",
    videofile: "/video/strength.mp4",
    imagefile: "/images/poem-strength.webp",
    imageCaption: "Strength - Instagram",
    imagePosition: "bottom",
    showcase: true,
    complete: true
  },
  {
    id: "summersex",
    title: "Summersex",
    description: "We step barefoot across the still-wet humps",
    publishdate: "2007-06-01",
    statusText: "Included in the collection 'Poems to Quote to your Lover'",
    tags: ["Rural", "Sex"],
    complete: true
  },
  {
    id: "sun",
    title: "Sun",
    description: "You made me in the end. You found",
    publishdate: "2001-05-01",
    statusText: "Included in the collection '22 Facets of my Father'",
    tags: ["Communication", "Family", "Inheritance"],
    audiofile: "/audio/sun",
    imagefile: "/images/poem-sun.webp",
    imageCaption: "Sun - Instagram",
    imagePosition: "bottom",
    complete: true
  },
  {
    id: "surprise",
    title: "Surprise!",
    description: "You boxed me back in ninety three",
    publishdate: "2025-06-01",
    statusText: "",
    tags: ["Love"],
    complete: true
  },
  {
    id: "sustainability",
    title: "Sustainability",
    description: "I wake, dead. Five foot six",
    publishdate: "1999-07-01",
    statusText: "Included in the collection 'Play Time'",
    tags: ["Surreal"],
    complete: true
  },
  {
    id: "sweetness",
    title: "Sweetness",
    description: "Trauma, know: you're never safe!",
    publishdate: "2021-12-15",
    tags: ["Embodiment", "Violence"],
    complete: false
  },
  {
    id: "take-this-man",
    title: "Take this Man",
    description: "I married you on a couch in Clerkenwell",
    publishdate: "2007-01-01",
    statusText: "Included in the collection 'Poems to Quote to your Lover'",
    tags: ["Love"],
    showcase: true,
    complete: true
  },
  {
    id: "tamarisk",
    title: "Tamarisk",
    description: "A feather of boughs, sweet as dawnlight",
    publishdate: "2025-06-01",
    tags: ["Ekphrasis", "Object"],
    imagefile: "/images/poem-tamarisk.webp",
    imageCaption: "Tamarix gallica on a beach - Wikimedia Commons",
    imagePosition: "bottom",
    complete: true
  },
  {
    id: "team-spirit",
    title: "Team Spirit",
    description: "Half ten ay em: I am surrounded",
    publishdate: "1990-10-01",
    tags: ["Office"],
    complete: false
  },
  {
    id: "temperance",
    title: "Temperance",
    description: "Winter Sundays are the best time. I rise",
    publishdate: "2001-03-01",
    statusText: "Included in the collection '22 Facets of my Father'",
    tags: ["Family"],
    audiofile: "/audio/temperance",
    complete: true
  },
  {
    id: "the-cake",
    title: "The Cake",
    description: "Simnel, it breaks our Lenten fast",
    publishdate: "2017-10-01",
    statusText: "Included in the collection 'And Still I Breathe'",
    tags: ["Communication", "Family", "Inheritance"],
    showcase: true,
    complete: true
  },
  {
    id: "the-cartographers",
    title: "The Cartographers",
    description: "You promise me treasure, offer",
    publishdate: "2006-03-01",
    statusText: "Included in the collection 'Poems to Quote to your Lover'",
    tags: ["Embodiment", "Love"],
    complete: true
  },
  {
    id: "the-case-of-the-man-who-was-dead",
    title: "The Case of the Man Who was Dead",
    description: "Come, she says. I'll show you",
    publishdate: "2009-04-01",
    tags: ["Faith", "Noir", "Surreal"],
    complete: false
  },
  {
    id: "the-chant-of-summoning",
    title: "The Chant of Summoning",
    description: "Each step I take moves me from night to day",
    publishdate: "2012-07-01",
    statusText: "From 'Snowdrop - a story in verse'",
    tags: ["Noir", "Rural"],
    complete: true
  },
  {
    id: "the-charity-collector",
    title: "The Charity Collector",
    description: "She stands in the wind with a tin in her mittens",
    publishdate: "2005-01-01",
    statusText: "Included in the collection 'From Each Skull, A Story'",
    tags: ["Communication", "Performance", "Violence"],
    showcase: true,
    complete: true
  },
  {
    id: "the-digger",
    title: "The Digger",
    description: "I was on the losing end of three hands",
    publishdate: "2011-03-01",
    statusText: "Published in The Chimaera Issue 8 (July 2011)",
    tags: ["Noir", "Other-published"],
    showcase: true,
    complete: true
  },
  {
    id: "the-fire-and-the-ice",
    title: "The Fire and the Ice",
    description: "Some nights I daydream of a life beyond the City",
    publishdate: "2018-01-01",
    tags: ["Noir"],
    complete: false
  },
  {
    id: "the-glamour-through-the-flame",
    title: "The Glamour through the Flame",
    description: "Look at the stag! He leaps at the trees",
    publishdate: "2012-07-01",
    statusText: "From 'Snowdrop - a story in verse'",
    tags: ["Noir", "Rural", "Surreal"],
    complete: true
  },
  {
    id: "the-intelligent-designer",
    title: "The Intelligent Designer",
    description: "It starts as a web of dimensions rolled",
    publishdate: "2005-09-01",
    tags: ["Faith"],
    showcase: true,
    complete: true
  },
  {
    id: "the-it-of-it",
    title: "The It of It",
    description: "A river in flood, fast and deep and yet still – the base",
    publishdate: "2019-01-01",
    statusText: "Included in the collection 'More Love Poems Innit'",
    tags: ["Communication", "Love", "Wonder"],
    showcase: true,
    complete: true
  },
  {
    id: "the-job",
    title: "The Job",
    description: "Nine strikes chime the length of the hall",
    publishdate: "2015-04-01",
    tags: ["Cat"],
    complete: false
  },
  {
    id: "the-knife",
    title: "The Knife",
    description: "She's messed me up, again: my shiny blade",
    publishdate: "2006-08-01",
    statusText: "Included in the collection 'From Each Skull, A Story'",
    tags: ["Communication", "Noir", "Object", "Violence"],
    complete: true
  },
  {
    id: "the-lammas-sun-has-gone",
    title: "The Lammas sun has gone",
    description: "Beyond the glassed face, fish",
    publishdate: "2007-09-01",
    statusText: "Included in the collection 'To Posterity'",
    tags: ["Sex"],
    complete: true
  },
  {
    id: "the-last-breath-is-the-first",
    title: "The Last Breath is the First Breath",
    description: "It's been a heavy year, my love",
    publishdate: "2019-01-01",
    statusText: "Included in the collection 'More Love Poems Innit'",
    tags: ["Communication", "Faith", "Love"],
    showcase: true,
    complete: true
  },
  {
    id: "the-long-draft",
    title: "The Long Draft",
    description: "Did you hear",
    publishdate: "2010-09-01",
    tags: ["Faith", "Machine"],
    complete: false
  },
  {
    id: "the-micro-mule",
    title: "The Micro Mule",
    description: "There must be laws against this sort",
    publishdate: "2005-08-01",
    statusText: "Included in the collection 'From Each Skull, A Story'",
    tags: ["Light", "Object", "Surreal"],
    showcase: true,
    complete: true
  },
  {
    id: "the-momentary-meanings-of-hugh",
    title: "The Momentary Meanings of Hugh",
    description: "He knows the mirror lies",
    publishdate: "2025-06-01",
    tags: ["Outsider"],
    complete: true
  },
  {
    id: "the-obligatory-az-poem",
    title: "The Obligatory AZ Poem",
    description: "April blossom comes",
    publishdate: "2025-06-01",
    tags: ["Culture", "Light"],
    complete: true
  },
  {
    id: "the-office-as-a-form",
    title: "The Office as a Form of Inspiration",
    description: "These angularities that pin me in",
    publishdate: "2005-07-01",
    statusText: "Included in the collection 'To Posterity'",
    tags: ["Machine", "Office"],
    complete: true
  },
  {
    id: "the-one",
    title: "The One",
    description: "There are many different ways to be a man",
    publishdate: "2019-01-01",
    statusText: "Included in the collection To 'More Love Poems Innit'",
    tags: ["Love"],
    showcase: true,
    complete: true
  },
  {
    id: "the-place-maker",
    title: "The Place Maker",
    description: "I met Mother Drum when she came for beer",
    publishdate: "2006-04-01",
    statusText: "Included in the collection 'From Each Skull, A Story'",
    tags: ["Communication", "Performance", "Rural"],
    complete: true
  },
  {
    id: "the-poet-asks-his-love-about",
    title: "The poet asks his love about the «Enchanted City» of Cuenca",
    description: "You liked the city that by drop on drop",
    publishdate: "2025-06-01",
    statusText: "After 'El poeta pregunta a su amor por la «Ciudad Encantada» de Cuenca' by Federico García Lorca",
    tags: ["Translation"],
    complete: true
  },
  {
    id: "the-poet-says-to-the-truth",
    title: "The poet says to the truth",
    description: "I want to weep my heart-wrecks: I say this",
    publishdate: "2025-06-01",
    statusText: "After 'El poeta dice la verdad' by Federico García Lorca",
    tags: ["Translation"],
    complete: true
  },
  {
    id: "the-poet-speaks-on-the-phone",
    title: "The poet speaks on the phone to love",
    description: "Your voice, it watered dunes within my chest",
    publishdate: "2025-06-01",
    statusText: "After 'El poeta habla por teléfono con el amor' by Federico García Lorca",
    tags: ["Translation"],
    complete: true
  },
  {
    id: "the-practicalities-of-hate",
    title: "The Practicalities of Hate",
    description: "It has been eight days since the fact",
    publishdate: "2025-06-01",
    tags: ["Performance", "Power", "Violence"],
    complete: true
  },
  {
    id: "the-procrastinator",
    title: "The Procrastinator",
    description: "My verse",
    publishdate: "2025-06-01",
    tags: ["Light", "Sex"],
    complete: true
  },
  {
    id: "the-production-line",
    title: "The Production Line",
    description: "Within the workshop",
    publishdate: "2025-06-01",
    tags: ["Culture"],
    showcase: true,
    complete: true
  },
  {
    id: "the-seer",
    title: "The Seer",
    description: "Beyond the dock, a shamble of shacks",
    publishdate: "2025-06-01",
    tags: ["Faith", "Noir", "Urban"],
    complete: true
  },
  {
    id: "the-shoppers-choice",
    title: "The Shopper's Choice",
    description: "My weighted basket",
    publishdate: "2010-04-01",
    tags: ["Power"],
    complete: true
  },
  {
    id: "the-tiger-hunts",
    title: "The Tiger Hunts",
    description: "She walks the sods and the soils of the Marsh",
    publishdate: "2012-07-01",
    statusText: "From 'Snowdrop - a story in verse'",
    tags: ["Cat", "Noir", "Rural", "Surreal", "Violence"],
    showcase: true,
    complete: true
  },
  {
    id: "the-warrior",
    title: "The Warrior",
    description: "There is no chill to the mists that lap",
    publishdate: "2025-06-01",
    tags: ["Faith", "Noir", "Urban", "Violence"],
    complete: true
  },
  {
    id: "the-well",
    title: "The Well",
    description: "It is as if it has no floor",
    publishdate: "1990-07-01",
    tags: ["Ekphrasis", "Faith", "Rural"],
    complete: true
  },
  {
    id: "they-shift-watermelons",
    title: "They shift watermelons",
    description: "Moscow is jam-packed with watermelons",
    publishdate: "2025-05-01",
    statusText: "After 'Торгуют арбузами' by Andrei Voznesensky",
    tags: ["Translation"],
    complete: true
  },
  {
    id: "things-i-love-about-my-bed",
    title: "Things I Love About My Bed",
    description: "The bole of the head post has faces",
    publishdate: "2010-09-01",
    statusText: "Included in the collection 'To Posterity'",
    tags: ["Ekphrasis", "Love", "Object"],
    complete: true
  },
  {
    id: "this-thing-we-share",
    title: "This thing we share is not that thing",
    description: "We were too drunk, that first time, a mix",
    publishdate: "2019-01-01",
    statusText: "Included in the collection 'More Love Poems Innit'",
    tags: ["Communication", "Eulogy", "Love"],
    complete: true
  },
  {
    id: "three-strophes-to-change",
    title: "Three strophes to change your life forever!",
    description: "Shall I lie to you, today",
    publishdate: "2017-10-01",
    statusText: "Included in the collection 'And Still I Breathe'",
    tags: ["Performance"],
    complete: true
  },
  {
    id: "to-his-love-the-poet-asks",
    title: "To his love the poet asks: write to me",
    description: "My bowel-nested love, my death in life",
    publishdate: "2025-06-01",
    statusText: "After 'El poeta pide a su amor que le escriba' by Federico García Lorca",
    tags: ["Translation"],
    complete: true
  },
  {
    id: "to-posterity",
    title: "To Posterity",
    description: "I am not your friend",
    publishdate: "2010-02-01",
    statusText: "Included in the collection 'To Posterity'",
    tags: ["Communication", "Inheritance"],
    showcase: true,
    complete: true
  },
  {
    id: "to-the-victors-the-spoils",
    title: "To the Victors, the Spoils",
    description: "Sprinting to work, late like the binmen, I spill",
    publishdate: "2009-01-01",
    tags: ["Olympic"],
    complete: false
  },
  {
    id: "toby",
    title: "Toby",
    description: "To the cat on his back who sulks",
    publishdate: "2025-06-01",
    tags: ["Cat"],
    complete: true
  },
  {
    id: "today-we-count-in-perfections",
    title: "Today we count in perfections",
    description: "My first wart grew where my fingers would cross",
    publishdate: "2017-10-01",
    statusText: "Included in the collection 'And Still I Breathe'",
    tags: ["Embodiment", "Light"],
    complete: true
  },
  {
    id: "token",
    title: "Token",
    description: "I buy a rose to mark",
    publishdate: "2006-03-01",
    statusText: "Included in the collection 'Poems to Quote to your Lover'",
    tags: ["Love"],
    complete: true
  },
  {
    id: "tournesols",
    title: "Tournesols",
    description: "This image presented, dead as the hand that",
    publishdate: "2025-05-01",
    tags: ["Culture", "Ekphrasis", "Violence"],
    imagefile: "/images/poem-tournesols.webp",
    imageCaption: "'Six Sunflowers, 1888', van Gogh - Wikimedia Commons",
    imagePosition: "bottom",
    showcase: true,
    complete: true
  },
  {
    id: "tower",
    title: "Tower",
    description: "The Martello gun points to France, a long",
    publishdate: "2001-05-01",
    statusText: "Included in the collection '22 Facets of my Father'",
    tags: ["Family"],
    audiofile: "/audio/tower",
    complete: true
  },
  {
    id: "trade",
    title: "Trade",
    description: "You grab my hand and net aside",
    publishdate: "2007-06-01",
    statusText: "Included in the collection 'Poems to Quote to your Lover'",
    tags: ["Performance", "Sex"],
    complete: true
  },
  {
    id: "trafalgar-week",
    title: "Trafalgar Week",
    description: "Dancers on the stage built beside",
    publishdate: "2025-06-01",
    tags: ["Performance", "Urban", "Violence"],
    showcase: true,
    complete: true
  },
  {
    id: "transaction",
    title: "Transaction",
    description: "My friends ask me: how much does that special smile",
    publishdate: "2006-03-01",
    statusText: "Included in the collection 'Poems to Quote to your Lover'",
    tags: ["Love", "Performance"],
    complete: true
  },
  {
    id: "traveller",
    title: "Traveller",
    description: "To remove the shirt as Man examines",
    publishdate: "2004-05-01",
    statusText: "Included in the collection 'Play Time'",
    tags: ["Embodiment", "Faith", "Performance", "Sex"],
    complete: true
  },
  {
    id: "trespasser",
    title: "Trespasser",
    description: "My Gran, she warned me of you",
    publishdate: "2003-04-01",
    statusText: "Included in the collection 'From Each Skull, A Story'",
    tags: ["Surreal"],
    complete: true
  },
  {
    id: "tumblewords",
    title: "Tumblewords",
    description: "It's like a boil, this need to write",
    publishdate: "2017-10-01",
    statusText: "Included in the collection 'And Still I Breathe'",
    tags: ["Culture"],
    complete: true
  },
  {
    id: "twenty-twenty",
    title: "Twenty Twenty",
    description: "I have a chip that lets me palm",
    publishdate: "2017-10-01",
    statusText: "Included in the collection 'And Still I Breathe'",
    tags: ["Communication", "Machine"],
    complete: true
  },
  {
    id: "untitled-20150409",
    title: "Untitled - 2015-04-09",
    description: "A boy-ripped bough",
    publishdate: "2015-04-01",
    tags: ["Wonder"],
    complete: false
  },
  {
    id: "untitled-20150410",
    title: "Untitled - 2015-04-10",
    description: "When I cough too long",
    publishdate: "2015-04-01",
    tags: ["Embodiment", "Surreal"],
    complete: false
  },
  {
    id: "untitled-20180407",
    title: "Untitled - 2018-04-07",
    description: "Shimminy jimminy",
    publishdate: "2018-04-01",
    tags: ["Light"],
    complete: false
  },
  {
    id: "untitled-20170404",
    title: "Untitled - 2017-04-04",
    description: "That moment between the brown of daffodils",
    publishdate: "2017-04-04",
    tags: ["Love"],
    complete: false
  },
  {
    id: "uri",
    title: "Uri",
    description: "Uri slides motionless across the curve of the skies",
    publishdate: "1991-02-01",
    statusText: "Included in the collection 'PaleoRik'",
    tags: ["Outsider"],
    complete: true
  },
  {
    id: "vampyr",
    title: "Vampyr",
    description: "Dogs have knocked the coffin down",
    publishdate: "1999-06-01",
    statusText: "Published in Magma 18 (Autumn 2000)\nIncluded in the collection 'Play Time'",
    tags: ["Eulogy", "Noir", "Other-published", "Performance", "Surreal"],
    videofile: "/video/vampyr.mp4",
    showcase: true,
    complete: true
  },
  {
    id: "vanitas",
    title: "Vanitas",
    description: "If I grind the mirror to the flat",
    publishdate: "2009-04-01",
    tags: ["Wonder"],
    complete: false
  },
  {
    id: "we-added-some-herbs",
    title: "We Added Some Herbs to the Brew",
    description: "Sharp: a grasp, unseen",
    publishdate: "2009-04-01",
    tags: ["Embodiment", "Love"],
    complete: false
  },
  {
    id: "well-met",
    title: "Well Met",
    description: "Four moons in the sky tonight: new waxed full",
    publishdate: "2019-01-01",
    statusText: "Included in the collection 'More Love Poems Innit'",
    tags: ["Performance", "Sex", "Urban", "Violence"],
    complete: true
  },
  {
    id: "westfield",
    title: "Westfield",
    description: "My Lord, we have built again",
    publishdate: "2025-06-01",
    tags: ["Olympic", "Power"],
    complete: true
  },
  {
    id: "whatever",
    title: "Whatever",
    description: "Lips as wide as an atlas moth",
    publishdate: "2018-04-01",
    tags: ["Sex", "Surreal"],
    complete: false
  },
  {
    id: "when-i-vote-on-7-may",
    title: "When I vote on the Seventh of May",
    description: "Let us remember the",
    publishdate: "2015-04-01",
    tags: ["Power"],
    complete: false
  },
  {
    id: "when-the-battle-ends",
    title: "When the Battle Ends",
    description: "Look out of the window: see how",
    publishdate: "2006-04-01",
    statusText: "Included in the collection 'Poems to Quote to your Lover'",
    tags: ["Love", "Violence"],
    complete: true
  },
  {
    id: "when-the-net-goes-down",
    title: "When the net goes down",
    description: "Blue sky at noon: deep, smooth, no clutter",
    publishdate: "2017-10-01",
    statusText: "Included in the collection 'And Still I Breathe'",
    tags: ["Machine", "Office"],
    complete: true
  },
  {
    id: "when-we-were-very-young",
    title: "When We Were Very Young",
    description: "The first posts a starting line",
    publishdate: "2017-04-01",
    tags: ["Communication", "Machine"],
    complete: false
  },
  {
    id: "whitehall",
    title: "Whitehall",
    description: "When I walk drunk through Saint James's Park",
    publishdate: "2006-04-01",
    statusText: "Included in the collection 'From Each Skull, A Story'",
    tags: ["Inheritance", "Surreal"],
    complete: true
  },
  {
    id: "who",
    title: "Who?",
    description: "My book has moved again, the edge of pens",
    publishdate: "2017-10-01",
    statusText: "Included in the collection 'And Still I Breathe'",
    tags: ["Inheritance", "Outsider"],
    showcase: true,
    complete: true
  },
  {
    id: "wild-shannah",
    title: "Wild Shannah",
    description: "She would mock the betrayal of the storm",
    publishdate: "1989-11-01",
    tags: ["Surreal"],
    complete: false
  },
  {
    id: "with-gongorinesque-verve-a-poet-sends",
    title: "With Gongorinesque verve a poet sends a dove to his love",
    description: "This young Turian dove I send to you",
    publishdate: "2025-06-01",
    statusText: "After 'Soneto gongorino en que el poeta manda a su amor una paloma' by Federico García Lorca",
    tags: ["Translation"],
    complete: true
  },
  {
    id: "woman-and-man-in-traffic",
    title: "Woman and Man in Traffic, Imagined",
    description: "Meanwhile let's talk",
    publishdate: "2025-05-01",
    tags: ["Communication"],
    complete: true
  },
  {
    id: "workout",
    title: "Workout",
    description: "Health — an exercise",
    publishdate: "2009-01-01",
    tags: ["Olympic"],
    complete: false
  },
  {
    id: "worlds",
    title: "Worlds",
    description: "A long while later I found",
    publishdate: "2001-05-01",
    statusText: "Included in the collection '22 Facets of my Father'",
    tags: ["Family", "Inheritance"],
    audiofile: "/audio/worlds",
    complete: true
  },
  {
    id: "x",
    title: "X",
    description: "This is the moment, that tick in time when",
    publishdate: "2015-04-01",
    tags: ["Power"],
    complete: false
  },
  {
    id: "youll-never-guess-what",
    title: "You'll Never Guess What",
    description: "I watch his mouth, let the slip of his lips",
    publishdate: "2015-04-01",
    statusText: "Included in the collection 'And Still I Breathe'",
    tags: ["Communication"],
    complete: true
  }
];

export default poems;
