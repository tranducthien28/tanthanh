$(function(){
    $('.slider').owlCarousel({loop: true, items: 1, dots: true, nav: false, autoplay: 1});
    $('.pro-cnt').owlCarousel({loop: true, items: 4,margin: 25, dots: true, nav: true, autoplay: 0, navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{items: 1},
        600:{items: 3},
        1000:{items: 4}
    }    
});
    $('.cus-cnt').owlCarousel({loop: 1, items: 5, dots: 0, nav: 1, navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{items: 2},
        600:{items: 4},
        1000:{items: 5}
    } 
})

    const resizeImage = (e, s) => { s = parseInt($(e).width()) * s; $(e).css({ height: s + "px" }) };
    resizeImage('.slider .img',555/1365);
    resizeImage('.ab-cnt .img', 360/575);
    resizeImage('.field-item .item .img', 475/385)
    resizeImage('.pro-cnt .item .img', 1);
    resizeImage('.news-cnt .left .img', 385/592);
    resizeImage('.news-cnt .right .item .img', 181/282);
    resizeImage('.cus-cnt .item',165/230);
    if($(window).width() < 767){
        resizeImage('.slider .img',9/16);
    }
    $('.lang').click(function(){
        $(this).toggleClass('active');
    })

    $('.social-fix .top').click(function(){
        $(window).scrollTop(0);
    })

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
    $(window).on('scroll', function () { scrollmenu(); });

    $(".touch-menu").click(function () {
        $(this).toggleClass("active")
        $(".menu").toggleClass("active")
        $(".bg-black").toggleClass("active")
    })

    $(".bg-black").click(function () {
        $(this).removeClass("active")
        $(".menu").removeClass("active")
        $(".touch-menu").removeClass("active")
    })

    $(".show-sub").click(function () {
        $(this).parents("li").children(".submenu").slideToggle();
        $(this).parents("li").toggleClass("active");
    })
})