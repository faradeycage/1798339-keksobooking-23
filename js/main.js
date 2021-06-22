import {SIMILAR_AD_COUNT, createSimilarAd } from './data.js';

// eslint-disable-next-line no-unused-vars
const similarAds = new Array(SIMILAR_AD_COUNT).fill(null).map(() => createSimilarAd());
