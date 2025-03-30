const navbar = document.querySelector('.navbar');
const navMenu = document.querySelector('.nav-menu');
const menu = document.querySelector('.menu');
const colorInverse = document.querySelectorAll(".nav-color-inverse");

navbar.addEventListener('mouseenter', (e) => {
    console.log(e);

    if (navMenu.classList.contains('heightremove')) {
        navMenu.classList.remove('heightremove');
    }
    navMenu.classList.add('heightadd');

    navTexts.forEach(navText => {
        if (navText.classList.contains("nav-text-remove")) {
            navText.classList.remove("nav-text-remove");
        }

        navText.classList.add("nav-text-add");

    })
    colorInverse.forEach((item) => {
        item.style.color = "black";
    }
    );
});
navMenu.addEventListener('mouseleave', (e) => {

    colorInverse.forEach((item) => {
        item.style.color = "white";
    }
    );
    navMenu.classList.remove('heightadd');
    navMenu.classList.add('heightremove');

    navTexts.forEach(navText => {
        navText.classList.remove("nav-text-add");
        navText.classList.add("nav-text-remove");

    })


});

setInterval(changeText, 2000);

const navTexts = document.querySelectorAll(".nav-rows");

let counter = 0;
const headingChangeText = document.querySelector(".changeText")
const words = [ "autonomous", "transportation", "connectivity","electric"];

function changeText(){
    if(counter >= words.length){
        counter=0;
    }
    headingChangeText.classList.remove("textAppear");
    headingChangeText.classList.add("textDisappear");
    setTimeout(() => {
        headingChangeText.textContent = words[counter];
        headingChangeText.classList.add("textAppear");
        headingChangeText.classList.remove("textDisappear");
        counter++;

    }, 200)
}