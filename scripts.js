const selectElementHtml = document.getElementById('select-items');
const inputQuantityHtml = document.getElementById('input-quantity');
const totalValueHtml = document.getElementById('total-products-value');
const cartHtml = document.getElementById('products-on-cart');
const divItemsCart = document.getElementById('items-cart');
const newUl = document.createElement('ul');
divItemsCart.appendChild(newUl);
let newLi;
let newSpan;

const cartItems = []; 
let selectedItem = {};

const options  = [
    {id : 1, name : 'Air Pods 4', price : 10},
    {id : 2, name : 'MackBook Pro', price : 20},
    {id : 3, name : 'iPad Pro', price : 30},
    {id : 4, name : 'iPhone 15 Pro', price : 40}
];


let currentQuantity; 
let additionalQuantity; 


function addToCart() {
    selectedItem = options.find(option => option.id == selectElementHtml.value);
    const item =  cartItems.find(item => item.id == selectedItem.id);
    if(item) {
        additionalQuantity = +inputQuantityHtml.value || 0;
        item.quantity += additionalQuantity;
        item.total = item.quantity * item.price;
        document.getElementById(selectedItem.id).textContent = `${item.quantity} ${selectedItem.name}`;
    } else {
        genereteNewLi();
        identifyQuantity();

        cartItems.push({
            quantity: currentQuantity,
            name: selectedItem.name,
            price: selectedItem.price,
            id : selectedItem.id,
            total : valuesForSum
        }); 
        createButtonRemoveItems();   
    }
    calculateTotalValue();   
}

function cleanCart() {
    cartItems.splice(0, cartItems.length);
    newUl.replaceChildren();
    total = 0; 
    totalValueHtml.textContent = `Valor Total R$ ${total}`;
}

function genereteNewLi() {
    newLi = document.createElement('li');
    newSpan = document.createElement('span'); 
    newSpan.textContent = `${inputQuantityHtml.value}  ${selectedItem.name}`; 
    newSpan.setAttribute('id', `span-${selectedItem.id}`); 
    newLi.appendChild(newSpan); 
    newLi.setAttribute('id', selectedItem.id);
    newUl.appendChild(newLi);
}

function identifyQuantity() {
    currentQuantity = +newLi.textContent.split(' ')[0];
    valuesForSum = selectedItem.price * inputQuantityHtml.value;
}

function createButtonRemoveItems() {
    const buttonRemoveItem = document.createElement('button');
    buttonRemoveItem.textContent = 'Remover un'
    buttonRemoveItem.setAttribute('id', selectedItem.id); 
    document.getElementById(selectedItem.id).appendChild(buttonRemoveItem);

    const buttonRemoveLi = document.createElement('button');
    buttonRemoveLi.textContent = 'Remover todos';
    buttonRemoveLi.setAttribute('id', selectedItem.id); 
    document.getElementById(selectedItem.id).appendChild(buttonRemoveLi);
    
    buttonRemoveItem.onclick = function () { 
        const itemToDecrease = cartItems.find(item => item.id == buttonRemoveItem.id);
        if(itemToDecrease.quantity > 1) {
            itemToDecrease.quantity = itemToDecrease.quantity - 1; 
            document.getElementById(`span-${buttonRemoveItem.id}`).textContent = `${itemToDecrease.quantity} ${itemToDecrease.name}`;    
            total = total - itemToDecrease.price; 
            totalValueHtml.textContent = `Valor Total R$ ${total}`;
        } else {
            const indexOfItemToRemove = cartItems.indexOf(itemToDecrease, 0);
            cartItems.splice(indexOfItemToRemove, 1);
            newUl.removeChild(document.getElementById(itemToDecrease.id));
            total = total - itemToDecrease.price;
            totalValueHtml.textContent = `Valor Total R$ ${total}`;   
        }   
    }
    buttonRemoveLi.onclick = function () {
        const itemToRemove = cartItems.find(item => item.id == buttonRemoveItem.id);
        const indexOfItemToRemove = cartItems.indexOf(itemToRemove, 0);
        cartItems.splice(indexOfItemToRemove, 1);
        newUl.removeChild(document.getElementById(itemToRemove.id));
        total = total - itemToRemove.price * itemToRemove.quantity;
        totalValueHtml.textContent = `Valor Total R$ ${total}`;   
    }         
}

let total = 0;
function calculateTotalValue() {
    total = cartItems.reduce((acc, item) => acc + item.total, 0); 
    totalValueHtml.textContent = `Valor Total R$ ${total}`;
}


    



