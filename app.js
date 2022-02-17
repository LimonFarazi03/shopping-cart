function updateNumbers(isIncreasing){
  const caseInput = document.getElementById('caseing-number');
  const caseNumber = caseInput.value;

  if(isIncreasing == true){
    caseInput.value = parseInt(caseNumber) + 1;
  }else if(caseNumber > 0){
    caseInput.value = parseInt(caseNumber) - 1;
  }
}
document.getElementById('caseing-plus').addEventListener('click',function(){
  updateNumbers(true)
});
document.getElementById('caseing-minas').addEventListener('click',function(){
  updateNumbers()
});