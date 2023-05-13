import {initialCards} from './initialCards.js'
import Card from './Card.js'


const profileElement = document.querySelector(".profile");
const profilePopupElement = document.querySelector(".profile-popup");
const cardPopupElement = document.querySelector(".card-popup");
const imagePopupElement = document.querySelector(".image-popup");
const formEditProfileElement = profilePopupElement.querySelector(".popup__form");
const formAddCardElement = cardPopupElement.querySelector(".popup__form");

const popupEditButtonElement = profileElement.querySelector(".profile__edit-button");
const popupCloseButtonElements = document.querySelectorAll(".popup__close-button");
const popupAddButtonElement = document.querySelector(".profile__add-button");
const profileName = profileElement.querySelector(".profile__name");
const profileJob = profileElement.querySelector(".profile__job");
const popupTitle = document.querySelector(".figure__caption");
const popupLink = document.querySelector(".figure__image");
const nameInput = document.querySelector("#nameInput");
const jobInput = document.querySelector("#jobInput");
const titleInput = document.querySelector("#titleInput");
const linkInput = document.querySelector("#linkInput");

const cardList = document.querySelector(".elements__container");
const selectorTemplate = "#cardTemplate"


const formPersonalDataElement = document.forms.personalData
// переменая с объектом для валидации
const validationConfig = {
  formSelector: ".popup__form", // все формы в документе
  inputSelector: ".popup__input", // inputList
  errorSelectorTemplate: ".popup__error_", // шаблон для разных инпутов
  submitButtonSelector: ".popup__submit-button", //button

  disabledButtonClass: "popup__submit-button_disabled", // button disabled
  inputErrorClass: "popup__input_invalid", // input
  textErrorClass: "popup__error_visible", // span
};

// функция открытия попапа
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', closePopupClickOnEscape);
}

// функция закрытия попапа через крестик
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.addEventListener('keydown', closePopupClickOnEscape);
}

// функция открытия попапа картинки
function openImagePopup(cardData) {
  popupLink.src = cardData.link;
  popupLink.alt = cardData.name;
  popupTitle.textContent = cardData.name;
  openPopup(imagePopupElement);
}

// функция закрытия через ESC
const closePopupClickOnEscape = (evt) => {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened')
    closePopup(popupOpened)
  }
}

// функция закрытия через нажатии на фон
function closePopupClickOnOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.currentTarget);
  }
};

// функция сохранения данных в форме профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(profilePopupElement);
}

//функция создания карточки
function createNewCard (element) {
  const card = new Card(element, selectorTemplate, openImagePopup);
  const cardElement = card.createCard();
  return cardElement
}

//функция добавления карточки
function addCard(container, card){
  container.prepend(card)
}
initialCards.forEach((element) => {
  addCard(cardList, createNewCard(element));
});

// добавление карточек через кнопку создать
cardPopupElement.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const inputInAddPopup = { name: titleInput.value, link: linkInput.value };
  addCard(cardList, createNewCard(inputInAddPopup));
  closePopup(cardPopupElement);
  evt.target.reset();
});

imagePopupElement.addEventListener('mousedown', (evt) => closePopupClickOnOverlay(evt));
profilePopupElement.addEventListener('mousedown', (evt) => closePopupClickOnOverlay(evt));
cardPopupElement.addEventListener('mousedown', (evt) => closePopupClickOnOverlay(evt));
profilePopupElement.addEventListener("submit", handleProfileFormSubmit);

popupEditButtonElement.addEventListener("click", () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(profilePopupElement);
});

popupAddButtonElement.addEventListener("click", () => {
  openPopup(cardPopupElement);
});

popupCloseButtonElements.forEach((element) => {
  const popupElement = element.closest(".popup");
  element.addEventListener("click", () => {
    closePopup(popupElement);
  });
});



//
//
//



class FormValidator{
  constructor(config,form){
    this._form = form;
    this._inputSelector = config.inputSelector;
    this._errorSelectorTemplate = config.errorSelectorTemplate;
    this._submitButtonSelector = config.submitButtonSelector;
    this._disabledButtonClass = config.disabledButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._textErrorClass = config.textErrorClass;
    this._button = this._form.querySelector(this._submitButtonSelector);
    this._inputList = this._form.querySelectorAll(this._inputSelector);

  }

  _showInputError(errorTextElement, input){
      input.classList.add(this._inputErrorClass);
      errorTextElement.textContent = input.validationMessage;
      errorTextElement.classList.add(this._textErrorClass)

  }

  _hideInputError(errorTextElement, input){
    input.classList.remove(this._inputErrorClass);
      errorTextElement.textContent = '';
      errorTextElement.classList.remove(this._textErrorClass)
  }

  _hasInvalidInput(){

    return Array.from(this._inputList).some((input) => !input.validity.valid);
  }

  _toggleButton(){
   this._hasInvalidInput ? this._disabledButton() : this._enabledButton()

  }

  _enabledButton() {
    this._button.classList.remove(this._disabledButtonClass);
    this._button.removeAttribute('disabled');
  }

  _disabledButton(){_enabledButton
    this._button.classList.add(this._disabledButtonClass);
    this._button.setAttribute('disabled',true);

  }

  _checkInputValidity(input){
    const errorTextElement = document.querySelector(`${this._errorSelectorTemplate}${input.name}`)
    input.validity.valid ? this._hideInputError(errorTextElement, input) : this._showInputError(errorTextElement, input)

  }

  _setEventListener(){
    this._inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._toggleButton()

      });
    })
  }


  enableValidation(){

    this._setEventListener();
  };
}

//создаем экземпляр класса FormValidator для попапа редактирования и запускаем валидации
const formProfileInfoValidator = new FormValidator(validationConfig, formEditProfileElement);
formProfileInfoValidator.enableValidation();

//создаем экземпляр класса FormValidator для попапа добавления карточки и запускаем валидации
const formAddCardValidator = new FormValidator(validationConfig, formAddCardElement);
formAddCardValidator.enableValidation();



//включила влидацию
// function enableValidation ({ formSelector, ...rest }) {
//   const forms = Array.from(document.querySelectorAll(formSelector));
//   forms.forEach((form) => {
//     form.addEventListener("submit", (evt) => {
//       evt.preventDefault();
//     });
//     setEventListeners(form, rest);
//   });
// }

//утановила слушатель
// function setEventListeners(form, { inputSelector, submitButtonSelector, ...rest }) {
//   const formInputs = Array.from(form.querySelectorAll(inputSelector));
//   const formButton = form.querySelector(submitButtonSelector);
//   formInputs.forEach((input) => {
//     disabledButton(formButton, rest);
//     input.addEventListener("input", () => {
//       checkInputValidity(form, input, rest);
//       if (hasInvalidInput(formInputs)) {
//         disabledButton(formButton, rest)
//       } else {
//         enabledButton(formButton, rest)
//       }
//     });
//     form.addEventListener('reset', () => {
//       disabledButton(formButton, rest)
//     });
//   });
// };

//проверяю валидацию
// const checkInputValidity = (form, input, { ...rest }) => {
//   if (input.validity.valid) {
//     hideInputError(form, input, rest);
//   } else {
//     showInputError(form, input, input.validationMessage, rest);
//   }
// };

// const hasInvalidInput = (formInputs) => {
//   return Array.from(formInputs).some((input) => !input.validity.valid);
// };



// //скрываю ошибку
// function hideInputError(form, input, { inputErrorClass, textErrorClass, errorSelectorTemplate }) {
//   const error = form.querySelector(`${errorSelectorTemplate}${input.name}`)
//   input.classList.remove(inputErrorClass);
//   error.textContent = '';
//   error.classList.remove(textErrorClass);
// }

// //показываю ошибкуform, input,
// function showInputError(form, input, errorMessage, { inputErrorClass, textErrorClass, errorSelectorTemplate }) {
//   const error = form.querySelector(`${errorSelectorTemplate}${input.name}`)
//   input.classList.add(inputErrorClass);
//   error.textContent = errorMessage;
//   error.classList.add(textErrorClass);
// }



// function enabledButton(button, { disabledButtonClass }) {
//   button.classList.remove(disabledButtonClass);
//   button.removeAttribute('disabled');
// }
// function disabledButton(button, { disabledButtonClass }) {
//   button.classList.add(disabledButtonClass);
//   button.setAttribute('disabled', true);
// }

// enableValidation(validationConfig);
