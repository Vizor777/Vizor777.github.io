var buttonBuy=document.querySelectorAll(".button-buy"),storeBasket=document.querySelector(".store-basket"),orderClose=document.querySelector(".order-close");function myFunction(){for(var e=0;e<buttonBuy.length;e++)buttonBuy[e].addEventListener("click",function(e){e.preventDefault(),storeBasket.classList.remove("hide"),storeBasket.classList.add("popup-show")})}myFunction(),orderClose.addEventListener("click",function(e){e.preventDefault(),storeBasket.classList.add("hide")}),window.addEventListener("keydown",function(e){27===e.keyCode&&storeBasket.classList.add("hide")});