var map;
function initMap(position = null) {

    let latLong = (position === null) ? {lat: -34.397, lng: 150.644} : position;
    map = new google.maps.Map(document.getElementById('map'), {
        center: latLong,
        zoom: 8
    });

    marker = new google.maps.Marker({position: latLong, map: map});
}

$(document).ready(function () {

    $('#location').on('submit', function (e) {
        var location = $('#location_input').val();

        $.getJSON( {
            url  : 'https://maps.googleapis.com/maps/api/geocode/json',
            data : {
                sensor  : false,
                address : location
            },
            success : function( data, textStatus ) {
                initMap({lat: data.results[0].geometry.location.lat, lng: data.results[0].geometry.location.lng })
            }
        } );
        e.preventDefault();
    });

})
