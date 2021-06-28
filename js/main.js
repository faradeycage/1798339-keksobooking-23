import {getAds} from './data.js';
import {renderAd} from './renderAd.js';
import {adFormValidate} from './adForm.js';


const similarAds = getAds();
renderAd(similarAds[0]);
adFormValidate();
