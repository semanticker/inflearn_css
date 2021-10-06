/* map */
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

$(document).ready(function(){
    /* method1 */
    /*$('#header .lnb').hide();
    $('.btn_nav').click(function(){
        $('#header .lnb').slideToggle(500);
    });*/

    /*  */
    $('#header .lnb').css({
        left:'-100%',
        opacity: 0
    });

    $('.btn_nav').click(function(){

        if($('#header .lnb').hasClass('active')){
            $('#header .lnb').animate({
                left:'-100%',
                opacity: '0'
            }).removeClass('active');
        }else {
            $('#header .lnb').animate({
                left:'0',
                opacity: '1'
            }).addClass('active');
        }
    });


});
