function initMap() {
    // Set the coordinates for your location
    var coordinates = { lat: 40.7128, lng: -74.0060 };
    
    // Create a new map centered at the given coordinates
    var map = new google.maps.Map(document.getElementById('map'), {
      center: coordinates,
      zoom: 12
    });
    
    // Create a marker at the given coordinates
    var marker = new google.maps.Marker({
      position: coordinates,
      map: map
    });
  }
  