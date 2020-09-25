const mySwiper = new Swiper(".swiper-container", {
    speed: 400,
    spaceBetween: 100,
    loop: false,
    a11y: {
        prevSlideMessage: 'Previous image',
        nextSlideMessage: 'Next image',
        firstSlideMessage: 'This is the first image',
        lastSlideMessage: 'This is the last image',
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});

//leaves emoji physics
const { styler, spring, listen, pointer, value } = window.popmotion;

const leaves = document.querySelector('.leaves');
const divStyler = styler(leaves);
const leavesXY = value({ x: 0, y: 0 }, divStyler.set);

listen(leaves, 'mousedown touchstart')
    .start((e) => {
        e.preventDefault();
        pointer(leavesXY.get()).start(leavesXY);
    });

listen(document, 'mouseup touchend')
    .start(() => {
        spring({
            from: leavesXY.get(),
            velocity: leavesXY.getVelocity(),
            to: { x: 0, y: 0 },
            stiffness: 200,
            mass: 5,
            // damping: 10
        }).start(leavesXY);
    });