// Display Google Map of location - requires API call
$(document).ready(function() {
	var latlng = new google.maps.LatLng(-37.818806, 144.959046); // specify location to be displayed

	var mapOptions = {
    zoom: 16,
    scrollwheel: false,
		disableDefaultUI: true,
    center: {lat: -37.817863, lng: 144.952563}, // change center to be left of actual location
    styles: [{
      stylers:[ // green overlay to match color scheme
      { hue: "#00c775" },
			{ lightness: -70 },
      { saturation: 90 }
      ]
    }]
  };

	var map = new google.maps.Map( $('.map')[0], mapOptions ); // insert new map into map <div>

	var image = 'images/map-marker-white.png'; // custom map marker
	var marker = new google.maps.Marker({
		position: latlng,
		icon: image
	});
	marker.setMap(map);
});
