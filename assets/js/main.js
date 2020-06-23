jQuery(function ($) {
	'use strict';


	// Wow  JS
	new WOW({
		offset: 100,
		mobile: true
	}).init();

	// Popup Video
	$('.popup-youtube').magnificPopup({
		disableOn: 320,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	new fullpage('#fullpage', {
		lockAnchors: false,
		anchors: ['home', 'outfit', 'shop', 'product' ,'contact'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['Home', 'Outfit', 'Shop', 'Product' ,'Contact'],
		showActiveTooltip: true,
		slidesNavigation: true,
		slidesNavPosition: 'bottom',
		controlArrows: true,
		parallax: true,
		parallaxOptions: { type: 'reveal', percentage: 62, property: 'translate' },
		cards: true,
		cardsOptions: { perspective: 100, fadeContent: true, fadeBackground: true },
		scrollingSpeed: 1000,
		//events
	});


	$('.image-pop').magnificPopup({
		type: 'image',
		removalDelay: 300,
		gallery: {
			enabled: true
		},
	});


}(jQuery));
