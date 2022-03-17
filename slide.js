var index=0;

var slides = document.querySelector(".slider-items").children;
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

function change() {
    if (index < 2) {
        index++;
    }else{
        index=0;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        
    }
    slides[index].classList.add("active");

    setTimeout("change()",7000);
}
window.setTimeout("change()",10000);
/*var j=0,image = [],time=5000;
image[0] = slides[0].children[0].src;
image[1] = slides[1].children[0].src;
image[2] = slides[2].children[0].src;


function change() {
    document.slid.src = image[j];
    
    if (j < 2) {
        j++
    }else{
        j=0;
    }

    setTimeout("change()",time);
}
    window.onload = change();*/

    // bouton up
    jQuery(function(){
        $(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 500 ) { 
                    $('#scrollUp').css('right','40px');
                } else { 
                    $('#scrollUp').removeAttr( 'style' );
                }

            });
        });
    });
