import {
  adFormValidate,
  formPageDisable,
  setAdFormSubmit,
  clearAdForm
} from './ad-form.js';
import {
  showMap
} from './map.js';


fetch('https://23.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((data) => {
    showMap(data);
  })
  .catch(() => {
    // eslint-disable-next-line no-alert
    alert('При загрузке произошла ошибка');
  });

setAdFormSubmit(clearAdForm);

adFormValidate();
formPageDisable();

