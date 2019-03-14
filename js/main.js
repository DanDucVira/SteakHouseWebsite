//Sticky Menu background
window.addEventListener('scroll', function () {
    if (window.scrollY > 150) {
        document.querySelector('.main-nav').style.backgroundColor = "#262626";
        document.querySelector('.main-nav').style.backgroundPosition = "fixed";
        document.querySelector('label').style.backgroundColor = "#262626";
        document.querySelector('label').style.backgroundPosition = "fixed";

    } else if (window.scrollY < 50) {
        document.querySelector('.main-nav').style.backgroundColor = "transparent";
        document.querySelector('label').style.backgroundColor = "transparent";
    }
});