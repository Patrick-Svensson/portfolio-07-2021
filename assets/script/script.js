/* ****** Variables ****** */

const scrollDownText = document.querySelector(".c-scroll-symbol-container--down");
const scrollUpText = document.querySelector(".c-scroll-symbol-container--up");
const myselfImage = document.querySelector(".o-myself__img-container");
const modal = document.querySelector(".o-modal-container");
const closeButton = document.querySelector(".c-modal__X-wrapper");
const page = document.querySelector(".page");
const projectsHeading = document.querySelector(".c-modal__heading");
const projectsImage = document.querySelector(".c-modal__img");
const projectsDescription = document.querySelector(".c-modal__text");
const projectslink1 = document.querySelector(".modalLink1");
const projectslink2 = document.querySelector(".modalLink2");

let cardIndex = 1;
let projects = [];

/* ****** Show/Hide Scroll Down Symbol ****** */

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        document.querySelector(".c-scroll-symbol-container--down").classList.add("hideElement");
    } else {
        document.querySelector(".c-scroll-symbol-container--down").classList.remove("hideElement");
    }
});

/* ****** Show/Hide Scroll Up Symbol ****** */

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 700) {
        document.querySelector(".c-scroll-symbol-container--up").classList.add("showElement");
    } else {
        document.querySelector(".c-scroll-symbol-container--up").classList.remove("showElement");
    }
});

/* ****** Show/Hide Scroll Navigation Text ****** */

scrollDownText.addEventListener("mouseover", () => {
    document.querySelector(".c-scroll__text--down").classList.add("showElement");
});

scrollDownText.addEventListener("mouseleave", () => {
    document.querySelector(".c-scroll__text--down").classList.remove("showElement");
});

scrollUpText.addEventListener("mouseover", () => {
    document.querySelector(".c-scroll__text--up").classList.add("showElement");
});

scrollUpText.addEventListener("mouseleave", () => {
    document.querySelector(".c-scroll__text--up").classList.remove("showElement");
});

/* ****** Testimonial Carousel ****** */

function slideTestCards(num) {
    showTestCards((cardIndex += num));
}

function showTestCards(num) {
    var i;
    var cards = document.getElementsByClassName("testimonialCards");
    var dots = document.getElementsByClassName("c-test-carousel__dot");
    if (num > cards.length) {
        cardIndex = 1;
    }
    if (num < 1) {
        cardIndex = cards.length;
    }
    for (i = 0; i < cards.length; i++) {
        cards[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activeDot", "");
    }
    cards[cardIndex - 1].style.display = "flex";
    dots[cardIndex - 1].className += " activeDot";
}

showTestCards(cardIndex);

/* ****** Toggle Myself Images ****** */

myselfImage.addEventListener("mouseover", () => {
    document.querySelector(".o-img__myself").classList.add("o-img__myself--hide");
    document.querySelector(".o-img__flicka").classList.add("o-img__flicka--show");
});

myselfImage.addEventListener("mouseleave", () => {
    document.querySelector(".o-img__myself").classList.remove("o-img__myself--hide");
    document.querySelector(".o-img__flicka").classList.remove("o-img__flicka--show");
});

// ***** Get Data from .json File *****

fetch("assets/script/projects.json")
    .then((res) => {
        return res.json();
    })

    // ***** Transfer Data into Array *****

    .then((loadedProjects) => {
        projects = loadedProjects;
    });

// ***** Toggle Projects Modal *****

function projectImgId(clicked) {
    projects.forEach(function (project) {
        if (clicked == project.projectNumber) {
            modal.classList.toggle("activateModalContainer");
            projectsHeading.innerText = ` ${project.heading}`;
            projectsDescription.innerText = ` ${project.description}`;
            projectsImage.src = ` ${project.image}`;
            projectslink1.innerText = ` ${project.linkText1}`;
            projectslink1.href = ` ${project.link1}`;
            projectslink2.innerText = ` ${project.linkText2}`;
            projectslink2.href = ` ${project.link2}`;
        }
    });
}

closeButton.addEventListener("click", () => {
    modal.classList.toggle("activateModalContainer");
});

page.addEventListener("click", function (closeModal) {
    if (closeModal.target === modal) {
        modal.classList.toggle("activateModalContainer");
    }
});
