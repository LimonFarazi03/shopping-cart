function updateNumbers(isIncreasing){
  const caseInput = document.getElementById('caseing-number');
  let caseNumber = caseInput.value;

  if(isIncreasing == true){
    caseNumber = parseInt(caseNumber) + 1;
  }else if(caseNumber > 0){
    caseNumber = parseInt(caseNumber) - 1;
  }
  caseInput.value = caseNumber;
  // Update Case Total
  const caseingTotal = document.getElementById('caseing-total');
  caseingTotal.innerText = caseNumber * 58;
}
document.getElementById('caseing-plus').addEventListener('click',function(){
  updateNumbers(true)
});
document.getElementById('caseing-minas').addEventListener('click',function(){
  updateNumbers()
});