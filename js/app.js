// 'use.strict';

const sections = document.querySelectorAll('a[href*="#"]');

for (let section of sections) {
    section.addEventListener("click", function (event) {
        event.preventDefault();
        const blockID = section.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth"
        })
    })
}


// ===== TABS ====
$('.title_spacing a').click(function () {
    $('.title_spacing a').removeClass('active');
    $(this).addClass('active');
    let href = $(this).attr('href');
    $('.tabul__content').removeClass('active').removeClass('in');
    $(href).addClass('active');
    setTimeout(function () {
        $(href).addClass('in');
    }, 200);
    return false;

});
//slider
$(document).ready(function () {
    $('.slider').slick({
        adaptiveHeight: true,
        slidesToShow: 3,
        speed: 1500,
        infinite: false,
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});


/* accordion*/
$(document).ready(function () {
    $('.accordion__item--question').click(function () {
        $(this).next('.accordion__item--content').slideToggle(1000);
    });
});

/*animation of the flight of goods to the cart*/
$('.slider__list').click(function () {
    let $per = $('.slider__list').children('.slider__item').children('.slider__img')
    $(this).find($per).clone().css({
        'position': 'absolute',
        'z-index': 100,
        'width': '20%',
        'left': $(this).find($per).offset()['left'],
    }).appendTo('.products').animate({
        top: $('div.cart').offset()['top'],
        left: $('div.cart').offset()['left'],
        opacity: 0,
        width: 20,
    }, 1000, function () {
        $(this).remove();
    })
})
let carts = document.querySelectorAll('.price__shop');
// let products = [
//     {
//         name: 'Tincture',
//         value: '500',
//         price: '49.99',
//         rest: '10'
//     }    
// ]
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers();
    })
}
function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
}

/// Scroll
function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth',
    })
}

const list = document.querySelector('.scroll');
const button = document.querySelector('.title_heading')

list.addEventListener('click', () => {
    scrollTo(button);
})

/*testimonials*/

const txts = document.querySelector('.comment__recall').children;

txtsLen = txts.length;
let index = 0;

function animateText() {
    for (let i = 0; i < txtsLen; i++) {
        txts[i].classList.remove("text-in");
    }
    txts[index].classList.add("text-in");
    if (index == txtsLen - 1) {
        index = 0;
    } else {
        index++;
    }

    setTimeout(animateText, 4000);

}

window.onload = animateText;

/* subscribe*/
function validateEmail(email) {
    let reg = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}

/*=====FIX MENU======*/

window.onscroll = function showHeader() {

    let header = document.querySelector('.menu')

    if (window.pageYOffset > 200) {
        header.classList.add('header-fixed');
    } else {
        header.classList.remove('header-fixed');
    }
}
/*====header burger===*/
$(document).ready(function () {
    $('.heading__burger').click(function (event) {
        $('.heading__burger, .menu').toggleClass('act');
        // $('body').toggleClass('lock');
    });
});

