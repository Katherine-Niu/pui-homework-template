//Creating a Roll class (copied from hw 4)
//I added the attribute itemPrice and set it equal to the return value of the updateItemPrice method. 
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
        this.itemPrice = this.updateItemPrice()
    };

    updateItemPrice() {
        let glazePrice;
        let packSizePrice;
        let itemPrice;
        //Using for loop to iterate through the glazingOptions array 
        for (let i = 0; i <glazingOptions.length; i++) {
            if (glazingOptions[i].option === this.glazing) {
                glazePrice = (glazingOptions[i].priceAdaptation);
            };
        };
    
        for (let i = 0; i < packSizeOptions.length; i++) {
            if (packSizeOptions[i].size === this.size) {
                packSizePrice = (packSizeOptions[i].priceAdaptation);
            };
        };
        itemPrice = (((this.basePrice) + glazePrice) * packSizePrice).toFixed(2);
        return itemPrice;

    }
};

//Copying the glazingOptions and packSizeOptions from hw 4. 
const glazingOptions = [
    {option: "Original", priceAdaptation: 0}, 
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


//Creating an empty array to hold the roll objects. 
//Initializing the total cart price variable.
let cartArray = [];
let totalCartPrice = 0
let totalCartPriceElement = document.querySelector('#total-cart-price');

//Creating a new roll object and storing it as cartItem.
//Adding the cartItem to the cartArray.
//Updating the total cart price. 
function addCartItem(rollType, rollGlazing, packSize, basePrice) {
    
    let cartItem = new Roll(rollType, rollGlazing, packSize, basePrice);
    cartArray.push(cartItem);
    totalCartPrice += cartItem.itemPrice;
    totalCartPriceElement.innerText = "$" + (parseFloat(totalCartPrice)).toFixed(2);
    
};



function createElement(cartItem) {
    //Grabbing a reference to the cart template.
    //Getting the content inside the template and copying it using the cloneNode method. 
    //Connecting the clone to cartItem.element
    let cartTemplate = document.querySelector('#cart-template');
    let clone = cartTemplate.content.cloneNode(true);
    cartItem.element = clone.querySelector('.shopping-cart-item')

    //Grabbing a reference to the remove button. 
    //Adding a click event listener to the remove button. 
    //Wrapping the removeCartItem function in an arrow function. 
    let removeBtn = cartItem.element.querySelector('.remove-btn');
    removeBtn.addEventListener('click', () => {
        removeCartItem(cartItem)
    });

    //Grabbing a reference to the div that contains all of the cart items.
    //Using the append method to add the newly created elements to the div. 
    let shoppingCartContentElement = document.querySelector('.shopping-cart-main');
    shoppingCartContentElement.append(cartItem.element);

    //Calling the updateElement function
    updateElement(cartItem);
}



//This function takes the cartItem as an argument and updates the appropriate DOM element. 
function updateElement(cartItem) {
    //Using querySelector to get references to the DOM elements. 
    let imageElement = cartItem.element.querySelector('.shopping-cart-image');
    let typeElement = cartItem.element.querySelector('.type');
    let glazingElement = cartItem.element.querySelector('.glazing');
    let packSizeElement = cartItem.element.querySelector('.packSize');
    let priceElement = cartItem.element.querySelector('.price');
    let removeElement = cartItem.element.querySelector('.remove-btn');
  //  let totalCartPriceElement = document.querySelector('#total-cart-price')
    
    //Updating the DOM elements using the properties of cartItem
    imageElement.src = "../assets/products/" + cartItem.type.toLowerCase() + "-cinnamon-roll.jpg";
    typeElement.innerText = cartItem.type + " Cinnamon Roll";
    glazingElement.innerText = "Glazing: " + cartItem.glazing;
    packSizeElement.innerText = "Pack Size: " + cartItem.size;
    priceElement.innerText = "$" + cartItem.itemPrice;
    removeElement.innerText = "Remove";
 //   totalCartPriceElement.innerText = "$" + (parseFloat(totalCartPrice)).toFixed(2)
}

//This function removes items from the cart.
//Removing cartItem.element from the DOM.
//Removing the cartItem from the cartArray.
function removeCartItem(cartItem) {
    cartItem.element.remove();
    cartArray.pop(cartItem);
    totalCartPrice -= cartItem.itemPrice;
    totalCartPriceElement.innerText = "$" + (parseFloat(totalCartPrice)).toFixed(2);
}


//Adding cart items to the cartArray by calling the addCartItem function.
addCartItem("Original", "Sugar Milk", 1, 2.49);
addCartItem("Walnut", "Vanilla Milk", 12, 3.49);
addCartItem("Raisin", "Sugar Milk", 3, 2.99);
addCartItem("Apple", "Original", 3, 3.49);

//Using a for...of loop to iterate through the cartArray.
//For each item in the array, the createElement function is called. 

for (let cartItem of cartArray) {
    console.log(cartItem);
    createElement(cartItem);
}
    
