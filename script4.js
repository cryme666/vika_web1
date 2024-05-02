const gettext = document.getElementById("text");
const submitBtn = document.getElementById("submit-but");
const result = document.getElementById("result");

function longest_word(string) {
  let words_array = string.split(/[\.,?! ]/g);
  let max_word = words_array[0];
  for(let i = 0; i < words_array.length; i++){
    if(words_array[i].length > max_word.length) max_word = words_array[i];
  }
  return max_word;
}

submitBtn.addEventListener("click", function () {
  const text = gettext.value;
  max_word = longest_word(text)
  result.value = `Найдовше слово: ${max_word}. Довжина: ${max_word.length}`;
});
