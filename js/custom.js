$(document).ready(function() {

$('.main-carousel').owlCarousel({
    loop:true,
    margin:10,
    mouseDrag: true,
    nav:true,
    navText: ['<span class="fas fa-chevron-left fa-3x text-primary"></span>','<span class="fas fa-chevron-right fa-3x text-primary"></span>'],
    items: 1
})

$('.footer-carousel').owlCarousel({
    loop:true,
    mouseDrag: true,
    margin:10,
    nav:true,
    items: 1,
    navText: ['<span><i class="fas fa-backward fa-3x text-primary"></i></span>','<span><i class="fas fa-forward fa-3x text-primary"></i></span>']
});


var fieldCounter = document.querySelectorAll(".field-counter-group");
var checkboxWraper = document.querySelectorAll(".checkbox-wraper");

fieldCounter.forEach(function(item) {
    var btnLess = item.querySelector(".btn-less");
    var btnMore = item.querySelector(".btn-more");
    var countClicks = item.querySelector(".count-clicks");

    btnMore.addEventListener("click",function() {
        countClicks.value++;
    })

    btnLess.addEventListener("click",function() {
        if(countClicks.value > 0) {
            countClicks.value--;
        }      
    })

})

// checkboxButton.forEach(function(item) {
//     item.addEventListener("click",function() {
//         if(revealField.style.display == "flex") {
//             revealField.style.display = "none";
//         }
//        else {
//             revealField.style.display = "flex";
//             }
//         })
//     })

checkboxWraper.forEach(function(item) {
    var revealField = item.querySelector(".reveal-hidden-field");
    var checkboxButton = item.querySelector(".checking-button");

        checkboxButton.addEventListener("click",function() {
            if(revealField.style.display == "block") {
                revealField.style.display = "none";
            }
            else {
                revealField.style.display = "block";
                revealField.style.padding = "25px 0 0 10px";
            }
        })  
    })
})