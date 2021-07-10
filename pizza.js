
document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();

    let timeline = new TimelineMax();
    timeline
    .from('.section_1_01', 4, {
        y: -30,
        x: -100,
        ease: Power3.easeInOut
    })
    .from('.section_1_02', 4, {
        y: -50,
        x: -200,
        ease: Power3.easeInOut
    }, '-=4')
  /*rice*/
    .from('.section_1_03', 4, {
        y: -30,
        x: -80,
        ease: Power3.easeInOut
    }, '-=4')
    /*pepper*/
    .from('.section_1_04', 4, {
        y: -80,
        x: -120,
        ease: Power3.easeInOut
    }, '-=4')
    /*garlic*/
    .from('.section_1_05', 4, {
        y: -50,
        x: -120,
        ease: Power3.easeInOut
    }, '-=4')
  /*spice*/
    .from('.section_1_06', 4, {
        y: 20,
        x: -200,
        ease: Power3.easeInOut
    }, '-=4')
   /*green*/
    .from('.section_1_07', 4, {
        y: 20,
        x: -100,
        ease: Power3.easeInOut
    }, '-=4')
  /*tomato*/
    .from('.section_1_08', 4, {
        y: 50,
        x: -180,
        ease: Power3.easeInOut
    }, '-=4')
   /*cheese*/
    .from('.section_1_09', 4, {
        y: 40,
        x: -100,
        ease: Power3.easeInOut
    }, '-=4')

    let scene = new ScrollMagic.Scene({
        triggerElement: '.first-section',
        duration: '100%',
        triggerHook: 0,
        offset: 0
    })
    .setTween(timeline)
    .setPin('.first-section')
    .addTo(controller);
/*second */
  
    let timeline2 = new TimelineMax();
    timeline2
    .to('.top .image-container', 4, {
        height: 0
    });

    let scene2 = new ScrollMagic.Scene({
        triggerElement: '.second-section',
        duration: '100%',
        triggerHook: 0,
        offset: '100'
    })
    .setTween(timeline2)
    .setPin('.second-section')
    .addTo(controller);

  /*third*/
    let timeline3 = new TimelineMax();
    timeline3
    .to('.section_3_01', 4, {
        y: -180,
        ease: Power3.easeInOut
    })
    .to('.section_3_02', 4, {
        y: -100,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_3_03', 4, {
        y: -50,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_3_04', 4, {
        y: 0,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_3_05', 4, {
        y: 100,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_3_06', 4, {
        y: 180,
        ease: Power3.easeInOut
    }, '-=4')

    let scene3 = new ScrollMagic.Scene({
        triggerElement: '.third-section',
        duration: '100%',
        triggerHook: 0,
        offset: '60'
    })
    .setTween(timeline3)
    .setPin('.third-section')
    .addTo(controller);

    let timeline4 = new TimelineMax();
    timeline4
    .to('.section_4_01', 4, {
        autoAlpha: 0
    })
  
    .from('.section_4_02', 5, {
        autoAlpha: 0
    }, '-=4')
    .from('.section_4_03', 8, {
        autoAlpha: 0
    })
    .from('.section_4_04', 8, {
        autoAlpha: 0
    })

    let scene4 = new ScrollMagic.Scene({
        triggerElement: '.forth-section',
        duration: '100%',
        triggerHook: 0,
        offset: '150'
    })
    .setTween(timeline4)
    .setPin('.forth-section')
    .addTo(controller);

})
