gsap.from("h3",{
    Delay:0.5,
    opacity:1,
    duration:2,
    x:-60
})

gsap.from("h1",{
    Delay:0.5,
    opacity:1,
    duration:2,
    x:60
})

gsap.from("h4",{
    Delay:0.5,
    opacity:1,
    duration:2,
    x:-60
})

gsap.from("p",{
    Delay:0.5,
    opacity:1,
    duration:2,
    x:60
})

gsap.from("img",{
    Delay:0.5,
    opacity:1,
    duration:1,
    x:-60
})

gsap.from("a",{
    Delay:0.5,
    opacity:1,
    duration:1,
    y:-30
})

gsap.from("navbar a",{
    Delay:0.5,
    opacity:1,
    duration:1,
    y:-30
})

gsap.from("h5",{
    Delay:0.5,
    opacity:1,
    duration:1,
    x:60
})

gsap.to(".header", {
    duration: 1,
    opacity: 1,
    y: 0,
    ease: "power4.out"
});

gsap.from("#home",{
    Delay:0.5,
    opacity:1,
    duration:1,
    y:5
})

// Load GSAP
document.addEventListener("DOMContentLoaded", () => {
    // Animate the main container
    gsap.from("#page2", {
        duration: 1.5,
        opacity: 0,
        y: 50,
        ease: "power2.out",
    });

    // Animate headings and subheadings
    gsap.from("#page2 h5", {
        duration: 1,
        opacity: 0,
        x: -100,
        delay: 0.5,
    });

    gsap.from("#page2 h1", {
        duration: 1.2,
        opacity: 0,
        x: 100,
        delay: 0.7,
    });

    gsap.from("#page2 h3", {
        duration: 1,
        opacity: 0,
        y: -50,
        delay: 1,
    });

    gsap.from("#page2 h4", {
        duration: 1,
        opacity: 0,
        stagger: 0.3,
        x: -50,
        delay: 1.2,
    });

    // Animate the lists
    gsap.from("#page2 ul li", {
        duration: 1,
        opacity: 0,
        stagger: 0.2,
        y: 20,
        delay: 1.5,
    });

    // Animate the "About Me" button
    gsap.from("#page2 .about", {
        duration: 1.5,
        opacity: 0,
        scale: 0.8,
        delay: 2,
        ease: "elastic.out(1, 0.5)",
    });
});
