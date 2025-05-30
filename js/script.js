document.addEventListener("DOMContentLoaded", function () {
    const bigImage = document.querySelector(".galleryBig");
    const thumbnails = document.querySelectorAll(".galleryList img");

    thumbnails.forEach(function (thumb) {
        thumb.addEventListener("click", function () {
            const newSrc = this.getAttribute("src");
            bigImage.setAttribute("src", newSrc);
        });
    });
});

var swiper = new Swiper(".visualSwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});