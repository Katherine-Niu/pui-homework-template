//Calculating and updating the total cart price. 
function updateTotalCartPrice() {
    let totalCartPrice = 0;
    let totalCartPriceElement = document.querySelector('#total-cart-price');
    for (const item of cart) {
        totalCartPrice += calculateItemPrice(item);
    };
    totalCartPriceElement.innerText = "$" + totalCartPrice;
};


//Calculating the item price using for loops. 
let glazingPrice = 0;
let packSizePrice = 1;
function calculateItemPrice(item) {
    for (let i = 0; i <glazingOptions.length; i++) {
        if (glazingOptions[i].option === item.glazing) {
            glazingPrice = glazingOptions[i].priceAdaptation;
        };
    };
    for (let i = 0; i < packSizeOptions.length; i++) {
        if (packSizeOptions[i].size === parseInt(item.size)) {
            packSizePrice = packSizeOptions[i].priceAdaptation;
        };
    };
    let itemPrice = (item.basePrice + glazingPrice) * packSizePrice
    return itemPrice;
};


//Populating the DOM with the cart items.
function createElement(item) {
    let cartTemplate = document.querySelector('#cart-template'); //Grabbing a reference to the cart template.
    let clone = cartTemplate.content.cloneNode(true); //Getting the content inside the template and copying it using the cloneNode method. 
    item.element = clone.querySelector('.shopping-cart-item'); //Connecting the clone to shopping cart item element.
 
    let removeBtn = clone.querySelector('.remove-btn'); //Grabbing a reference to the remove button. 
    removeBtn.addEventListener('click', () => {
        removeCartItem(item);
    }); //Adding a click event listener to the remove button. 

    let shoppingCartContentElement = document.querySelector('.shopping-cart-main'); //Grabbing a reference to the div that contains all of the cart items.
    shoppingCartContentElement.append(clone); //Using the append method to add the newly created elements to the div. 

    //Calling the updateElement, updateTotalCartPrice, and saveToLocalStorage functions.
    updateElement(item);
    updateTotalCartPrice();
    saveToLocalStorage();
};


//This function takes the cart item as an argument and updates the appropriate DOM element. 
function updateElement(item) {
    //Using querySelector to get references to the DOM elements. 
    let imageElement = item.element.querySelector('.shopping-cart-image');
    let typeElement = item.element.querySelector('.type');
    let glazingElement = item.element.querySelector('.glazing');
    let packSizeElement = item.element.querySelector('.packSize');
    let priceElement = item.element.querySelector('.price');
    let removeElement = item.element.querySelector('.remove-btn');
    
    //Updating the DOM elements using the properties of the cart item
    imageElement.src = "../assets/products/" + item.type.toLowerCase() + "-cinnamon-roll.jpg";
    typeElement.innerText = item.type + " Cinnamon Roll";
    glazingElement.innerText = "Glazing: " + item.glazing;
    packSizeElement.innerText = "Pack Size: " + item.size;
   // priceElement.innerText = "$" + item.itemPrice;
    priceElement.innerText = "$" + calculateItemPrice(item);
    removeElement.innerText = "Remove";
};


//This function removes items from the cart, updates the total cart price, and saves the updated cart to local storage.
function removeCartItem(item) {
    item.element.remove();
    cart.delete(item);
    updateTotalCartPrice();
    saveToLocalStorage();
};


//Using a for...of loop to iterate through the cartArray.
//For each item in the array, the createElement function is called. 
for (const item of cart) {
    createElement(item);
};
    


  