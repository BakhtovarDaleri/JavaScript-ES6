// Массив массивов пользователей
const users = [
  ["Alice", 25, true],
  ["Bob", 30, false],
  ["Charlie", 22, true],
  ["David", 27, true],
  ["Eve", 20, false],
];

//Функция для фильтрации и сортировки пользователей
const filterAndSortUsers = (users) => {
  return users
    .filter((user) => user[1] > 25 && user[2]) //Фильтруем пользователей по возрасту и занятию спортом
    .sort((a, b) => a[1] - b[1]) //Сортируем по возрастанию возраста
    .map((user) => user[0]); //Возвращаем массив имен
};

//Пример работы
const sportUsersOver25 = filterAndSortUsers(users);
console.log(sportUsersOver25); // Выведет ["David"]