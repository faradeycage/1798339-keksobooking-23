import {getAds} from './data.js';
import {renderAd} from './renderAd.js';


const similarAds = getAds();
renderAd(similarAds[0]);

