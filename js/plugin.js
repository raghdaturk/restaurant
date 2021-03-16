$(document).ready(function() {

    $('.menu a,.navbar-mobile .manu a').click(function() {
        $('.menu a,.navbar-mobile .manu a').removeClass("active");
        $(this).addClass("active");
    });



    $('.icon-mobile').click(function() {
        $('.navbar-mobile,body').addClass("active");
    });

    $('.icon-close').click(function() {
        $('.navbar-mobile,body').removeClass("active");
    });


    //////////////////////// End Menu  


    $(window).scroll(function() {
        if ($(this).scrollTop() > 1) {
            $('.header').addClass("sticky");
        } else {
            if ($(this).scrollTop() < 1) {
                $('.header').removeClass("sticky");
            }
        }
    });




    $(".click").click(function() {
        var target = $(this).parent().children(".expand");
        $(target).slideToggle();
    });



    //toggle two classes on button element
    $('.click').on('click', function() {
        $('.click').toggleClass('active');
    });




    (function($) {
        $('.spinner .btn:first-of-type').on('click', function() {
            $('.spinner input').val(parseInt($('.spinner input').val(), 10) + 1);
        });
        $('.spinner .btn:last-of-type').on('click', function() {
            $('.spinner input').val(parseInt($('.spinner input').val(), 10) - 1);
        });
    })(jQuery);



    $('[data-toggle="tooltip"]').tooltip();


    $(".fas.fa-eye.icon-pass").click(function() {
        $("input.pass").attr("type", "text");
        $(this).hide();
        $(".fas.fa-eye-slash.icon-pass").show();
    });

    $(".fas.fa-eye-slash.icon-pass").click(function() {
        $("input.pass").attr("type", "password");
        $(this).hide();
        $(".fas.fa-eye.icon-pass ").show();
    });


    $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myList li").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });


    $("ul.myList li h5").click(function() {
        $(this).siblings().slideToggle();
        $(this).toggleClass("active");
    });

    $(".m-bank").click(function() {
        $(".hidebank").slideDown();
    });

    $(".m-cash").click(function() {
        $(".hidebank").slideUp();
    });


    $(function() {
        var $cbx = $(':checkbox[id^=check]');
        var $form = $('.hideitem');
        $cbx.change(function() {
            $form[$cbx.not(':checked')[0] ? 'slideUp' : 'slideDown']();
        }).change();
    });



    $('.sample1').lightCarousel();

    // live handler
    lc_lightbox('.elem', {
        wrap_class: 'lcl_fade_oc',
        gallery: true,
        thumb_attr: 'data-lcl-thumb',
        skin: 'minimal',
        radius: 0,
        padding: 0,
        border_w: 0,
    });




});


// List.js set-up and initialisation