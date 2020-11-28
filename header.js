var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
		delay: 3000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
		reverseDirection: false
	},
    pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
    }
    
});