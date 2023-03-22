const popupElement = document.querySelector('.popup');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
let formElement = popupElement.querySelector('.popup__form');
let nameInput = formElement.querySelector('#nameInput');
let jobInput = formElement.querySelector('#jobInput');
let profileElement = document.querySelector('.profile');
let profileName = profileElement.querySelector('.profile__name');
let profileBio = profileElement.querySelector('.profile__bio');

const openPopup = function () {
    profileName.textContent = nameInput.value;
    profileBio.textContent = jobInput.value;
    popupElement.classList.add('popup__is-opened');
};

const closePopup = function () {

    popupElement.classList.remove('popup__is-opened');
};

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileBio.textContent = jobInput.value;
    closePopup();
}

formElement.addEventListener('submit', handleFormSubmit);

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);