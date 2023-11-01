

document.addEventListener("DOMContentLoaded", function () {
    const  sliderImages = document.querySelectorAll(".slider-img",".slider-img2" );
  
    sliderImages.forEach(function (image) {
      image.addEventListener("click", function () {
        
        sliderImages.forEach(function (img) {
          img.classList.remove("active");
        });
        this.classList.add("active");
        
      });
    });
  });


  document.addEventListener("DOMContentLoaded", function () {
    const sliderImages = document.querySelectorAll(".slider-img2");
  
    sliderImages.forEach(function (image) {
      image.addEventListener("click", function () {
        sliderImages.forEach(function (img) {
          img.classList.remove("active");
        });
        this.classList.add("active");
      });
    });
  });
