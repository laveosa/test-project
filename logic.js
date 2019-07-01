(function() {
  document.addEventListener("DOMContentLoaded", function() {
    function setSwiper() {
      var mySwiper = new Swiper(".swiper-container", {
        slidesPerView: "auto",
        pagination: {
          el: ".swiper-pagination"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });
    }

    function initialize() {
      setSwiper();
    }

    initialize();
  });
})();
