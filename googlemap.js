function iniciarMap(){
    var coord = {lat:-17.7577763 ,lng: -63.1652402};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
