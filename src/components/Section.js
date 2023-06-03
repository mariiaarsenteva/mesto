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

  addItem(DOMelement) {
    this._container.prepend(DOMelement);
  }
}
