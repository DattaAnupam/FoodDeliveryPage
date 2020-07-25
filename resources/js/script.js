$(document).ready(function() 
{
    /* --- Sticky Navigation --- */
    $('.js--section-features').waypoint(function(direction) 
    {
        if(direction == "down") {
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '10%;'
    });

    /* --- Scroll on button click --- */
    $('.js--scroll-to-plan')
    .click(function() {
        $('html, body')
        .animate({scrollTop: $('.js--section-plans').offset().top},1000);
    });
    $('.js--scroll-to-features')
    .click(function() {
        $('html, body')
        .animate({scrollTop: $('.js--section-features').offset().top},1000);
    });

    /* --- Scroll for Nav Bar --- */ 
    $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
        ) 
        {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body')
                .animate({scrollTop: target.offset().top}, 1000, function() {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { 
                        return false;
                    }
                    else {
                        $target.attr('tabindex','-1'); 
                        $target.focus();
                    }
                });
            }
        }
    });

    /* --- Animation on click --- */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '50%'
    });
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animate__animated  animate__fadeInUp');
    }, {
        offset: '50%'
    });
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '50%'
    });
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animate__animated animate__flash');
    }, {
        offset: '50%'
    });

    /* --- Mobile Nav --- */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        nav.slideToggle(200);
        if(icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        }
        else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round'); 
        }
    });

});