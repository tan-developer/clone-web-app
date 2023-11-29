/*
 Theme Name: Dgita
 Theme URI: http://themewar.com/wp/dgita/
 Author: themewar
 Author URI: 
 Description: Dgita - Creative Digital Agency WordPress Theme.
 Version: 1.0
 License:
 License URI:
*/
 
/*=======================================================================
 [Table of contents]
 =========================================================================
 1. Init Obj
 2. All Carousel
 3. Skills
 4. Stretch Column
 5. Fun Fact Count
 6. Back To Top
 7. All PopUP
 8. Sticky Header
 9. Mobile Menu
 10. Preloader
 11. Google Maps
*/

(function ($) {
    'use strict';
    /*--------------------------------------------------------
    / 1. Init Obj
    /---------------------------------------------------------*/
    var funfact                 = $('.funfact'),
        popup_video             = $('.popup_video'),
        popup_img               = $('.popup_img');
    
    /*--------------------------------------------------------
    / 2. All Carousel
    /---------------------------------------------------------*/
    $(window).on('elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction('frontend/element_ready/tw-testimonial.default', function($scope, $) {
            var $wrap       = $scope.find('.testi_wrap');
            var tslider1    = $scope.find('.testimonialSlider01');
            var tslider2    = $scope.find('.testimonialSlider02');
            var tslider3    = $scope.find('.testimonialSlider03');
            
            var autoplay    = ($wrap.attr('data-autoplay') == 1 ) ? true : false;
            var nav         = ($wrap.attr('data-nav') == 1 ) ? true : false;
            
            if (tslider1.length > 0) {
                var tslider1_obj = tslider1.owlCarousel({
                    margin: 0,
                    autoplay: autoplay,
                    loop: true,
                    nav: nav,
                    navText: ['<i class="dgita-right-arrow"></i>', '<i class="dgita-right-arrow"></i>'],
                    smartSpeed: 400,
                    dots: false,
                    items: 1
                });
            }
            if (tslider2.length > 0) {
                var tslider2_obj = tslider2.owlCarousel({
                    margin: 0,
                    autoplay: autoplay,
                    loop: true,
                    nav: nav,
                    navText: ['<i class="dgita-right-arrow"></i>', '<i class="dgita-right-arrow"></i>'],
                    smartSpeed: 400,
                    dots: false,
                    items: 1
                });
            }
            if (tslider3.length > 0) {
                var tslider3_obj = tslider3.owlCarousel({
                    margin: 0,
                    autoplay: autoplay,
                    loop: true,
                    nav: nav,
                    navText: ['<i class="dgita-right-arrow"></i>', '<i class="dgita-right-arrow"></i>'],
                    smartSpeed: 400,
                    dots: false,
                    items: 1
                });
            }
        });
    });
    
    $(window).on('elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction('frontend/element_ready/tw-folio.default', function($scope, $) {
            var $wrap       = $scope.find('.folio_slider_wrap');
            var folioSlider = $scope.find('.folioSlider');

            var autoplay = ($wrap.attr('data-autoplay') == 1 ) ? true : false;
            var loop     = ($wrap.attr('data-loop') == 1 ) ? true : false;
            var nav      = ($wrap.attr('data-nav') == 1 ) ? true : false;
            var dots     = ($wrap.attr('data-dots') == 1 ) ? true : false;

            folioSlider.slick({
                autoplay: autoplay,
                centerMode: true,
                dots: dots,
                arrows: nav,
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="dgita-right-arrow"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="dgita-right-arrow"></i></button>',
                infinite: loop,
                speed: 500,
                slidesToShow: 3,
                centerPadding: '0',
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 991,
                        settings: {
                            centerPadding: '160px',
                            slidesToShow: 1
                        }
                    },
                    {
                        breakpoint: 700,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });
        });
    });
    $(window).on('elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction('frontend/element_ready/tw-latest-blog.default', function($scope, $) {
            var $wrap  = $scope.find('.lb_slider_wrap');
            var $slide = $scope.find('.lb_slider');
            
            var autoplay = ($wrap.attr('data-autoplay') == 1 ) ? true : false;
            var loop = ($wrap.attr('data-loop') == 1 ) ? true : false;
            var nav = ($wrap.attr('data-nav') == 1 ) ? true : false;
            var dots = ($wrap.attr('data-dots') == 1 ) ? true : false;
            
            $slide.owlCarousel({
                autoplay: autoplay,
                loop: loop,
                margin: 30,
                responsiveClass: true,
                nav: nav,
                navText: ['<i class="dgita-right-arrow"></i>', '<i class="dgita-right-arrow"></i>'],
                dots: dots,
                responsive: {
                    0: {
                        items: 1
                    },
                    700: {
                        items: 2
                    },
                    992: {
                        items: 3
                    }
                }
            });
        });
    });
    $(window).on('elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction('frontend/element_ready/tw-team.default', function($scope, $) {
            var $wrap = $scope.find('.team_slider_wrap');
            var $tmslider = $scope.find('.team_slider');

            var autoplay = ($wrap.attr('data-autoplay') == 1 ) ? true : false;
            var loop = ($wrap.attr('data-loop') == 1 ) ? true : false;
            var nav = ($wrap.attr('data-nav') == 1 ) ? true : false;
            var dots = ($wrap.attr('data-dots') == 1 ) ? true : false;

            if($tmslider.length > 0){
                $tmslider.owlCarousel({
                    autoplay: autoplay,
                    loop: loop,
                    margin: 30,
                    responsiveClass: true,
                    nav: nav,
                    navText: ['<i class="dgita-right-arrow"></i>', '<i class="dgita-right-arrow"></i>'],
                    dots: dots,
                    responsive:{
                        0:{
                            items:1
                        },
                        768:{
                            items:2
                        },
                        992:{
                            items:3
                        },
                        1200:{
                            items:4
                        }
                    }
                });
            }
        });
    });
    
    /*--------------------------------------------------------
    / 3. Skills
    /----------------------------------------------------------*/
    $(window).on('elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction('frontend/element_ready/tw-skills.default', function($scope, $) {
            var $wrap = $scope.find('.single_skill');
            $wrap.appear();
            $wrap.on('appear', loadSkills);
        });
    });
    var coun = true;
    function loadSkills(){
        $(".single_skill").each(function() {
            var $this = $(this);
            if(!$this.hasClass('completed')){
                var $this = $(this);
                var datacount = $(this).attr("data-parcent");
                $(".ss_child", this).animate({'width': datacount + '%'}, 2000);
                $(".ss_parent span", this).animate({'left': datacount + '%'}, 2000);
                if (coun){
                $(this).find('.ss_parent span').each(function () {
                    var $this = $(this);
                    $({Counter: 0}).animate({Counter: datacount}, {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter) + '%');
                        }
                    });
                });
            }
                $this.addClass('completed');
            }
        });
        coun = false;
    }
    
    /*--------------------------------------------------------
    / 4. Stretch Column
    /---------------------------------------------------------*/
    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/tw-stratch-image.default', function ($scope, $) {
            var strech = $scope.find('.tw-stretch-element-inside-column');
            if (!strech.length) {
                return;
            }
            tw_stretch();
        });
    });
    function tw_stretch() {
        var i = $(window).width();
        $(".elementor-section .tw-stretch-element-inside-column").each(function () {
            var $this = $(this),
                    row = $this.closest(".elementor-container"),
                    cols = $this.closest('.elementor-widget-container'),
                    rect = this.getBoundingClientRect(),
                    l = row[0].getBoundingClientRect(),
                    s = cols[0].getBoundingClientRect(),
                    r = rect.left,
                    d = i - rect.right,
                    c = l.left + (parseFloat(row.css("padding-left")) || 0),
                    u = i - l.right + (parseFloat(row.css("padding-right")) || 0),
                    p = s.left,
                    f = i - s.right,
                    styles = {
                        "margin-left": 0,
                        "margin-right": 0
                    };
            if (Math.round(c) === Math.round(p)) {
                var h = parseFloat($this.css("margin-left") || 0);
                styles["margin-left"] = h - r;
            }
            if (Math.round(u) === Math.round(f)) {
                var w = parseFloat($this.css("margin-right") || 0);
                styles["margin-right"] = w - d;
            }
            $this.css(styles);
        });
    }
    
    /*--------------------------------------------------------
    / 5. Fun Fact Count
    /---------------------------------------------------------*/
    $('.funfact').appear();
    $(document.body).on('appear', '.funfact', function(e, $affected) {
        $affected.each(function() {
            var $this = $(this);
            if(!$this.hasClass('appeared')){
                jQuery({Counter: 0}).animate({Counter: $this.attr('data-count')}, {
                    duration: 3000,
                    easing: 'swing',
                    step: function () {
                        var num = Math.ceil(this.Counter).toString();
                        $('.counter', $this).html(num);
                    }
                });
                $this.addClass('appeared');
            }
        });
    });
    
    /*--------------------------------------------------------
    / 6. Back To Top
    /---------------------------------------------------------*/
    var back = $("#backtotop"),
            body = $("body, html");
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > $(window).height()) {
            back.css({bottom: '30px', opacity: '1', visibility: 'visible'});
        } else {
            back.css({bottom: '-30px', opacity: '0', visibility: 'hidden'});
        }
    });
    body.on("click", "#backtotop", function (e) {
        e.preventDefault();
        body.animate({scrollTop: 0}, 800);
        return false;
    });
    
    /*--------------------------------------------------------
    / 7. All PopUP
    /--------------------------------------------------------*/
    popup_video.lightcase({
        transition: 'elastic',
        showSequenceInfo: false,
        slideshow: false,
        swipe: true,
        showTitle: false,
        showCaption: false,
        controls: true
    });
    popup_img.lightcase({
        transition: 'elastic',
        showSequenceInfo: false,
        slideshow: true,
        swipe: true,
        showTitle: false,
        controls: true
    });
    
    $(window).on('load', function(){
        if ($(".shaff_grid").length > 0){
            var $grid = $('.shaff_grid');
            var shaff_inst = $grid.shuffle({
                itemSelector: '.shaff_item'
            });
            $('.shaff_filter li').on('click', function() {
                $('.shaff_filter li').removeClass('active');
                $(this).addClass('active');
                var groupName = $(this).attr('data-group');
                shaff_inst = $grid.shuffle('shuffle', groupName);
            });
        }
    });
    
    /*--------------------------------------------------------
    / 8. Sticky Header
    /---------------------------------------------------------*/
    if ($(".isSticky").length > 0) {
        var header_height = $(".isSticky").height();
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 300) {
                $(".isSticky").addClass('fixedHeader animated slideInDown');
            } else {
                $(".isSticky").removeClass('fixedHeader animated slideInDown');
            }
        });
    }
    
    /*--------------------------------------------------------
    / 9. Mobile Menu
    /---------------------------------------------------------*/
    $('.mainMenu ul li.menu-item-has-children > a').on('click', function(e){
        e.preventDefault();
        $(this).siblings('ul').slideToggle();
    });
    $('.menu_btn').on('click', function(e){
        e.preventDefault();
        $('.mainMenu').slideToggle();
        $(this).toggleClass('active');
    });
    
    /*--------------------------------------------------------
    / 10. Preloader
    /---------------------------------------------------------*/
    $(window).on('load', function () {
        var preload = $('.preloader');
        if (preload.length > 0) {
            preload.delay(800).fadeOut('slow');
        }
    });
    /*--------------------------------------------------------
    / 11. Google Maps
    /----------------------------------------------------------*/
    $( window ).on( 'elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction( 'frontend/element_ready/tw-google-map.default', function($scope, $){
            var $gmap = $scope.find( '.google_map' );
            if ( ! $gmap.length ) {
                return;
            }
            $gmap.each(function(){
                var $this = $(this);
                var gmapid = $this.attr('id');
                var $g_map_this = $('#'+gmapid);

                var marker = $g_map_this.attr('data-marker');
                var zoom = parseInt($g_map_this.attr('data-zoom'), 10);
                var style = parseInt($g_map_this.attr('data-map-style'), 10);
                
                var coordinates = $g_map_this.attr('data-coordinates');
                var coordinates = $.parseJSON(coordinates);
                var primary_lat = '';
                var primary_lon = '';
                var i = 1;
                for (let value of Object.values(coordinates)) {
                    if(i == 1){
                        primary_lat = value.lati;
                        primary_lon = value.long;
                    }
                   i++;
                }

                var map;
                map = new GMaps({
                    el: '#'+gmapid,
                    lat: primary_lat,
                    lng: primary_lon,
                    scrollwheel: false,
                    zoom: zoom,
                    zoomControl: false,
                    panControl: false,
                    streetViewControl: false,
                    mapTypeControl: false,
                    overviewMapControl: false,
                    clickable: false
                });
                var image = "";
                var i = 1;
                for (let value of Object.values(coordinates)) {
                    if(i == 1){
                        map.addMarker({
                            lat: value.lati,
                            lng: value.long,
                            icon: marker,
                            animation: google.maps.Animation.DROP,
                            verticalAlign: "bottom",
                            horizontalAlign: "center",
                            backgroundColor: "#d3cfcf"
                        });
                    }else{
                        map.addMarker({
                            lat: value.lati,
                            lng: value.long,
                            icon: marker,
                            animation: google.maps.Animation.DROP,
                            backgroundColor: "#d3cfcf"
                        });
                    }
                   i++;
                }
                if(style != 1){
                    var styles = [
                        {
                            "featureType": "road",
                            "stylers": [
                                {"color": "#d3cfcf"}
                            ]
                        }, {
                            "featureType": "water",
                            "stylers": [
                                {"color": "#aacbd9"}
                            ]
                        }, {
                            "featureType": "landscape",
                            "stylers": [
                                {"color": "#f5f5f5"}
                            ]
                        }, {
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {"color": "#2c2c2c"}
                            ]
                        }, {
                            "featureType": "poi",
                            "stylers": [
                                {"color": "#c9c9c9"}
                            ]
                        }, {
                            "elementType": "labels.text",
                            "stylers": [
                                {"saturation": 1},
                                {"weight": 0.1},
                                {"color": "#252525"}
                            ]
                        }
                    ];
                    map.addStyle({
                        styledMapName : "Styled Map",
                        styles : styles,
                        mapTypeId : "map_style"
                    });
                    map.setStyle("map_style");
                }
            });
        });
    });

})(jQuery);