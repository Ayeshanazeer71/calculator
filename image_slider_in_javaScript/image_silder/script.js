const images = [
  { src: "images/img1.jpg" ,caption: "Image 1"},
  { src: "images/img2.jpg", caption: "Image 2" },
  { src: "images/img3.jpg", caption: "Image 3" },
  { src: "images/img4.jpg",caption: "Image 4" }
];

let currentIndex = 0;

const sliderImage = document.getElementById("sliderImage");
const caption = document.getElementById("caption");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function showImage(index) {
  sliderImage.style.opacity = 0;

  setTimeout(() => {
    sliderImage.src = images[index].src;
    caption.textContent = images[index].caption;
    sliderImage.style.opacity = 1;
  }, 300);
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});






