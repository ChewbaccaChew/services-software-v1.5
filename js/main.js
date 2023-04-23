let slider = null;
const mediaQuery = window.matchMedia("(max-width: 768px)");
const paginationBox = document.querySelector(".swiper-pagination");

const showBox = document.querySelector(".brands__show");
const showButton = showBox.querySelector(".brands__show-btn");
const sliderItemList = document.querySelectorAll(".brands__slider-item");

if (mediaQuery.matches) {
    sliderInit();
} else {
    paginationBox.classList.toggle("swiper-pagination--off");
}

mediaQuery.addEventListener('change', function resizeListener (event) {
    sliderControl(event.matches);
});

showButton.addEventListener("click", function buttonListener (evt) {
    evt.preventDefault();

    if (showButton.classList.contains("brands__show-btn--open")) {
        showButton.textContent = "Показать все";
    } else {
        showButton.textContent = "Скрыть";
    }

    showBox.classList.toggle("brands__show--open");
    showButton.classList.toggle("brands__show-btn--open");

    for (let item of sliderItemList) {
        item.classList.toggle("brands__slider-item--all-list");
    }
});


function sliderInit() {
    slider = new Swiper(".swiper", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
        spaceBetween: 16,
        slidesPerView: "auto",
    });
}

function sliderControl(isMobileSize) {
    paginationBox.classList.toggle("swiper-pagination--off");

    if (isMobileSize && !slider) {
        sliderInit();
    } else if (!isMobileSize && slider) {
        slider.destroy();
        slider = null;
    }
}