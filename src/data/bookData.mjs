/*
Reviews array:
[
  {
    channel: 'YouTube' | 'TikTok';
    url: string (URL string)
    reviewer: string (review channel name)
  }
]
*/

const bookData = [
  {
    id: "22-facets-of-my-father",
    title: "22 Facets of my Father",
    tabTitle: "RikVerse Book",
    description: "A set of Tarot poems about my Dad",
    publishdate: "2001-07-01",
    coverimage: "/images/cover-22-facets-of-my-father.webp",
    blurb: `<p>In <i>22 Facets of my Father</i>, Rik Roots embarks on a poignant and often unvarnished exploration of a father-son relationship, seen through a series of twenty-two thematically distinct poems. Each poem, titled after a Major Arcana tarot card, delves into a specific "facet" or memory, ranging from formative childhood moments to the complexities of adulthood and the enduring impact of a paternal figure.</p><p>Roots employs a direct, evocative style, weaving together mundane domestic scenes with profound emotional revelations, and grounding universal experiences of family dynamics within the distinctive landscape of the Romney Marsh in Kent. Readers interested in contemporary poetry that grapples with memory, identity, and the intricate bonds of family will find a compelling and deeply personal narrative here.</p>`,
    download_epub: "/new-downloads/22-facets-of-my-father.epub",
    download_pdf: "/new-downloads/22-facets-of-my-father.pdf",
    report_link: "/reports/22-facets-of-my-father.md",
    is_chapbook: true,
    reviews: []
  },
  {
    id: "play-time",
    title: "Play Time",
    tabTitle: "RikVerse Book",
    description: "The wierd and the wonderful (Episode 1)",
    publishdate: "2001-11-01",
    coverimage: "/images/cover-play-time.webp",
    blurb: `<p>Rik Roots' <i>Play Time</i> offers a compelling inaugural collection, demonstrating an emergent poetic voice engaged with the textures of urban existence and interior landscapes. These early poems, spanning from adolescence to the turn of the century, reveal a poet at play with form and thematic exploration, deliberately eschewing a singular overarching theme in favour of a diverse engagement with human experience.</p><p>From the raw sensuality of "Appreciation" and the visceral grit of "Commuting" to the poignant urban alienation of "Daisy" and the complex explorations of self and connection in "Menses" and "Consent", Roots navigates a contemporary sensibility. The collection often grounds abstract emotion in concrete, sometimes stark, imagery, inviting readers to witness the poet's "experiments and approaches"  as he grapples with desire, loss, identity, and the relentless pulse of metropolitan life.</p>`,
    download_epub: "/new-downloads/play-time.epub",
    download_pdf: "/new-downloads/play-time.pdf",
    report_link: "/reports/play-time.md",
    is_chapbook: true,
    reviews: []
  },
  {
    id: "from-each-skull-a-story",
    title: "From Each Skull, A Story",
    tabTitle: "RikVerse Book",
    description: "The wierd and the wonderful (Episode 2)",
    publishdate: "2006-03-01",
    coverimage: "/images/cover-from-each-skull-a-story.webp",
    blurb: `<p><i>From Each Skull, A Story</i> by Rik Roots is a compelling chapbook that delves into the liminal spaces of human experience, presenting a collection of poems that explore the lives and perspectives of those often overlooked or marginalized within society. Roots masterfully crafts narratives that are at once deeply personal and broadly resonant, inviting readers to consider the interiority of characters grappling with faith, disillusionment, and the harsh realities of urban existence.</p><p>The collection's strength lies in its unflinching gaze at vulnerability and its nuanced portrayal of the everyday grotesque, challenging conventional notions of beauty and order in contemporary life. Through sharp observation and a keen ear for the cadences of lived experience, Roots navigates themes of identity, memory, and the search for meaning amidst chaos, offering a provocative and memorable read for those interested in the cutting edge of contemporary poetic inquiry.</p>`,
    download_epub: "/new-downloads/from-each-skull-a-story.epub",
    download_pdf: "/new-downloads/from-each-skull-a-story.pdf",
    report_link: "/reports/from-each-skull-a-story.md",
    is_chapbook: true,
    reviews: []
  },
  {
    id: "poems-to-quote-to-your-lover",
    title: "Poems to Quote to your Lover",
    tabTitle: "RikVerse Book",
    description: "A loose sequence of more erotic poems",
    publishdate: "2007-11-01",
    coverimage: "/images/cover-poems-to-quote-to-your-lover.webp",
    blurb: `<p>Rik Roots's <i>Poems to Quote to Your Lover</i> offers an intimate and often unvarnished exploration of contemporary love and its complexities. Eschewing sentimental idealizations, Roots delves into the physical and emotional landscapes of relationships, from nascent attractions felt "barefoot across the still-wet humps of Dymchurch beach"  to the deep, sometimes challenging, currents of long-term partnership, as explored in "Language" and "Respect".</p><p>The collection navigates themes of desire, vulnerability, commitment, and the often-unspoken negotiations between lovers, presenting a frank and sensual poetic voice that resonates with the lived realities of modern romance. Readers will find reflections on intimacy, the delicate balance of trust, and the evolution of connection, all rendered with a distinctive blend of raw honesty and lyrical precision.</p>`,
    download_epub: "/new-downloads/poems-to-quote-to-your-lover.epub",
    download_pdf: "/new-downloads/poems-to-quote-to-your-lover.pdf",
    report_link: "/reports/poems-to-quote-to-your-lover.md",
    is_chapbook: true,
    reviews: []
  },
  {
    id: "to-posterity",
    title: "To Posterity",
    tabTitle: "RikVerse Book",
    description: "The wierd and the wonderful (Episode 3)",
    publishdate: "2010-06-01",
    coverimage: "/images/cover-to-posterity.webp",
    blurb: `<p>Rik Roots' <i>To Posterity</i> is a chapbook that navigates the intricate emotional landscapes of contemporary life, touching upon themes of loss, memory, and the often-unseen connections that bind us to our environments. The poems, a sequence rather than disparate pieces, move with a subtle yet impactful rhythm, inviting readers to consider the ordinary as imbued with profound significance. Roots employs a precise, often startling imagery — from the "dragon-axed dahlia" to "a copse of clown-trees" — to explore the fragility of existence and the persistent echoes of those who have passed.</p><p>This collection offers a contemplative engagement with the everyday, urging a closer look at the temporal and the tangible, revealing layers of meaning in domestic spaces, urban encounters, and the quiet moments of reflection.</p>`,
    download_epub: "/new-downloads/to-posterity.epub",
    download_pdf: "/new-downloads/to-posterity.pdf",
    report_link: "/reports/to-posterity.md",
    is_chapbook: true,
    reviews: []
  },
  {
    id: "snowdrop-a-story-in-verse",
    title: "Snowdrop",
    tabTitle: "RikVerse Book",
    description: "A story in verse",
    publishdate: "2012-03-01",
    coverimage: "/images/cover-snowdrop-a-story-in-verse.webp",
    blurb: `<p>Rik Roots' <i>Snowdrop: A Story in Verse</i>, a verse novel drafted between 2004 and 2012, plunges the reader into a Christmas that quickly devolves from festive joy into a chilling odyssey of fear and loss. The narrative unfolds across 79 poems, organized into 14 distinct sections, primarily set on the ancient, mist-shrouded Romney Marshes and the mysterious Lym Hill.</p><p>This chapbook unravels the tale of a young girl, "Snowdrop," whose seemingly ordinary Christmas visit to her Gran's cottage  in the 1980s  morphs into an unsettling encounter with a pagan, timeless realm. The poem navigates themes of displacement, the collision of ancient folklore with contemporary reality, and a protagonist's struggle for sanity amidst surreal transformations of landscape and perception.</p><p>Through evocative imagery and a narrative that blurs the lines between dream and waking, Snowdrop explores the enduring power of myth and the psychological impact of being caught between worlds, ultimately offering a poignant reflection on memory, identity, and the fluid nature of time and place.</p>`,
    download_epub: "/new-downloads/snowdrop-a-story-in-verse.epub",
    download_pdf: "/new-downloads/snowdrop-a-story-in-verse.pdf",
    report_link: "/reports/snowdrop-a-story-in-verse.md",
    is_chapbook: true,
    reviews: []
  },
  {
    id: "paleorik",
    title: "PaleoRik",
    tabTitle: "RikVerse Book",
    description: "A selection of the early stuff",
    publishdate: "2017-09-01",
    coverimage: "/images/cover-paleorik.webp",
    blurb: `<p>In "PaleoRik," Rik Roots presents a curated sequence of his earlier poems, primarily penned in the late 20th century, showcasing a poet in a formative period of experimentation and discovery. This chapbook offers a compelling glimpse into the nascent stages of Roots's poetic voice, exploring themes that range from the mundane realities of urban life in London to more introspective engagements with memory, identity, and the natural world.</p><p>Readers familiar with contemporary British poetry will appreciate the collection's direct language and its often-unflinching gaze at the intersections of personal experience and broader societal observations. Roots's work in "PaleoRik" reveals an early but confident poetic sensibility, hinting at the stylistic and thematic developments that would characterize his later output.</p>`,
    download_epub: "/new-downloads/paleorik.epub",
    download_pdf: "/new-downloads/paleorik.pdf",
    report_link: "/reports/paleorik.md",
    is_chapbook: true,
    reviews: []
  },
  {
    id: "and-still-i-breathe",
    title: "And Still I Breathe",
    tabTitle: "RikVerse Book",
    description: "The wierd and the wonderful (Episode 4)",
    publishdate: "2017-10-01",
    coverimage: "/images/cover-and-still-i-breathe.webp",
    blurb: `<p>Rik Roots's <i>And Still I Breathe</i> offers a compelling sequence of poems that navigates the intricacies of contemporary existence with an unflinching gaze. Through a diverse array of forms and narrative voices, Roots explores the pervasive influence of digital interconnectivity on individual identity and societal structures. The collection deftly interweaves personal reflections on the creative impulse and the passage of time with incisive critiques of modern anxieties, from economic precarity to the insidious nature of gossip.</p><p>Roots challenges conventional notions of memory and national identity, while also engaging with universal human experiences of community, isolation, and the often-surreal nature of daily life. This collection provides a nuanced and often sardonic commentary on what it means to "still breathe" in a world increasingly mediated and defined by digital presences and disquieting realities.</p>`,
    download_epub: "/new-downloads/and-still-i-breathe.epub",
    download_pdf: "/new-downloads/and-still-i-breathe.pdf",
    report_link: "/reports/and-still-i-breathe.md",
    is_chapbook: true,
    reviews: []
  },
  {
    id: "more-love-poems-innit",
    title: "More Love Poems Innit",
    tabTitle: "RikVerse Book",
    description: "A sequence of love poems",
    publishdate: "2019-01-01",
    coverimage: "/images/cover-more-love-poems-innit.webp",
    blurb: `<p>Rik Roots's "More Love Poems Innit" is a chapbook that delves into the multifaceted landscape of modern love and intimacy, navigating its complexities with a distinct voice that is both vulnerable and wry. This collection moves beyond conventional romantic verse, exploring the often-unspoken nuances of long-term partnership, the intoxicating initial spark of connection, and the profound sense of self that is both challenged and affirmed within a relationship.</p><p>Roots employs vivid, often visceral imagery, drawing on mundane observations and elevated moments to articulate the messy, beautiful reality of shared lives. The poems are marked by an unvarnished honesty, revealing the raw emotional undercurrents beneath everyday interactions, from the comfort of established routines to the sudden jolts of profound recognition. This collection offers a compelling and often surprising meditation on love's enduring presence amidst the shifting tides of personal history and contemporary existence.</p>`,
    download_epub: "/new-downloads/more-love-poems-innit.epub",
    download_pdf: "/new-downloads/more-love-poems-innit.pdf",
    report_link: "/reports/more-love-poems-innit.md",
    is_chapbook: true,
    reviews: []
  },
  {
    id: "sonnets-of-dark-held-love",
    title: "Sonnets of dark-held love",
    tabTitle: "RikVerse Book",
    description: "A sequence of poems after the 'Sonetos del amor oscuro' by Federico García Lorca",
    publishdate: "2025-07-01",
    coverimage: "/images/cover-sonnets-of-dark-held-love.webp",
    blurb: `<p><i>Sonnets of dark-held love</i> is a sequence of powerful, emotionally charged poems by Rik Roots, written in response to Federico García Lorca’s posthumously published <a href="https://es.wikisource.org/wiki/Sonetos_del_amor_oscuro">Sonetos del amor oscuro</a>. These sonnets channel Lorca’s intense themes of forbidden desire, mortality, longing, and identity, reimagined in a contemporary English idiom both visceral and lyrical. Each piece wrestles with love as both salvation and wound, revealing the enduring ache of queer passion repressed by history, politics, and time. This chapbook is not a translation but an homage: an original, fierce and faithful dialogue with Lorca’s ghost.</p>`,
    download_epub: "/new-downloads/sonnets-of-dark-held-love.epub",
    download_pdf: "/new-downloads/sonnets-of-dark-held-love.pdf",
    report_link: "/reports/sonnets-of-dark-held-love.md",
    is_chapbook: true,
    reviews: []
  },
  {
    id: "end-time",
    title: "End Time",
    tabTitle: "RikVerse Book",
    description: "A collection of poems for the last days of the world",
    publishdate: "2025-07-01",
    coverimage: "/images/cover-end-time.webp",
    blurb: `<p><i>End Time</i> is a noir-soaked, genre-melding poetry chapbook that spins hard-boiled private eye tropes into a lyrical meditation on apocalypse, myth, and memory. Rik Roots conjures a fragmented, dreamlike city at the edge of ruin where gods bleed, prophets drink, and antiheroes stalk truth through bullet-scored rain. The voice is sharp, cynical, and frequently tender — threading speculative fiction and theological echoes into a gritty, inventive poetic sequence. Lovers of contemporary poetry with a taste for the speculative, the satirical, and the darkly profound will find this collection an engrossing descent into meaning-making at the end of time.</p>`,
    download_epub: "/new-downloads/end-time.epub",
    download_pdf: "/new-downloads/end-time.pdf",
    report_link: "/reports/end-time.md",
    is_chapbook: true,
    reviews: []
  },
  {
    id: "beyond-my-eyes",
    title: "Beyond my eyes, the show unwinds",
    tabTitle: "RikVerse Book",
    description: "You think you know me?",
    publishdate: "2025-08-01",
    coverimage: "/images/cover-beyond-my-eyes.webp",
    blurb: `<p>"Beyond my eyes, the show unwinds" is a formally diverse and thematically layered poetry collection by Rik Roots, exploring identity, memory, and the ethical complexities of looking - at others, at history, and at oneself. Written in vivid free verse, the collection traverses geographical, historical, and emotional terrains, ranging from post-imperial Britain to Caribbean marketplaces, from archaeological artefacts to AI dialogues.</p><p>These poems engage deeply with themes of personal and collective trauma, political disillusionment, and the legacies of empire. Through voices that are by turns intimate, irreverent, and haunted, Roots challenges conventional lyric subjectivity and resists aesthetic polish in favour of multiplicity, contradiction, and difficult truth-telling.</p>`,
    download_epub: "/new-downloads/beyond-my-eyes.epub",
    download_pdf: "/new-downloads/beyond-my-eyes.pdf",
    report_link: "/reports/beyond-my-eyes.md",
    is_chapbook: true,
    reviews: []
  },
  {
    id: "seeking-constantine",
    title: "Seeking Constantine",
    tabTitle: "RikVerse Book",
    description: "A sequence of poems after Constantine P. Cavafy",
    publishdate: "2025-11-01",
    coverimage: "/images/cover-seeking-constantine.webp",
    blurb: `<p>"Seeking Constantine" is a tightly wrought poetic sequence in dialogue with the work of Constantine P. Cavafy, reimagining his voices, desires, and urban melancholies for a contemporary reader.</p><p>These poems move through memory, erotic longing, historical reverie, poverty, artistic ambition, and the quiet devastations of time. Recurrent figures drift through Alexandria-like streets, rented rooms, cafés, and inner landscapes shaped by regret and defiance. The collection is attentive to fleeting beauty, moments of transgression, and the persistence of selfhood against social constraint. It is a book about what cannot be escaped &ndash; past selves, lost lovers, unfinished desires, and the cities we carry within us.</p>`,
    download_epub: "/new-downloads/seeking-constantine.epub",
    download_pdf: "/new-downloads/seeking-constantine.pdf",
    report_link: "/reports/seeking-constantine.md",
    is_chapbook: true,
    reviews: []
  },
  {
    id: "the-gods-in-the-jungle",
    title: "The Gods in the Jungle",
    tabTitle: "RikVerse Book",
    description: "On her third visit to Varoul's House, Delesse finally looked at a naked male of the species",
    publishdate: "2011-05-01",
    coverimage: "/images/cover-the-gods-in-the-jungle.webp",
    blurb: `<p>Bassakesh &ndash; a city deep in the jungles of the Vreski Empire &ndash; holds the keys to wealth and power. As the Emperor comes to the end of his life, to what lengths will competing factions go to control the distant city? Who will come to build the Empire's new truth?</p><p>As Delesse, the Governor's daughter, prepares for the Imperial truths of her marriage contract, a quiet rebellion takes root in the spaces beneath Bassakesh. Maeduul, keeper of the Servant stories, whispers forbidden fables of human origin &ndash; tales which, heard by the wrong ears, could lead to the executions of many. And Kebezzu, who fights for Servant freedom, spreads the truth of a darker, harder, more dangerous prophecy.</p><p>When Loken, Delesse's betrothed, arrives in the city to claim the prize his powerful family craves, he brings a terrible gift. As rulers, the ruled and rebels alike succumb to plague &ndash; equals, finally, in death &ndash; the survivors must look beyond their superstitions, and the city walls, to discover a world whose truth can only be priced in the currency of trust, and blood.</p>`,
    download_epub: "/new-downloads/the-gods-in-the-jungle.epub",
    download_pdf: "/new-downloads/the-gods-in-the-jungle.pdf",
    report_link: "/reports/the-gods-in-the-jungle.md",
    is_chapbook: false,
    reviews: []
  },
  {
    id: "the-story-portraits",
    title: "The Story Portraits",
    tabTitle: "RikVerse Book",
    description: "That doctor told me Frank's got maggots in his arse, Dot! What's Frank doing with maggots in his arse?",
    publishdate: "2011-09-01",
    coverimage: "/images/cover-the-story-portraits.webp",
    blurb: `<p>Rik Roots' <i>The Story Portraits</i> presents a compelling debut collection of micro and short fiction, inviting readers into a diverse array of human experiences, often tinged with the surreal and the subtly unsettling.</p><p>Across settings ranging from an English hospital ward to the vibrant, decaying streets of Havana, Roots crafts narratives that delve into the internal landscapes of his characters. Readers will encounter Frank, grappling with an unusual medical treatment and his family's eccentricities; young Jacob, navigating the complexities of family discord through a striking act of rebellion; and Jack, experiencing a profound, almost detached, post-mortem contemplation.</p><p>The collection skillfully employs varied styles and voices, exploring themes of personal freedom, memory, aging, and the perception of reality, often with an understated wit and a keen eye for the poignant detail. These "story portraits" offer intimate glimpses into moments of vulnerability, epiphany, and quiet defiance, making for an engaging read for those interested in contemporary short-form narrative.</p>`,
    download_epub: "/new-downloads/the-story-portraits.epub",
    download_pdf: "/new-downloads/the-story-portraits.pdf",
    report_link: "/reports/the-story-portraits.md",
    is_chapbook: false,
    reviews: []
  },
  {
    id: "spintrap-the-lonely-city",
    title: "SpinTrap: The Lonely City",
    tabTitle: "RikVerse Book",
    description: "Kal is a man out of his time, out of his depth and - literally - out of his mind",
    publishdate: "2013-06-01",
    coverimage: "/images/cover-spin-trap-the-lonely-city.webp",
    blurb: `<p>Kal is an entity out of his time, out of his depth and &ndash; literally &ndash; out of his mind.</p><p>Pulled once more into the Outer World, Kal finds himself sharing a body with Sam - a modern gay man living his best life in London. Kal's task should be simple: stay hidden and keep an ancient artefact, called the Band, safe. But something is wrong: there are ruthless forces the Outer World hunting for the device. They know Kal exists; they suspect Sam's family is guarding the gem-studded ring. And they hunger for the rumoured immortality it offers to anyone who posesses it.</p><p>Still, it seems like a straightforward mission, until Kal makes an inexplicable, fateful error which reveals his presence to the one person who should never know he exists - the man in whose mind he resides. Forced together against their wills, two people &ndash; one ancient, one modern &ndash; must learn to work together to stay alive, stay hidden and, above all, stay human!</p>`,
    download_epub: "/new-downloads/spintrap-the-lonely-city.epub",
    download_pdf: "/new-downloads/spintrap-the-lonely-city.pdf",
    report_link: "/reports/spintrap-the-lonely-city.md",
    is_chapbook: false,
    reviews: [{
      channel: 'YouTube',
      url: 'https://www.youtube.com/watch?v=04lgJvuJjmU',
      reviewer: 'No Fluff Writing Advice'
    }]
  },
  {
    id: "riks-army-career",
    title: "Rik's Army Career",
    tabTitle: "RikVerse Book",
    description: "In 1988 I, Richard Roots, accidentally collided with the British Army. There were triumphs, and there were tears. There was even some mud involved. This is the story of the seven most scary - yet exciting - weeks (yes, weeks) of my life.",
    publishdate: "2019-12-01",
    coverimage: "/images/cover-riks-army-career.webp",
    blurb: `<p><i>Rik's Army Career</i> offers a unique and disarmingly honest self-narration of a brief yet formative period of military service, specifically June to December 1988. Far from a typical heroic war memoir, Roots presents a granular, often sardonic, account of British Army basic training through the lens of a young man grappling with pre-existing personal eccentricities, emergent self-awareness, and the unexpected clash between his internal world and the rigid external demands of military life. The narrative is fragmented, reflecting the author's own "P Thing" (prosopagnosia)  and selective memory, as well as the disorienting nature of the training itself.</p><p>Readers will find a compelling exploration of identity formation under duress, the subversion of traditional masculinity through unexpected vulnerabilities (such as a fear of water), and the subtle, often absurd, humor found in regimented environments. Roots's prose is marked by its conversational tone, direct address to the reader, and a refreshing lack of romanticism concerning military life, offering instead a raw and unvarnished perspective on a personal "adventure holiday" that ultimately redefined his understanding of self and belonging.</p>`,
    download_epub: "/new-downloads/riks-army-career.epub",
    download_pdf: "/new-downloads/riks-army-career.pdf",
    report_link: "/reports/riks-army-career.md",
    is_chapbook: false,
    reviews: []
  }
];

export default bookData;
