export default class Section {
  constructor(renderer, cardContainerSelector) {
    this._container = document.querySelector(cardContainerSelector);
    // this._initialCards = items;
    this._renderer = renderer;
  }

  addCardFromArray (dataCard) {
    dataCard.forEach((element) => {
      this._renderer(element);
    });
  }

  addItemPrepend(DOMelement) {
    this._container.prepend(DOMelement);
  }

  addItemAppend(DOMelement) {
    this._container.append(DOMelement);
  }
}
