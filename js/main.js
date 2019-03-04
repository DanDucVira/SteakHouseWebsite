//Sticky Menu background
window.addEventListener('scroll', function () {
    if (window.scrollY > 150) {
        document.querySelector('nav').style.backgroundColor = "#262626";
        document.querySelector('nav').style.backgroundPosition = "fixed";

    } else if (window.scrollY < 50) {
        document.querySelector('nav').style.backgroundColor = "transparent";
    }
});