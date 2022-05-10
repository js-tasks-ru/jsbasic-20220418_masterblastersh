'use strict';

function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
 function isValid(name) {
  // Для прохождения проверки значение переменной "name" должно одновременно удовлетворять условиям:
  // 1. значение не должно быть пустым: name != null
  // 2. значение не должно содержать знак пробела: !name.includes(' ')
  // 3. количество символов должно быть равно или больше 4: name.length >= 4
  // При выполнении ВСЕХ условий функция вернет true: return true;
  // В противном случае, функция вернет false: return false
  if (name != null && !name.includes(' ') && name.length >= 4) {
    return true;
  
  } else {
    return false;
  };
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
