// parallax hard coded. need to change to accomodate where th containers are
$(document).ready(function() {
	
// PARALLAX SCROLLING
	$(window).scroll(function() {

		var wScroll = $(this).scrollTop();
		console.log(wScroll);

		if (wScroll > 115) {
			$('#about p').addClass('show');
		}

		if (wScroll > 370) {
			$('div.speaker').each(function(index) {
				setTimeout(function() {
					$('div.speaker').eq(index).addClass('show');
				}, 200 * (index + 1));
			});
		}

	});

});