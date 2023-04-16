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
const cardElement = document.querySelector("#cardTemplate").content;

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', closePopupClickOnEscape);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.addEventListener('keydown', closePopupClickOnEscape);
}
const closePopupClickOnEscape = (evt) => {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened')
    closePopup(popupOpened)
  }
}
function closePopupClickOnOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.currentTarget);
  }
};

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(profilePopupElement);
}

popupCloseButtonElements.forEach((element) => {
  const popupElement = element.closest(".popup");
  element.addEventListener("click", () => {
    closePopup(popupElement);
  });
});

function createCard(object) {
  const listElement = cardElement
    .querySelector(".elements__card-container")
    .cloneNode(true);
  const trashElement = listElement.querySelector(".elements__delete-button");
  const photoElement = listElement.querySelector(".elements__photo");
  const likeButtonElement = listElement.querySelector(".elements__like-button");
  const titleElement = listElement.querySelector(".elements__title");

  likeButtonElement.addEventListener("click", () =>
    likeButtonElement.classList.toggle("elements__like-button_active")
  );
  trashElement.addEventListener("click", () =>
    trashElement.closest(".elements__card-container").remove()
  );

  photoElement.src = object.link;
  photoElement.alt = object.name;
  titleElement.textContent = object.name;

  photoElement.addEventListener("click", () => {
    popupLink.src = object.link;
    popupTitle.textContent = object.name;
    popupLink.alt = object.name;
    openPopup(imagePopupElement);
  });

  return listElement;
}

initialCards.forEach((element) => {
  const card = createCard(element);
  cardList.prepend(card);
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
  evt.target.reset();
});

cardPopupElement.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const inputInAddPopup = { name: titleInput.value, link: linkInput.value };
  const createNewCard = createCard(inputInAddPopup);
  cardList.prepend(createNewCard);
  closePopup(cardPopupElement);
  evt.target.reset();
});
