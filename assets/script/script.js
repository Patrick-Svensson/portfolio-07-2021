/* ****** Variables ****** */

const myselfImage = document.querySelector(".o-myself__img-container");
const modal = document.querySelector(".o-modal-container");
const closeButton = document.querySelector(".c-modal__X-wrapper");
const page = document.querySelector(".page");
const projectsHeading = document.querySelector(".c-modal__heading");

let cardIndex = 0;
let projects = [];

/* ****** Show/Hide Scroll Down Icon ****** */

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        document.querySelector(".c-scroll-icon-container").classList.add("scrollIcon");
    } else {
        document.querySelector(".c-scroll-icon-container").classList.remove("scrollIcon");
    }
});

/* ****** Testamonial Carousel ****** */

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
    setTimeout(showTestCards, 10000);
}

showTestCards();

/* ****** Toggle Myself Images ****** */

myselfImage.addEventListener("mouseover", () => {
    document.querySelector(".o-img__myself").classList.add("o-img__myself--hide");
    document.querySelector(".o-img__flicka").classList.add("o-img__flicka--show");
});

myselfImage.addEventListener("mouseleave", () => {
    document.querySelector(".o-img__myself").classList.remove("o-img__myself--hide");
    document.querySelector(".o-img__flicka").classList.remove("o-img__flicka--show");
});

// ***** Projects Modal *****

fetch("assets/script/projects.json")
    .then((res) => {
        return res.json();
    })
    .then((loadedProjects) => {
        projects = loadedProjects;
        // console.log(projects[2].projectNumber);
    });

function projectImgId(clicked) {
    // console.log(clicked);
    if (clicked == projects[6].projectNumber) {
        modal.classList.toggle("activateModalContainer");
        projectsHeading.innerText = `bhromaon`;
    }
}

closeButton.addEventListener("click", () => {
    modal.classList.toggle("activateModalContainer");
});

page.addEventListener("click", function (closeModal) {
    if (closeModal.target === modal) {
        modal.classList.toggle("activateModalContainer");
    }
});
