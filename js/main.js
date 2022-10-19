$(function () {
  $('.slider').owlCarousel({
    loop: true,
    items: 1,
    dots: true,
    nav: false,
    autoplay: 1,
  });
  $('.pro-cnt').owlCarousel({
    loop: true,
    items: 4,
    margin: 25,
    dots: true,
    nav: true,
    autoplay: 0,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: { items: 1 },
      600: { items: 3 },
      1000: { items: 4 },
    },
  });
  $('.cus-cnt').owlCarousel({
    loop: 1,
    items: 5,
    dots: 0,
    nav: 1,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: { items: 2 },
      600: { items: 4 },
      1000: { items: 5 },
    },
  });
  $('._news-slide').owlCarousel({
    loop: 1,
    items: 4,
    margin: 25,
    dots: 1,
    nav: 1,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: { items: 2 },
      600: { items: 4 },
      1000: { items: 4 },
    },
  });

  $('.leader-cnt').owlCarousel({
    loop: true,
    margin: 70,
    items: 4,
    dots: 1,
    nav: 1,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
  });
  $('.success-cnt').owlCarousel({
    loop: true,
    margin: 70,
    items: 3,
    dots: 1,
    nav: 1,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
  });

  const resizeImage = (e, s) => {
    s = parseInt($(e).width()) * s;
    $(e).css({ height: s + 'px' });
  };
  resizeImage('.slider .img', 555 / 1365);
  resizeImage('.ab-cnt .img', 360 / 575);
  resizeImage('.field-item .item .img', 475 / 385);
  resizeImage('.pro-cnt .item .img', 1);
  resizeImage('.news-cnt .left.news-item .img', 385 / 592);
  resizeImage('.cus-cnt .item', 165 / 230);
  resizeImage('.banner .img', 430 / 1365);
  resizeImage('._ab-cnt .img', 340 / 585);
  resizeImage('.core-cnt .it', 260 / 370);
  resizeImage('._field-item .img', 345 / 575);
  resizeImage('._news-top .img', 380 / 590);
  resizeImage('.news-item .img', 181 / 282);
  resizeImage('.right .news-item .img', 181 / 282);
  resizeImage('.newsitem .img', 181/282);
  resizeImage('.lst-newsest .item .img', 1)

  if ($(window).width() < 767) {
    resizeImage('.slider .img', 9 / 16);
  }
  $('.lang').click(function () {
    $(this).toggleClass('active');
  });

  $('.social-fix .top').click(function () {
    $(window).scrollTop(0);
  });

  scrollmenu = function () {
    if ($(window).width() > 1025) {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > 142) {
        $('header').addClass('active');
      } else {
        $('header').removeClass('active');
      }
    }
  };
  scrollmenu();
  $(window).on('scroll', function () {
    scrollmenu();
  });

  $('.touch-menu').click(function () {
    $(this).toggleClass('active');
    $('.menu').toggleClass('active');
    $('.bg-black').toggleClass('active');
  });

  $('.bg-black').click(function () {
    $(this).removeClass('active');
    $('.menu').removeClass('active');
    $('.touch-menu').removeClass('active');
  });

  $('.show-sub').click(function () {
    $(this).parents('li').children('.submenu').slideToggle();
    $(this).parents('li').toggleClass('active');
  });
});
