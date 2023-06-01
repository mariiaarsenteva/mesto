import Popup from './Popup.js'

export default class PopupDeleteCard extends Popup{
  constructor(popupSelector,submitFunction){
    super(popupSelector);
    this._submitFunction = submitFunction;
  }

  setEventListeners(){
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {

    })
  }

  open(element){
    super.open();
    this._element = element;

  }
}
