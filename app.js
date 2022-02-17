function updateProductNumber(product,price,isIncreasing){
  const productInput = document.getElementById(product +'-number');
  let productNumber = productInput.value;

  if(isIncreasing == true){
    productNumber = parseInt(productNumber) + 1;
  }else if(productNumber > 0){
    productNumber = parseInt(productNumber) - 1;
  }
  productInput.value = productNumber;
  // Update Case Total
  const productTotal = document.getElementById(product +'-total');
  productTotal.innerText = productNumber * price;
  // Caltulate Total
  calculateTotal();
}
function getInputValue(product){
  const productInput = document.getElementById(product + '-number');
  const productNumber = parseFloat(productInput.value);
  return productNumber;
}
function calculateTotal(){
  const phoneTotal = getInputValue('phone') * 1219;
  const caseingTotal = getInputValue('caseing') * 58;
  const subTotal = phoneTotal + caseingTotal;
  const taxAmount = subTotal / 10;
  const totalPrice = subTotal + taxAmount;
  // Update on html
  document.getElementById('sub-total').innerText = subTotal;
  document.getElementById('tax-amount').innerText = taxAmount;
  document.getElementById('total-price').innerText = totalPrice;

}
// Handle Phone Increase Decrese
document.getElementById('phone-plus').addEventListener('click',function(){
  updateProductNumber('phone',1219,true)
});
document.getElementById('phone-minas').addEventListener('click',function(){
  updateProductNumber('phone',1219,false)
});
// Handle Caseing Increase Decrese 
document.getElementById('caseing-plus').addEventListener('click',function(){
  updateProductNumber('caseing',58,true)
});
document.getElementById('caseing-minas').addEventListener('click',function(){
  updateProductNumber('caseing',58,false)
});