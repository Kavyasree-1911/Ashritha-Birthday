(() => {

const text = `

Happy Birthday My Dearest Ashuuuu ❤️,

Today isn't just another day.
It's the day the world became brighter because you were born.
Thank you for all the smiles,
the laughter,
the kindness,
and the beautiful memories.

You deserve endless happiness,
good health,
success,
and every dream coming true.
I hope this little surprise made you smile,
even if only for a moment.Navvave babu......chaala kastapadda.
Never stop smiling,
because your smile makes the world a little more beautiful.
konchem ekkuva anipisthundha...
but still thakkuve anipisthundhee na prema mundhuu...

🎂 Happy Birthday Once Again ❤️

With lots of love,
Kavyaa❤️

`;

const typing = document.getElementById("typingText");
const finalBtn = document.getElementById("finalBtn");

let i = 0;

function typeWriter(){

    if(i < text.length){

        typing.innerHTML += text.charAt(i);
        i++;

        setTimeout(typeWriter, 25);

    } else {

        gsap.to(finalBtn, {
            opacity: 1,
            duration: 1
        });

    }

}

function startLetter(){

    showScreen("letterPage");

    typing.innerHTML = "";
    i = 0;

    setTimeout(typeWriter, 500);

}


finalBtn.onclick = () => {
    showScreen("endingPage");
    showScreen("endingPage");

gsap.from("#endingTitle",{

    y:-80,
    opacity:0,
    duration:1.5

});
};
window.startLetter = startLetter;
})();