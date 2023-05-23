export default class Section {
  constructor({ items, renderer }, cardContainerSelector) {
    this._container = document.querySelector(cardContainerSelector);
    this._initialCards = items;
    this._renderer = renderer;
  }

  addCardFromArray() {
    this._initialCards.forEach((element) => {
      this.addItem(element);
    });
  }

  addItem(card) {
    this._container.prepend(this._renderer(card));
  }
}
