$(document).ready(function () {
    $("a.gallery").fancybox(
        {});
    $('#myModal').on('show', function (e) {
        if (!data) return e.preventDefault() // Закрытие модального окна (точнее предотвращение его открытия)
    })
   $(function() {

        $(window).scroll(function() {

            if($(this).scrollTop() != 0) {

                $('#toTop').fadeIn();

            } else {

                $('#toTop').fadeOut();
            }

        });

        $('#toTop').click(function() {

            $('body,html').animate({scrollTop:0},800);

        });

    });

});
function initMap() {
       var styles = [
        {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [
                {
                    saturation: 36
                },
                {
                    color: "#000000"
                },
                {
                    lightness: 40
                }
            ]
        },
        {
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: [
                {
                    visibility: "on"
                },
                {
                    color: "#000000"
                },
                {
                    lightness: 16
                }
            ]
        },
        {
            featureType: "all",
            elementType: "labels.icon",
            stylers: [
                {
                    visibility: "off"
                }
            ]
        },
        {
            featureType: "administrative",
            elementType: "geometry.fill",
            stylers: [
                {
                    color: "#000000"
                },
                {
                    lightness: 20
                }
            ]
        },
        {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [
                {
                    color: "#000000"
                },
                {
                    lightness: 17
                },
                {
                    weight: 1.2
                }
            ]
        },
        {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#bbbbbb"
                }
            ]
        },
        {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [
                {
                    color: "#000000"
                },
                {
                    lightness: 20
                }
            ]
        },
        {
            featureType: "poi",
            elementType: "geometry",
            stylers: [
                {
                    color: "#000000"
                },
                {
                    lightness: 21
                }
            ]
        },
        {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [
                {
                    color: "#000000"
                },
                {
                    lightness: 17
                }
            ]
        },
        {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [
                {
                    color: "#000000"
                },
                {
                    lightness: 29
                },
                {
                    weight: 0.2
                }
            ]
        },
        {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [
                {
                    color: "#000000"
                },
                {
                    lightness: 18
                }
            ]
        },
        {
            featureType: "road.arterial",
            elementType: "geometry.fill",
            stylers: [
                {
                    saturation: "0"
                },
                {
                    color: "#575757"
                }
            ]
        },
        {
            featureType: "road.arterial",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#cacaca"
                }
            ]
        },
        {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [
                {
                    color: "#000000"
                },
                {
                    lightness: 16
                }
            ]
        },
        {
            featureType: "road.local",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#8b8b8b"
                },
                {
                    weight: "6.33"
                }
            ]
        },
        {
            featureType: "transit",
            elementType: "geometry",
            stylers: [
                {
                    color: "#000000"
                },
                {
                    lightness: 19
                }
            ]
        },
        {
            featureType: "water",
            elementType: "geometry",
            stylers: [
                {
                    color: "#0f252e"
                },
                {
                    lightness: 17
                }
            ]
        },
        {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [
                {
                    color: "#2b2b2b"
                }
            ]
        }
    ];
    var styledMap = new google.maps.StyledMapType(styles,
        {name: "Styled Map"});
    var mapOptions = {
        zoom: 14,
        center: new google.maps.LatLng(38.707393, -77.020601),
        disableDefaultUI: true,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    new google.maps.Marker({
        map: map,
        icon: {
            path: fontawesome.markers.MAP_MARKER,
            scale: 0.7,
            strokeColor: '#ff6e40',
            strokeOpacity: 1,
            fillColor: '#ff6e40',
            fillOpacity: 1
        },
        clickable: false,
        position: new google.maps.LatLng(38.71, -77.025)
    });
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');


}


