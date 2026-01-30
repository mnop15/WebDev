jQuery(document).ready(function ($) {

    'use strict';

    $(window).load(function () {
        $(".seq-preloader").fadeOut();
        $(".sequence").delay(500).fadeOut("slow");
    })

    $(function () {

        function showSlide(n) {
            $body.unbind("mousewheel");
            currSlide = Math.min(Math.max(0, currSlide + n), $slide.length - 1);
            localStorage.setItem('currSlide', currSlide);
            var displacment = window.innerWidth * currSlide;
            $slides.css('transform', 'translateX(-' + displacment + 'px)');
            $('nav a').removeClass('active');
            $('nav a').eq(currSlide).addClass('active');
            setTimeout(bind, 700);
        }

        function bind() {
            $body.bind('false', mouseEvent);
        }

        function mouseEvent(e, delta) {
            showSlide(delta >= 0 ? -1 : 1);
            e.preventDefault();
        }

        $('nav a, .main-btn a').click(function (e) {
            var newslide = parseInt($(this).attr('href')[1]);
            var diff = newslide - currSlide - 1;
            showSlide(diff);
            e.preventDefault();
        });

        $(window).resize(function () {
            var displacment = window.innerWidth * currSlide;
            $slides.css('transform', 'translateX(-' + displacment + 'px)');
        });
        var $body = $('body');
        var currSlide = localStorage.getItem('currSlide')
            ? parseInt(localStorage.getItem('currSlide'))
            : 0;
        var $slides = $('.slides');
        var $slide = $('.slide');
        var displacment = window.innerWidth * currSlide;
        $slides.css('transform', 'translateX(-' + displacment + 'px)');
        $('nav a').removeClass('active');
        $('nav a').eq(currSlide).addClass('active');
        $body.bind('false', mouseEvent);
    })


    $('#form-submit .date').datepicker({
    });


    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 100) {
            $(".header").addClass("active");
        } else {
            $(".header").removeClass("active");
        }
    });


});
