const popupElement = document.querySelector('.popup');
const profileElement = document.querySelector('.profile');
const profilePopupElement = document.querySelector('.profile-popup');
const formEditProfileElement = document.querySelector('.popup__form');
const formAddCardElement = document.querySelector('.popup__form');
const cardPopupElement = document.querySelector('.card-popup');
const imagePopupElement = document.querySelector('.image-popup');

const popupEditButtonElement = profileElement.querySelector('.profile__edit-button');
const popupCloseButtonElement = document.querySelectorAll('.popup__close-button');
const popupAddButtonElement = document.querySelector('.profile__add-button');
const profileName = profileElement.querySelector('.profile__name');
const profileJob = profileElement.querySelector('.profile__job');
const popupTitle = document.querySelector('.figure__caption');
const popupLink = document.querySelector('.figure__image');
const nameInput = document.querySelector('#nameInput');
const jobInput = document.querySelector('#jobInput');
const titleInput = document.querySelector('#titleInput');
const linkInput = document.querySelector('#linkInput');
const templateElement = document.querySelector('#cardTemplate').content;

function openPopup (popup) {
  popup.classList.add('popup_opened');
};

function closePopup (popup) {
  popup.classList.remove('popup_opened');
};

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupElement);
}

popupEditButtonElement.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
   openPopup (profilePopupElement);
});

popupAddButtonElement.addEventListener('click', () => {
  titleInput.value = popupTitle.textContent;
  linkInput.value = popupLink.textContent;
  openPopup(cardPopupElement);
});

popupCloseButtonElement.forEach((element) => {
  const popupElement = element.closest('.popup');
  element.addEventListener('click', () =>{
  closePopup(popupElement)
});
});

;
profilePopupElement.addEventListener('submit', handleFormSubmit);
cardPopupElement.addEventListener('submit', handleFormSubmit);

