function currentImage(n) {
  clearTimeout(timeoutID);
  showImages((galleryIndex = n));
}

function showImages(n) {
  let i;
  let images = document.getElementsByClassName("gallery");
  let dots = document.getElementsByClassName("dot-gallery");
  if (n) {
    if (n > images.length) {
      galleryIndex = 1;
    }
    if (n < 1) {
      galleryIndex = slides.length;
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
  console.log('dots[galleryIndex -1].className: ', dots[galleryIndex -1].className)
  timeoutID = setTimeout(showImages, 20000);
}

// initialize the first testimonial
let galleryIndex = 0;
let timeoutID;
showImages();
