
/*
Creating objects to represent price adaptations based on user selections.
Each object is an array consisting of dictionaries mapping user selection with price adaptation.
*/


const glazingOptions = [
    {option: "Keep Original", priceAdaptation: 0}, 
    {option: "Sugar Milk", priceAdaptation: 0},
    {option: "Vanilla Milk", priceAdaptation: 0.5},
    {option: "Double Chocolate", priceAdaptation: 1.5},
];

const packSizeOptions = [
    {size: 1, priceAdaptation: 1}, 
    {size: 3, priceAdaptation: 3},
    {size: 6, priceAdaptation: 5},
    {size: 12, priceAdaptation: 10},
];


//Creating the class Roll.

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
        //this.totalPrice = this.updateCartPrice()
    }
/*
    glazeAdapation() {
        let glazePrice;
        for (let i = 0; i < glazingOptions.length; i++) {
            if (glazingOptions[i].option === this.glazing) {
                glazePrice = glazingOptions[i].priceAdaptation;
            }
        
        }
    }

    packSizeAdapation() {
        let packSizePrice;
        for (let i = 0; i < packSizeOptions.length; i++) {
            if (packSizeOptions[i].size === this.size) {
                packSizePrice = packSizeOptions[i].priceAdaptation;
    
            }
        
        }
    }

    updateCartPrice() {
        glazeAdaption();
        packSizeAdaptation();

        return this.basePrice + glazePrice * packSizePrice;
    }
*/
}




//Getting the role type from the URL. Creating the cart array.

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');
let cart = [];


/*
Creating variables for basePrice, glazingPrice, and packSizePrice. 
glazingPrice and packSizePrice will update when we do the price calculations.
*/

let basePrice = rolls[rollType].basePrice;
let glazingPrice = 0;
let packSizePrice = 1;


//Accessing the HTML element for the glazing drop down menu. Populating the drop down menu with a for loop. 

let glazingOptionsElement = document.getElementById('glazingOptions');

function populateGlazingDropdown() {
    for (i = 0; i < glazingOptions.length; i++) {
        let menuOption = document.createElement('option');
        menuOption.text = glazingOptions[i].option;
        menuOption.value = glazingOptions[i].priceAdaptation;
        glazingOptionsElement.add(menuOption);
    }
};


//Accessing the HTML element for the pack size drop down menu. Populating the drop down menu with a for loop. 

let packSizeOptionsElement = document.getElementById('packSizeOptions');

function populatePackSizeDropdown() {
    for (i = 0; i < packSizeOptions.length; i++) {
        let menuOption = document.createElement('option');
        menuOption.text = packSizeOptions[i].size;
        menuOption.value = packSizeOptions[i].priceAdaptation;
        packSizeOptionsElement.add(menuOption);
    }
};


//Accessing the HTML element for the total price. 

let totalPriceElement = document.getElementById('totalPrice');


/*
Accessing the glazingPrice which is the price adaptation after the user selects a glazing option.
Updating the price using the updatePrice function nested inside.  
*/

function glazingChange() {
    glazingPrice = parseFloat(this.value);
    console.log("glazing price: " + glazingPrice)
    updatePrice();

}

/*
Accessing the packSizePrice which is the price adaptation after the user selects a pack size.
Updating the price using the updatePrice function nested inside.  
*/

function packSizeChange() {
    packSizePrice = parseFloat(this.value);
    console.log("pack size price: " + packSizePrice)
    updatePrice();

}


//Calculating the totalPrice and updating the total price on the product details page.  

function updatePrice() {
    let totalPrice = (basePrice + glazingPrice) * packSizePrice;
    console.log("total price: " + totalPrice);
    totalPriceElement.textContent = "$" + totalPrice.toFixed(2);
}


//Accessing the HTML element for the header and updating the header text with the name of the cinnamon roll. 

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


/*
Capturing the current glaze and current pack size by getting the text of the currently selected option. 
Creating an instance of the class Roll which contains the current product information.
Pushing the new cart item into the cart array. 
*/

function addToCart() {
    let currentGlaze = glazingOptionsElement.options[glazingOptionsElement.selectedIndex].text;
    let currentPackSize = packSizeOptionsElement.options[packSizeOptionsElement.selectedIndex].text;
    let newCartItem = new Roll (rollType, currentGlaze, currentPackSize, basePrice);
    cart.push(newCartItem);
    console.log(cart);
}


/*
Calling the functions that populate the drop down menus.
Adding event listeners which call the functions glazingChange, packSizeChange, and addToCart when the respective event occurs.
*/

populateGlazingDropdown();
populatePackSizeDropdown();
glazingOptionsElement.addEventListener('change', glazingChange);
packSizeOptionsElement.addEventListener('change', packSizeChange);
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