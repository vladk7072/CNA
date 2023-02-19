AOS.init();

const mobBtn = document.querySelector(".header__mob"),
  mobBtnText = document.querySelector(".header__mob-text"),
  headerMobList = document.querySelector(".header__mob-list");

mobBtn.addEventListener("click", () => {
  mobBtn.classList.toggle("header__mob--active");
  mobBtnText.classList.toggle("header__mob-text--active");
  headerMobList.classList.toggle("header__mob-list--active");
});

const animItems = document.querySelectorAll(".top__info-animbox");

if (window.innerWidth <= 965) {
  setTimeout(() => {
    animItems.forEach((item) => {
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    });
  }, 200);
} else {
  setTimeout(() => {
    animItems.forEach((item) => {
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    });
  }, 800);
}

const topSwiper = new Swiper(".top__slider", {
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 3500,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});
const possSwiperOne = new Swiper(".possibilities__slider-one", {
  slidesPerView: 1.2,
  grid: {
    rows: 1,
  },
  autoHeight: false,
  spaceBetween: 20,
  pagination: {
    el: ".possibilities__pagination-1",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    440: {
      slidesPerView: 1.8,
    },
    660: {
      slidesPerView: 2.4,
    },
    1025: {
      slidesPerView: 3,
      grid: {
        rows: 2,
      },
    },
  },
});
const possSwiperTwo = new Swiper(".possibilities__slider-two", {
  slidesPerView: 1.2,
  autoHeight: false,
  spaceBetween: 20,
  pagination: {
    el: ".possibilities__pagination-2",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    440: {
      slidesPerView: 1.8,
    },
    660: {
      slidesPerView: 2.4,
    },
    1025: {
      slidesPerView: 3,
    },
  },
});
const possSwiperThree = new Swiper(".possibilities__slider-three", {
  slidesPerView: 1.2,
  autoHeight: false,
  spaceBetween: 20,
  pagination: {
    el: ".possibilities__pagination-3",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    440: {
      slidesPerView: 1.8,
    },
    660: {
      slidesPerView: 2.4,
    },
    1025: {
      slidesPerView: 3,
    },
  },
});
const rateSwiper = new Swiper(".rates__slider", {
  slidesPerView: 1.2,
  autoHeight: false,
  spaceBetween: 20,
  pagination: {
    el: ".rates__pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    440: {
      slidesPerView: 1.8,
    },
    660: {
      slidesPerView: 2.4,
    },
    1025: {
      slidesPerView: 3,
    },
  },
});

const btnNextPartners = document.querySelector(".clients__mob-btn"),
  itemsPartners = document.querySelectorAll(".clients__item");
btnNextPartners.addEventListener("click", () => {
  itemsPartners.forEach((item) => {
    item.classList.remove("clients__item-next");
    btnNextPartners.classList.add("clients__mob-btn--hidden")
  });
});
