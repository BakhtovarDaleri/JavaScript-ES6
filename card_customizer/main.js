const cardTextInput = document.getElementById("cardText");
const colorPicker = document.getElementById("colorPicker");
const card = document.getElementById("card");

// Слушатель события input для обновления текста карты
cardTextInput.addEventListener("input", () => {
  card.textContent = cardTextInput.value;
});

// Слушатель события focus для стилизации поля ввода текста
cardTextInput.addEventListener("focus", () => {
  cardTextInput.style.borderColor = "blue";
  cardTextInput.style.backgroundColor = "#f0f8ff";
});

// Слушатель события blur для возврата стиля по умолчанию
cardTextInput.addEventListener("blur", () => {
  cardTextInput.style.borderColor = "#ddd";
  cardTextInput.style.backgroundColor = "white";
});

// Слушатель события change для изменения цвета карты
colorPicker.addEventListener("change", () => {
  card.style.backgroundColor = colorPicker.value;
});
