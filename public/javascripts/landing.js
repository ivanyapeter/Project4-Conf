// parallax hard coded. need to change to accomodate where th containers are
$(document).ready(function() {

// PARALLAX SCROLLING
	$(window).scroll(function() {

		var wScroll = $(this).scrollTop();
		console.log(wScroll);

		$('.video-overlay-contents').css({
			'opacity': 1 - (wScroll/477)
		});

		if (wScroll > 300) {
			$('.about-section-body').addClass('show');
		}

		if (wScroll > 1000) {
			$('div.speaker').each(function(index) {
				setTimeout(function() {
					$('div.speaker').eq(index).addClass('show');
				}, 200 * (index + 1));
			});
		}

	});

});
