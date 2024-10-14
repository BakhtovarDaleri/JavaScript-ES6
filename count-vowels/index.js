const countVowels = (word) => {
  const vowels = ["a", "e", "i", "o", "u"];

  // приводим слово к нижнему регистру для удобства сравнения
  word = word.toLowerCase();

  //Используем метод fiter() для фильтрации гласных букв
  const vowelCount = word
    .split("")
    .filter((char) => vowels.includes(char)).length;

  //возвращаем количество гласных букв
  return vowelCount;
};

const word = "JavaScript";
const vowelCount = countVowels(word);
console.log(vowelCount);
