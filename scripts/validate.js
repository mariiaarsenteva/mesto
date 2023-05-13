class FormValidator{
  constructor(config,form){
    this._inputSelector = config.inputSelector;
    this._errorSelectorTemplate = config._errorSelectorTemplate;
    this._submitButtonSelector = config.submitBttonSelector;
    this._disabledButtonClass = config.disabledButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._textErrorClass = config.textErrorClass;
    this._form = form;
  }

  _showInputError(errorTextElement, input){
      input.classList.add(this._inputErrorClass);
      errorTextElement.textContent = input.validationMessage;
    }

  _hideInputError(errorTextElement, input){
    input.classList.remove(this._inputErrorClass);
      errorTextElement.textContent = '';
  }

  _checkInputValidity(){
    const errorTextElement = this._form.querySelector((`${this._errorSelectorTemplate}${input.name}`))
    input.validity.valid ?
          this._hideInputError(errorTextElement, input) : this._showInputError(errorTextElement,input)

  }

  _setEventListener(){
    this._inputList.forEach(input =>
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._enabledButton()
      })
    )}


  enableValidation(){
    this._button - form.querySelector(this._submitButtonSelector);
    this._inputList = form.querySelector(this._inputSelector);
    this._setEventListener();
  };
}

//включила влидацию
// function enableValidation ({ formSelector, ...rest }) {
//   const forms = Array.from(document.querySelectorAll(formSelector));
//   forms.forEach((form) => {
//     form.addEventListener("submit", (evt) => {
//       evt.preventDefault();
//     });
//     setEventListeners(form, rest);
//   });
// }

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
// const checkInputValidity = (form, input, { ...rest }) => {
//   if (input.validity.valid) {
//     hideInputError(form, input, rest);
//   } else {
//     showInputError(form, input, input.validationMessage, rest);
//   }
// };

// const hasInvalidInput = (formInputs) => {
//   return Array.from(formInputs).some((input) => !input.validity.valid);
// };



// //скрываю ошибку
// function hideInputError(form, input, { inputErrorClass, textErrorClass, errorSelectorTemplate }) {
//   const error = form.querySelector(`${errorSelectorTemplate}${input.name}`)
//   input.classList.remove(inputErrorClass);
//   error.textContent = '';
//   error.classList.remove(textErrorClass);
// }

// //показываю ошибкуform, input,
// function showInputError(form, input, errorMessage, { inputErrorClass, textErrorClass, errorSelectorTemplate }) {
//   const error = form.querySelector(`${errorSelectorTemplate}${input.name}`)
//   input.classList.add(inputErrorClass);
//   error.textContent = errorMessage;
//   error.classList.add(textErrorClass);
// }



// function enabledButton(button, { disabledButtonClass }) {
//   button.classList.remove(disabledButtonClass);
//   button.removeAttribute('disabled');
// }
// function disabledButton(button, { disabledButtonClass }) {
//   button.classList.add(disabledButtonClass);
//   button.setAttribute('disabled', true);
// }

enableValidation(validationConfig);
