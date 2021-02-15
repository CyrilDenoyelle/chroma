
(() => {

    const vh = window.innerHeight;
    const vw = window.innerWidth;

    // init controller
    var controller = new ScrollMagic.Controller({ globalSceneOptions: { triggerHook: 0.5 } });

    const globalPageDuration = 2;
    const offset = page => (page * (1 + globalPageDuration)) * vh // calcul de l'offset d'une page par rappor a la "duree" (en pixels) de chaque scene

    const apply = (p) => {
        p.forEach((page, i) => { // chaque page est constituee de plusieurs scenes

            // toute les pages on une scene de setPin inclu, qui permet de rester devant la page le temps que toute les animations se jouent
            new ScrollMagic.Scene({
                offset: offset(i),
                duration: globalPageDuration * vh
            })
            .setPin(`#page${i}`)
            .addTo(controller);

            page.forEach(scnOpt => { // pour chaque option de scene de cette page
                const scene = new ScrollMagic.Scene({ // on prepare une scene set a l'endroit de la page (qui commence en meme temps que la page s'arrete)
                    offset: offset(i),
                    duration: globalPageDuration * vh
                });

                Object.keys(scnOpt) // on applique chaque option
                    .forEach(option => {
                        scene[option](...scnOpt[option]);
                    });

                scene.addTo(controller);
            });
        });
    }

    const pages = [
        [
            /// PAGE 0 ///
            // le village en fond qui se dezoom
            { setTween: [TweenMax.from('#background', { scale: 1.05, ease: Power2.easeInOut })] },
            // contour qui s'ouvre pour laisser voir le village
            { setTween: ['#parallax1', { scale: 1.45, ease: Power2.easeInOut }] }
        ],
        [
            /// PAGE 1 ///
            // test-plan3 (la montagne en fond) part en bas (y) et a gauche (x) de 2%
            { setTween: ['#test-plan3', { x: '-2%', y: '2%', ease: Power2.easeInOut }] },
            // test-plan2 (le personnage) a gauche (x) de 5%
            { setTween: ['#test-plan2', { x: '-5%', ease: Power2.easeInOut }] },
            // test-plan1 (le personnage) a droite (x) de 10%
            { setTween: ['#test-plan1', { x: '10%', ease: Power2.easeInOut }] }
        ],
        [
            /// PAGE 2 ///
            // moulin-background grandi de 1 scale a 1.05 et de 2% a gauche
            { setTween: [TweenMax.to('#moulin-background', { scale: 1.05, x: '-3%', ease: Power2.easeInOut })] },
            // moulin-2plan (le moulin) grandi de 1 de scale a 1.05 et de 10% a gauche
            { setTween: [TweenMax.fromTo('#moulin-2plan', { scale: 1, x: '-2%', ease: Power1.easeInOut }, { scale: 1.05, x: '-15%', ease: Power1.easeInOut })] },
            // moulin-1plan (la cycliste) bouge de 15% a droite
            { setTween: ['#moulin-1plan', { x: '15%', ease: Power1.easeInOut }] }
        ],
        // [
        //     /// PAGE 3 ///
        //     // le village en fond qui se dezoom
        //     { setTween: ['#parallax2', { scale: 1.45, ease: Power2.easeInOut }] },
        //     // contour qui s'ouvre pour laisser voir le village
        //     { setTween: [TweenMax.fromTo('#background2', { scale: 1.05, ease: Power2.easeInOut }, { scale: 1 })] }
        // ],
    ];

    apply(pages);

    const papillonFlightPath = {
        curviness: 1.5,
        autoRotate: true,
        values: [
            {x: 100, y:-20},
            {x: 300, y: 10},
            {x: 500, y: 100},
            {x: 750, y: -100},
        ]
    }

    const tween = new TimelineLite();

    
    tween.add(
        // TweenMax.to("#test-papillon", 1.2, {
        //     css: { bezier: papillonFlightPath },
        //     ease: Power1.easeInOut
        // })
        TweenLite.to("#test-papillon", 1.2, {
            bezier: papillonFlightPath,
            ease: Power1.easeInOut
        })
    );

    // tween.to(".paper-plane", {
    //     duration: 1,
    //     ease: "power1.inOut",
    //     motionPath: {
    //       path: [{x: 100, y: -20}], // you probably want more points here...or just use an SVG <path>!
    //       curviness: 2,
    //       autoRotate: true
    //     }
    //   }

    new ScrollMagic.Scene({
        offset: offset(3),
        duration: globalPageDuration * vh
    })
    .setPin(`#page3`)
    .addIndicators()
    .addTo(controller);
    // setTween: ['#parallax2', { scale: 1.45, ease: Power2.easeInOut }]

    new ScrollMagic.Scene({
        offset: offset(3),
        duration: globalPageDuration * vh
    })
    .setTween('#parallax2', { scale: 1.45, ease: Power2.easeInOut })
    .addTo(controller);

    new ScrollMagic.Scene({
        offset: offset(3),
        duration: globalPageDuration * vh
    })
    .setTween(tween)
    .addTo(controller);

    new ScrollMagic.Scene({
        offset: offset(3),
        duration: globalPageDuration * vh
    })
    .setTween(TweenMax.fromTo('#background2', { scale: 1.05, ease: Power2.easeInOut }, { scale: 1 }))
    .addTo(controller);

})()
