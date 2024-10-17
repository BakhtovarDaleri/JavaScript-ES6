const sortAscButton = document.querySelector(".sort-asc");
const sortDescButton = document.querySelector(".sort-desc");
const priceList = document.getElementById("price-list");

// Функция для получения цен в виде массива
function getPrices() {
  const prices = Array.from(priceList.querySelectorAll("li")).map((item) =>
    parseInt(item.textContent)
  );
  return prices;
}

// Функция для обновления списка цен на странице
function updatePriceList(prices) {
  priceList.innerHTML = "";
  prices.forEach((price) => {
    const li = document.createElement("li");
    li.textContent = price;
    priceList.appendChild(li); // Добавляем отсортированные цены
  });
}

// Сортировка по возрастанию
sortAscButton.addEventListener("click", () => {
  let prices = getPrices(); // Получаем текущие цены
  prices.sort((a, b) => a - b); // Сортируем по возрастанию
  updatePriceList(prices); // Обновляем список на странице
});

// Сортировка по убыванию
sortDescButton.addEventListener("click", () => {
  let prices = getPrices(); // Получаем текущие цены
  prices.sort((a, b) => b - a); // Сортируем по убыванию
  updatePriceList(prices); // Обновляем список на странице
});
