export default class Popup {
  constructor(popupSelector){
    this._popup = document.querySelector(popupSelector);
    this._popupCloseButton = this._popup.querySelector('.popup__close-button');
  }

  _closePopupByEscape = (evt) => {
    if (evt.key === 'Escape') {
      this.close()
    }
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._closePopupByEscape);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._closePopupByEscape);
  }
}
