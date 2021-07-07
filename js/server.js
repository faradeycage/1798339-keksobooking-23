
const getAds = () => fetch('https://23.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json());


export {
  getAds
};
