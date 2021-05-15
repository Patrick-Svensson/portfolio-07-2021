/* ***** Scroll Down Icon ***** */

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        document.querySelector(".c-scroll-icon").classList.add("scrollIcon");
    } else {
        document.querySelector(".c-scroll-icon").classList.remove("scrollIcon");
    }
});
