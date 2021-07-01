import {
  formPageActivate
} from './adForm.js';

import {
  getAds
} from './data.js';

import {
  renderAd
} from './renderAd.js';


const map = L.map('map-canvas')
  .on('load', () => {
    formPageActivate();
  })
  .setView({
    lat: 35.6895,
    lng: 139.692,
  }, 8);

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
  lat: 35.6895,
  lng: 139.692,
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

const getData = getAds();
const adPinIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});


const createCustomPopup = (point) => {
  const balloonTemplate = document.querySelector('#card').content.querySelector('.popup');
  let popupElement = balloonTemplate.cloneNode(true);
  popupElement = renderAd(point);
  return popupElement;
};

for (let idx = 0; idx < getData.length; idx++) {
  const adPinMarker = L.marker({
    lat: getData[idx].location.lat,
    lng: getData[idx].location.lng,
  }, {
    icon: adPinIcon,
  });

  adPinMarker
    .addTo(map)
    .bindPopup(createCustomPopup(getData[idx]));

}
