/* ****** Scroll Down Icon ****** */

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        document.querySelector(".c-scroll-icon").classList.add("scrollIcon");
    } else {
        document.querySelector(".c-scroll-icon").classList.remove("scrollIcon");
    }
});

/* ****** Testamonial Carousel ****** */

let cardIndex = 0;

function showTestCards() {
    let i;
    const cards = document.getElementsByClassName("testamonialCards");
    const dots = document.getElementsByClassName("c-test-carousel__dot");
    for (i = 0; i < cards.length; i++) {
        cards[i].style.display = "none";
    }
    cardIndex++;
    if (cardIndex > cards.length) {
        cardIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activeDot", "");
    }
    cards[cardIndex - 1].style.display = "flex";
    dots[cardIndex - 1].className += " activeDot";
    setTimeout(showTestCards, 5000);
}

showTestCards();
