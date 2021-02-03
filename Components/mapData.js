const Images = [
    { image: require("../Images/car1.jpg") },
    { image: require("../Images/car2.jpg") },
    { image: require("../Images/car2.jpg") },
    { image: require("../Images/car1.jpg") },
];

export const markers = [
    {
      coordinate: {
        latitude: 5.320357,
        longitude: -4.016107,
      },
      title: "Garage Plateau",
      description: "Special Voiturre",
      image: Images[0].image,
      rating: 4,
      reviews: 99,
    },
    {
      coordinate: {
        latitude: 5.33507,
        longitude: -4.0039,
      },
      title: "Garage Ambassade Cocody",
      description: "Meilleure ne voiture et moteurs",
      image: Images[1].image,
      rating: 5,
      reviews: 102,
    },
    {
      coordinate: {
        latitude: 5.30966,
        longitude: -4.01266,
      },
      title: "VELOCITY",
      description: "Special en Moto",
      image: Images[2].image,
      rating: 3,
      reviews: 220,
    },
    {
      coordinate: {
        latitude: 5.3546705,
        longitude: -3.9916808,
      },
      title: "Beda Moto garages",
      description: "Garage special Moto",
      image: Images[3].image,
      rating: 4,
      reviews: 48,
    },
    {
      coordinate: {
        latitude: 5.3389001,
        longitude: -4.0130675,
      },
      title: "Elie Garage C200",
      description: "Garage specialiser seulement en C200",
      image: Images[3].image,
      rating: 4,
      reviews: 178,
    },
];

export const mapDarkStyle = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#181818"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1b1b1b"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#2c2c2c"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8a8a8a"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#373737"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#3c3c3c"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#4e4e4e"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#3d3d3d"
        }
      ]
    }
  ];