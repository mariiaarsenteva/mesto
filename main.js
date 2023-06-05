(()=>{"use strict";var t=document.querySelector(".profile"),e=(document.querySelector(".profile__avatar"),t.querySelector(".profile__avatar-button")),n=t.querySelector(".profile__edit-button"),r=t.querySelector(".profile__add-button"),o=document.querySelector(".profile-popup"),i=document.querySelector(".card-popup"),u=document.querySelector(".avatar-popup").querySelector(".popup__form"),a=o.querySelector(".popup__form"),c=i.querySelector(".popup__form"),l={formSelector:".popup__form",inputSelector:".popup__input",errorSelectorTemplate:".popup__error_",submitButtonSelector:".popup__submit-button",disabledButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__input_invalid",textErrorClass:"popup__error_visible"};function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,y(r.key),r)}}function p(t,e,n){return(e=y(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function y(t){var e=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===s(e)?e:String(e)}var h=function(){function t(e,n,r,o,i){var u=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,"_handleTrashButton",(function(){u._openDeletePopup({card:u,cardId:u._cardId})})),p(this,"_handleImagePopup",(function(){u._openImagePopup(u._cardData)})),p(this,"_handleLikeButton",(function(){u._switchLike(u._likeButtonElement,u._cardId)})),this._cardData=e,this._link=e.link,this._name=e.name,this._myId=e.myid,this._ownerId=e.owner._id,this._cardId=e._id,this._likes=e.likes,this._likesLength=e.likes.length,this._selectorTemplate=n,this._openImagePopup=r,this._openDeletePopup=o,this._cloneElement=this._getTemplateClone(),this._trashElement=this._cloneElement.querySelector(".elements__delete-button"),this._photoElement=this._cloneElement.querySelector(".elements__photo"),this._likeButtonElement=this._cloneElement.querySelector(".elements__like-button"),this._titleElement=this._cloneElement.querySelector(".elements__title"),this._counter=this._cloneElement.querySelector(".elements__like-counter"),this._switchLike=i}var e,n;return e=t,(n=[{key:"_getTemplateClone",value:function(){return document.querySelector(this._selectorTemplate).content.querySelector(".elements__card-container").cloneNode(!0)}},{key:"_setEventListener",value:function(){this._likeButtonElement.addEventListener("click",this._handleLikeButton),this._trashElement.addEventListener("click",this._handleTrashButton),this._photoElement.addEventListener("click",this._handleImagePopup)}},{key:"_checkLikeQuantity",value:function(){var t=this;this._likes.forEach((function(e){e._id!==t._myId||t._likeButtonElement.classList.add("elements__like-button_active")})),this._counter.textContent=this._likesLength}},{key:"_makeTrashButtonInvisible",value:function(){this._myId===this._ownerId?this._trashElement.style.display="block":this._trashElement.style.display="none"}},{key:"toggleLike",value:function(t){this._likeButtonElement.classList.toggle("elements__like-button_active"),this._counter.textContent=t.length}},{key:"deleteCardElement",value:function(){this._cloneElement.remove(),this._cloneElement=null}},{key:"createCard",value:function(){return this._photoElement.src=this._link,this._photoElement.alt=this._name,this._titleElement.textContent=this._name,this._makeTrashButtonInvisible(),this._checkLikeQuantity(),this._setEventListener(),this._cloneElement}}])&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==m(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===m(o)?o:String(o)),r)}var o}var d=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._form=n,this._inputSelector=e.inputSelector,this._errorSelectorTemplate=e.errorSelectorTemplate,this._submitButtonSelector=e.submitButtonSelector,this._disabledButtonClass=e.disabledButtonClass,this._inputErrorClass=e.inputErrorClass,this._textErrorClass=e.textErrorClass,this._button=n.querySelector(this._submitButtonSelector),this._inputList=n.querySelectorAll(this._inputSelector)}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t,e){e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._textErrorClass)}},{key:"_hideInputError",value:function(t,e){e.classList.remove(this._inputErrorClass),t.textContent="",t.classList.remove(this._textErrorClass)}},{key:"_hasInvalidInput",value:function(){return Array.from(this._inputList).some((function(t){return!t.validity.valid}))}},{key:"_enabledButton",value:function(){this._button.classList.remove(this._disabledButtonClass),this._button.removeAttribute("disabled")}},{key:"_disabledButton",value:function(){this._button.classList.add(this._disabledButtonClass),this._button.setAttribute("disabled",!0)}},{key:"_toggleButton",value:function(){this._hasInvalidInput()?this._disabledButton():this._enabledButton()}},{key:"_checkInputValidity",value:function(t){var e=this._form.querySelector("".concat(this._errorSelectorTemplate).concat(t.name));t.validity.valid?this._hideInputError(e,t):this._showInputError(e,t)}},{key:"_setEventListener",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButton()}))}))}},{key:"enableValidation",value:function(){this._setEventListener()}},{key:"resetErrorInput",value:function(){var t=this;this._inputList.forEach((function(e){var n=t._form.querySelector("".concat(t._errorSelectorTemplate).concat(e.name));e.validity.valid||t._hideInputError(n,e)})),this._disabledButton()}}])&&b(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,g(r.key),r)}}function S(t,e,n){return(e=g(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function g(t){var e=function(t,e){if("object"!==_(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===_(e)?e:String(e)}var k=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),S(this,"_handleEscClose",(function(t){"Escape"===t.key&&n.close()})),S(this,"_handleCloseByClick",(function(){n.close()})),S(this,"_handleCloseByOverlay",(function(t){t.target===t.currentTarget&&n.close()})),this._popup=document.querySelector(e),this._popopCloseButton=this._popup.querySelector(".popup__close-button"),this._form=this._popup.querySelector(".popup__form")}var e,n;return e=t,(n=[{key:"setEventListeners",value:function(){this._popopCloseButton.addEventListener("click",this._handleCloseByClick),this._popup.addEventListener("click",this._handleCloseByOverlay)}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}}])&&v(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function w(t,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},w(t,e)}function j(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=P(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},O.apply(this,arguments)}function P(t){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},P(t)}function C(t){var e=function(t,e){if("object"!==E(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===E(e)?e:String(e)}var I=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=P(n);if(r){var o=P(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===E(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return j(t)}(this,t)});function i(t){var e,n,r,u,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),r=j(n=o.call(this,t)),a=function(t){n._popupImage.src=t.link,n._popupImage.alt=t.title,n._imagePopupCaption.textContent=t.name,O((e=j(n),P(i.prototype)),"open",e).call(e)},(u=C(u="open"))in r?Object.defineProperty(r,u,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[u]=a,n._popupImage=n._popup.querySelector(".figure__image"),n._imagePopupCaption=n._popup.querySelector(".figure__caption"),n}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(k);function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function T(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==L(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===L(o)?o:String(o)),r)}var o}var B=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._container=document.querySelector(n),this._renderer=e}var e,n;return e=t,(n=[{key:"addCardFromArray",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"addItemPrepend",value:function(t){this._container.prepend(t)}},{key:"addItemAppend",value:function(t){this._container.append(t)}}])&&T(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function R(t){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(t)}function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==R(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===R(o)?o:String(o)),r)}var o}var x=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileName=document.querySelector(e),this._profileJob=document.querySelector(n),this._profileAvatar=document.querySelector(r)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,job:this._profileJob.textContent}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.job,r=t.avatar;this._profileName.textContent=e,this._profileJob.textContent=n,this._profileAvatar.src=r}},{key:"setId",value:function(t){this._id=t}},{key:"getId",value:function(){return this._id}}])&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function D(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==A(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==A(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===A(o)?o:String(o)),r)}var o}function z(){return z="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=V(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},z.apply(this,arguments)}function U(t,e){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},U(t,e)}function V(t){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},V(t)}var F=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&U(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=V(r);if(o){var n=V(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===A(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitFormFunction=e,n._submitButton=n._form.querySelector(".popup__submit-button"),n._dafaultButtonText=n._submitButton.textContent,n._inputList=n._form.querySelectorAll(".popup__input"),n}return e=u,(n=[{key:"_getInputValue",value:function(){var t=this;return this._values={},this._inputList.forEach((function(e){t._values[e.name]=e.value})),this._values}},{key:"setInputValue",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"setEventListeners",value:function(){var t=this;z(V(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitButton.textContent="Сохранение...",t._submitFormFunction(t._getInputValue())}))}},{key:"setDefaultText",value:function(){this._submitButton.textContent=this._dafaultButtonText}},{key:"close",value:function(){z(V(u.prototype),"close",this).call(this),this._form.reset()}}])&&D(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(k);function N(t){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},N(t)}function J(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,G(r.key),r)}}function H(t,e){return H=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},H(t,e)}function M(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Q(){return Q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=$(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},Q.apply(this,arguments)}function $(t){return $=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},$(t)}function G(t){var e=function(t,e){if("object"!==N(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==N(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===N(e)?e:String(e)}var K=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&H(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=$(r);if(o){var n=$(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===N(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return M(t)}(this,t)});function u(t,e){var n,r,o,a,c;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),o=M(r=i.call(this,t)),c=function(t){var e=t.card,o=t.cardId;Q((n=M(r),$(u.prototype)),"open",n).call(n),r._element=e,r._cardId=o},(a=G(a="open"))in o?Object.defineProperty(o,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[a]=c,r._submitFunction=e,r.submitButton=r._form.querySelector(".popup__submit-button"),r}return e=u,(n=[{key:"setEventListeners",value:function(){var t=this;Q($(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t.submitButton.textContent="".concat(t.submitButton.textContent,"..."),t._submitFunction({card:t._element,cardId:t._cardId})}))}}])&&J(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(k);function W(t){return W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},W(t)}function X(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==W(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==W(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===W(o)?o:String(o)),r)}var o}function Y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var Z=new(function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.baseUrl,this._headers=e.headers,this._authorization=e.headers.authorization}var e,n;return e=t,(n=[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject}},{key:"getInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"getCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"setUserInfo",value:function(t){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.name,about:t.job})}).then(this._checkResponse)}},{key:"setNewAvatar",value:function(t){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.avatar})}).then(this._checkResponse)}},{key:"addCards",value:function(t){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.title,link:t.link})}).then(this._checkResponse)}},{key:"addLikes",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"removeLikes",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"removeCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._authorization}}).then(this._checkResponse)}}])&&X(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-66",headers:{authorization:"56ca6cc4-cb7f-453a-ad4f-0eadc019fb12","Content-Type":"application/json"}}),tt=new x(".profile__name",".profile__job",".profile__avatar"),et=new I(".image-popup"),nt=new K(".delete-popup",(function(t){var e=t.card,n=t.cardId;Z.removeCard(n).then((function(){e.deleteCardElement(),nt.close()})).catch((function(t){return console.error("Ошибка удаления карточки ".concat(t))})).finally((function(){return nt._submitFunction.textContent="Дa"}))})),rt=new F(".profile-popup",(function(t){Z.setUserInfo(t).then((function(t){tt.setUserInfo({name:t.name,job:t.about,avatar:t.avatar}),rt.close()})).catch((function(t){return console.error("Ошибка редактирования ".concat(t))})).finally((function(){return rt.setDefaultText()}))})),ot=new F(".card-popup",(function(t){Z.addCards(t).then((function(t){t.myid=tt.getId(),at.addItemPrepend(ut(t)),ot.close()})).catch((function(t){return console.error("Ошибка создания карточки ".concat(t))})).finally((function(){return ot.setDefaultText()}))})),it=new F(".avatar-popup",(function(t){Z.setNewAvatar(t).then((function(t){tt.setUserInfo({name:t.name,job:t.about,avatar:t.avatar}),it.close()})).catch((function(t){return console.error("Ошибка обновления аватара ".concat(t))})).finally((function(){return it.setDefaultText()}))}));function ut(t){var e=new h(t,"#cardTemplate",et.open,nt.open,(function(t,n){t.classList.contains("elements__like-button_active")?Z.removeLikes(n).then((function(t){e.toggleLike(t.likes)})).catch((function(t){return console.error("Ошибка снятия лайка ".concat(t))})):Z.addLikes(n).then((function(t){e.toggleLike(t.likes)})).catch((function(t){return console.error("Ошибка добавления лайка ".concat(t))}))}));return e.createCard()}var at=new B((function(t){at.addItemAppend(ut(t))}),".elements__container"),ct=new d(l,a);ct.enableValidation();var lt=new d(l,c);lt.enableValidation();var st=new d(l,u);st.enableValidation(),et.setEventListeners(),ot.setEventListeners(),rt.setEventListeners(),it.setEventListeners(),nt.setEventListeners(),n.addEventListener("click",(function(){ct.resetErrorInput(),rt.setInputValue(tt.getUserInfo()),rt.open()})),r.addEventListener("click",(function(){lt.resetErrorInput(),ot.open()})),e.addEventListener("click",(function(){st.resetErrorInput(),it.open()})),Promise.all([Z.getInfo(),Z.getCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return Y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Y(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];i.forEach((function(t){return t.myid=o._id})),tt.setUserInfo({name:o.name,job:o.about,avatar:o.avatar}),tt.setId(o._id),at.addCardFromArray(i)})).catch((function(t){return console.error("Ошибка редактирования ".concat(t))}))})();