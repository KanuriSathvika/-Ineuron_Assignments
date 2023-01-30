/**20. In the following shopping cart add, remove, edit items
    => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    - add 'Meat' in the beginning of your shopping cart if it has not been already added
    - add Sugar at the end of your shopping cart if it has not been already added
    - remove 'Honey'
    - modify Tea to 'Green Tea' */

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// Add 'Meat'
if(!shoppingCart.includes('Meat')){
   shoppingCart.unshift('Meat');
}
console.log(shoppingCart);

//Add 'Sugar' at the end.
if(!shoppingCart.includes('Sugar')){
    shoppingCart.push('Sugar');
}
console.log(shoppingCart);

//Remove Honey
shoppingCart.splice(shoppingCart.length-2,1);
console.log(shoppingCart);

//Modify Tea to Green Tea
shoppingCart[shoppingCart.indexOf('Tea')]='Green Tea';
console.log(shoppingCart);