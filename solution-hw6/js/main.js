//Creating objects to represent price adaptations based on user selections.
//Each object is an array consisting of dictionaries mapping user selection with price adaptation.
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


//Copied rolls object from previous hw's rollsData.js to consolidate code.
const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};


//Creating the class Roll.
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
        //this.itemPrice = this.updateItemPrice();
        this.element = null;
    };
    /*
    updateItemPrice() {
        let glazePrice = 0;
        let packSizePrice = 1;
        let itemPrice = 0;
        //Using for loop to iterate through the glazingOptions array 
        for (let i = 0; i <glazingOptions.length; i++) {
            if (glazingOptions[i].option === this.glazing) {
                glazePrice = parseFloat(glazingOptions[i].priceAdaptation);
            };
        };
        for (let i = 0; i < packSizeOptions.length; i++) {
            if (packSizeOptions[i].size == this.size) {
                packSizePrice = parseFloat(packSizeOptions[i].priceAdaptation);
            };
        };
        itemPrice = (((this.basePrice) + glazePrice) * packSizePrice);
        return itemPrice;
    }
    */
    
};

//Creating an empty set for the cart. 
let cart = new Set();


//This function creates an array from the cart, turns it into a JSON, and saves it in local storage.
function saveToLocalStorage() {
    const cartArray = Array.from(cart);
    const cartArrayString = JSON.stringify(cartArray);
    localStorage.setItem('storedItem', cartArrayString);
}


//This function retrieves the cart from local storage.  
function retrieveFromLocalStorage() {
    const cartArrayString2 = localStorage.getItem('storedItem');
    const cartArray2 = JSON.parse(cartArrayString2);
    cart = new Set(cartArray2);
    console.log(cartArray2);
}
if (localStorage.getItem('storedItem') != null) {
    retrieveFromLocalStorage();
  }