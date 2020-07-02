var sliderButtomLeft = document.querySelectorAll(".slider-button-left");
var sliderButtomRight = document.querySelectorAll(".slider-button-right");
var sliderSectionsRotar = document.querySelector(".rotary-hammers-slider");
var sliderSectionsDrill = document.querySelector(".drills-cards");
var sliderRadioFrst = document.querySelectorAll(".slider-radio-1");
var sliderRadioSec = document.querySelectorAll(".slider-radio-2");
var services = document.querySelectorAll(".services-list-base");
var servicesDelivery = document.querySelector(".services-delivery-section");
var servicesGuarant = document.querySelector(".services-guarant-section");
var servicesCredit = document.querySelector(".services-credit-section");
var servicesList = document.querySelectorAll(".services-list-base");
var companyDetails = document.querySelector(".company-details");
var feedBackClose = document.querySelector(".feed-back-close");
var feedbackPopup = document.querySelector(".feedback-popup");
var feedBackButton = document.querySelector(".feed-back-button");
var mapWidget = document.querySelector(".map-widget");
var mapContacts = document.querySelector(".map-contacts");
var mapClose = document.querySelector(".map-close");
var buttonBuy = document.querySelectorAll(".button-buy");
var storeBasket = document.querySelector(".store-basket");
var orderClose = document.querySelector(".order-close");
var form = document.querySelector(".feedback-popup");
var nameInput = form.querySelector("[name=name]");
var emailInput = form.querySelector("[name=e-mail]");
var textArea = form.querySelector("[name=content-letter]");

form.addEventListener("submit", function (evt) {
	evt.preventDefault();
	if (!nameInput.value || !emailInput.value || !textArea.value) {
		feedbackPopup.classList.remove("popup-show");
		feedbackPopup.classList.remove("popup-error");
		form.offsetWidth = form.offsetWidth;
		feedbackPopup.classList.add("popup-error");
	}
});

function myFunction() {
	for (var i = 0; i < buttonBuy.length; i++) {
		buttonBuy[i].addEventListener("click", function (evt) {
			evt.preventDefault();
			storeBasket.classList.remove("hide");
			storeBasket.classList.add("popup-show");
		})
	}
};

myFunction();

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		feedbackPopup.classList.remove("popup-error");
		mapWidget.classList.add("hide");
		storeBasket.classList.add("hide");
		feedbackPopup.classList.add("hide")
	}
})

sliderButtomLeft[0].addEventListener("click", function (evt) {
	evt.preventDefault();
	sliderSectionsDrill.classList.remove("hide");
	sliderSectionsRotar.classList.add("hide");
	sliderRadioFrst[1].classList.add("slider-radio-active");
});

sliderButtomRight[0].addEventListener("click", function (evt) {
	evt.preventDefault();
	sliderRadioSec[0].classList.add(slider-radio-active);
});

sliderButtomRight[1].addEventListener("click", function (evt) {
	evt.preventDefault();
	sliderSectionsDrill.classList.add("hide");
	sliderSectionsRotar.classList.remove("hide");
});

sliderRadioFrst[0].addEventListener("click", function (evt) {
	evt.preventDefault();
	sliderSectionsDrill.classList.remove("hide");
	sliderSectionsRotar.classList.add("hide");
	sliderRadioSec[0].classList.remove("slider-radio-active");
	sliderRadioFrst[1].classList.add("slider-radio-active");
});

sliderRadioSec[1].addEventListener("click", function (evt) {
	evt.preventDefault();
	sliderSectionsDrill.classList.add("hide");
	sliderSectionsRotar.classList.remove("hide");
	sliderRadioFrst[0].classList.remove("slider-radio-active");
	sliderRadioSec[0].classList.add("slider-radio-active");
});

services[0].addEventListener("click", function (evt) {
	evt.preventDefault();
	servicesDelivery.classList.remove("hide");
	servicesGuarant.classList.add("hide");
	servicesCredit.classList.add("hide");
});

services[1].addEventListener("click", function (evt) {
	evt.preventDefault();
	servicesDelivery.classList.add("hide");
	servicesGuarant.classList.remove("hide");
	servicesCredit.classList.add("hide");
});

services[2].addEventListener("click", function (evt) {
	evt.preventDefault();
	servicesDelivery.classList.add("hide");
	servicesGuarant.classList.add("hide");
	servicesCredit.classList.remove("hide");
});

servicesList[0].addEventListener("click", function (evt) {
	evt.preventDefault();
	servicesList[0].classList.add("services-list-active");
	servicesList[1].classList.remove("services-list-active");
	servicesList[2].classList.remove("services-list-active");
});

servicesList[1].addEventListener("click", function (evt) {
	evt.preventDefault();
	servicesList[0].classList.remove("services-list-active");
	servicesList[1].classList.add("services-list-active");
	servicesList[2].classList.remove("services-list-active");
});

servicesList[2].addEventListener("click", function (evt) {
	evt.preventDefault();
	servicesList[0].classList.remove("services-list-active");
	servicesList[1].classList.remove("services-list-active");
	servicesList[2].classList.add("services-list-active");
});

feedBackClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	feedbackPopup.classList.add("hide")
	feedbackPopup.classList.remove("popup-error");
});

feedBackButton.addEventListener("click", function (evt) {
	evt.preventDefault();
	feedbackPopup.classList.remove("hide");
	feedbackPopup.classList.add("popup-show");
	nameInput.focus();
});

mapContacts.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapWidget.classList.remove("hide");
	mapWidget.classList.add("popup-show");
});

mapClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapWidget.classList.add("hide");
});

orderClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	storeBasket.classList.add("hide");
});