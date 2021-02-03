var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

// function addToCart(item) {
// // write your code here
// newObj = {};
 
// // item = newObj.itemName;
// var thePrice = Math.floor(Math.random() * 100);
// //   thePrice = newObj.price;
// // cart.push(newObj);
 
// newObj["itemName"] =cart.item;
// newObj["itemPrice"] =cart.thePrice;
// cart.push(obj);

//   return cart;
// }


function addToCart(item) {
 // write your code here	 
 var price = Math.floor(Math.random() * 99 + 1);
 var newItem = {[item]: price};
 console.log(`${item} has been added to your cart.`);
 cart.push(newItem);
 return cart;
}	



function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
