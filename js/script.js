// Project 3 JavaScript for Google Map.
// Three Features Implemented:
//   1. Gold Star Marker.
//   2. Tool Bar to place Marker, Circle, Rectangle, etc on the Map.
//   3. Pop Up Info Message with Title when hovering over the Marker.

// Map Initialization.
function init() {
	// alert('it works');
  // Set up the Map with various options.
	var canvas_element = document.getElementById('map-canvas');
  var myLocation = new google.maps.LatLng(10.779790, 106.699012); // Ho Chi Minh City
	var mapOptions = {
		center: myLocation,
		zoom: 13,
		mapTypeId: 'hybrid',
    mapTypeControl: true,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.LEFT_TOP,
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      mapTypeIds: ['roadmap', 'terrain', 'hybrid', 'satellite']
		},
	};

  // Form a goldstar for the map
  const goldStar = {
    path:
      "M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z",
    fillColor: "yellow",
    fillOpacity: 0.8,
    scale: 0.15,
    strokeColor: "gold",
    strokeWeight: 14,
  };

  // Create the map
  var myMap = new google.maps.Map(canvas_element, mapOptions);

  // Create the marker on the map
	var marker = new google.maps.Marker({
		position: myLocation,
    title: "Ho Chi Minh City (Saigon)",
    icon: goldStar, // Use the Goldstar created earlier
		map: myMap,
	});

  // Create a string to write info message to the map window
	var contentString = '<h1 id="h1map">Ho Chi Minh City</h1><p id="pmap">It is the largest city situated in \
    the South of Vietnam and is also known as Saigon.</p>';

	var infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 200, // Limit the message size so it's not too big.
	});

  // Write an info messgae when mouse over on the marker.
	google.maps.event.addListener(marker, 'mouseover', function() {
    	infowindow.open(myMap, marker);
	});

  // Enable Drawing Tool at the top of the Map.
  const drawingManager = new google.maps.drawing.DrawingManager({
    drawingControl: true,
    drawingControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER,
      drawingModes: [
        google.maps.drawing.OverlayType.MARKER,
        google.maps.drawing.OverlayType.CIRCLE,
        google.maps.drawing.OverlayType.POLYGON,
        google.maps.drawing.OverlayType.POLYLINE,
        google.maps.drawing.OverlayType.RECTANGLE,
      ],
    },
    markerOptions: {
      icon:
        "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    },
    circleOptions: {
      fillColor: "#ffff00",
      fillOpacity: 1,
      strokeWeight: 5,
      clickable: false,
      editable: true,
      zIndex: 1,
    },
  });

  drawingManager.setMap(myMap); // Create the Drawing Tool at the top of the Map.
}

// Box Slider with auto play
$(document).ready(function(){
  $('.bxslider').bxSlider({
    mode: 'vertical',
    auto: true,
    autoControls: true,
    stopAutoOnClick: true,
    pager: true,
    controls: true,
  });
});
