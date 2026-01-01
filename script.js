const display = document.getElementById("display"); 
const buttons = document.querySelectorAll(".btn");
let resetDisplay = false;
let previousValue = null;  
let operator = null; 

buttons.forEach(function(button){
  const value = button.getAttribute("data-value");
  button.addEventListener("click", function(){ 
    buttonHandel(value);
  });
});

function buttonHandel(value){
  
  // ===== NUMRAT DHE DECIMALI =====
  if(!isNaN(value) || value === '.'){
    
    if(resetDisplay){
      display.textContent = '';
      resetDisplay = false;
    }
    
    if(display.textContent === '0' && value !== '.'){  
      display.textContent = value;
    }
    else if(value === '.'){
      if(!display.textContent.includes('.')){
        display.textContent += value;
      }
    }
    else{
      display.textContent += value;
    }
  }
  
  // ===== OPERATORËT =====
  else if(['+', '-', '/', '*'].includes(value)){
    
    if(previousValue !== null && operator !== null && !resetDisplay){  
      const result = calculate(previousValue, display.textContent, operator);
      display.textContent = result;  
      previousValue = result;
    }
    else{
      previousValue = display.textContent;
    }
  
    operator = value;  
    resetDisplay = true;  
  }
  
  // ===== EQUALS =====
  else if(value === '='){
    if(previousValue !== null && operator !== null){
      const result = calculate(previousValue, display.textContent, operator);
      display.textContent = result;
      previousValue = null;
      operator = null;
      resetDisplay = true;
    }
  }
  
  // ===== CLEAR =====
  else if(value === 'clear'){
    display.textContent = '0';  
    previousValue = null;
    operator = null;
    resetDisplay = false;
  }
}

function calculate(num1, num2, operator){
  const nr1 = parseFloat(num1);
  const nr2 = parseFloat(num2);
  
  let result;
  
  switch(operator){
    case '+':
      result = nr1 + nr2;
      break;
      
    case '-':
      result = nr1 - nr2;  
      break;
      
    case '*':
      result = nr1 * nr2;
      break;
      
    case '/':
      if(nr2 === 0){
        return 'Error'; 
      }
      result = nr1 / nr2;
      break;
      
    default:
      return 0;
  }
  return result;

}