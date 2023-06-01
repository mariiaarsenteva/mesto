export default class Popup {
  constructor(popupSelector){
    this._popup = document.querySelector(popupSelector);
    this._popopCloseButton = this._popup.querySelector('.popup__close-button');
    this._form = this._popup.querySelector('.popup__form');
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
    this.close()
    }
  }

  _handleCloseByClick = () =>{
    this.close()
  }

  _handleCloseByOverlay = (evt) => {
    if (evt.target === evt.currentTarget) {
      this.close()
    }
  }

  setEventListeners () {
    this._popopCloseButton.addEventListener('click',this._handleCloseByClick );
    this._popup.addEventListener('click', this._handleCloseByOverlay);
  }

  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener('keydown', this._handleEscClose);
  }
}
