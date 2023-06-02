import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFormFunction) {
    super(popupSelector);
    this._submitFormFunction = submitFormFunction;

    this._inputList = this._form.querySelectorAll(".popup__input");
  }

  close() {
    super.close();
    this._form.reset();
  }

  _getInputValue() {
    this._values = {};
    this._inputList.forEach((input) => {
      this._values[input.name] = input.value;
    });

    return this._values;
  }

  setInputValue(object) {
    this._inputList.forEach((input) => {
      input.value = object[input.name];
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitFormFunction(this._getInputValue());
      super.close();
    });
  }
}
