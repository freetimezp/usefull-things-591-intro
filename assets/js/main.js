window.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(InertiaPlugin);

    let oldX = 0,
        oldY = 0,
        displacedX = 0,
        displacedY = 0;
    speed = 100;

    document.addEventListener("mousemove", (e) => {
        displacedX = e.clientX - oldX;
        displacedY = e.clientY - oldY;
        oldX = e.clientX;
        oldY = e.clientY;
    });

    document.querySelectorAll(".image").forEach((el) => {
        el.addEventListener("mouseenter", () => {
            const tl = gsap.timeline({});

            const image = el.querySelector("img");

            tl.to(image, {
                inertia: {
                    x: { velocity: displacedX * speed, end: 0 },
                    y: { velocity: displacedY * speed, end: 0 },
                },
            });
        });
    });
});
