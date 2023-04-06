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

const ulElement= document.querySelector('.elements__container');
const cardElement = document.querySelector('#cardTemplate').content;

const initialCards = [
  {
    name: 'Жираф',
    link: 'https://images.unsplash.com/photo-1678475858196-d6d9dcb3df54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
  },
  {
    name: 'Котик',
    link: 'https://images.unsplash.com/photo-1678827843845-d9d6d5b80f53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Рыжий кот',
    link: 'https://images.unsplash.com/photo-1668174206552-cc53001e480b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80'
  },
  {
    name: 'Коровы',
    link: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80'
  },
  {
    name: 'Два слона',
    link: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1477&q=80'
  },
  {
    name: 'Гиены',
    link: 'https://images.unsplash.com/photo-1499678481508-e9f03108304b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  }
];

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



function createCard(object) {
 const listElement = cardElement.querySelector('.elements__card-container').cloneNode(true);
const trashElement = listElement.querySelector('.elements__delete-button');
const photoElement = listElement.querySelector('.elements__photo');
const likeButtonElement = listElement.querySelector('.elements__like-button');
const titleElement = listElement.querySelector('.elements__title');

 photoElement.src = object.link;
 photoElement.alt = object.name;
 titleElement.textContent = object.name;

 return listElement;
};

initialCards.forEach((element) =>{
  const card = createCard(element);
  ulElement.append (card);

});


profilePopupElement.addEventListener('submit', handleFormSubmit);
cardPopupElement.addEventListener('submit', handleFormSubmit);

