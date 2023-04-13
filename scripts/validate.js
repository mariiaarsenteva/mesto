const config = {
  forms: document.forms, // все формы в документе
  inputSelector: '.popup__input', // inputList
  inputSelectorTemplate: '.popup__input_', // шаблон для разных инпутов
  submitButtonSelector: '.popup__submit-button', //button
  disabledButtonClass: 'popup__submit-button_disabled', // button disabled
  inputErrorClass: 'popup__input_invalid', // input
  textErrorClass: 'popup__error_visible' // span
};

enableValidation(config);

function enableValidation(config) {
  const formList = Array.from(config.forms);
  formList.forEach((form) => {
    const inputList = Array.from(form.querySelectorAll(config.inputSelector));
    const button = form.querySelector(config.submitButtonSelector);
    setEventListener(inputList, button, config.inputSelectorTemplate, config.disabledButtonClass, config.inputErrorClass, config.textErrorClass);
  });
}

function setEventListener(inputList, button, inputSelectorTemplate, textErrorClass, disabledButtonClass, inputErrorClass, textErrorClass) {
  inputList.forEach((input) => {
    input.addEventListener('input', () => { // ввод вживую
      checkInputValidity(input, inputSelectorTemplate, inputErrorClass, textErrorClass);
      //toggleButtonState(inputList, button, disabledButtonClass);
    });
  });
};


function checkInputValidity(inputList, inputSelectorTemplate, inputErrorClass, textErrorClass) {
  const errorTextElement = document.querySelector(`${inputSelectorTemplate}${inputList.name}`);
  if (inputList.validity.valid) {
    console.log('ok')
  } else {
    console.log('not')
  }
};

