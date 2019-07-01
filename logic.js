(function() {
  document.addEventListener("DOMContentLoaded", function() {
    function setSwiper() {
      var mySwiper = new Swiper(".swiper-container", {
        slidesPerView: "auto",
        noSwipingSelector:
          ".swiper-slide, .swiper-pagination, .swiper-button-prev, .swiper-button-next",
        pagination: {
          el: ".swiper-pagination",
          clickable: true
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
