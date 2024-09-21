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

const basePrice = 2.49;
let glazingPrice = 0;
let packSizePrice = 1;

const glazingOptionsElement = document.getElementById('glazingOptions');
const packSizeOptionsElement = document.getElementById('packSizeOptions');
const totalPriceElement = document.getElementById('totalPrice');


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

function glazingChange() {
    glazingPrice = parseFloat(this.value);
    console.log("glazing price: " + glazingPrice)
    updatePrice();
    

//    let packSizePrice = parseFloat(element.value);
//    let totalPrice = (basePrice + glazingPrice) * packSizePrice;
//    totalPriceElement.textContent = totalPrice.toFixed(2);
}

function packSizeChange() {
    packSizePrice = parseFloat(this.value);
    console.log("pack size price: " + packSizePrice)
    updatePrice();

}

function updatePrice() {
    let totalPrice = (basePrice + glazingPrice) * packSizePrice;
    console.log("total price: " + totalPrice);
    totalPriceElement.textContent = "$" + totalPrice.toFixed(2);
}

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