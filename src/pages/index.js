import './index.css';

import {
  initialCards,
  popupEditButtonElement,
  popupAddButtonElement,
  selectorTemplate,
  popupProfileSelector,
  popupImageSelector,
  cardContainerSelector,
  popupAddCardSelector,
  popupDeleteSelector,
  profileNameSelector,
  profileJobSelector,
  validationConfig,
  formEditProfileElement,
  formAddCardElement,
  formEditAvatarElement,
  popupEditAvatarButtomElement,
  popupAvatarSelector,
  editAvatar
} from "../scripts/utils/Constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupDeleteCard from '../components/PopupDeleteCard.js';
import Api from '../components/Api.js';

const api = new Api ({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
  headers: {
    authorization: '56ca6cc4-cb7f-453a-ad4f-0eadc019fb12',
    'Content-Type': 'application/json'
  }
});

initialCards.forEach(element => {
  element.title = element.name;
  delete element.mane;
})

const userInfo = new UserInfo(profileNameSelector, profileJobSelector);
const popupImage = new PopupWithImage(popupImageSelector);

const deleteCardPopup = new PopupDeleteCard(popupDeleteSelector, (element) => {
  element.deleteCard();
  deleteCardPopup.close();
});

const popupProfile = new PopupWithForm(popupProfileSelector, (data) => {
  userInfo.setUserInfo(data);
  popupProfile.close();
});

const popupAddCard = new PopupWithForm(popupAddCardSelector, (data) => {
  section.addItem(createNewCard(data));
  popupAddCard.close();
});

const popupEditAvatar = new PopupWithForm(popupAvatarSelector, (data) => {
  editAvatar.src = data.avatar;
})



function createNewCard(element) {
  const card = new Card(element, selectorTemplate, popupImage.open, deleteCardPopup.open);
  const cardElement = card.createCard();
  return cardElement;
}

const section = new Section((element) => {
    section.addItem(createNewCard(element))
},cardContainerSelector);


//добавляем начальные карточки настраницу
section.addCardFromArray(initialCards);

//создаем экземпляр класса FormValidator для попапа редактирования и запускаем валидации
const formProfileInfoValidator = new FormValidator(validationConfig, formEditProfileElement);
formProfileInfoValidator.enableValidation();

//создаем экземпляр класса FormValidator для попапа добавления карточки и запускаем валидации
const formAddCardValidator = new FormValidator(validationConfig, formAddCardElement);
formAddCardValidator.enableValidation();

const formEditAvatarValidator = new FormValidator(validationConfig, formEditAvatarElement);
formEditAvatarValidator.enableValidation();

popupImage.setEventListeners();
popupAddCard.setEventListeners();
popupProfile.setEventListeners();
popupEditAvatar.setEventListeners();
deleteCardPopup.setEventListeners();

//открытие попапа редактирования профиля при клике, введенные даные сохраняются, кнопка дизйблится
popupEditButtonElement.addEventListener("click", () => {
  formProfileInfoValidator.resetErrorInput();
  popupProfile.setInputValue(userInfo.getUserInfo());
  popupProfile.open();
});

//открытие попапа добавления карточки, введенные даные не сохраняются, кнопка дизйблится
popupAddButtonElement.addEventListener("click", () => {
  formAddCardValidator.resetErrorInput();
  popupAddCard.open();
});

popupEditAvatarButtomElement.addEventListener('click', () => {
  formEditAvatarValidator.resetErrorInput();
  popupEditAvatar.open();
})


Promise.all([api.getInfo(), api.getCards()])
.then(([dataUser, dataCard])=> {
  console.log(dataUser);
  console.log(dataCard);
})
