
    window.onload = function(){
    var mymap = document.getElementById('map');
    var latlng = new google.maps.LatLng(37.4946577,127.0306391);
    var gmap = new google.maps.Map(
    mymap, {
    zoom: 16,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
});
    // ICON pointer
    var marker = new google.maps.Marker({
    position: latlng,
    map: gmap,
    title:'모노라움'
});
};
