const cars = {
  Toyota: { model: "Camry", doors: 4, year: 2020, isStarted: true, hp: 203 },
  Honda: { model: "Accord", doors: 4, year: 2021, isStarted: false, hp: 190 },
  Ford: { model: "Mustang", doors: 4, year: 2019, isStarted: true, hp: 275 },
};

//Задача номер 1
function getCar(brand) {
  // Проверяем, есть ли марка авто в обЪекте
  if (cars[brand]) {
    return cars[brand]; //возвращаем обЪект елси найден
  } else {
    console.log("Автомобиль не найден");
    return null;
  }
}

console.log(getCar("Toyota"));
console.log(getCar("Ford"));

//Задача номер 2
//Функция для вывода названий моделей автомобилей
function listCarNames(cars) {
  for (const car in cars) {
    //Перебираем все в объекте cars
    if (cars.hasOwnProperty(car)) {
      console.log(cars[car].model);
    }
  }
}

listCarNames(cars);

//Задача номер 3
const car = {
  model: "Mustang",
  doors: 4,
  year: 2019,
  isStarted: true,
  hp: 275,
};
function mergeCarData(additionalData) {
  // Объединяем объект car с дополнительными данными
  const mergedCar = Object.assign({}, car, additionalData);

  //Возвращаем объединненый объект
  return mergedCar;
}

// ПРимер использования функции
const additionalInfo = {
  color: "blue",
  owner: "John Doe",
};

const completeCarInfo = mergeCarData(additionalInfo);
console.log(completeCarInfo);
