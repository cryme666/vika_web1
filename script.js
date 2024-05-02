const geta = document.getElementById("side-a");
const getb = document.getElementById("side-b");
const getc = document.getElementById("side-c");
const result = document.getElementById("result")
const submitBtn = document.getElementById("submit-but")


function triangleType(a, b, c) {
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    result.value = 'Введіть натуральні числа';
    return;
  }
if ((a <= 0) || (b <= 0) || (c <= 0)) {
    result.value = 'Введіть натуральні числа';
    return;
  }

  if (a + b > c && b + c > a && a + c > b) {
    if (a === b && b === c) {
      return "Рівносторонній";
    } else if (a === b || b === c || a === c) {
      return "Рівнобедрений";
    } else {
      return "Різностороній";
    }
  } else {
    return "Трикутник не можна побудувати";
  }
}
submitBtn.addEventListener("click", function () {
  const a = Number(geta.value);
  const b = Number(getb.value);
  const c = Number(getc.value);
  
  const triangle = triangleType(a, b, c);
  result.value = triangle;
})