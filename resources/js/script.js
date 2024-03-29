
$(document).ready(function() {
    
    /* Sticky Navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('.sticky-test').addClass('sticky');
        }
        else {
            $('.sticky-test').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });
    
    /* Scroll at click */
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });    
    
    $('.js--scroll-to-features').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    
    /* Animations on scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated pulse');
    }, {
        offset: '50%'
    });   
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
});


