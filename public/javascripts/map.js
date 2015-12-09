$(document).ready(function() {
	var latlng = new google.maps.LatLng(-37.8185768, 144.9590125);
	var mapOptions = {
	          zoom: 14,
	          scrollwheel: false,
	          center: latlng,
	          styles: [{
	            stylers:[
	            { hue: "#00ffe6" },
	            { saturation: -20 }
	            ]
	          }]
	        };
	var map = new google.maps.Map( $('.map')[0], mapOptions );

	var marker = new google.maps.Marker({
		position: latlng
	});
	marker.setMap(map);
});

