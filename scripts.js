const selectElement = document.getElementById('select-items');
const productsOnCart = document.getElementById('products-on-cart');

let foundItem = {};

const options  = [
    {value : 'item1', name : 'Air Pods 4', simbol : 'R$', price : 10},
    {value : 'item2', name : 'MackBook Pro', simbol : 'R$', price : 20},
    {value : 'item3', name : 'iPad Pro', simbol : 'R$', price : 30},
    {value : 'item4', name : 'iPhone 15 Pro', simbol : 'R$', price : 40}
];


function returnObjectItem() {
    selectElement.addEventListener('change', function() {
  
        const selectedItem = selectElement.value;
      
        foundItem = options.find(option => option.value === selectedItem);
        console.log('------------------');
        console.log({ response: foundItem });
        console.log('------------------');


    });
}

returnObjectItem();

function addToCart() {
    const inputQuantity = document.getElementById('input-quantity').value;
    const totalValue = document.getElementById('total-products-value');
    productsOnCart.innerHTML = `${inputQuantity}  ${foundItem.name}`;
    totalValue.textContent = `${foundItem.simbol} ${foundItem.price * inputQuantity}`;

}



