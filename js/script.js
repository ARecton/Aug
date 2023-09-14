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
const galleryItem = document.getElementsByClassName("gallery-item");
const lightBoxContainer = document.createElement("div");
const lightBoxContent = document.createElement("div");
const lightBoxImg = document.createElement("img");
const lightBoxPrev = document.createElement("div");
const lightBoxNext = document.createElement("div");

lightBoxContainer.classList.add("lightbox");
lightBoxContent.classList.add("lightbox-content");
lightBoxPrev.classList.add("fa", "fa-angle-left", "lightbox-prev");
lightBoxNext.classList.add("fa", "fa-angle-right", "lightbox-next");

lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);

document.body.appendChild(lightBoxContainer);

let start = 1;

function showLightBox(n) {
    if (n > galleryItem.length) {
        index = 1;
    } else if (n < 1) {
        index = galleryItem.length;
    }
    let imageLocation = galleryItem[index-1].children[0].getAttribute("src");
    lightBoxImg.setAttribute("src", imageLocation);
}

function currentImage() {
    lightBoxContainer.style.display = "block";

    let imageIndex = parseInt(this.getAttribute("data-index"));
    showLightBox(index = imageIndex);
}
for (let i = 0; i < galleryItem.length; i++) {
    galleryItem[i].addEventListener("click", currentImage);
}

function slideImage(n) {
    showLightBox(index += n);
}
function prevImage() {
    slideImage(-1);
}
function nextImage() {
    slideImage(1);
}
lightBoxPrev.addEventListener("click", prevImage);
lightBoxNext.addEventListener("click", nextImage);

function closeLightBox() {
    if (this === event.target) {
        lightBoxContainer.style.display = "none";
    }
}
lightBoxContainer.addEventListener("click", closeLightBox);
