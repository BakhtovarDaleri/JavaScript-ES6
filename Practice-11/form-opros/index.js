const form = document.querySelector("#survey-form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); //Остановить отправку формы

  // Получение значений введенных данных
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const service = document.querySelector("#service").value;
  const comments = document.querySelector("#comments").value;

  // Получение выбранных интерес
  const hobbies = [];
  document
    .querySelectorAll('input[name="hobby"]:checked')
    .forEach((checkbox) => {
      hobbies.push(checkbox.nextElementSibling.textContent); //Получаем текст рядом с чекбоксом
    });

  // Формирование результата
  const resultHTML = `
  <h1>Результаты опроса</h1>
  <p><strong>Имя пользователя:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Пол:</strong> ${gender === "male" ? "Мужской" : "Женский"}</p>
  <p><strong>Оценка сервиса:</strong> ${service}</p>
  <p><strong>Интересы пользователя:</strong> ${
    hobbies.length ? hobbies.join(", ") : "Не выбрано"
  }</p>
  <p><strong>Дополнительные комментарии:</strong> ${
    comments || "Нет комментариев"
  }</p>
  `;

  // Отображение результата под формой
  document.querySelector("#results").innerHTML = resultHTML;
});
