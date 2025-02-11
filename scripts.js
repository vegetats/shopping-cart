const selectElementHtml = document.getElementById('select-items');
const inputQuantityHtml = document.getElementById('input-quantity');
const totalValueHtml = document.getElementById('total-products-value');
const cartHtml = document.getElementById('products-on-cart');
const divItemsCart = document.getElementById('items-cart');
const newUl = document.createElement('ul');
divItemsCart.appendChild(newUl);
const allIndividualValues = [];
let individualValue = 0; 
let totalValue = 0;

const cartItems = []; 
let foundItem = {};

const options  = [
    {value : 'item1', name : 'Air Pods 4', price : 10},
    {value : 'item2', name : 'MackBook Pro', price : 20},
    {value : 'item3', name : 'iPad Pro', price : 30},
    {value : 'item4', name : 'iPhone 15 Pro', price : 40}
];


function returnObjectItem() {
    selectElementHtml.addEventListener('change', function() {
  
        const selectedItem = selectElementHtml.value;
      
        foundItem = options.find(option => option.value === selectedItem);
    });
}

returnObjectItem();



function addToCart() {
    
    cartItems.push({
        quantity: inputQuantityHtml.value,
        name: foundItem.name,
        price: foundItem.price,
        value : foundItem.value
    });
    
    const newLi = document.createElement('li');
    newLi.textContent = `${inputQuantityHtml.value}  ${foundItem.name}`; 
    newLi.setAttribute('id', foundItem.value);
    newUl.appendChild(newLi);

    individualValue = (inputQuantityHtml.value * foundItem.price);
    allIndividualValues.push(individualValue);
    totalValue = allIndividualValues.reduce((total, num) => total + num, 0); 
    totalValueHtml.textContent = `R$ ${totalValue}`;  
}

