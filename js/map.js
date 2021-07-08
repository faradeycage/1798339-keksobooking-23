import {
  formPageActivate
} from './ad-form.js';

import {
  createAdPopup
} from './create-ad-popup.js';

const MAIN_PIN_LAT = 35.6895;
const MAIN_PIN_LNG = 139.692;

const showMap = (ads) => {
  const map = L.map('map-canvas')
    .on('load', () => {
      formPageActivate();
    })
    .setView({
      lat: MAIN_PIN_LAT,
      lng: MAIN_PIN_LNG,
    }, 12);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  const mainPinIcon = L.icon({
    iconUrl: 'img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

  const mainPinMarker = L.marker({
    lat: MAIN_PIN_LAT,
    lng: MAIN_PIN_LNG,
  }, {
    draggable: true,
    icon: mainPinIcon,
  });
  mainPinMarker.addTo(map);

  mainPinMarker.on('moveend', (evt) => {
    const address = document.querySelector('#address');
    const lat = evt.target.getLatLng().lat.toFixed(5);
    const lng = evt.target.getLatLng().lng.toFixed(5);
    address.value = `${lat  }, ${  lng}`;
  });

  const adPinIcon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });


  for (const ad of ads) {
    const adPinMarker = L.marker({
      lat: ad.location.lat,
      lng: ad.location.lng,
    }, {
      icon: adPinIcon,
    }, {
      keepInView: true,
    });

    adPinMarker
      .addTo(map)
      .bindPopup(() => createAdPopup(ad));
  }
};

export {showMap, MAIN_PIN_LAT, MAIN_PIN_LNG};
