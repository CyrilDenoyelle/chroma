
(()=>{
    const vh = window.innerHeight;
    const vw = window.innerWidth;

    // init controller
    var controller = new ScrollMagic.Controller({ globalSceneOptions: { triggerHook: 0.5 } });

    const global_duration = 1;
    const offset = p => (p * (1 + global_duration)) * vh

    let pageIndex = 0;


	/////////////////////////// PAGE 1 ///////////////////////////
	new ScrollMagic.Scene({
        offset: offset(pageIndex),
        duration: global_duration*vh
    })
    .setPin("#page1")
    // .addIndicators()
    .addTo(controller);

    // const tween1 = TweenMax.to("#parallax1", 5, { scale: 1.5, ease: Power2.easeIn });
	new ScrollMagic.Scene({
        offset: offset(pageIndex),
        duration: global_duration*vh
    })
    .setTween("#parallax1", { scale: 1.5, ease: Power3.easeIn })
    // .setTween(tween1)
    // .tweenChanges(false)
    .addTo(controller);

	new ScrollMagic.Scene({
        offset: offset(pageIndex),
        duration: global_duration*vh
    })
    .setTween("#background", 2, { scale: .95 })
    .addTo(controller);


	/////////////////////////// PAGE 2 ///////////////////////////
    pageIndex += 1;
	new ScrollMagic.Scene({
        offset: offset(pageIndex),
        duration: global_duration*vh
    })
    .setPin("#page2")
    .addIndicators()
    .addTo(controller);

	new ScrollMagic.Scene({
        offset: offset(pageIndex),
        // offset: offset(pageIndex)-.25*vh,
        duration: global_duration*vh + .5*vh
    })
    .setTween("#plan3", { x: "-2%", y: "2%" })
    .addIndicators()
    .addTo(controller);

	new ScrollMagic.Scene({
        offset: offset(pageIndex),
        // offset: offset(pageIndex)-.25*vh,
        duration: global_duration*vh + .5*vh
    })
    .setTween("#plan2", 2, { x: "-5%" })
    .addTo(controller);

	new ScrollMagic.Scene({
        offset: offset(pageIndex),
        // offset: offset(pageIndex)-.25*vh,
        duration: global_duration*vh + .5*vh
    })
    .setTween("#plan1", 2, { x: "15%" })
    .addTo(controller);


	/////////////////////////// PAGE 3 ///////////////////////////
    pageIndex += 1;
	new ScrollMagic.Scene({
        offset: offset(pageIndex),
        duration: global_duration*vh
    })
    .setPin("#page3")
    // .addIndicators()
    .addTo(controller);

	new ScrollMagic.Scene({
        offset: offset(pageIndex),
        duration: global_duration*vh
    })
    .setTween("#parallax2", 2, { scale: 1.5 })
    .addTo(controller);

	new ScrollMagic.Scene({
        offset: offset(pageIndex),
        duration: global_duration*vh
    })
    .setTween("#background2", 2, { scale: .95 })
    .addTo(controller);

})()
