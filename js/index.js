// ITERATION 1

//const { product, connectToBrowser } = require("puppeteer");

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  
  const price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  let subTotal = price.innerHTML * quantity.value;
  
  let subTotalResult = product.querySelector('.subtotal span')
  subTotalResult.innerHTML = subTotal; 
  
  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let productList = document.getElementsByClassName('product');
  let subTotal = 0;

  for (let i = 0; i < productList.length; i++){
    subTotal += updateSubtotal(productList[i]);
  }

  // ITERATION 3
  document.querySelector('#total-value span').innerText = subTotal;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
