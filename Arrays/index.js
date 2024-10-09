const addBooks = document.querySelector(".add-books");
const searchBtn = document.querySelector(".search");

const listBooks = [
  "Мастер и Маргарита",
  "Гарри Поттер",
  "За пропастью во ржи",
  "Властелин колец",
  "Дюна",
  "Отцы и дети",
];

// Функция для отображения списка книг на странице
function displayBooks() {
  const bookList = document.createElement("ol");
  bookList.id = "book-list";
  document.body.appendChild(bookList);

  listBooks.forEach((book) => {
    const listItem = document.createElement("li");
    listItem.textContent = book;
    bookList.appendChild(listItem);
  });
}
// Функция для обновления списка книг
function updateBookList() {
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = "";
  listBooks.forEach((book) => {
    const listItem = document.createElement("li");
    listItem.textContent = book;
    bookList.appendChild(listItem);
  });
}

// Обработка нажатия кнопки "Добавить книгу"
addBooks.addEventListener("click", function () {
  const newBook = prompt("Введите название книги:");

  if (newBook) {
    listBooks.push(newBook);
    updateBookList();
  } else {
    alert("Название книги не введено!");
  }
});

// Обработка нажатия кнопки "Поиск"
searchBtn.addEventListener("click", function () {
  const searchQuery = prompt("Введите название книги для поиска:");

  if (searchQuery) {
    const bookListItems = document.querySelectorAll("#book-list li");
    let found = false;

    bookListItems.forEach((item) => {
      if (item.textContent.toLowerCase() === searchQuery.toLowerCase()) {
        item.style.color = "orange";
        found = true;
      } else {
        item.style.color = "";
      }
    });
    if (!found) {
      alert("Книга не найдена!");
    }
  }
});

displayBooks();
