import Popup from "./Popup.js";

export default class PopupWithIage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector(".figure__image");
    this._imagePopupCaption = this._popup.querySelectorAll(".figure__caption");
  }

  open = (cardData) => {
    this._popupImage.src = cardData.link;
    this._popupImage.alt = cardData.title;
    this._imagePopupCaption.textContent = cardData.title;
    super.open();
  };
}
