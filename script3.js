const getNum = document.getElementById("number");
const result = document.getElementById("result")
const submitBtn = document.getElementById("submit-but")

submitBtn.addEventListener("click", function () {
  let a = getNum.value;
  if (isNaN(a) || a.toString().length === 0)  {
      result.value = 'Введіть число';
      return;
  }
   a = Number(a)
   max_num(a);
});



  function max_num(number)
  {
    let maxDigit = 0;
    let countOfMaxDigit = 0

    const numStr = number.toString();
    const numDigits = numStr.length;
    
    for (let i = 0; i < numDigits; i++) 
    {
      const digit = parseInt(numStr[i]);
      if (digit > maxDigit) {
        maxDigit = digit;
      }
    }

    for(let i = 0; i < numDigits;i++){
      const digit = parseInt(numStr[i]);
      if (digit === maxDigit){
        countOfMaxDigit++;
      }
    }

    result.value = `Максимальне число ${maxDigit}. Кількість входжень ${countOfMaxDigit}`;
  }
