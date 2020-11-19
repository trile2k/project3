

// function initMap() {
//   alert('it works');
//   var map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: -34.397, lng: 150.644},
//     zoom: 8
//   });
// }

function init() {
	// alert('it works');
	var el = document.getElementById('canvas');
	// var myLocation = new google.maps.LatLng(41.835117, -87.627130);
  var myLocation = new google.maps.LatLng(10.779790, 106.699012);
	var mapOptions = {
		center: myLocation,
		zoom: 14,
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		}
	};

	var myMap = new google.maps.Map(el, mapOptions);

	var marker = new google.maps.Marker({
		position: myLocation,
		map: myMap
		// animation: google.maps.Animation.BOUNCE,
		// icon: 'iit-icon.png'
	});

	var contentString = '<h1>Ho Chi Minh City</h1><p>It is the largest city situated in \
    the South of Vietnam and is also known as Saigon.</p>';

	var infowindow = new google.maps.InfoWindow({
      content: contentString
	});

	google.maps.event.addListener(marker, 'mouseover', function() {
    	infowindow.open(myMap, marker);
	});

}

google.maps.event.addDomListener(window, 'load', init);
