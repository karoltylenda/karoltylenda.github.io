$(document).ready(function () {
	$('.card-carousel').slick({
		arrows: false,
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 5,
		autoPlaySpeed: 1500,
		autoplay: true,
		cssEase: 'ease-in-out',
		infinite: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1,
				},
			},
		],
	})
})
