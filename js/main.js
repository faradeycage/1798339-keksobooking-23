import {getAds} from './data.js';
import {adFormValidate, formPageDisable} from './ad-form.js';
import {showMap} from './map.js';


// eslint-disable-next-line no-unused-vars
const similarAds = getAds();
adFormValidate();
formPageDisable();
showMap(similarAds);
