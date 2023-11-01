(function ($) {
	"use strict";

	//tab
	tabActiveFun(document.querySelectorAll('.shop-tab-links ul li'), document.querySelectorAll('.shop-tab-item'))
	tabActiveFun(document.querySelectorAll('.product3-tab-links ul li'), document.querySelectorAll('.product3-tab-item'))

	function tabActiveFun(tabLinks, tabItems) {
		
		tabLinks.forEach((link,index) => {
			link.addEventListener('click', ()=>{
				for (let i = 0; i < tabLinks.length; i++) {
					tabLinks[i].classList.remove('active')
				}
				for (let i = 0; i < tabItems.length; i++) {
					tabItems[i].classList.remove('active')
				}

				link.classList.add('active')
				tabItems[index].classList.add('active')
			})
		});
	}

		
	/*=========================
	magnificPopup image JS
	===========================*/
	$('.video-btn').magnificPopup({
		type: 'iframe'
	});

	$(".gallery-view").magnificPopup({
		type: "image",
		gallery: {
			enabled: true,
		},
	});
	$(".recipes-img > a").magnificPopup({
		type: "image",
		gallery: {
			enabled: true,
		},
	});
	$(".footer-gallery-item a").magnificPopup({
		type: "image",
		gallery: {
			enabled: true,
		},
	});

	/*=========================
	PRELOADER JS
	===========================*/
	$(window).on('load', function () {
		document.querySelector('.preloader').classList.add('hide')
	});

	// One Page Nav
	var top_offset = $('.header-area').height() - 170;
	$('.mainmenu ul, .sidebar-menu ul').onePageNav({
		scrollOffset: top_offset,
	});


	/*=========================
	HERO SLIDER JS
	===========================*/
	function heroSlider() {
		var BasicSlider = $('.hero-active-slider');
		BasicSlider.on('init', function (e, slick) {
			var $firstAnimatingElements = $('.single-hero-item:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.single-hero-item[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
		BasicSlider.slick({
			autoplay: false,
			autoplaySpeed: 10000,
			dots: false,
			fade: true,
			arrows: true,
			prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
			nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',
		});

		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function () {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function () {
					$this.removeClass($animationType);
				});
			});
		}
	}
	heroSlider();


	/*=========================
	product-active-slider
	===========================*/
	$('.product-active-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',

		responsive: [{
				breakpoint: 1201,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	/*=========================
	product2-active-slider
	===========================*/
	$('.product2-active-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',

		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	/*=========================
	product3-active-slider
	===========================*/
	$('.product3-active-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',

		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	/*=========================
	product4-active-slider
	===========================*/
	$('.product4-active-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',

		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
				}
			}
		]
	});

	/*=========================
	brand-active-slider
	===========================*/
	$('.brand-active-slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',

		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
				}
			}
		]
	});

	/*=========================
	resonsive-footer-gallery
	===========================*/
	$('.resonsive-footer-gallery').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',

		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
				}
			}
		]
	});

	/*=========================
	testimony-active-slider
	===========================*/
	$('.testimony-active-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',

	});


	
	// counting date function
	// Set the date we're counting down to event section
	var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
	const PreviewDate = document.querySelectorAll('.day')
	const PreviewHour = document.querySelectorAll('.hour')
	const PreviewMin = document.querySelectorAll('.min')
	const PreviewSec = document.querySelectorAll('.sec')

	// Update the count down every 1 second
	var x = setInterval(function() {

	// Get today's date and time
	var now = new Date().getTime();

	// Find the distance between now and the count down date
	var distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Display the result in the element with id="demo"
	PreviewDate.forEach(date => {
		date.innerHTML = days;
	});
	PreviewHour.forEach(hour => {
		hour.innerHTML = hours;
	});
	PreviewMin.forEach(min => {
		min.innerHTML = minutes;
	});
	PreviewSec.forEach(sec => {
		sec.innerHTML = seconds;
	});

	// If the count down is finished, write some text
	if (distance < 0) {
		clearInterval(x);
		PreviewDate.innerHTML = "00";
		PreviewHour.innerHTML = "00";
		PreviewMin.innerHTML = "00";
		PreviewSec.innerHTML = "00";
	}
	}, 1000);

		
	// Set the date we're counting down to discount section
	function discountDateCounter() {
		var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
		const PreviewDate = document.querySelectorAll('.dis-date')
		const PreviewHour = document.querySelectorAll('.dis-hour')
		const PreviewMin = document.querySelectorAll('.dis-min')
		const PreviewSec = document.querySelectorAll('.dis-sec')
	
		// Update the count down every 1 second
		var x = setInterval(function() {
	
		// Get today's date and time
		var now = new Date().getTime();
	
		// Find the distance between now and the count down date
		var distance = countDownDate - now;
	
		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	
		// Display the result in the element with id="demo"
		PreviewDate.forEach(date => {
			date.innerHTML = days;
		});
		PreviewHour.forEach(hour => {
			hour.innerHTML = hours;
		});
		PreviewMin.forEach(min => {
			min.innerHTML = minutes;
		});
		PreviewSec.forEach(sec => {
			sec.innerHTML = seconds;
		});
	
		// If the count down is finished, write some text
		if (distance < 0) {
			clearInterval(x);
			PreviewDate.innerHTML = "00";
			PreviewHour.innerHTML = "00";
			PreviewMin.innerHTML = "00";
			PreviewSec.innerHTML = "00";
		}
		}, 1000);
	};discountDateCounter();


	// reponsive menu
	const resBar = document.querySelectorAll('.humberger-bar, .resonsive-slide, .resonsive-slide-overlay')
	resBar.forEach(btn => {
		btn.addEventListener('click', ()=>{
			for (let i = 0; i < resBar.length; i++) {
				resBar[i].classList.toggle('active')
			}
		})
	});

	
	// sticky

	var wind = $(window);
	var sticky = $('.header-content-wrap');
	wind.on('load', function () {
		sticky.prev().height(sticky.outerHeight())
	})
	wind.on('resize', function () {
		sticky.prev().height(sticky.outerHeight())
	})
	wind.on('scroll', function () {
		var scroll = wind.scrollTop();
		if (scroll < 150) {
			sticky.removeClass('sticky');
		} else {
			sticky.addClass('sticky');
		}
	});
	

		// ANOTHER-SERVICE-JS
	$('.news-content-wrap > div:nth-child(odd) .news-content').addClass('');
	$('.news-content-wrap > div:nth-child(even) .news-content').addClass('flex-column-reverse');

   // niceSelect
   $('select').niceSelect();

	/*=========================
	SCROLL-UP JS
	===========================*/
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="fal fa-angle-double-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});

	/*=========================
	AOS JS
	===========================*/
	AOS.init({
		disable: "mobile", // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
		offset: 120, // offset (in px) from the original trigger point
		delay: 0, // values from 0 to 3000, with step 50ms
		duration: 1000, // values from 0 to 3000, with step 50ms
		easing: 'ease', // default easing for AOS animations
		once: true, // whether animation should happen only once - while scrolling down
	});

	// datepicker
	$( "#datepicker" ).datepicker();

	if (window.matchMedia('(max-width: 1500px)').matches) {
		$('.progress-circle-1').circleProgress({
			value: .75,
			size: 90,
			thickness: 2,
			emptyFill: 'transparent',
			fill: {
				gradient: ["#F78428", "#FA5A23"]
			}
		 }).on('circle-animation-progress', function(event, progress) {
			$(this).find('strong').html(Math.round(75 * progress) + '<i>%</i>');
		 });
	
		$('.progress-circle-2').circleProgress({
			value: .83,
			size: 90,
			thickness: 2,
			emptyFill: 'transparent',
			fill: {
				gradient: ["#F78428", "#FA5A23"]
			}
		 }).on('circle-animation-progress', function(event, progress) {
			$(this).find('strong').html(Math.round(83 * progress) + '<i>%</i>');
		 });
	
		$('.progress-circle-3').circleProgress({
			value: .95,
			size: 90,
			thickness: 2,
			emptyFill: 'transparent',
			fill: {
				gradient: ["#F78428", "#FA5A23"]
			}
		 }).on('circle-animation-progress', function(event, progress) {
			$(this).find('strong').html(Math.round(95 * progress) + '<i>%</i>');
		 });
	}else if (window.matchMedia('(max-width: 991px)').matches) {
		$('.progress-circle-1').circleProgress({
			value: .75,
			size: 70,
			thickness: 2,
			emptyFill: 'transparent',
			fill: {
				gradient: ["#F78428", "#FA5A23"]
			}
		}).on('circle-animation-progress', function(event, progress) {
			$(this).find('strong').html(Math.round(75 * progress) + '<i>%</i>');
		});

		$('.progress-circle-2').circleProgress({
			value: .83,
			size: 70,
			thickness: 2,
			emptyFill: 'transparent',
			fill: {
				gradient: ["#F78428", "#FA5A23"]
			}
		}).on('circle-animation-progress', function(event, progress) {
			$(this).find('strong').html(Math.round(83 * progress) + '<i>%</i>');
		});

		$('.progress-circle-3').circleProgress({
			value: .95,
			size: 70,
			thickness: 2,
			emptyFill: 'transparent',
			fill: {
				gradient: ["#F78428", "#FA5A23"]
			}
		}).on('circle-animation-progress', function(event, progress) {
			$(this).find('strong').html(Math.round(95 * progress) + '<i>%</i>');
		});
	} else {
		$('.progress-circle-1').circleProgress({
			value: .75,
			size: 110,
			thickness: 2,
			emptyFill: 'transparent',
			fill: {
				gradient: ["#F78428", "#FA5A23"]
			}
		}).on('circle-animation-progress', function(event, progress) {
			$(this).find('strong').html(Math.round(75 * progress) + '<i>%</i>');
		});

		$('.progress-circle-2').circleProgress({
			value: .83,
			size: 110,
			thickness: 2,
			emptyFill: 'transparent',
			fill: {
				gradient: ["#F78428", "#FA5A23"]
			}
		}).on('circle-animation-progress', function(event, progress) {
			$(this).find('strong').html(Math.round(83 * progress) + '<i>%</i>');
		});

		$('.progress-circle-3').circleProgress({
			value: .95,
			size: 110,
			thickness: 2,
			emptyFill: 'transparent',
			fill: {
				gradient: ["#F78428", "#FA5A23"]
			}
		}).on('circle-animation-progress', function(event, progress) {
			$(this).find('strong').html(Math.round(95 * progress) + '<i>%</i>');
		});
	}



	
})(jQuery);