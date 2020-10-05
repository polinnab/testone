// 1. плавный скролл на ссылки меню. каждая отправляет на свой раздел
// 2. при мобильной версии кликая на раздел, нужно плавно схлопнуть меню и плавно переместить на раздел

$('.pricing-grid').slick({
    arrows: false,
    dots: true,
    infinite: false,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
    {
      breakpoint: 981,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]

});

$('.blog-grid').slick({
    arrows: false,
    dots: true,
    infinite: false,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
    {
      breakpoint: 981,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 641,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]

});



const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav-toggle');
const $header = $('.header');


$('.nav-toggle').on('click', function(event) {

    console.log($(this));
    nav.classList.toggle('nav-flex');

});

$('.nav-list-link[href^="#"]').on('click', function(event) {
    event.preventDefault();
    if (nav.classList.contains('nav-flex')) {
        nav.classList.toggle('nav-flex');

    } 
    

    const $link = $(this);
    const selector = $link.attr('href');
    const $target = $(selector);
    const distance = $target.offset().top;

    $('html, body').animate({scrollTop: distance - $header.outerHeight()}, 500);

});


$(window).on('scroll', function(event) {
  const scrollTop = $('html, body').scrollTop();
  const offset = $('.promotion').offset().top;

  if (scrollTop >= offset) {
    $header.addClass('header_sticky');
    const height = $header.outerHeight();
    
    $header.css('top', -height);
    $header.animate({top: 0}, 400);
    $header.removeAttr('style');
  } else if (scrollTop <= 30) {
    $header.removeClass('header_sticky');
   
    
  }
});
