let topbtn = document.getElementById("topscroll");

      window.onscroll = function () {
        if (
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
        ) {
          topbtn.style.display = "block";
        } else {
          topbtn.style.display = "none";
        }
      };

      topbtn.onclick = function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };



const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".left");
const nextBtn = document.querySelector(".right");

let currentIndex = 0; 
let visibleCount = getVisibleCount();

function getVisibleCount() {
  const containerWidth = document.querySelector(".main-slides").offsetWidth;
  const slideWidth = slides[0].offsetWidth + 20; 
  return Math.floor(containerWidth / slideWidth) || 1;
}

function updateSlider() {
  const slideWidth = slides[0].offsetWidth + 20;
  slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex > slides.length - visibleCount) {
    currentIndex = 0; 
  }
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - visibleCount; 
  }
  updateSlider();
});

window.addEventListener("resize", () => {
  visibleCount = getVisibleCount();
  if (currentIndex > slides.length - visibleCount) {
    currentIndex = slides.length - visibleCount;
  }
  updateSlider();
});

updateSlider();

