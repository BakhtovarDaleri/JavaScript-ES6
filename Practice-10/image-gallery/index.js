const thumbnails = document.querySelectorAll(".thumbnails");
const modal = document.querySelector("#modal");
const fullImage = document.querySelector("#fullImage");
const closeBtn = document.querySelector(".close");

// Добавляем обработчик события длдя каждой миниатюры
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    // Получаем  URL полноразмерного изображения из атрибута data-full
    const fullSrc = thumbnail.getAttribute("data-full");
    fullImage.src = fullSrc; // Источник для полноразмерного изображения

    // Показываем моальное окно
    modal.style.display = "block";
  });
});

//  Закрываем модальное окно при клике на пустое место экрана
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
