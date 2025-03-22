// script.js

document.addEventListener("DOMContentLoaded", function () {
    VANTA.DOTS({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 400.00,
        minWidth: 400.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xffffff,
        color2: 0xffffff,
        backgroundColor: "transparent",
        size: 6.5,
        spacing: 35.00,
        showLines: true
    });

    function fadeInOnScroll(selector) {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el) => {
            const top = el.getBoundingClientRect().top;
            if (top < window.innerHeight - 50) {
                el.classList.add("visible");
            }
        });
    }
    document.addEventListener("DOMContentLoaded", function () {
        const featureCards = document.querySelectorAll(".feature-card");
    
        function fadeInOnScroll() {
            featureCards.forEach((card) => {
                const cardTop = card.getBoundingClientRect().top;
                if (cardTop < window.innerHeight - 50) {
                    card.classList.add("visible");
                }
            });
        }
    
        window.addEventListener("scroll", fadeInOnScroll);
        fadeInOnScroll();
    });

    function handleScrollFade() {
        fadeInOnScroll(".feature-card");
        fadeInOnScroll(".step");
        fadeInOnScroll(".template-card");
    }

    window.addEventListener("scroll", handleScrollFade);
    handleScrollFade();
});

