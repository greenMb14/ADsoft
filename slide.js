var slides, nextslide, prevslide, totalslides;
let index=0;

slides = document.querySelector(".slider-items").children;
nextslide = document.querySelector("right-slide");
prevslide = document.querySelector(".left-slide");
totalslides = slides.length;
nextslide.onclick = function () {
    next("next");
}
nextslide.onclick = function () {
    next("prev");
}
function next(direction) {
    if (direction == "next") {
        index++;
        if (index == totalslides) {
            index = 0;
        }
    } else {
        if (index == 0) {
            index = totalslides-1;
        }else{
            index--
        }
    }
    slides[index].classList.add("active");
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        
    }
}