export default class Card {
  constructor (cardData, selectorTemplate, openImagePopup){
    this._cardData = cardData;
    this._link = cardData.link;
    this._name = cardData.name;
    this._selectorTemplate = selectorTemplate;
    this._openImagePopup = openImagePopup;
  }

  _getTemplateClone(){
    return document.querySelector(this._selectorTemplate).content.querySelector('.elements__card-container').cloneNode(true); // возвращает клонированную разметку
  }

  _handleLikeButton = () => {
    this._likeButtonElement.classList.toggle("elements__like-button_active");
  }

  _handleTrashButton = () => {
   this._trashElement.closest(".elements__card-container").remove();  // this._cloneElement.remove();
   this._cloneElement = null; // убирает из дом дерева карточку
  }

  _handleImagePopup = () => {
    this._openImagePopup(this._cardData);
  }

  _setEventListener(){
    this._likeButtonElement.addEventListener('click', this._handleLikeButton);
    this._trashElement.addEventListener('click', this._handleTrashButton);
    this._photoElement.addEventListener('click', this._handleImagePopup);
  }

  createCard(){
    this._cloneElement = this._getTemplateClone();
    this._trashElement = this._cloneElement.querySelector(".elements__delete-button");
    this._photoElement = this._cloneElement.querySelector(".elements__photo");
    this._likeButtonElement = this._cloneElement.querySelector(".elements__like-button");
    this._titleElement = this._cloneElement.querySelector(".elements__title");

    this._photoElement.src = this._link;
    this._photoElement.alt = this._name;
    this._titleElement.textContent = this._name;
    this._setEventListener();

    return this._cloneElement;
  }
}
