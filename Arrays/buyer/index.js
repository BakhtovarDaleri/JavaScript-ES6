let productList = ["Яблоко", "Арбуз", "Груша", "Банан"];

// Функция для отображения товаров на странице
function displayProducts() {
  const productListElement = document.getElementById("product-list");
  productListElement.innerHTML = "";

  // Сортируем массив по алфавиту
  const sortedProductList = productList.sort((a, b) => a.localeCompare(b));

  // Создаем и добавляем элементы списка
  sortedProductList.forEach((product) => {
    const listItem = document.createElement("li");
    listItem.textContent = product;
    productListElement.appendChild(listItem);
  });
}

// Обработчик события для кнопки "Добавить товар"
document.querySelector(".add-product").addEventListener("click", function () {
  const newProduct = prompt("Введите название нового товара:");

  if (newProduct) {
    productList.push(newProduct);
    displayProducts();
  } else {
    alert("Название товара не введено!");
  }
});
displayProducts();
