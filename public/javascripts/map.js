$(document).ready(function() {
	var latlng = new google.maps.LatLng(-37.818806, 144.959046);
	var mapOptions = {
	          zoom: 16,
	          scrollwheel: false,
	          center: {lat: -37.817863, lng: 144.952563},
	          styles: [{
	            stylers:[
	            { hue: "#00c775" },
							{ lightness: -70 },
	            { saturation: 90 }
	            ]
	          }]
	        };
	var map = new google.maps.Map( $('.map')[0], mapOptions );

	var image = 'images/map-marker-white.png';
	var marker = new google.maps.Marker({
		position: latlng,
		icon: image
	});
	marker.setMap(map);
});
