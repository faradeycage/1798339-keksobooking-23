import {
  adFormValidate,
  formPageDisable,
  setAdFormSubmit,
  resetAdForm
} from './ad-form.js';
import {
  getAds
} from './server.js';
import {
  showMap
} from './map.js';
import {
  showAlertError
} from './utils.js';

getAds()
  .then((data) => showMap(data))

  .catch(() => {
    showAlertError('При загрузке произошла ошибка');
  });


setAdFormSubmit(resetAdForm);

adFormValidate();
formPageDisable();

