import "./index.css";

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
  popupAvatarSelector
} from "../scripts/utils/Constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupDeleteCard from "../components/PopupDeleteCard.js";
import Api from "../components/Api.js";

export const profileAvatarSelector = '.profile__avatar';

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-66",
  headers: {
    authorization: "56ca6cc4-cb7f-453a-ad4f-0eadc019fb12",
    "Content-Type": "application/json",
  },
});

initialCards.forEach((element) => {
  element.title = element.name;
  delete element.name;
});

const userInfo = new UserInfo(profileNameSelector, profileJobSelector, profileAvatarSelector);
const popupImage = new PopupWithImage(popupImageSelector);

const deleteCardPopup = new PopupDeleteCard(popupDeleteSelector, (element) => {
  element.deleteCard();
  deleteCardPopup.close();
});

const popupProfile = new PopupWithForm(popupProfileSelector, (data) => {
  api.setUserInfo(data)
    .then(res => {
      userInfo.setUserInfo({
        name: res.name,
        job: res.about,
        avatar: res.avatar
      })
    })
    .catch((error => console.error(`Ошибка редактирования ${error}`)))
    .finally()
  popupProfile.close();
});


const popupAddCard = new PopupWithForm(popupAddCardSelector, (data) => {
  api.addCards(data)
  .then(dataCard => {
    dataCard.myid = userInfo.getid()
    section.addItemPrepend(createNewCard(dataCard))
    popupAddCard.close();
    })
    .catch((error => console.error(`Ошибка создания карточки ${error}`)))
    .finally()
});

const popupEditAvatar = new PopupWithForm(popupAvatarSelector, (data) => {
  api.setNewavatar(data)
    .then(res => {
      console.log(res)
      userInfo.setUserInfo({
        name: res.name,
        job: res.about,
        avatar: res.avatar
      })
    })
    .catch((error => console.error(`Ошибка обновления аватара ${error}`)))
    .finally()
});

function createNewCard(element) {
  const card = new Card(
    element,
    selectorTemplate,
    popupImage.open,
    deleteCardPopup.open
  );
  const cardElement = card.createCard();
  return cardElement;
}

const section = new Section((element) => {
  section.addItemAppend(createNewCard(element));
}, cardContainerSelector);


//создаем экземпляр класса FormValidator для попапа редактирования и запускаем валидации
const formProfileInfoValidator = new FormValidator(
  validationConfig,
  formEditProfileElement
);
formProfileInfoValidator.enableValidation();

//создаем экземпляр класса FormValidator для попапа добавления карточки и запускаем валидации
const formAddCardValidator = new FormValidator(
  validationConfig,
  formAddCardElement
);
formAddCardValidator.enableValidation();

const formEditAvatarValidator = new FormValidator(
  validationConfig,
  formEditAvatarElement
);
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

popupEditAvatarButtomElement.addEventListener("click", () => {
  formEditAvatarValidator.resetErrorInput();
  popupEditAvatar.open();
});

Promise.all([api.getInfo(), api.getCards()])
  .then(([dataUser, dataCard]) => {
    dataCard.forEach(element => element.myid = dataUser._id);
    userInfo.setUserInfo({
      name: dataUser.name,
      job: dataUser.about,
      avatar: dataUser.avatar,
    });
    section.addCardFromArray(dataCard);
  })
  .catch((error => console.error(`Ошибка редактирования ${error}`)))
