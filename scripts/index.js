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
//togglePopupVisibility();






// 