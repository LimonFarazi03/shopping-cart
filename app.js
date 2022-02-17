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