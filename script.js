//Add drop-down menu

const menuActive = document.querySelector(".menu");
const burger = document.querySelector(".navigation-right");
const burgerMobile = document.querySelector(".nav-burger");

function toggleMenu() {
  menuActive.classList.toggle("hidden");
}

burger.addEventListener("click", toggleMenu);
burgerMobile.addEventListener("click", toggleMenu);

//Add cart function before "subscription" block

const data = JSON.parse(productData);
const productCards = document.querySelector(".products-cards");
const dataCart = [];

data.forEach((element) => {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");
  const productCardIMG = document.createElement("div");
  productCardIMG.classList.add("product-card-img");
  const productImage = document.createElement("img");
  productImage.src = element.imageSRC;
  const productHover = document.createElement("div");
  productHover.classList.add("product-hover");
  const productImageHover = document.createElement("img");
  productImageHover.src = "./img/ProductHover.png";
  const productHoverBtn = document.createElement("button");
  productHoverBtn.classList.add("product-hover-btn");
  productHoverBtn.textContent = "Add to Cart";
  const cartImage = document.createElement("img");
  cartImage.src = "./img/ProductCart.png";

  const productDescription = document.createElement("div");
  productDescription.classList.add("product-description");
  const prodDescriptionH3 = document.createElement("h3");
  prodDescriptionH3.textContent = element.article;
  const productDescriptionParag = document.createElement("p");
  productDescriptionParag.classList.add("product-description-parag");
  productDescriptionParag.textContent = element.description;
  const productDescriptionPrice = document.createElement("p");
  productDescriptionPrice.classList.add("product-description-price");
  productDescriptionPrice.textContent = element.price;

  productCards.append(productCard);
  productCard.append(productCardIMG);
  productCardIMG.append(productImage);
  productCardIMG.append(productHover);
  productHover.append(productImageHover);
  productHover.append(productHoverBtn);
  productHoverBtn.append(cartImage);
  productCard.append(productDescription);
  productDescription.append(prodDescriptionH3);
  productDescription.append(productDescriptionParag);
  productDescription.append(productDescriptionPrice);

  productHoverBtn.addEventListener("click", function (e) {
    dataCart.push(element);

    const cartItems = document.querySelector(".cart-items");
    cartItems.innerHTML = "";
    const newH3 = document.createElement("h3");
    newH3.textContent = "Cart items";
    newH3.classList.add("cart-items-heading");
    cartItems.append(newH3);
    cartItems.style.display = "";
    cartItems.style.paddingTop = "96px";
    cartItems.style.paddingBottom = "96px";

    dataCart.forEach((element) => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      const cartItemImg = document.createElement("img");
      cartItemImg.src = element.imageSRC;

      const cartItemContent = document.createElement("div");
      cartItemContent.classList.add("cart-item-content");

      const cartItemDescription = document.createElement("div");
      cartItemDescription.classList.add("cart-item-description");

      const cartItemDescriptionH3 = document.createElement("h3");
      cartItemDescriptionH3.textContent = element.article;

      const cartItemTraits = document.createElement("div");
      cartItemTraits.classList.add("cart-item-traits");

      const cartItemPrice = document.createElement("p");
      cartItemPrice.textContent = `Price: ${element.price}`;

      const cartItemColor = document.createElement("p");
      cartItemColor.textContent = `Color: ${element.color}`;

      const cartItemSize = document.createElement("p");
      cartItemSize.textContent = `Size: ${element.size}`;

      const quantityElement = document.createElement("div");

      const cartItemQuantity = document.createElement("p");
      cartItemQuantity.textContent = `Quantity:`;

      const quantityNum = document.createElement("p");
      quantityNum.textContent = element.quantity;

      const divCancel = document.createElement("div");
      divCancel.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/> </svg>';
      divCancel.classList.add("cart-item-cancel");

      cartItems.append(cartItem);
      cartItem.append(cartItemImg);
      cartItem.append(cartItemContent);
      cartItemContent.append(cartItemDescription);
      cartItemDescription.append(cartItemDescriptionH3);
      cartItemDescription.append(cartItemTraits);
      cartItemTraits.append(cartItemPrice);
      cartItemTraits.append(cartItemColor);
      cartItemTraits.append(cartItemSize);
      cartItemTraits.append(quantityElement);
      quantityElement.append(cartItemQuantity);
      quantityElement.append(quantityNum);
      cartItemContent.append(divCancel);

      divCancel.addEventListener("click", function (e) {
        cartItem.remove();
        if (document.querySelector(".cart-item")) {
          console.log("true");
        } else {
          console.log("false");
          cartItems.classList.add('hidden');
          cartItems.innerHTML = '';
          cartItems.style.padding = 0;
        }
      });
    });
  });
});
