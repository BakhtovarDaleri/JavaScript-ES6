const addGrowth = document.querySelector(".add-growth");
const filterBtn = document.querySelector(".filter");

const listOfGrowth = ["164", "157", "160", "143", "170"];

// Функция для отображения списка рост на странице
function displayGrowth(numbers = listOfGrowth) {
  const existingList = document.getElementById("growth-list");

  if (existingList) {
    existingList.remove(); // Удаляем старый список перед перерисовкой
  }

  const growthList = document.createElement("ol");
  growthList.id = "growth-list";
  document.body.appendChild(growthList);

  numbers.forEach((growth) => {
    const listItem = document.createElement("li");
    listItem.textContent = growth;
    growthList.appendChild(listItem);
  });
}

// Обработка нажатия кнопки "Добавить рост"
addGrowth.addEventListener("click", function () {
  const newGrowth = prompt("Введите рост нового ученика:");

  if (newGrowth) {
    listOfGrowth.push(newGrowth);
    displayGrowth(); // Перерисовываем список
  } else {
    alert("Рост не введён!");
  }
});

// Обработка нажатия кнопки "Фильтровать"
filterBtn.addEventListener("click", function () {
  const minGrowth = prompt("Введите минимальный рост для фильтрации:");

  if (minGrowth === null || minGrowth.trim() === "") {
    // Если ничего не введено, отображаем весь список
    displayGrowth();
  } else {
    // Преобразуем введенный рост в число и фильтруем массив
    const filteredGrowth = listOfGrowth.filter(
      (growth) => parseInt(growth) >= parseInt(minGrowth)
    );
    displayGrowth(filteredGrowth); // Перерисовываем список с фильтрованными значениями
  }
});

// Инициализируем отображение списка при загрузке страницы
displayGrowth();
