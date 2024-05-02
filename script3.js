const getNum = document.getElementById("number");
const result = document.getElementById("result")
const submitBtn = document.getElementById("submit-but")

submitBtn.addEventListener("click", function () {
    const a = Number(getNum.value);
    
    if (isNaN(a)) {
        result.value = 'Enter a number';
        return;
    }


      max_num(a);
  
  })


  function max_num(number)
  {
    let maxDigit = 0;

    const numStr = number.toString();
    const numDigits = numStr.length;
    
    for (let i = 0; i < numDigits; i++) 
    {
      const digit = parseInt(numStr[i]);
      if (digit > maxDigit) {
        maxDigit = digit;
      }
    }
    
    result.value = maxDigit;
  }
