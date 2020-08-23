const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navLinksLi = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-show');

    // Animate links
    navLinksLi.forEach( (link, index) => {
        if(link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
        }
    });

    // Animate the burger button
    burger.classList.toggle('toggleBurger');
});