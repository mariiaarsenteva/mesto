import Popup from './Popup.js'

export default class PopupDeleteCard extends Popup {
  constructor(popupSelector, submitFunction) {
    super(popupSelector);
    this._submitFunction = submitFunction;
    this.submitButton = this._form.querySelector('.popup__submit-button');
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.submitButton.textContent = `${this.submitButton.textContent}...`;
      this._submitFunction({ card: this._element, cardId: this._cardId });
    })
  }

  open = ({ card, cardId }) => {
    super.open();
    this._element = card;
    this._cardId = cardId;
  }
}
