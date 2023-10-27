new Swiper ('.swiper',{
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	/*centeredSlides: true,*/
	spaceBetween: 8,
	slidesPerView: 'auto',
	watchOverflow: true,
	initialSlide: 0,
	autoplay: {
		delay: 5000,
		stopOnLastSlide: false,
		disableOnIteration: false,
	},
	
	breakpoints: {
		320: {
			slidesPerView: 'auto',
		},
		800: {
			slidesPerView: 3,
		},
		1280: {
			slidesPerView: 4,
		},
		1600: {
			slidesPerView: 5,
		},
	}

});

$(document).ready(function() {
	$('.navigation-item__title').click(function(event) {
		if ($('.footer__navigation').hasClass('one')) {
			$('.navigation-item__title').not($(this)).removeClass('active');
			$('.navigation-item__body').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300)
	})
});

document.querySelector('.header__burger').onclick = function() {
	document.querySelector('.catalog').classList.toggle('catalog-active')
	document.querySelector('.header__burger').classList.toggle('active')
	$('body').toggleClass('lock')
}
