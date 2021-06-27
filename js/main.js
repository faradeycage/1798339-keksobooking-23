import {getAds} from './data.js';
import {renderAd} from './renderAds.js';


const similarAds = getAds();
renderAd(similarAds[0]);

