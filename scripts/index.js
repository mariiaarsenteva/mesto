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
