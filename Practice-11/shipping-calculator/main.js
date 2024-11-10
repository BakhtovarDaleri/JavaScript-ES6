function addProduct() {
  //Получаем значения из формы
  const name = document.querySelector("#name").value.trim();
  const weight = parseFloat(document.querySelector("#weight").value);
  const distance = parseFloat(document.querySelector("#distance").value);

  // Валидация формы
  if (
    !name ||
    isNaN(weight) ||
    weight <= 0 ||
    isNaN(distance) ||
    distance <= 0
  ) {
    alert("Пожалуйста, введите корректные значения для веса и расстояния");
    return;
  }

  // расчет стоимости доставки
  const deliveryCost = (weight * distance) / 10;

  // Создаем новую строку для таблицы
  const tableRow = document.createElement("tr");
  tableRow.innerHTML = `
    <td>${name}</td>
    <td>${weight.toFixed(1)} кг</td>
    <td>${distance} км</td>
    <td>${deliveryCost.toFixed(2)} руб.</td>
    `;

  // Добавляем строку в таблицу
  document.querySelector("#productList").append(tableRow);

  //Очищаем форму после добавления
  document.querySelector("#productForm").reset();
}
