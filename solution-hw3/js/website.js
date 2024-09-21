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


/*
Creating variables for basePrice, glazingPrice, and packSizePrice. 
glazingPrice and packSizePrice will update when we do the price calculations.
*/

const basePrice = 2.49;
let glazingPrice = 0;
let packSizePrice = 1;


/*
Accessing the HTML elements that we want to interact with.
These elements are the glazing drop down menu, pack size drop down menu, and total price. 
*/

const glazingOptionsElement = document.getElementById('glazingOptions');
const packSizeOptionsElement = document.getElementById('packSizeOptions');
const totalPriceElement = document.getElementById('totalPrice');


/*
Writing functions that populate the glazing drop down menu and the pack size drop down menu. 
The for loop loops through each item in the objects created earlier and creates an 'option' element for each item.
Text and value are added to each menu option. 
Finally the menu option is added to the drop down menu. 
*/

function populateGlazingDropdown() {
    for (i = 0; i < glazingOptions.length; i++) {
        let menuOption = document.createElement('option');
        menuOption.text = glazingOptions[i].option;
        menuOption.value = glazingOptions[i].priceAdaptation;
        glazingOptionsElement.add(menuOption);
    }
};

function populatePackSizeDropdown() {
    for (i = 0; i < packSizeOptions.length; i++) {
        let menuOption = document.createElement('option');
        menuOption.text = packSizeOptions[i].size;
        menuOption.value = packSizeOptions[i].priceAdaptation;
        packSizeOptionsElement.add(menuOption);
    }
};

/*
Writing a function that accesses the glazingPrice which is the price adaptation after the user selects a glazing option.
Updating the price using the updatePrice function nested inside.  
*/

function glazingChange() {
    glazingPrice = parseFloat(this.value);
    console.log("glazing price: " + glazingPrice)
    updatePrice();

}

/*
Writing a function that accesses the packSizePrice which is the price adaptation after the user selects a pack size.
Updating the price using the updatePrice function nested inside.  
*/

function packSizeChange() {
    packSizePrice = parseFloat(this.value);
    console.log("pack size price: " + packSizePrice)
    updatePrice();

}

/*
This function calculates the totalPrice and updates the total price on the product details page.  
*/

function updatePrice() {
    let totalPrice = (basePrice + glazingPrice) * packSizePrice;
    console.log("total price: " + totalPrice);
    totalPriceElement.textContent = "$" + totalPrice.toFixed(2);
}


/*
Calling the functions that populate the drop down menus.
Adding event listeners which take 'change' as the event and glazingChange or packSizeChange as the function to be called.
*/

populateGlazingDropdown();
populatePackSizeDropdown();
glazingOptionsElement.addEventListener('change', glazingChange);
packSizeOptionsElement.addEventListener('change', packSizeChange);

/* References

how to use parseFloat
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat

how to use toFixed
https://www.geeksforgeeks.org/how-to-round-a-number-to-a-certain-number-of-decimal-places-in-javascript/

how to use for loop to populate drop down menu
https://stackoverflow.com/questions/67155000/javascript-how-to-generate-a-drop-down-list-with-loops-and-how-do-i-use-change

*/