// Объект с автомобилями
const cars = {
  Toyota: {
    model: "Camry",
    wheels: 4,
    doors: 4,
    isStarted: false,
    hp: 203,
  },
  Honda: {
    model: "Accord",
    wheels: 4,
    doors: 4,
    isStarted: true,
    hp: 192,
  },
  Ford: {
    model: "Mustang",
    wheels: 4,
    doors: 2,
    isStarted: false,
    hp: 450,
  },
  Chevrolet: {
    model: "Camaro",
    wheels: 4,
    doors: 2,
    isStarted: true,
    hp: 275,
  },
};

function getCar(brand) {
  // Проверяем, есть ли марка автомобиля в объекте
  if (cars[brand]) {
    return cars[brand]; // Возвращаем объект автомобиля, елси найден
  } else {
    console.log("Автомобиль не найден");
    return null;
  }
}

console.log(getCar("Toyota"));
console.log(getCar("Ford"));
