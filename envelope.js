/*=========================================
        ENVELOPE
=========================================*/

const envelope = document.querySelector(".envelope");

const flap = document.querySelector(".envelopeTop");

const letter = document.querySelector(".letter");

const clickText = document.querySelector(".clickText");

envelope.addEventListener("click", () => {

    clickText.style.display = "none";

    gsap.to(flap, {

        rotateX: 180,

        duration: 0.8

    });

    gsap.to(letter, {

        y: -160,

        duration: 0.8,

        delay: 0.3

    });

    setTimeout(() => {

        showScreen("pinPage");

        gsap.from(".pinCard", {

            scale: 0.6,

            opacity: 0,

            duration: 0.8

        });

    }, 1600);

});