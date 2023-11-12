/* -------------------------------------
		CUSTOM FUNCTION WRITE HERE
-------------------------------------- */

jQuery(document).on('ready', function () {

	//SMOOTH SCROLL
	(function($) {
		$("html" ).css('scroll-behavior','smooth');
	})(jQuery);

	// Mobile menu

    // product filter in mobile
    $('#mobile_filter_btn').on('click', function () {
        $('.filter_box').toggleClass('active')
    })

    $('.close_filter').on('click', function () {
        $('.filter_box').removeClass('active')
    })

    // search for mobile
    $('#src_icon').on('click', function () {
        // $('.mobile_search_bar').addClass('active'),
        $('.mobile_search_bar').css({"visibility":"visible", "transform":"translateY(0%)", "transition":".4s ease-in-out"})
    })

    $('#close_mbsearch').on('click', function () {
        // $('.mobile_search_bar').removeClass('active')
        $('.mobile_search_bar').css({"visibility":"invisible", "transform":"translateY(-100%)"})
    })

	// search suggest no use
    $('#show_suggest').on('focus',function(){
        // $('.search_suggest').addClass('active')
        $('.search_suggest').css({"visibility":"visible", "opacity":"1", "margin-top":"0"})
    })
    $('#show_suggest').on('focusout',function(){
        // $('.search_suggest').removeClass('active')
        $('.search_suggest').css({"visibility":"invisible", "opacity":"0", "margin-top":"10px"})
    })

	// Mobile categories
    $('.singlecats.withsub span').click(function () {
        if ($(this).closest('.singlecats').hasClass('active')) {
            $(this).closest('.singlecats').removeClass('active')
            $('.mega_menu_wrap').removeClass('active')
        } else {
            $('.singlecats').removeClass('active')
            $(this).closest('.singlecats').addClass('active')
        }
    })

    $('.mega_menu_wrap h4').click(function () {
        if ($(this).closest('.mega_menu_wrap').hasClass('active')) {
            $(this).closest('.mega_menu_wrap').removeClass('active')
        } else {
            $('.mega_menu_wrap').removeClass('active')
            $(this).closest('.mega_menu_wrap').addClass('active')
        }
    })

    $('.all_category .bars, .open_category').click(function () {
        $('#mobile_catwrap').addClass('active')
    })
        
    $('#catclose').click(function () {
        $('#mobile_catwrap').removeClass('active')
    })

    // Menu
    $('.open_menu').click(function () {
        $('#mobile_menwrap').addClass('active')
    })

    $('#menuclose').click(function () {
        $('#mobile_menwrap').removeClass('active')
    })

    // mobile cart
    $('#openCart').click(function () {
        $('#mobileCart').addClass('active')
    })

    $('#mobileCartClose').click(function () {
        $('#mobileCart').removeClass('active')
    })

    // outside click handle
    $(document).on('click', function(e){
        if(e.target.id==='mobile_menwrap'){
            $('#mobile_menwrap').removeClass('active')
        }
        if(e.target.id==='mobile_catwrap'){
            $('#mobile_catwrap').removeClass('active')
            $('.singlecats').removeClass('active')
            $('.mega_menu_wrap').removeClass('active')
        }
        if(e.target.id==='mobileCart'){
            $('#mobileCart').removeClass('active');
        }

        $('.acprof-wrap').removeClass('active')
    })

    // my account sidebar
    $('.profile_hambarg').on('click', function(e){
        e.stopPropagation();
        $('.acprof-wrap').toggleClass('active')
    })

    $('.acprof-wrap').on('click', function(e){
        e.stopPropagation();
    })

    // mobile submenu
    $('.mobile_menu_2 .withsub').on('click', function(){
        if($(this).hasClass('active')){
            $('.mobile_menu_2 .withsub').removeClass('active')
        }else{
            $('.mobile_menu_2 .withsub').removeClass('active')
            $(this).addClass('active')
        }
    })

    /* -------------------------------------
			ACCORDION
	-------------------------------------- */
	$(".faq-acordion .accordion-title").click(function () {
		$(".accordion-title").not(this).removeClass("open");
		$(".accordion-title").not(this).next().slideUp(300);
		$(this).toggleClass("open");
		$(this).next().slideToggle(300);
	});



	/* -------------------------------------
			BACK TO TOP BUTTON
	-------------------------------------- */
    $(window).on("scroll", function(e) {
        if ($(this).scrollTop() > 0) {
            $('#back-to-top').fadeIn('slow');
        } else {
            $('#back-to-top').fadeOut('slow');
        }
    });
    $(document).on("click", "#back-to-top", function(e) {
        $("html, body").animate({
            scrollTop: 0
        }, 0);
        return false;
    });

	/* -------------------------------------
			TEAM SLIDER
	-------------------------------------- */
	var _tg_teamSlider = jQuery('.team-slider');
	_tg_teamSlider.owlCarousel({
		nav: true,
		loop: true,
		dots: false,
		margin: 20,
		responsiveClass: true,
		autoplay: true,
		autoplayHoverPause: true,
		autoplayTimeout: 3000, 
		smartSpeed: 250,
		navText: [
			'<i class="las la-angle-left"></i>',
			'<i class="las la-angle-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
				nav: true,
			},
			641: {
				items: 2,
				nav: true,
			},
			768: {
				items: 2,
				nav: true,
			},
			991: {
				items: 3,
				nav: true,
			},
			1200: {
				items: 4,
				nav: true,
			}
		}
	});

    /* -------------------------------------
			banner SLIDER
	-------------------------------------- */
	var _tg_bannerSlider = jQuery('.banner-slider');
	_tg_bannerSlider.owlCarousel({
		nav: true,
		loop: true,
		dots: true,
		margin: 0,
		responsiveClass: true,
		autoplay: true,
		autoplayHoverPause: false,
		smartSpeed: 250,
		navText: [
			'<i class="las la-angle-left"></i>',
			'<i class="las la-angle-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
				nav: true,
			},
			1920: {
				items: 1,
				nav: true,
			}
		}
	});

});



