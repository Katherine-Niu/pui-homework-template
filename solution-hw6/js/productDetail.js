//Retrieving the cart from local storage.
retrieveFromLocalStorage();


//Getting the role type from the URL. 
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');


//Creating variables for basePrice, glazingPrice, and packSizePrice. 
//glazingPrice and packSizePrice will update when we do the price calculations.

let basePrice = rolls[rollType].basePrice;
let glazingPrice = 0;
let packSizePrice = 1;


//Populating the drop down menu with a for loop. 
let glazingOptionsElement = document.getElementById('glazingOptions');
function populateGlazingDropdown() {
    for (i = 0; i < glazingOptions.length; i++) {
        let menuOption = document.createElement('option');
        menuOption.text = glazingOptions[i].option;
        menuOption.value = glazingOptions[i].option;
        glazingOptionsElement.add(menuOption);
    }
};
populateGlazingDropdown(); 


//Populating the drop down menu with a for loop. 
let packSizeOptionsElement = document.getElementById('packSizeOptions');
function populatePackSizeDropdown() {
    for (i = 0; i < packSizeOptions.length; i++) {
        let menuOption = document.createElement('option');
        menuOption.text = packSizeOptions[i].size;
        menuOption.value = packSizeOptions[i].size;
        packSizeOptionsElement.add(menuOption);
    }
};
populatePackSizeDropdown();


//Calculating the glazingPrice which is the price adaptation after the user selects a glazing option.
//This function calls the updatePrice function.  
function glazingChange() {
    for (let i = 0; i < glazingOptions.length; i++) {
        if (glazingOptions[i].option === glazingOptionsElement.value) {
            glazingPrice = glazingOptions[i].priceAdaptation;
        }
    }
    console.log("glazing price: " + glazingPrice)
    updatePrice();
}
glazingOptionsElement.addEventListener('change', glazingChange);


//Calculating the packSizePrice which is the price adaptation after the user selects a pack size.
//This function calls the updatePrice function.  
function packSizeChange() {
    for (let i = 0; i < packSizeOptions.length; i++) {
        if (packSizeOptions[i].size === parseFloat(packSizeOptionsElement.value)) {
            packSizePrice = packSizeOptions[i].priceAdaptation;
        }
    }
    console.log("pack size price: " + packSizePrice)
    updatePrice();
}
packSizeOptionsElement.addEventListener('change', packSizeChange);


//Calculating the totalPrice and updating the total price on the product details page.  
let totalPriceElement = document.getElementById('totalPrice');
function updatePrice() {
    let totalPrice = (basePrice + glazingPrice) * packSizePrice;
    console.log("total price: " + totalPrice.toFixed(2));
    totalPriceElement.textContent = "$" + totalPrice.toFixed(2);
}


//Updating the header text with the name of the cinnamon roll. 
let productDetailHeaderElement = document.getElementById('product-detail-header');
productDetailHeaderElement.innerText = rollType + " Cinnamon Roll";


//Updating the product image.
let productDetailImageElement = document.querySelector('.product-image-large');
productDetailImageElement.src = '../assets/products/' + rolls[rollType]["imageFile"];


//Updating the base price.
let productDetailBasePrice = rolls[rollType]["basePrice"];
totalPriceElement.innerText = "$" + productDetailBasePrice;


//Accessing the HTML element for the add to cart button. 
let addToCartButtonElement = document.getElementById('add-to-cart-btn');


//Capturing the current glaze and current pack size by getting the text of the currently selected option. 
//Creating an instance of the class Roll which contains the current product information.
//Pushing the new cart item into the cart set. 

function addToCart() {
    let currentGlaze = glazingOptionsElement.options[glazingOptionsElement.selectedIndex].text;
    let currentPackSize = packSizeOptionsElement.options[packSizeOptionsElement.selectedIndex].text;
    let newCartItem = new Roll (rollType, currentGlaze, currentPackSize, basePrice);
    cart.add(newCartItem);
    saveToLocalStorage();
    console.log(cart);
}
addToCartButtonElement.addEventListener('click', addToCart)


/* References

how to use parseFloat
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat

how to use toFixed
https://www.geeksforgeeks.org/how-to-round-a-number-to-a-certain-number-of-decimal-places-in-javascript/

how to use for loop to populate drop down menu
https://stackoverflow.com/questions/67155000/javascript-how-to-generate-a-drop-down-list-with-loops-and-how-do-i-use-change

how to add elements to an array
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

how to get the selected option text
https://stackoverflow.com/questions/14976495/get-selected-option-text-with-javascript

*/