// ^ Image slider system for Skins

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider)

function initializeSlider(){

    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        

    }

}

function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0

    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex)
}

// ^ Image slider system for maps


const mapSlides = document.querySelectorAll(".mapSlides img");
let mapSlideIndex = 0;
let mapIntervalId = null;

document.addEventListener("DOMContentLoaded", mapInitializeSlider)
function mapInitializeSlider(){

    if (mapSlides.length > 0){
        mapSlides[mapSlideIndex].classList.add("mapDisplaySlide");
    }

}

function mapShowSlide(mapIndex){

    if (mapIndex >= mapSlides.length){
        mapSlideIndex = 0;
    }
    else if(mapIndex < 0){
        mapSlideIndex = mapSlides.length - 1;
    }

    mapSlides.forEach(mapSlide => {
        mapSlide.classList.remove("mapDisplaySlide");
    });
    mapSlides[mapSlideIndex].classList.add("mapDisplaySlide")

}

function prevMapSlide(){
    mapSlideIndex--;
    mapShowSlide(mapSlideIndex);
}

function nextMapSlide(){
    mapSlideIndex++;
    mapShowSlide(mapSlideIndex);
}


//Utilities image slider

const utilitiesSlides = document.querySelectorAll(".utilitiesSlides img");
let utilitiesSlideIndex = 0;
let utilitiesIntervalId = null;

document.addEventListener("DOMContentLoaded", utilitiesInitializeSlider)
function utilitiesInitializeSlider(){

    if (utilitiesSlides.length > 0){
        utilitiesSlides[utilitiesSlideIndex].classList.add("utilitiesDisplaySlide");
    }

}

function utilitiesShowSlide(utilitiesIndex){

    if (utilitiesIndex >= utilitiesSlides.length){
        utilitiesSlideIndex = 0;
    }
    else if(utilitiesIndex < 0){
        utilitiesSlideIndex = utilitiesSlides.length - 1;
    }

    utilitiesSlides.forEach(utilitiesSlide => {
        utilitiesSlide.classList.remove("utilitiesDisplaySlide");
    });
    utilitiesSlides[utilitiesSlideIndex].classList.add("utilitiesDisplaySlide")

}

function prevutilitiesSlide(){
    utilitiesSlideIndex--;
    utilitiesShowSlide(utilitiesSlideIndex);
}

function nextutilitiesSlide(){
    utilitiesSlideIndex++;
    utilitiesShowSlide(utilitiesSlideIndex);
}


//T Utilities Image Slider


const TutilitiesSlides = document.querySelectorAll(".TutilitiesSlides img");
let TutilitiesSlideIndex = 0;
let TutilitiesIntervalId = null;

document.addEventListener("DOMContentLoaded", TutilitiesInitializeSlider)
function TutilitiesInitializeSlider(){

    if (TutilitiesSlides.length > 0){
        TutilitiesSlides[TutilitiesSlideIndex].classList.add("TutilitiesDisplaySlide");
    }

}

function TutilitiesShowSlide(TutilitiesIndex){

    if (TutilitiesIndex >= TutilitiesSlides.length){
        TutilitiesSlideIndex = 0;
    }
    else if(TutilitiesIndex < 0){
        TutilitiesSlideIndex = TutilitiesSlides.length - 1;
    }

    TutilitiesSlides.forEach(TutilitiesSlide => {
        TutilitiesSlide.classList.remove("TutilitiesDisplaySlide");
    });
    TutilitiesSlides[TutilitiesSlideIndex].classList.add("TutilitiesDisplaySlide")

}

function prevTutilitiesSlide(){
    TutilitiesSlideIndex--;
    TutilitiesShowSlide(TutilitiesSlideIndex);
}

function nextTutilitiesSlide(){
    TutilitiesSlideIndex++;
    TutilitiesShowSlide(TutilitiesSlideIndex);
}