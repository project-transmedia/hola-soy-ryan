'use strict';

/**  Añadir evento a multiple elementos */

const addEventOnElements = function(elements, eventType, callback) {
    for(let i = 0, len = elements.length; i < len; i++){
        elements[i].addEventListener(eventType, callback);
    }
}


/** MOBILE NAVBAR TOGGLER */

const navbar = document.querySelector("[data-navbar]")
const navTogglers = document.querySelectorAll("[data-nav-toggler]")

const toggleNav = () => {
    navbar.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNav)



/** HEADER ANIMATION */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]")

window.addEventListener("scroll", () => {
    if(window.scrollY > 100){
        header.classList.add("active");
        backTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
})



/** SLIDER 1 */

const slider = document.querySelector("[data-slider]");
const sliderContainer = document.querySelector("[data-slider-container]");
const sliderPrevBtn = document.querySelector("[data-slider-prev]");
const sliderNextBtn = document.querySelector("[data-slider-next]");

let totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

let currentSlidePos = 0;

const moveSliderItem = function() {
    sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;

}

/** Next Slider */

const slideNext = function() {
    const slideEnd = currentSlidePos >= totalSlidableItems;

    if(slideEnd) {
        currentSlidePos = 0;
    } else {
        currentSlidePos++;
    }

    moveSliderItem();
}

sliderNextBtn.addEventListener("click", slideNext)


/** Previous Slider */

const slidePrev = function() {

    if(currentSlidePos <= 0) {
        currentSlidePos = totalSlidableItems;
    } else {
        currentSlidePos--;
    }

    moveSliderItem();
}

sliderPrevBtn.addEventListener("click", slidePrev)


/** SLIDER 2 */

const slider2 = document.querySelector("[data-slider-2]");
const sliderContainer2 = document.querySelector("[data-slider-container-2]");
const sliderPrevBtn2 = document.querySelector("[data-slider-prev-2]");
const sliderNextBtn2 = document.querySelector("[data-slider-next-2]");

let totalSliderVisibleItems2 = Number(getComputedStyle(slider2).getPropertyValue("--slider-items"));
let totalSlidableItems2 = sliderContainer2.childElementCount - totalSliderVisibleItems2;

let currentSlidePos2 = 0;

const moveSliderItem2 = function() {
    sliderContainer2.style.transform = `translateX(-${sliderContainer2.children[currentSlidePos2].offsetLeft}px)`;

}

/** Next Slider */

const slideNext2 = function() {
    const slideEnd = currentSlidePos2 >= totalSlidableItems2;

    if(slideEnd) {
        currentSlidePos2 = 0;
    } else {
        currentSlidePos2++;
    }

    moveSliderItem2();
}

sliderNextBtn2.addEventListener("click", slideNext2)


/** Previous Slider */

const slidePrev2 = function() {

    if(currentSlidePos2 <= 0) {
        currentSlidePos2 = totalSlidableItems2;
    } else {
        currentSlidePos2--;
    }

    moveSliderItem2();
}

sliderPrevBtn2.addEventListener("click", slidePrev2)


/** RESPONSIVE Slider */

window.addEventListener("resize", function() {
    totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
    totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

    moveSliderItem();
})




