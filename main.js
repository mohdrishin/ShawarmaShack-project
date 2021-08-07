
// Slide Container Next Prev

let slides = document.querySelectorAll('.slide-box');
let index = 0;

function nextReview(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}
function prevReview(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

next.addEventListener("click", nextReview);
prev.addEventListener("click", prevReview);
