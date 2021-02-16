
(() => {


    const vh = window.innerHeight;
    const vw = window.innerWidth;

    const globalPageDuration = 2;
    const offset = page => (page * (1 + globalPageDuration)) * vh // calcul de l'offset d'une page par rappor a la 'duree' (en pixels) de chaque scene

    const apply = (p) => {
        p.forEach((pageOptions, i) => { // chaque page est constituee d'un timeline
            // toute les pages on un pin inclu, qui permet de rester devant la page le temps que toute les animations se jouent
            const tl = gsap.timeline({
                defaults: {
                    duration: globalPageDuration
                }
            });

            pageOptions.forEach(opt => { // pour chaque option de scene de cette page
                Object.keys(opt) // on applique chaque option
                    .forEach(option => {
                        tl[option](...opt[option], '<');
                    });
            });

            ScrollTrigger.create({
                animation: tl,
                trigger: `#page${i}`,
                pin: true,
                start: 'top top',
                scrub: .5,
                end: () => `+=${globalPageDuration * vh}`,
                markers: true
            })
        });
    }

    var pages = [
        [
            /// PAGE 0 ///
            // le village en fond qui se dezoom
            { to: ['#parallax1', { scale: 1.45, ease: Power2.easeInOut }] },
            // contour qui s'ouvre pour laisser voir le village
            { fromTo: ['#background', { scale: 1.05, ease: Power2.easeInOut }, { scale: 1 }] }
        ],
        [
            /// PAGE 1 ///
            // test-plan3 (la montagne en fond) part en bas (y) et a gauche (x) de 2%
            { to: ['#test-plan3', { x: '-2%', y: '2%', ease: Power2.easeInOut }] },
            // test-plan2 (le personnage) a gauche (x) de 5%
            { to: ['#test-plan2', { x: '-5%', ease: Power2.easeInOut }] },
            // test-plan1 (le personnage) a droite (x) de 10%
            { to: ['#test-plan1', { x: '10%', ease: Power2.easeInOut }] }
        ],
        [
            /// PAGE 2 ///
            // moulin-background grandi de 1 scale a 1.05 et de 2% a gauche
            { to: ['#moulin-background', { scale: 1.05, x: '-3%', ease: Power2.easeInOut }] },
            // moulin-2plan (le moulin) grandi de 1 de scale a 1.05 et de 10% a gauche
            { fromTo: ['#moulin-2plan', { scale: 1, x: '-2%', ease: Power1.easeInOut }, { scale: 1.05, x: '-15%', ease: Power1.easeInOut }] },
            // moulin-1plan (la cycliste) bouge de 15% a droite
            { to: ['#moulin-1plan', { x: '15%', ease: Power1.easeInOut }] }
        ],
        [
            /// PAGE 3 ///
            // le village en fond qui se dezoom
            { to: ['#parallax2', { scale: 1.45, ease: Power2.easeInOut }] },
            // contour qui s'ouvre pour laisser voir le village
            { fromTo: ['#background2', { scale: 1.05, ease: Power2.easeInOut }, { scale: 1 }] }
        ],
    ];

    apply(pages);

})()
