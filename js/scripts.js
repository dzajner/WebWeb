$(document).ready(function() {
    $('.menu-wrapper').scrollToFixed({});
    $('.top-footer').scrollToFixed({
        bottom: 0,
        limit: $('.top-footer').offset().top + 40,
    });
    //glavni meni
    $('.meni-icon').click(function() {
        $(this).toggleClass('close');
        $('.glavni-meni').toggleClass('open');
        $('html').toggleClass('no-scroll');
        //test code
        $('.glavni-meni li').removeClass('open');
        $('.meni-down').removeClass('close');

    });
    $('.down').click(function() {
        $(this).toggleClass('close');
        $('.gornji-submeni').toggleClass('open');
    });
    //submeni
    $('.meni-down').click(function() {
        $(this).toggleClass('close');
        $(this).closest('li').toggleClass('open');
    });


    $('.o-s-link').click(function() {
        $(this).toggleClass('open');
    });
    $("#Glide").glide({
        type: "carousel",
        centered: false,
        dragDistance: false,
        animationDuration: 700,
        hoverpause: true,
        autoPlay: 5000,
    });
});
$(window).load(function() {
    $(".klijenti").flexisel({
        visibleItems: 4,
        animationSpeed: 300,
        autoPlay: true,
        autoPlaySpeed: 3000,
        pauseOnHover: true,
        clone: true,
        enableResponsiveBreakpoints: true,
        responsiveBreakpoints: {
            mobile: {
                changePoint: 460,
                visibleItems: 1
            },
            phablet: {
                changePoint: 640,
                visibleItems: 2
            },
            landscape: {
                changePoint: 900,
                visibleItems: 3
            },
        }
    });
});

var h = $('#page');

$('.bg, .bg2').css({
    height: h.height() + 330
});


$('.glavni-meni.open').css({
    height: $(window).height
});
