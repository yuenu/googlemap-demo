
// Initialize and add the map
function initMap() {
  const position = {
    lat: 25.0336962,
    lng: 121.5643673
  };
  
  const polylinePathPoints = [
    {lat: 25.0336962, lng: 121.5643673},
    {lat: 25.033755, lng: 121.565412},
    {lat: 25.031985, lng: 121.565380},
    {lat: 25.032083, lng: 121.561324},
    {lat: 25.033881, lng: 121.561351},
    {lat: 25.034338, lng: 121.560514},
    {lat: 25.029584, lng: 121.557531},
    {lat: 25.033161, lng: 121.557542},
    {lat: 25.033297, lng: 121.552521},
    {lat: 25.036148, lng: 121.552578},
  ];
  

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: position,
  });

  const marker = new google.maps.Marker({
    position: position,
    map: map,
  });


  const polylinePath = new google.maps.Polyline({
    path: polylinePathPoints,
    geodesic: true,
    strokeColor: '#7f5539',
    strokeOpacity: 0.8,
    strokeWeight: 10,
    editable: true,
    geodesic: false,
    draggable: false
  });

  polylinePath.setMap(map);

}