import {getAds} from './data.js';
//import {renderAd} from './renderAd.js';
import {adFormValidate, formPageDisable, formPageActivate} from './adForm.js';
import {showMap} from './map.js';


// eslint-disable-next-line no-unused-vars
const similarAds = getAds();
//renderAd(similarAds[0]);
adFormValidate();
formPageDisable();
formPageActivate();
showMap();
