var index=0;

var slides = document.querySelectorAll(".item");
var nextslide = document.querySelector(".right-slide");
var prevslide = document.querySelector(".left-slide");
var totalslides = slides.length;
nextslide.onclick = function () {
    next("next");
}
prevslide.onclick = function () {
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
            index--;
        }
    }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        
    }
    slides[index].classList.add("active");
}