$(document).ready(function() {
    $('.meni-wrapper').scrollToFixed({});
    $('.top-footer').scrollToFixed({
        bottom: 0,
        limit: $('.top-footer').offset().top + 40,
    });
    //glavni meni
    $('.meni-icon').click(function() {
        $(this).toggleClass('close');
        $('.glavni-meni').toggleClass('open');
        $('html').toggleClass('no-scroll');
        $('.glavni-meni li').removeClass('open');
        $('.meni-down').removeClass('close');

    });
    $('.down').click(function() {
        $(this).toggleClass('close');
        $('.gornji-submeni').toggleClass('open');
    });
    //submeni
    $('.meni-down').click(function() {
        $(this).closest('li').toggleClass('open').siblings().removeClass('open');
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
    // scroll to top
    $(function() {
        $("#toTop").scrollToTop();
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
    // equal height
$(window).on('load resize', function(){
    if ($(window).width() >= 620) {
        $('#page').equalize();
    }
    else{
        $('.sadrzaj').css('height','auto');
    }
});
    // paralax efekat
var h = $('#page');

$('.bg, .bg2').css({
    height: h.height() + 750
});


// $('.glavni-meni.open').css({
//     height: $(window).height
// });
