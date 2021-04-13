
(() => {

    gsap.registerPlugin(MotionPathPlugin);
    gsap.registerPlugin(ScrollToPlugin);

    const vh = window.innerHeight;
    const vw = window.innerWidth;
    const deductedPageWidth = vh * (16 / 9);
    const deductedPageHeight = vw * (9 / 16);
    const aspectRatio = vh / vw;
    const deductedWidthMissingProportion = deductedPageWidth - vw;
    const deductedHeightMissingProportion = deductedPageHeight - vh;

    const globalPageDuration = 1.5;

    var pagesAnnimations = [
        [
            /// PAGE 0 ///
            {
                timeLineStr: '<',
                animations: [
                    // le village en fond qui se dezoom
                    { f: 'to', options: ['#parallax', { scale: 1.45, ease: Power2.easeInOut }] },
                    // contour qui s'ouvre pour laisser voir le village
                    { f: 'fromTo', options: ['#background', { scale: 1.05, ease: Power2.easeInOut }, { scale: 1 }] },
                    // Le titre arrive d'en haut en fadeIn et en grossissant
                    { f: 'fromTo', options: ['#title', { opacity: 0 }, { scale: 10.45, y: `${vh / 2}`, ease: Power2.easeInOut, opacity: 1 }] },
                ]
            }
        ],
        /// PAGE 1 ///
        [
            {
                timeLineStr: '<',
                animations: [
                    // test-plan3 (la montagne en fond) part en bas (y) et a gauche (x) de 2%
                    { f: 'to', options: ['#test-plan3', { x: '-2%', y: '2%', ease: Power2.easeInOut }] },
                    // test-plan2 (le personnage) a gauche (x) de 5%
                    { f: 'to', options: ['#test-plan2', { x: '-5%', ease: Power2.easeInOut }] },
                    // test-plan1 (le personnage) a droite (x) de 10%
                    { f: 'to', options: ['#test-plan1', { x: '10%', ease: Power2.easeInOut }] },
                ]
            }
        ],
        [
            /// PAGE 2 ///
            {
                timeLineStr: 's-e--',
                animations: [
                    // moulin-background grandi de 1 scale a 1.05 et de 2% a gauche
                    { f: 'to', options: ['#moulin-background1', { scale: 1.05, x: '-3%', ease: Power2.easeInOut }] },
                    // moulin-2plan (le moulin) grandi de 1 de scale a 1.05 et de 10% a gauche
                    { f: 'fromTo', options: ['#moulin-2plan1', { scale: 1, x: '-2%', ease: Power1.easeInOut }, { scale: 1.05, x: '-15%', ease: Power1.easeInOut }] },
                    // moulin-1plan (la cycliste) bouge de 15% a droite
                    { f: 'to', options: ['#moulin-1plan1', { x: '15%', ease: Power1.easeInOut }] },
                ]
            },
            {
                timeLineStr: '-s-e-',
                animations: [
                    // moulin-background grandi de 1 scale a 1.05 et de 2% a gauche
                    { f: 'to', options: ['#moulin-background2', { scale: 1.05, x: '-3%', ease: Power2.easeInOut }] },
                    // moulin-2plan (le moulin) grandi de 1 de scale a 1.05 et de 10% a gauche
                    { f: 'fromTo', options: ['#moulin-2plan2', { scale: 1, x: '-2%', ease: Power1.easeInOut }, { scale: 1.05, x: '-15%', ease: Power1.easeInOut }] },
                    // moulin-1plan (la cycliste) bouge de 15% a droite
                    { f: 'to', options: ['#moulin-1plan2', { x: '15%', ease: Power1.easeInOut }] },
                ]
            },
            {
                timeLineStr: '--s-e',
                animations: [
                    // moulin-background grandi de 1 scale a 1.05 et de 2% a gauche
                    { f: 'to', options: ['#moulin-background3', { scale: 1.05, x: '-3%', ease: Power2.easeInOut }] },
                    // moulin-2plan (le moulin) grandi de 1 de scale a 1.05 et de 10% a gauche
                    { f: 'fromTo', options: ['#moulin-2plan3', { scale: 1, x: '-2%', ease: Power1.easeInOut }, { scale: 1.05, x: '-15%', ease: Power1.easeInOut }] },
                    // moulin-1plan (la cycliste) bouge de 15% a droite
                    { f: 'to', options: ['#moulin-1plan3', { x: '15%', ease: Power1.easeInOut }] },
                ]
            }
        ],
        [
            /// PAGE 3 ///
            {
                timeLineStr: '<',
                animations: [
                    // le village en fond qui se dezoom
                    { f: 'to', options: ['#parallaxDroite2', { scale: 1.45, ease: Power2.easeInOut }] },
                    { f: 'to', options: ['#parallaxGauche2', { scale: 1.45, ease: Power2.easeInOut }] },
                    // contour qui s'ouvre pour laisser voir le village
                    { f: 'fromTo', options: ['#background3', { scale: 1.05, ease: Power2.easeInOut }, { scale: 1 }] },
                    // le papillon suis un path en csv
                    {
                        f: 'to', options: [
                            "#test-papillon",
                            {
                                scale: 0,
                                motionPath: {
                                    alignOrigin: [0.5, 0.5],
                                    curviness: 1,
                                    autoRotate: false,
                                    align: "self",
                                    path: "M-6.74,164.645 C0.258,145.639 59.224,76.583 132.227,75.589 207.239,75.589 228.086,128.706 254.086,156.716 287.084,190.71 320.015,202.904 369.015,202.904 456.015,202.904 490.244,154.113 497.244,131.118 "
                                }
                            }
                        ]
                    },
                ]
            }
        ],
        [
            /// PAGE 4 ///
            {
                timeLineStr: '<',
                animations: [
                    ///Le petit nuage qui se deplace vers la droite
                    { f: 'to', options: ['#nuage-2plan', { x: '100%', ease: Power1.easeInOut }] },
                    ///Le grand nuage qui se deplace vers la droite
                    { f: 'to', options: ['#nuage-1plan', { x: '150%', ease: Power1.easeInOut }] },
                ]
            }
        ],
    ];

    const screens = document.querySelectorAll('.screen');

    screens.forEach((screen, i) => {

        // CSS apply
        const page = document.getElementById(`page${i}`);
        const pageStyle = page.getAttribute('style')
        const rationStyle = aspectRatio - 9 / 16 > 0
            ? `width: ${vw + deductedWidthMissingProportion}px`
            : `height: ${vh + deductedHeightMissingProportion}px`

        page.setAttribute(
            'style',
            `${pageStyle ? pageStyle + ';' : ''}${rationStyle}`
        );

        // SUBTITLES
        // filtre les screens qui ont des sous-titre
        const subtitles = [...screen.childNodes].filter(el => el.className === 'subtitle');

        if (subtitles.length) {
            const subtitlesTl = gsap.timeline({
                defaults: {
                    duration: globalPageDuration
                }
            });

            subtitles.forEach((s, sIndex) => {
                // appliquer les animation d'apparition et de disparition a chaque sous-titre
                // const delay = sIndex === 0 ? `+=${globalPageDuration / 4}` : null; // ajouter un delay sur le premier
                subtitlesTl.from(s, { opacity: 0, ease: Power4.easeOut });
                subtitlesTl.to(s, { opacity: 0, ease: Power4.easeIn });
            });

            ScrollTrigger.create({
                animation: subtitlesTl,
                trigger: `#page${i}`,
                start: 'top top',
                scrub: .5,
                end: () => `+=${(globalPageDuration * vh) * (subtitles.length ? subtitles.length : 1)}`
            });
            // SUBTITLES END
        }

        // ANIMATIONS
        // chaque screen est constituee d'un timeline
        const totalTimelineDuration = globalPageDuration * (subtitles.length ? subtitles.length : 1)
        const animationTl = gsap.timeline({ duration: totalTimelineDuration });

        const opt = aspectRatio - 9 / 16 > 0
            ? { x: -deductedWidthMissingProportion }
            : { y: -deductedHeightMissingProportion }
        opt.duration = totalTimelineDuration;
        opt.ease = Power2.easeInOut;
        animationTl.to(`#page${i}`, opt, '<')

        pagesAnnimations[i].forEach(({ timeLineStr, animations }) => { // pour chaque option de scene de cette screen

            const [delay, duration] = timeLineStr === '<' || timeLineStr === '>'
                ? [timeLineStr]
                : timeLineStr.split(/s|e/g)
                    .map(proportion => totalTimelineDuration * (proportion.length / (timeLineStr.length - 2)));

            animations.forEach(({ f, options }) => {
                options[options.length - 1] = {
                    ...options[options.length - 1],
                    duration: duration || totalTimelineDuration
                }

                try {
                    animationTl[f](...options, delay);
                } catch (error) {
                    console.log(`%c"animationTl[${option}]" n'existe pas`, 'color: red');
                }
            });
        });

        ScrollTrigger.create({
            animation: animationTl,
            trigger: `#screen${i}`,
            pin: true, // toute les screens ont un pin inclu, qui permet de rester devant la screen le temps que toute les animations se jouent
            start: 'top top',
            scrub: .5,
            end: () => `+=${(globalPageDuration * vh) * (subtitles.length ? subtitles.length : 1)}`,
            // quand on arrive a la fin de l'annimation on passe a la screen suivante
            // onLeave: () => scrollToPage(i + 1),
            // quand on arrive au debut de l'annimation on revient a la screen precedente
            // onLeaveBack: () => scrollToPage(i - 1),
            // markers: true
        });
        // ANIMATIONS END

    });

})()
