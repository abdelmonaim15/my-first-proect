const header = document.querySelector('header');
window.addEventListener( "scroll", function(){
    header.classList.toggle("sticky",  scrollY > 90);
})

var menu = document.getElementById("menu-icon");
var navlist = document.querySelector(".navlist");

menu.addEventListener("click", function(){
    this.classList.toggle("bx-x")
    navlist.classList.toggle("open");
});
addEventListener ("scroll", function(){
    menu.classList.remove("bx-x")
    navlist.classList.remove("open");
});

const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset: true
})
sr.reveal('.home-text', {delay:300});
sr.reveal('.home-img', {delay:400});
sr.reveal('.container', {delay:400});

sr.reveal('.about-img', {});
sr.reveal('.about-text', {delay:300});

sr.reveal('.middle-text', {});
sr.reveal('.row-btn.row', {delay:300});
sr.reveal('.review-content.contact', {delay:300});