$(document).ready(function () {
	$('.card-carousel').slick({
		arrows: false,
		slidesToShow: 5,
		autoPlaySpeed: 1500,
		autoplay: true,
		cssEase: 'ease-in-out',
		infinite: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	})
})
