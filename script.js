let images = [
    "M1.JPG","M2.jpg","m3.jpg","m4.jpg","M5.webp",
    "LION.JPG","ELEPHANT.JPG","PANDA.webp","TIGER.JPG",
    "FERRA2.png","FERRARI.webp","LAMBO.jpg","LAMBO1.jpg"
];

let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = images[currentIndex];
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("lightbox-img").src = images[currentIndex];
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById("lightbox-img").src = images[currentIndex];
}

/* Filter */
function filterImages(category) {
    let items = document.querySelectorAll(".image-box");

    items.forEach(item => {
        if (category === "all" || item.classList.contains(category)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

/* Keyboard navigation */
document.addEventListener("keydown", function(e){
    if(e.key === "ArrowRight") nextImage();
    if(e.key === "ArrowLeft") prevImage();
    if(e.key === "Escape") closeLightbox();
});

/* Auto-scroll gallery */
const gallery = document.querySelector(".gallery");

setInterval(() => {
    gallery.scrollBy({
        left: 320,
        behavior: "smooth"
    });
}, 3000);