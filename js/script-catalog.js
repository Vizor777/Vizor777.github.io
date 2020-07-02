var buttonBuy = document.querySelectorAll(".button-buy");
var storeBasket = document.querySelector(".store-basket");
var orderClose = document.querySelector(".order-close");

function myFunction() {
	for (var i = 0; i < buttonBuy.length; i++) {
		buttonBuy[i].addEventListener("click", function (evt) {
			evt.preventDefault();
			storeBasket.classList.remove("hide");
			storeBasket.classList.add("popup-show");
		})
	}
}

myFunction();

orderClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	storeBasket.classList.add("hide");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		storeBasket.classList.add("hide");
	}
})