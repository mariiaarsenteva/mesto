const popupElement = document.querySelector('.popup');
const profileElement = document.querySelector('.profile');
const profilePopupElement = document.querySelector('.profile-popup');
const formEditProfileElement = document.querySelector('.popup__form');
const formAddCardElement = document.querySelector('.popup__form');
const cardPopupElement = document.querySelector('.card-popup');
const imagePopupElement = document.querySelector('.image-popup');

const popupEditButtonElement = profileElement.querySelector('.profile__edit-button');
const popupCloseButtonElement = document.querySelector('.popup__close-button');
const popupAddButtonElement = document.querySelector('.profile__add-button');
const profileName = profileElement.querySelector('.profile__name');
const profileJob = profileElement.querySelector('.profile__job');
const nameInput = document.querySelector('#nameInput');
const jobInput = document.querySelector('#jobInput');
const titleInput = document.querySelector('#titleInput');
const linkInput = document.querySelector('#linkInput');
const templateElement = document.querySelector('#cardTemplate').content;



const openPopup = function (popup) {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
    popupElement.classList.add('popup_opened');
};

const closePopup = function (popup) {
  popupElement.classList.remove('popup_opened');
};

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}
profilePopupElement.addEventListener('submit', handleFormSubmit);
popupEditButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);


