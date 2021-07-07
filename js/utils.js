//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
const getRandomFloatInclusive = (min, max, charactersNumber) => {
  if (min > max || min < 0) {
    throw new Error('задан неверный диапазон');
  }
  let randomFloat = Math.random() * (max - min + 1) + min;
  const charactersCount = Math.pow(10, charactersNumber);
  randomFloat = Math.floor(randomFloat * charactersCount) / charactersCount;
  return randomFloat;
};

//Функция, возвращающая случайное целое число из переданного диапазона включительно.
//источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomIntInclusive = (min, max) => {
  if (min > max || min < 0) {
    throw new Error('задан неверный диапазон');
  }
  min = Math.ceil(min); //округляет число вверх
  max = Math.floor(max); //округляет число вниз
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
};

const getRandomItem = (items) => items[getRandomIntInclusive(0, items.length - 1)];

//сообщение об ошибке
const showAlertError = (error) => {
  const alertContainer = document.querySelector('#error').content.cloneNode(true).firstElementChild;
  if (error){
    alertContainer.querySelector('.error__message').textContent = error;
  }
  document.body.append(alertContainer);

  const closeOnEsc = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      alertContainer.remove();
      document.removeEventListener('keydown', closeOnEsc);
      // eslint-disable-next-line no-use-before-define
      document.removeEventListener('click', closeOnClick);
    }
  };
  const closeOnClick = () => {
    alertContainer.remove();
    document.removeEventListener('keydown', closeOnEsc);
    document.removeEventListener('click', closeOnClick);
  };


  //закрытие сообщения об ошибке по нажатию Esc
  document.addEventListener('keydown', closeOnEsc);

  //закрытие сообщения об ошибке по клику в свободную область
  document.addEventListener('click', closeOnClick);
};

//сообщение об успехе
const showAlertSuccess = () => {
  const alertContainer = document.querySelector('#success').content.cloneNode(true).firstElementChild;
  document.body.append(alertContainer);

  //закрытие сообщения об успехе по нажатию Esc
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      alertContainer.remove();
    }
  });

  //закрытие сообщения об успехе по клику в свободную область
  document.addEventListener('click', () => {
    alertContainer.remove();
  });
};


export {
  getRandomFloatInclusive,
  getRandomIntInclusive,
  getRandomItem,
  showAlertError,
  showAlertSuccess
};
