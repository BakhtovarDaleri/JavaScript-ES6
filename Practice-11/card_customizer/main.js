const cardTextInput = document.querySelector("#cardText");
const colorPicker = document.querySelector("#colorPicker");
const card = document.querySelector("#card");
const cardBackground = document.querySelector(".card-container");
const resetButton = document.querySelector("#resetButton");
const defaultText = "Ваша карта";
const defaultColor = "";

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
  cardBackground.style.backgroundColor = colorPicker.value;
});

//Сбрасываем текс на карте
resetButton.addEventListener("click", () => {
  card.textContent = defaultText;
  cardTextInput.value = "";

  //Сбрасываем цвет  карты к цвету по умолчанию

  cardBackground.style.backgroundColor = defaultColor;
  colorPicker.value = "";
});
