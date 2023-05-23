import {
  initialCards,
  popupEditButtonElement,
  popupAddButtonElement,
  selectorTemplate,
  popupProfileSelector,
  popupImageSelector,
  cardContainerSelector,
  popupAddCardSelector,
  profileNameSelector,
  profileJobSelector,
  validationConfig,
  formEditProfileElement,
  formAddCardElement,
} from "../../scripts/utils/Constants.js";
import Card from "../../scripts/components/Card.js";
import FormValidator from "../../scripts/components/FormValidator.js";
import PopupWithImage from "../../scripts/components/PopupWithImage.js";
import Section from "../../scripts/components/Section.js";
import UserInfo from "../../scripts/components/UserInfo.js";
import PopupWithForm from "../../scripts/components/PopupWithForm.js";

const userInfo = new UserInfo(profileNameSelector, profileJobSelector);

const popupImage = new PopupWithImage(popupImageSelector);

const section = new Section(
  {items: initialCards,
    renderer: (element) => {
      const card = new Card(element, selectorTemplate, popupImage.open);
      const cardElement = card.createCard();
      return cardElement;
    },
  },
  cardContainerSelector
);
section.addCardFromArray();

const popupProfile = new PopupWithForm(popupProfileSelector, (object) => {
  userInfo.setUserInfo(object);
  popupProfile.close();
});

const popupAddCard = new PopupWithForm(popupAddCardSelector, (object) => {
  section.addItem(object);
  popupAddCard.close();
});

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

//создаем экземпляр класса FormValidator для попапа редактирования и запускаем валидации
const formProfileInfoValidator = new FormValidator(validationConfig, formEditProfileElement);
formProfileInfoValidator.enableValidation();

//создаем экземпляр класса FormValidator для попапа добавления карточки и запускаем валидации
const formAddCardValidator = new FormValidator(validationConfig, formAddCardElement);
formAddCardValidator.enableValidation();

popupImage.setEventListeners();
popupAddCard.setEventListeners();
popupProfile.setEventListeners();
