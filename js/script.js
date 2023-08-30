// navbar section start
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
    links.classList.toggle('show-links');
});
// navbar section end


// Slider Section
// Slider Section
// Slider Section
var slides = document.querySelectorAll(".slide");
var dots = document.querySelectorAll(".dot");
var index = 0;

function prevSlide(n) {
    index += n;
    changeSlide();
}

function nextSlide(n) {
    index += n;
    changeSlide();
}

function goToSlide(n) {
    index = n;
    changeSlide();
}

function changeSlide() {
    if (index > slides.length - 1)
        index = 0;
    if (index < 0)
        index = slides.length - 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove("active");
    }

    slides[index].style.display = "block";
    dots[index].classList.add("active");
}

// Adding event listeners to dots
dots.forEach((dot, dotIndex) => {
    dot.addEventListener("click", () => {
        goToSlide(dotIndex);
    });
});

// Initial slide display
changeSlide();
