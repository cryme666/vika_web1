
function triangleType(a, b, c) {
  if (a + b > c && b + c > a && a + c > b) {
    if (a === b && b === c) {
      return "Equilateral";
    } else if (a === b || b === c || a === c) {
      return "Isosceles";
    } else {
      return "Usual";
    }
  } else {
    return "A triangle cannot be constructed";
  }
}

const geta = document.getElementById("side-a");
const getb = document.getElementById("side-b");
const getc = document.getElementById("side-c");
const result = document.getElementById("result")
const submitBtn = document.getElementById("submit-but")

submitBtn.addEventListener("click", function () {
  const a = Number(geta.value);
  const b = Number(getb.value);
  const c = Number(getc.value);

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    result.value = 'Enter natural numbers';
    return;
}

if ((a <= 0) || (b <= 0) || (c <= 0)) {
    result.value = 'Enter natural numbers';
    return;
  }
  


  const triangle = triangleType(a, b, c);
  result.value = triangle;
})
