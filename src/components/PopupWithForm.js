import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFormFunction) {
    super(popupSelector);
    this._submitFormFunction = submitFormFunction;
    this._submitButton = this._form.querySelector('.popup__submit-button');
    this._dafaultButtonText = this._submitButton.textContent;
    this._inputList = this._form.querySelectorAll(".popup__input");
  }



  _getInputValue() {
    this._values = {};
    this._inputList.forEach((input) => {
      this._values[input.name] = input.value;
    });

    return this._values;
  }

  setInputValue(userData) {
    this._inputList.forEach((input) => {
      input.value = userData[input.name];
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitButton.textContent = 'Сохранение...';
        this._submitFormFunction(this._getInputValue());
    });
  }

  setDefaultText() {
    this._submitButton.textContent = this._dafaultButtonText;
  }
  close() {
    super.close();
    this._form.reset();
  }
}
