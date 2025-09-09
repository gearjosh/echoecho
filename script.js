function currentImage(n) {
  clearTimeout(timeoutID);
  showImages((galleryIndex = n));
}

function switchImage(n) {
  clearTimeout(timeoutID);
  showImages((galleryIndex += n));
}

function showImages(n) {
  let i;
  let images = document.getElementsByClassName("gallery");
  galleryTotal = images.length;
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
  $("#galleryNum").text(galleryIndex + "/" + galleryTotal);
  timeoutID = setTimeout(showImages, 6000);
}

// click listeners
// add one to show any clicked image in a modal
$("img")
  .not("#logoText")
  .click(function () {
    const source = $(this).attr("src");
    const altText = $(this).attr("alt");
    const modal = document.getElementById("modal");

    $("#focusImage").attr({
      src: source,
      alt: altText,
    });
    $("#caption").text(altText);

    if ($(this).attr("id") == "focusImage") {
      modal.close();
    } else {
      modal.showModal();
      $("body").addClass("overflow-hidden")
    }
  });

// stop scrolling on body when dialog open
document.getElementById("modal").addEventListener("close", () => {
  document.body.classList.remove("overflow-hidden");
});

// initialize the first testimonial
let galleryIndex = 0;
let timeoutID;
let galleryTotal;
showImages();
