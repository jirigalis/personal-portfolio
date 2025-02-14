// Register SlowMo plugin
gsap.registerPlugin(SlowMo);

// Animation code
document.querySelectorAll('.button--bubble').forEach((button) => {
    const parent = button.closest('.button--bubble__container');
    if (!parent) return;

    const circlesTopLeft = parent.querySelectorAll('.circle.top-left');
    const circlesBottomRight = parent.querySelectorAll('.circle.bottom-right');
    const effectButton = parent.querySelector('.button.effect-button');

    const tl = gsap.timeline();
    const tl2 = gsap.timeline();
    const btTl = gsap.timeline({ paused: true });

    tl.to(circlesTopLeft, {
        duration: 1.2,
        x: -25,
        y: -25,
        scaleY: 2,
        ease: SlowMo.ease.config(0.1, 0.7, false),
    })
        .to(circlesTopLeft[0], { duration: 0.1, scale: 0.2, x: '+=6', y: '-=2' })
        .to(circlesTopLeft[1], { duration: 0.1, scaleX: 1, scaleY: 0.8, x: '-=10', y: '-=7' }, '-=0.1')
        .to(circlesTopLeft[2], { duration: 0.1, scale: 0.2, x: '-=15', y: '+=6' }, '-=0.1')
        .to(circlesTopLeft[0], { duration: 1, scale: 0, x: '-=5', y: '-=15', opacity: 0 })
        .to(circlesTopLeft[1], { duration: 1, scaleX: 0.4, scaleY: 0.4, x: '-=10', y: '-=10', opacity: 0 }, '-=1')
        .to(circlesTopLeft[2], { duration: 1, scale: 0, x: '-=15', y: '+=5', opacity: 0 }, '-=1');

    tl2.set(circlesBottomRight, { x: 0, y: 0 })
        .to(circlesBottomRight, {
            duration: 1.1,
            x: 30,
            y: 30,
            ease: SlowMo.ease.config(0.1, 0.7, false),
        })
        .to(circlesBottomRight[0], { duration: 0.1, scale: 0.2, x: '-=6', y: '+=3' })
        .to(circlesBottomRight[1], { duration: 0.1, scale: 0.8, x: '+=7', y: '+=3' }, '-=0.1')
        .to(circlesBottomRight[2], { duration: 0.1, scale: 0.2, x: '+=15', y: '-=6' }, '-=0.2')
        .to(circlesBottomRight[0], { duration: 1, scale: 0, x: '+=5', y: '+=15', opacity: 0 })
        .to(circlesBottomRight[1], { duration: 1, scale: 0.4, x: '+=7', y: '+=7', opacity: 0 }, '-=1')
        .to(circlesBottomRight[2], { duration: 1, scale: 0, x: '+=15', y: '-=5', opacity: 0 }, '-=1');

    btTl.add(tl)
        .to(effectButton, { duration: 0.8, scaleY: 1.1 }, 0.1)
        .add(tl2, 0.2)
        .to(effectButton, { duration: 1.8, scale: 1, ease: Elastic.easeOut.config(1.2, 0.4) }, 1.2);

    btTl.timeScale(2.6);

    button.addEventListener('mouseover', () => {
        btTl.restart();
    });
});