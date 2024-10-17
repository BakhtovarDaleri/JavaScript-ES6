const addItem = document.querySelector(".add-item");
const deleteItem = document.querySelector(".delete-item");
const textItem = document.querySelector("ul");

// Функция для добавления тектса
addItem.addEventListener("click", () => {
  const textEl = document.createElement("li");
  textEl.textContent = "Новый элемент списка";
  textEl.id = "text"; // ID для удаления
  textItem.append(textEl);
});

// Функция для удаления текста
deleteItem.addEventListener("click", () => {
  const textEl = document.getElementById("text");
  if (textEl) {
    textItem.remove(textEl);
  }
});
