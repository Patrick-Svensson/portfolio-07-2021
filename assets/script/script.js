/* ****** Variables ****** */

const myselfImage = document.querySelector(".o-myself__img-container");
const modal = document.querySelector(".o-modal-container");
const closeButton = document.querySelector(".c-modal__X-wrapper");
const page = document.querySelector(".page");
const projectsHeading = document.querySelector(".c-modal__heading");
const projectsImage = document.querySelector(".c-modal__img");
const projectsDescription = document.querySelector(".c-modal__text");
const projectslink1 = document.querySelector(".modalLink1");
const projectslink2 = document.querySelector(".modalLink2");

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
    switch (true) {
        case clicked == projects[0].projectNumber:
            modal.classList.toggle("activateModalContainer");
            projectsHeading.innerText = "the portfolio";
            projectsDescription.innerText =
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
            projectsImage.src = "../../assets/images/portfolio.png";
            projectslink2.innerText = "...view source code";
            projectslink2.href = "https://github.com/Patrick-Svensson/portfolio-05-2021";
            break;
        case clicked == projects[1].projectNumber:
            modal.classList.toggle("activateModalContainer");
            projectsHeading.innerText = "coloourix";
            projectsDescription.innerText =
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
            projectsImage.src = "../../assets/images/colourix.png";
            projectslink1.innerText = "...view source code";
            projectslink1.href = "https://github.com/Patrick-Svensson/colourix";
            projectslink2.innerText = "...view website";
            projectslink2.href = "#";
            break;
        case clicked == projects[2].projectNumber:
            modal.classList.toggle("activateModalContainer");
            projectsHeading.innerText = "sean connery quiz";
            projectsDescription.innerText =
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
            projectsImage.src = "../../assets/images/sean-connery-quiz.png";
            projectslink1.innerText = "...view source code";
            projectslink1.href = "https://github.com/Patrick-Svensson/sean-connery-quiz";
            projectslink2.innerText = "...view website";
            projectslink2.href = "https://patrick-svensson.github.io/sean-connery-quiz/";
            break;
        case clicked == projects[3].projectNumber:
            modal.classList.toggle("activateModalContainer");
            projectsHeading.innerText = "gaffer's dock";
            projectsDescription.innerText =
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
            projectsImage.src = "../../assets/images/gaffers-dock.png";
            projectslink1.innerText = "...view source code";
            projectslink1.href = "https://github.com/Patrick-Svensson/gaffers-dock";
            projectslink2.innerText = "...view website";
            projectslink2.href = "https://patrick-svensson.github.io/gaffers-dock/";
            break;
        case clicked == projects[4].projectNumber:
            modal.classList.toggle("activateModalContainer");
            projectsHeading.innerText = "bhromaon";
            projectsDescription.innerText =
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
            projectsImage.src = "../../assets/images/bhromaon.png";
            projectslink1.innerText = "...view source code";
            projectslink1.href = "https://github.com/Patrick-Svensson/bhromaon";
            projectslink2.innerText = "...view website";
            projectslink2.href = "https://patrick-svensson.github.io/bhromaon/";
            break;
        case clicked == projects[5].projectNumber:
            modal.classList.toggle("activateModalContainer");
            projectsHeading.innerText = "";
            projectsDescription.innerText =
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
            projectsImage.src = "../../assets/images/emoji-mischief.png";
            projectslink1.innerText = "...view source code";
            projectslink1.href = "https://github.com/Patrick-Svensson/svg-in-play";
            projectslink2.innerText = "...view website";
            projectslink2.href = "#";
            break;
        case clicked == projects[6].projectNumber:
            modal.classList.toggle("activateModalContainer");
            projectsHeading.innerText = "time paradox";
            projectsDescription.innerText =
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
            projectsImage.src = "../../assets/images/time-paradox.png";
            projectslink2.innerText = "...view image";
            projectslink2.href = "../../assets/images/time-paradox.png";
            break;
        case clicked == projects[7].projectNumber:
            modal.classList.toggle("activateModalContainer");
            projectsHeading.innerText = "movie theatre logo";
            projectsDescription.innerText =
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
            projectsImage.src = "../../assets/images/movie-theatre.png";
            projectslink2.innerText = "...view design";
            projectslink2.href = "../../assets/images/movie-theatre.png";
            break;
        default:
            return;
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
