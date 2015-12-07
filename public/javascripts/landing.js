// parallax hard coded. need to change to accomodate where th containers are
$(document).ready(function() {
	$(window).scroll(function() {

		var wScroll = $(this).scrollTop();
		console.log(wScroll);

		if (wScroll > 115) {
			$('#about p').addClass('show');
		}

		if (wScroll > 370) {
			$('div.speaker:lt(3)').each(function(index) {
				setTimeout(function() {
					$('div.speaker').eq(index).addClass('show');
				}, 200 * (index + 2));
			});
		}

		if (wScroll > 600) {
			$('div.speaker:lt(3)').each(function(index) {
				setTimeout(function() {
					$('div.speaker').eq(index + 3).addClass('show');
				}, 200 * (index + 2));
			});
		}

	});
});