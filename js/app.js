/**
 * Created by Tarek AlQaddy on 2/7/2017.
 */
//TODO: alt images

$(document).ready(function () {
    $(".rslides").responsiveSlides({
        timeout:3000,
        pause:true
    });
});
//Google Maps
function initMap(){
    var alqaddy = {lat: 31.1976082, lng:29.9248398};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: alqaddy,
        scrollwheel:false
    });
    var marker = new google.maps.Marker({
        position: alqaddy,
        map: map
    });
}

// wow js
var wow = new WOW({
    mobile:false,
    offset:120
});
wow.init();