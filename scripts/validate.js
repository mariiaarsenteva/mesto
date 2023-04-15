const validationConfig = {
  formSelector: ".popup__form", // все формы в документе
  inputSelector: ".popup__input", // inputList
  errorSelectorTemplate: ".popup__error_", // шаблон для разных инпутов
  submitButtonSelector: ".popup__submit-button", //button

  disabledButtonClass: "popup__submit-button_disabled", // button disabled
  inputErrorClass: "popup__input_invalid", // input
  textErrorClass: "popup__error_visible", // span
};

//включила влидацию
function enableValidation({ formSelector, ...rest }) {
  const forms = Array.from(document.querySelectorAll(formSelector));
  forms.forEach((form) => {
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(form, rest);
  });
}

//утановила слушатель
function setEventListeners(form, { inputSelector, submitButtonSelector, ...rest }) {
  const formInputs = Array.from(form.querySelectorAll(inputSelector));
  const formButton = form.querySelector(submitButtonSelector);
  formInputs.forEach((input) => {
    disabledButton(formButton, rest);
    input.addEventListener("input", () => {
      checkInputValidity(form, input, rest);
      if (hasInvalidInput(formInputs)) {
        disabledButton(formButton, rest)
      } else {
        enabledButton(formButton, rest)
      }
    });
    form.addEventListener('reset', () => {
      disabledButton(formButton, rest)
    });
  });
};

//проверяю валидацию
const checkInputValidity = (form, input, { ...rest }) => {
  if (input.validity.valid) {
    hideInputError(form, input, rest);
  } else {
    showInputError(form, input, input.validationMessage, rest);
  }
};

const hasInvalidInput = (formInputs) => {
  return Array.from(formInputs).some((input) => !input.validity.valid);
};



//скрываю ошибку
function hideInputError(form, input, { inputErrorClass, textErrorClass, errorSelectorTemplate }) {
  const error = form.querySelector(`${errorSelectorTemplate}${input.name}`)
  input.classList.remove(inputErrorClass);
  error.textContent = '';
  error.classList.remove(textErrorClass);
}

//показываю ошибкуform, input,
function showInputError(form, input, errorMessage, { inputErrorClass, textErrorClass, errorSelectorTemplate }) {
  const error = form.querySelector(`${errorSelectorTemplate}${input.name}`)
  input.classList.add(inputErrorClass);
  error.textContent = errorMessage;
  error.classList.add(textErrorClass);
}



function enabledButton(button, { disabledButtonClass }) {
  button.classList.remove(disabledButtonClass);
  button.removeAttribute('disabled');
}
function disabledButton(button, { disabledButtonClass }) {
  button.classList.add(disabledButtonClass);
  button.setAttribute('disabled', true);
}

enableValidation(validationConfig);
