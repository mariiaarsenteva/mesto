export default class Card {
  constructor(cardData, selectorTemplate, openImagePopup, openDeletePopup, switchLike) {

    this._cardData = cardData;
    this._link = cardData.link;
    this._name = cardData.name;
    this._myId = cardData.myid;
    this._ownerId = cardData.owner._id;
    this._cardId = cardData._id;

    this._likes = cardData.likes;
    this._likesLength = cardData.likes.length;

    this._selectorTemplate = selectorTemplate;
    this._openImagePopup = openImagePopup;
    this._openDeletePopup = openDeletePopup;
    this._cloneElement = this._getTemplateClone();
    this._trashElement = this._cloneElement.querySelector(".elements__delete-button");
    this._photoElement = this._cloneElement.querySelector(".elements__photo");
    this._likeButtonElement = this._cloneElement.querySelector(".elements__like-button");
    this._titleElement = this._cloneElement.querySelector(".elements__title");
    this._counter = this._cloneElement.querySelector('.elements__like-counter');
    this._switchLike = switchLike;

  }

  _getTemplateClone() {
    return document.querySelector(this._selectorTemplate).content.querySelector('.elements__card-container').cloneNode(true); // возвращает клонированную разметку
  }

  _handleTrashButton = () => {
    this._openDeletePopup({ card: this, cardId: this._cardId })
  }

  _handleImagePopup = () => {
    this._openImagePopup(this._cardData);
  }

  _setEventListener() {
    this._likeButtonElement.addEventListener('click', this._handleLikeButton);
    this._trashElement.addEventListener('click', this._handleTrashButton);
    this._photoElement.addEventListener('click', this._handleImagePopup);
  }

  _checkLikeQuantity() {
    this._likes.forEach(item => {
      if (item._id === this._myId) {
        this._likeButtonElement.classList.add("elements__like-button_active")
        return
      }
    })
    this._counter.textContent = this._likesLength;
  }

  _makeTrashButtonInvisible() {
    this._myId === this._ownerId ? this._trashElement.style.display = 'block' : this._trashElement.style.display = 'none';
  }



  _handleLikeButton = () => {
    this._switchLike(this._likeButtonElement, this._cardId);

  }

  toggleLike(likes) {
    this._likeButtonElement.classList.toggle("elements__like-button_active");
    this._counter.textContent = likes.length;
  };


  deleteCardElement() {
    this._cloneElement.remove();
    this._cloneElement = null; // убирает из дом дерева карточку
  }

  createCard() {
    this._photoElement.src = this._link;
    this._photoElement.alt = this._name;
    this._titleElement.textContent = this._name;
    this._makeTrashButtonInvisible()
    this._checkLikeQuantity()
    this._setEventListener();

    return this._cloneElement;
  }
}
