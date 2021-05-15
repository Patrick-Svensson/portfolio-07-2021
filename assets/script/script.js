/* ***** Scroll Down Icon ***** */

function scrollDownIcon() {
    if (window.pageYOffset > 100) {
        document.querySelector(".c-scroll-icon").classList.add("scrollIcon");
    } else {
        document.querySelector(".c-scroll-icon").classList.remove("scrollIcon");
    }
}
window.onscroll = scrollDownIcon;
