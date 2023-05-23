import { initialCards } from './scripts/utils/initialCards.js'
import Card from './scripts/components/Card.js'
import FormValidator from './scripts/components/FormValidator.js'
import PopupWithImage from './scripts/components/PopupWithImage.js';
import Section from './scripts/components/Section.js';


const profileElement = document.querySelector(".profile");
// const profilePopupElement = document.querySelector(".profile-popup");
const cardPopupElement = document.querySelector(".card-popup");
// const imagePopupElement = document.querySelector(".image-popup");
// const formEditProfileElement = profilePopupElement.querySelector(".popup__form");
const formAddCardElement = cardPopupElement.querySelector(".popup__form");

const popupEditButtonElement = profileElement.querySelector(".profile__edit-button");
// const popupCloseButtonElements = document.querySelectorAll(".popup__close-button");
// const popupAddButtonElement = document.querySelector(".profile__add-button");
const profileName = profileElement.querySelector(".profile__name");
const profileJob = profileElement.querySelector(".profile__job");
// const popupTitle = document.querySelector(".figure__caption");
// const popupLink = document.querySelector(".figure__image");
const nameInput = document.querySelector("#nameInput");
const jobInput = document.querySelector("#jobInput");
const titleInput = document.querySelector("#titleInput");
const linkInput = document.querySelector("#linkInput");

const cardList = document.querySelector(".elements__container");
const selectorTemplate = "#cardTemplate";
// const popupElement = ".popup";
// const popupProfileSelector = ".profile-popup";
const popupImageSelector = '.image-popup'
const cardContainerSelector =  '.elements__container'


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



const popupImage = new PopupWithImage(popupImageSelector)
popupImage.setEventListeners()

const section = new Section({
  items: initialCards,
  renderer: (element) => {
    const card = new Card(element, selectorTemplate, popupImage.open);
    const cardElement = card.createCard();
    return cardElement
  }
},cardContainerSelector
)

section.addCardFromArray()

// функция сохранения данных в форме профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(profilePopupElement);
}





// добавление карточек через кнопку создать
cardPopupElement.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const inputInAddPopup = { name: titleInput.value, link: linkInput.value };
  addCard(cardList, createNewCard(inputInAddPopup));
  closePopup(cardPopupElement);
  evt.target.reset();
});

// imagePopupElement.addEventListener('mousedown', (evt) => closePopupClickOnOverlay(evt));

// cardPopupElement.addEventListener('mousedown', (evt) => closePopupClickOnOverlay(evt));
// profilePopupElement.addEventListener("submit", handleProfileFormSubmit);


//открытие попапа редактирования профиля при клике, введенные даные сохраняются, кнопка дизйблится
popupEditButtonElement.addEventListener("click", () => {
  formEditProfileElement.reset();
  // formProfileInfoValidator.resetErrorInput();
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;

  // openPopup(profilePopupElement);
});

// //открытие попапа добавления карточки, введенные даные не сохраняются, кнопка дизйблится
// popupAddButtonElement.addEventListener("click", () => {
//   formAddCardElement.reset();
//   formAddCardValidator.resetErrorInput();
//   openPopup(cardPopupElement);
// });


// popupCloseButtonElements.forEach((element) => {
//   const popupElement = element.closest(".popup");
//   element.addEventListener("click", () => {
//     closePopup(popupElement);
//   });
// });
