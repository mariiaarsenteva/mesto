// Проверяем, что подключили скрипт, и он рабоатет
 console.log('Hello, world!');
// Делаем выборку DOM элементов
const popupElement = document.querySelector(".popup");
const popupOpenButtonElement = document.querySelector(".profile__edit-button");
const popupCloseButtonElement = popupElement.querySelector(".popup__close-button");
console.log(popupCloseButtonElement);

const openPopup = function(){
    popupElement.classList.add("popup__is-opened");
    console.log("Open popup clicked");
};

const closePopup = function(){
    popupElement.classList.remove("popup__is-opened");
};

// Регистрируем обработчики событий по клику

popupOpenButtonElement.addEventListener("click", openPopup);
popupCloseButtonElement.addEventListener("click", closePopup);

// Находим форму в DOM
let formElement = popupElement.querySelector(".popup__form");// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = formElement.querySelector("#nameInput");// Воспользуйтесь инструментом .querySelector()
let jobInput = formElement.querySelector("#jobInput");// Воспользуйтесь инструментом .querySelector()

let profileElement = document.querySelector('.profile');
let profileName = profileElement.querySelector('.profile__name');
let profileBio = profileElement.querySelector('.profile__bio');


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
profileName.textContent=nameInput.value;
profileBio.textContent=jobInput.value;
    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit); 