
let images = document.querySelectorAll(".gallery img");
let currentIndex = 0;
let imageArray = Array.from(images);

// Open Lightbox
function openLightbox(img) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = img.src;
  currentIndex = imageArray.indexOf(img);
}

// Close Lightbox
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// Next / Prev Navigation
function changeImage(step) {
  currentIndex += step;

  if (currentIndex < 0) {
    currentIndex = imageArray.length - 1;
  }
  if (currentIndex >= imageArray.length) {
    currentIndex = 0;
  }

  document.getElementById("lightbox-img").src = imageArray[currentIndex].src;
}

// Filter Categories
function filterImages(category) {
  imageArray.forEach(img => {
    if (category === "all") {
      img.style.display = "block";
    } else {
      img.style.display = img.classList.contains(category) ? "block" : "none";
    }
  });
}