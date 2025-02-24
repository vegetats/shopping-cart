const selectElementHtml = document.getElementById('select-items');
const inputQuantityHtml = document.getElementById('input-quantity');
const totalValueHtml = document.getElementById('total-products-value');
const cartHtml = document.getElementById('products-on-cart');
const divItemsCart = document.getElementById('items-cart');
const newUl = document.createElement('ul');
divItemsCart.appendChild(newUl);
let newLi;

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
    }
    createButtonRemoveItems(); 
    calculateTotalValue(); 
    console.log('------------------');
    console.log({ response: cartItems });
    console.log('------------------');  
    
}


let total = 0;
function calculateTotalValue() {
    
    total = cartItems.reduce((acc, item) => acc + item.total, 0); 
    totalValueHtml.textContent = `Valor Total R$ ${total}`;

}

function genereteNewLi() {
    newLi = document.createElement('li');
    newLi.textContent = `${inputQuantityHtml.value}  ${selectedItem.name}`; 
    newLi.setAttribute('id', selectedItem.id);
    newUl.appendChild(newLi);
}

function identifyQuantity() {
    currentQuantity = +newLi.textContent.split(' ')[0];
    valuesForSum = selectedItem.price * inputQuantityHtml.value;
}

function createButtonRemoveItems() {
    const buttonRemoveItem = document.createElement('button');
    buttonRemoveItem.textContent = 'Remover un';
    buttonRemoveItem.setAttribute('id', selectedItem.id); 
    newLi.appendChild(buttonRemoveItem); 
    
    buttonRemoveItem.onclick = function () { 
        const itemToRemove = cartItems.find(item => item.id == buttonRemoveItem.id);
        if(itemToRemove.quantity > 1) {
            itemToRemove.quantity = itemToRemove.quantity - 1;
            
        } else {
            const indexOfItem = cartItems.indexOf(item => item.id == buttonRemoveItem.id); 
            cartItems.splice(indexOfItem, 1); 
        }
        
        
        
        console.log('------------------');
        console.log({ response: itemToRemove });
        console.log('------------------');
        console.log('------------------');
        console.log({ response: cartItems });
        console.log('------------------');
    }
          
}





    // const buttonRemoveLi = document.createElement('button');
    // buttonRemoveLi.textContent = 'Remover todos';
    // newLi.appendChild(buttonRemoveLi);
    // buttonRemoveLi.onclick = function () {

    // }



