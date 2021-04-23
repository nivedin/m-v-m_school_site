/***************************************************************************************************************
||||||||||||||||||||||||||||        CUSTOM SCRIPT FOR Murcia            |||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
||||||||||||||||||||||||||||              TABLE OF CONTENT                  ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
****************************************************************************************************************
01. Revolution slider
02. Sticky header
03. Prealoader
04. Language switcher
05. prettyPhoto
06. BrandCarousel
07. Testimonial carousel
08. ScrollToTop 
09. Cart Touch Spin
10. PriceFilter
11. Cart touch spin
12. Fancybox activator
13. ContactFormValidation
14. Scoll to target
15. PrettyPhoto

****************************************************************************************************************
||||||||||||||||||||||||||||            End TABLE OF CONTENT                ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************/

 
"use strict";

//====Main menu===
function mainmenu() {
	//Submenu Dropdown Toggle
	if($('.main-menu li.dropdown ul').length){
		$('.main-menu li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
		
		//Dropdown Button
		$('.main-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});

        //Disable dropdown parent link
        $('.navigation li.dropdown > a').on('click', function(e) {
            e.preventDefault();
        });
	}
}


    //Main Slider Carousel
    if ($('.main-slider-carousel').length) {
        $('.main-slider-carousel').owlCarousel({
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            loop:true,
            margin:0,
            nav:true,
            autoHeight: true,
            smartSpeed: 500,
            autoplay: 6000,
            navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        });         
    }

//===Header Sticky===
function stickyHeader() {
    if ($('.stricky').length) {
        var strickyScrollPos = 100;
        if ($(window).scrollTop() > strickyScrollPos) {
            $('.stricky').addClass('stricky-fixed');
            $('.scroll-to-top').fadeIn(1500);
        } else if ($(this).scrollTop() <= strickyScrollPos) {
            $('.stricky').removeClass('stricky-fixed');
            $('.scroll-to-top').fadeOut(1500);
        }
    };
}

//Hidden Bar Menu Config
function hiddenBarMenuConfig() {
    var menuWrap = $('.hidden-bar .side-menu');
    // hidding submenu 
    menuWrap.find('.dropdown').children('ul').hide();
    // toggling child ul
    menuWrap.find('li.dropdown > a').each(function () {
        $(this).on('click', function (e) {
            e.preventDefault();
            $(this).parent('li.dropdown').children('ul').slideToggle();

            // adding class to item container
            $(this).parent().toggleClass('open');

            return false;

        });
    });
}

hiddenBarMenuConfig();

//Hidden Sidebar
if ($('.hidden-bar').length) {
    var hiddenBar = $('.hidden-bar');
    var hiddenBarOpener = $('.hidden-bar-opener');
    var hiddenBarCloser = $('.hidden-bar-closer');
    $('.hidden-bar-wrapper').mCustomScrollbar();
    
    //Show Sidebar
    hiddenBarOpener.on('click', function () {
        hiddenBar.addClass('visible-sidebar');
    });
    
    //Hide Sidebar
    hiddenBarCloser.on('click', function () {
        hiddenBar.removeClass('visible-sidebar');
    });    
}

//===scoll to Top===
function scrollToTop() {
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function() {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }
}

//===Search box ===
function searchbox() {
	//Search Box Toggle
	if($('.seach-toggle').length){
		//Dropdown Button
		$('.seach-toggle').on('click', function() {
			$(this).toggleClass('active');
			$(this).next('.search-box').toggleClass('now-visible');
		});
	}
}

//===Language switcher===
function languageSwitcher() {
    if ($("#polyglot-language-options").length) {
        $('#polyglotLanguageSwitcher').polyglotLanguageSwitcher({
            effect: 'fade',
            testMode: true,
            onChange: function(evt) {
                    alert("The selected language is: " + evt.selectedItem);
                }
                //                ,afterLoad: function(evt){
                //                    alert("The selected language has been loaded");
                //                },
                //                beforeOpen: function(evt){
                //                    alert("before open");
                //                },
                //                afterOpen: function(evt){
                //                    alert("after open");
                //                },
                //                beforeClose: function(evt){
                //                    alert("before close");
                //                },
                //                afterClose: function(evt){
                //                    alert("after close");
                //                }
        });
    };
}

//===Mixitup Gallery===
if($('.mixitup-gallery').length){
    $('.mixitup-gallery').mixItUp({});
}

//===Gallery Masonary===
function galleryMasonaryLayout() {
    if ($('.masonary-layout').length) {
        $('.masonary-layout').isotope({
            layoutMode: 'masonry'
        });
    }
    if ($('.post-filter').length) {
        $('.post-filter li').children('span').on('click', function() {
            var Self = $(this);
            var selector = Self.parent().attr('data-filter');
            $('.post-filter li').children('span').parent().removeClass('active');
            Self.parent().addClass('active');


            $('.filter-layout').isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    }
    if ($('.post-filter.has-dynamic-filter-counter').length) {
        // var allItem = $('.single-filter-item').length;

        var activeFilterItem = $('.post-filter.has-dynamic-filter-counter').find('li');

        activeFilterItem.each(function() {
            var filterElement = $(this).data('filter');
            console.log(filterElement);
            var count = $('.gallery-content').find(filterElement).length;

            $(this).children('span').append('<span class="count"><b>' + count + '</b></span>');
        });
    };
}

galleryMasonaryLayout();

//===Lightbox===
if($('.tabs-box').length){
    //Tabs
    $('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {        
        e.preventDefault();
        var target = $($(this).attr('href'));        
        target.parents('.tabs-box').children('.tab-buttons').children('.tab-btn').removeClass('active-btn');
        $(this).addClass('active-btn');
        target.parents('.tabs-box').children('.tab-content').children('.tab').fadeOut(0);
        target.parents('.tabs-box').children('.tab-content').children('.tab').removeClass('active-tab');
        $(target).fadeIn(300);
        $(target).addClass('active-tab');
    });    
}

//===Lightbox===
if($('.lightbox-image').length) {
    $('.lightbox-image').fancybox({
        openEffect  : 'elastic',
        closeEffect : 'elastic',
        helpers : {
            media : {}
        }
    });
}


//===Brand Carousel===
function brandCarousel () {
    if ($('.brand').length) {
        $('.brand').owlCarousel({
            dots: false,
            loop:true,
            margin:100,
            nav:true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            autoplayHoverPause: false,
            autoplay: 6000,
            smartSpeed: 1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                800:{
                    items:3
                },
                1024:{
                    items:4
                },
                1100:{
                    items:4
                },
                1200:{
                    items:5
                }
            }
        });    		
    }
}

//===services Slider===
function servicesSlider() {
    if ($('.services-carousel').length) {
        $('.services-carousel').owlCarousel({
            loop:true,
            margin:30,
            nav:true,
            dots: false,
            autoplayHoverPause:false,
            autoplay: 6000,
            smartSpeed: 700,
            navText: [ '<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>' ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1024:{
                    items:3
                },
                1200:{
                    items:4
                }
            }
        })
    }
}

//===services Slider===
function gellarySlider() {
    if ($('.gallery-carousel').length) {
        $('.gallery-carousel').owlCarousel({
            loop:true,
            margin:0,
            nav:true,
            dots: false,
            autoplayHoverPause:false,
            autoplay: 6000,
            smartSpeed: 700,
            navText: [ '<span class="fa fa-angle-left" aria-hidden="true"></span>', '<span class="fa fa-angle-right" aria-hidden="true"></span>' ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1024:{
                    items:3
                },
                1200:{
                    items:6
                }
            }
        })
    }
}

function singleProductCarousel () {
    if ($('.single-product-carousel-content-box').length && $('.single-product-carousel-thumbnail-box').length) {
        var $sync1 = $(".single-product-carousel-content-box"),
            $sync2 = $(".single-product-carousel-thumbnail-box"),
            flag = false,
            duration = 1000;
            $sync1
                .owlCarousel({
                    items: 1,
                    autoplay: true,
                    loop: true,
                    margin: 0,
                    nav: false,
                    dots: false
                })
                .on('changed.owl.carousel', function (e) {
                    if (!flag) {
                        flag = true;
                        $sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
                        flag = false;
                    }
                });
            $sync2
                .owlCarousel({
                    margin: 0,
                    items: 3,
                    nav: false,
                    dots: false,
                    center: false,
                    responsive: {
                        0:{
                            items:3,
                            autoWidth: false
                        },
                        480:{
                            items:2,
                            center: false,
                            autoWidth: false
                        },
                        600:{
                            items:3,
                            autoWidth: false
                        },
                    },
                })
                .on('click', '.owl-item', function () {
                    $sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);

                })
                .on('changed.owl.carousel', function (e) {
                    if (!flag) {
                        flag = true;        
                        $sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
                        flag = false;
                    }
                });

    };
}

//===Testimonial Slider===
function testimonialSlider() {
    if ($('.testimonial-carousel').length) {
        $('.testimonial-carousel').owlCarousel({
            loop:true,
            margin:0,
            nav:false,
            dots: true,
            autoplayHoverPause:false,
            autoplay: 6000,
            smartSpeed: 700,
            navText: [ '<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>' ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1024:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        })
    }
}

//===Countdown===
if ($('.countdown').length) {
    $('.countdown').countdown('2019/5/25', function (event) {
        var $this = $(this).html(event.strftime('' + '<div class="counter-column"><span class="count">%D</span><br>Days</div> ' + '<div class="counter-column"><span class="count">%H</span><span class="colon"></span><br>Hours</div>  ' + '<div class="counter-column"><span class="count">%M</span><span class="colon"></span><br>Mutines</div>  ' + '<div class="counter-column"><span class="count">%S</span><span class="colon"></span><br>Seconds</div>'));
    });
}

//===Fact counter===
function CounterNumberChanger () {
	var timer = $('.timer');
	if(timer.length) {
		timer.appear(function () {
			timer.countTo();
		})
	}
}

//=== Tool tip ===
function tooltip () {
	if ($('.tool_tip').length) {
			$('.tool_tip').tooltip();
		};
	$
}

//=== Accordion ===
function accordion() {
    if($('.accordion-box').length){
        $('.accordion-box .accord-btn').on('click', function() {
            if($(this).hasClass('active')!==true){
            $('.accordion-box .accord-btn').removeClass('active');
        }

        if ($(this).next('.accord-content').is(':visible')){
            $(this).removeClass('active');
            $(this).next('.accord-content').slideUp(500);
        }

        else{
            $(this).addClass('active');
            $('.accordion-box .accord-content').slideUp(500);
            $(this).next('.accord-content').slideDown(500); 
        }
        });
    }
}

//=== Cart Touch Spin ===
function cartTouchSpin () {
    if($('.quantity-spinner').length){
        $("input.quantity-spinner").TouchSpin({
          verticalbuttons: true
        });
    }
}

//=== Select menu === 
function selectDropdown () {
  if($(".selectmenu").length) {
    $( ".selectmenu" ).selectmenu();
  };
}

//=== Price Filter===
function priceFilter() {
    if ($('.price-ranger').length) {
        $('.price-ranger #slider-range').slider({
            range: true,
            min: 10,
            max: 200,
            values: [11, 99],
            slide: function(event, ui) {
                $('.price-ranger .ranger-min-max-block .min').val('$' + ui.values[0]);
                $('.price-ranger .ranger-min-max-block .max').val('$' + ui.values[1]);
            }
        });
        $('.price-ranger .ranger-min-max-block .min').val('$' + $('.price-ranger #slider-range').slider('values', 0));
        $('.price-ranger .ranger-min-max-block .max').val('$' + $('.price-ranger #slider-range').slider('values', 1));
    };
}

//=== Prealoder===
function prealoader() {
    if($('.preloader').length){
        $('.preloader').delay(200).fadeOut(500);
    }
}
 
// ===Date picker ===
function datepicker () {
    if ($('#datepicker').length) {
        $('#datepicker').datepicker();
    };
}

//=== Time picker===
function timepicker () {
    $('input[name="time"]').ptTimeSelect();
}	

//=== Thm scroll anim===
function thmScrollAnim() {
    if ($('.wow').length) {
        var wow = new WOW({
            mobile: false
        });
        wow.init();
    };
}

//=== Contact Form Validation ===
if($("#contact-form").length){
    $("#contact-form").validate({
        submitHandler: function(form) {
          var form_btn = $(form).find('button[type="submit"]');
          var form_result_div = '#form-result';
          $(form_result_div).remove();
          form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
          var form_btn_old_msg = form_btn.html();
          form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
          $(form).ajaxSubmit({
            dataType:  'json',
            success: function(data) {
              if( data.status == 'true' ) {
                $(form).find('.form-control').val('');
              }
              form_btn.prop('disabled', false).html(form_btn_old_msg);
              $(form_result_div).html(data.message).fadeIn('slow');
              setTimeout(function(){ $(form_result_div).fadeOut('slow') }, 6000);
            }
          });
        }
    });
}

//=== Contact Form Validation ===
if($("#contact-form1").length){
    $("#contact-form1").validate({
        submitHandler: function(form) {
          var form_btn = $(form).find('button[type="submit"]');
          var form_result_div = '#form-result';
          $(form_result_div).remove();
          form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
          var form_btn_old_msg = form_btn.html();
          form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
          $(form).ajaxSubmit({
            dataType:  'json',
            success: function(data) {
              if( data.status == 'true' ) {
                $(form).find('.form-control').val('');
              }
              form_btn.prop('disabled', false).html(form_btn_old_msg);
              $(form_result_div).html(data.message).fadeIn('slow');
              setTimeout(function(){ $(form_result_div).fadeOut('slow') }, 6000);
            }
          });
        }
    });
}

// Dom Ready Function
jQuery(document).on('ready', function () {
	(function ($) {
        // add your functions
        mainmenu ();
        languageSwitcher ();
        brandCarousel ();
        servicesSlider ();
        gellarySlider();
        testimonialSlider ();
        scrollToTop ();
        CounterNumberChanger ();
        accordion ();
        selectDropdown ();
        searchbox ();
        tooltip ();
        thmScrollAnim(); 
        singleProductCarousel (); 
        cartTouchSpin ();
	})(jQuery);
});

// Scroll Function
jQuery(window).on('scroll', function(){
	(function ($) {
	stickyHeader();    
	})(jQuery);
});

// Instance Of Fuction while Window Load event
jQuery(window).on('load', function() {
    (function($) {
        galleryMasonaryLayout();
        prealoader ();        
    })(jQuery);
});



