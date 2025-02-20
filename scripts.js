const selectElementHtml = document.getElementById('select-items');
const inputQuantityHtml = document.getElementById('input-quantity');
const totalValueHtml = document.getElementById('total-products-value');
const cartHtml = document.getElementById('products-on-cart');
const divItemsCart = document.getElementById('items-cart');
const newUl = document.createElement('ul');
divItemsCart.appendChild(newUl);
let newLi;


let item;

const cartItems = []; 
let selectedItem = {};

const options  = [
    {id : 1, name : 'Air Pods 4', price : 10},
    {id : 2, name : 'MackBook Pro', price : 20},
    {id : 3, name : 'iPad Pro', price : 30},
    {id : 4, name : 'iPhone 15 Pro', price : 40}
];


function returnObjectItem() {
    selectElementHtml.addEventListener('change', function() { // * consertar
  
        item = selectElementHtml.value;
      
        selectedItem = options.find(option => option.id == item);
    });
}

returnObjectItem();


let currentQuantity; 
let additionalQuantity; 

function addToCart() {
    const selectedItemInDom = document.getElementById(selectedItem.id);
    if(selectedItemInDom) {
        
        currentQuantity = Number(selectedItemInDom.textContent.split(' ')[0]); 
        additionalQuantity = Number(inputQuantityHtml.value) || 0;
        
        let valuesForSum = (currentQuantity + additionalQuantity) * selectedItem.price; 
        
        cartItems.push({
            quantity: currentQuantity + inputQuantityHtml.value,
            name: selectedItem.name,
            price: selectedItem.price,
            id : selectedItem.id,
            total : valuesForSum
        });
        
      
        selectedItemInDom.textContent = `${currentQuantity + additionalQuantity} ${selectedItem.name}`;
        const existingItem = cartItems.find(item => item.id == selectedItem.id);
        if(existingItem) existingItem.quantity += selectedItem.quantity; 

        
        // createButtonRemoveItems();

    } else {
        
    
        newLi = document.createElement('li');
        newLi.textContent = `${inputQuantityHtml.value}  ${selectedItem.name}`; 
        newLi.setAttribute('id', selectedItem.id);
        newUl.appendChild(newLi);

        currentQuantity = Number(newLi.textContent.split('')[0]);
        valuesForSum = selectedItem.price * inputQuantityHtml.value;
        console.log('------------------');
        console.log({ response: currentQuantity });
        console.log('------------------');
        cartItems.push({
            quantity: currentQuantity,
            name: selectedItem.name,
            price: selectedItem.price,
            id : selectedItem.id,
            total : valuesForSum
        });
        // createButtonRemoveItems();
        
    
         
       
    }
    
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

// function createButtonRemoveItems() {
//     const buttonRemoveItem = document.createElement('button');
//     buttonRemoveItem.textContent = 'Remover un';
//     newLi.appendChild(buttonRemoveItem); 
//     buttonRemoveItem.onclick = function () { 
//         const iditemToDelete = cartItems.filter(item => item.id === selectedItem.id);
//         const ulArray = newUl.children;
//         const itemToDelete = ulArray.namedItem(iditemToDelete);
       
        
        
        
        

//     }
          
// }





    // const buttonRemoveLi = document.createElement('button');
    // buttonRemoveLi.textContent = 'Remover todos';
    // newLi.appendChild(buttonRemoveLi);
    // buttonRemoveLi.onclick = function () {

    // }



