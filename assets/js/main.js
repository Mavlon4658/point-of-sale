const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

const phoneInp = document.querySelectorAll('input[type="tel"]');

if (phoneInp.length) {
    phoneInp.forEach(el => {
        IMask(el, {
            mask: '+{7}(000) 000-00-00',
        })
    });
};

const homeSwp = new Swiper('.home-bottom__swp .swiper', {
    slidesPerView: 1.2,
    loop: true,
    effect: "coverflow",
    centeredSlides: true,
    spaceBetween: 0,
    coverflowEffect: {
        rotate: 0,
        stretch: '14%',
        depth: 80,
        modifier: 5
    },
    breakpoints: {
        991: {
            slidesPerView: 1.3,
            coverflowEffect: {
                rotate: 0,
                stretch: '12.1%',
                depth: 90,
                modifier: 5
            },
        },
    },
    navigation: {
        nextEl: '.home-bottom__swp .swp-btn__next',
        prevEl: '.home-bottom__swp .swp-btn__prev',
    },
    pagination: {
        el: '.home-bottom__swp .swp-pagination',
        clickable: true,
    }
})

const designSwp = new Swiper('.design-swp .swiper', {
    slidesPerView: 1.2,
    loop: true,
    effect: "coverflow",
    centeredSlides: true,
    spaceBetween: 0,
    coverflowEffect: {
        rotate: 0,
        stretch: '13.4%',
        depth: 90,
        modifier: 5
    },
    breakpoints: {
        991: {
            slidesPerView: 1.3,
            coverflowEffect: {
                rotate: 0,
                stretch: '12.1%',
                depth: 90,
                modifier: 5
            },
        }
    },
    navigation: {
        nextEl: '.design-swp .swp-btn__next',
        prevEl: '.design-swp .swp-btn__prev',
    },
    pagination: {
        el: '.design-swp .swp-pagination',
        clickable: true,
    }
})

const clientsSwp = new Swiper('.clients-swp .swiper', {
    slidesPerView: 1,
    spaceBetween: 37.25,
    centeredSlides: true,
    breakpoints: {
        1280: {
            slidesPerView: 4,
        },
        991: {
            slidesPerView: 3
        },
        500: {
            slidesPerView: 2,
        }
    },
    navigation: {
        nextEl: '.clients-swp .swp-btn__next',
        prevEl: '.clients-swp .swp-btn__prev',
    },
})