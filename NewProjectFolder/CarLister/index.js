const cars = {
  Toyota: { model: "Camry", doors: 4, year: 2020, isStarted: true, hp: 203 },
  Honda: { model: "Accord", doors: 4, year: 2021, isStarted: false, hp: 190 },
  Ford: { model: "Mustang", doors: 4, year: 2019, isStarted: true, hp: 275 },
};

function getCar(brand) {
  // Проверяем, есть ли марка авто в обЪекте
  if (cars[brand]) {
    return cars[brand]; //возвращаем обьект елси найден
  } else {
    console.log("Автомобиль не найден");
    return null;
  }
}

console.log(getCar("Toyota"));
console.log(getCar("Ford"));
