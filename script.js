// let offset = 0;
// const sliderLine = document.querySelector(".slider-line");

// document.querySelector(".slider-next").addEventListener("click", function () {
//   offset += 450;
//   if (offset > 3000) {
//     offset = 0;
//   }
//   sliderLine.style.left = -offset + "px";
// });

// document.querySelector(".slider-prev").addEventListener("click", function () {
//   offset -= 450;
//   if (offset < 0) {
//     offset = 3000;
//   }
//   sliderLine.style.left = -offset + "px";
// });
const images = document.querySelectorAll(".slider-img");
const sliderLine = document.querySelector(".slider-line");
let count = 0;
let width;

function init() {
  console.log("resize");
  width = document.querySelector(".slider").offsetWidth;
  sliderLine.style.width = width * images.length + "px";
  images.forEach((item) => {
    item.style.width = width + "px";
    item.style.height = "auto";
  });
  rollSlider();
}
window.addEventListener("resize", init);
init();

document.querySelector(".slider-prev").addEventListener("click", function () {
  count--;
  if (count < 0) {
    count = images.length - 1;
  }
  rollSlider();
});

document.querySelector(".slider-next").addEventListener("click", function () {
  count++;
  if (count >= images.length) {
    count = 1;
  }
  rollSlider();
});
function rollSlider() {
  sliderLine.style.transform = "translate(-" + count * width + "px) ";
}
