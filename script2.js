const getNum = document.getElementById("count-numbers");
const result = document.getElementById("result")
const submitBtn = document.getElementById("submit-but")

submitBtn.addEventListener("click", function () {
    const a = Number(getNum.value);
    
    if (isNaN(a) || a <= 0) {
        result.value = 'Введіть натуральне число';
        return;
    }
      fibonacci(a);
  
  })


  function fibonacci(n)
  {
    let a = 0, b = 1;
     let fib = [a, b];
  for (let i = 2; i < n; i++) {
    let c = a + b;
    fib.push(c);
    a = b;
    b = c;
  }

  result.value = fib.join(', ');
  }
