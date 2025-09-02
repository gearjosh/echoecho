function currentImage(n) {
  clearTimeout(timeoutID);
  showImages(galleryIndex = n);
}

function switchImage(n) {
  clearTimeout(timeoutID);
  showImages(galleryIndex += n)
}

function showImages(n) {
  let i;
  let images = document.getElementsByClassName("gallery");
  let dots = document.getElementsByClassName("dot-gallery");
  if (n >= 1 || n < 1) {
    if (n > images.length) {
      galleryIndex = 1;
    }
    if (n < 1) {
      galleryIndex = images.length;
    }
  } else {
    galleryIndex++;
    if (galleryIndex > images.length) {
      galleryIndex = 1;
    }
  }
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dot-md", "");
  }
  images[galleryIndex - 1].style.display = "flex";
  dots[galleryIndex - 1].className += " dot-md";
  timeoutID = setTimeout(showImages, 6000);
}

// click listeners
// add one to show any clicked image in a modal

// initialize the first testimonial
let galleryIndex = 0;
let timeoutID;
showImages();
