document.addEventListener("DOMContentLoaded", function () {
    console.log("GSAP Loaded:", typeof gsap !== "undefined");

    gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

    gsap.from(".header h1, .header p, .cta-btn", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out"
    });

    gsap.from(".about-us, .our-services", {
        opacity: 0,
        y: 50,
        duration: 1.5,
        stagger: 0.5,
        scrollTrigger: {
            trigger: ".about-us",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
});
