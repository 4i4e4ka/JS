
'use strict';
// Task 1
// Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.

// let a = 7;
// let b = 9;
// console.log(a * b);


// Task 2
// Создайте две переменные c = 7 и d = 9. Выведите на страницу результат деления c на d.
// let c = 7;
// let d = 9;
// console.log(c/d);

// Task 3
// Создайте две переменные e = 3 и f = 5. Выведите на страницу результат сложения e + f.
// let e = 3;
// let f = 5;
// console.log(e+f);
// console.log(+"e"+f);

// Task 4
// Создайте две переменные e1 = '3' и f1 = 5.
// Выведите на страницу результат сложения e1 + f1.Объясните разницу.

// let e1 = "3";
// let f1 = 5;
// console.log(e1+f1);

// Task 5
// Создайте две переменные e2 = 3 и f2 = 0.
// Выведите на страницу результат деления e2 на f2.
// let e2 = 3;
// let f2 = 0;
// console.log(e2/f2);


// Task 6
// Создайте две переменные e3 = 3 и f3 = 'Hello'.
// Выведите на страницу результат сложения двух переменных.

// let e3 = 3;
// let f3 = "Hello";
// console.log(e3/f3); //NaN

// Task 7
// Создайте две переменные e4 = 3 и f4 = 'Hello'.
// Выведите на страницу результат умножения двух переменных.
// let e4 = 3;
// let f4 = "Hello";
// console.log(e4*f4); //NaN


// Task 8
// Создайте input и кнопку.По нажатию на кнопку выполняется функция,
//     которая выводит в консоль то, что пользователь ввел в input.

// let inputIn = document.querySelector(".input-in");
// let button = document.querySelector("button");

// button.onclick=function(){
//     console.log("This function works");
//     let b = inputIn.value;
//     console.log(b);
// }


// Task 9
// Создайте input и кнопку.По нажатию на кнопку выполняется функция,
//     которая выводит на страницу, что пользователь ввел в input.
// Добавьте очистку input после нажатия кнопки.

// let inputIn = document.querySelector(".input-in");
// let button = document.querySelector("button");

// button.onclick = function () {
  
//     let b = inputIn.value;
//     console.log(b);

//  inputIn.value = " ";
// }
 

// Task 10
// Создайте input и кнопку.По нажатию на кнопку выполняется функция,
//     которая выводит на страницу число, которое ввел пользователь умноженное на 10.

// let inputIn = document.querySelector(".input-in");
// let button = document.querySelector("button");

//     button.onclick = function () {
//     let c = +inputIn.value;
//         console.log(c * 10);
//         inputIn.value = "";
// }

// Task 11
// Создайте input и кнопку.По нажатию на кнопку выполняется функция,
//     которая выводит на страницу число, которое ввел пользователь и к нему добавленное число 10.

// let inputIn = document.querySelector(".input-in");
// let button = document.querySelector("button");

// button.onclick = function () {
//     let c = +inputIn.value;
//     console.log(c+10);
// }


// Task 12
// Создайте два input и кнопку.В первый input пользователь вводит имя,
//     во второе фамилию.При нажатии кнопки выполняется функция, 
// которая выводит в консоль строку 'Hello имя фамилия',
//     где имя - имя пользователя и фамилия - введенная фамилия.

// let firstName = document.querySelector(".input-name")
// let secondName = document.querySelector(".input-second_name");
// let button = document.querySelector("button");

// button.onclick = function () {
//     let a = firstName.value;
//     let b = secondName.value;
//     console.log("Hello" + a + b);
// }

// Task 13
// Создайте два input и кнопку.В input пользователь вводит числа.
// При нажатии кнопки выполняется функция, 
// которая выводит сумму данных двух чисел на страницу.

// let firstNumber = document.querySelector(".first-number");
// let secondNumber = document.querySelector(".second-number");
// let button = document.querySelector("button");

// button.onclick = function () {
//     let a = +firstNumber.value;
//     let b = +secondNumber.value;

//     console.log(a+b);

// }
 
// Task 14
// Создайте input и пропишите ему в html value = 77.
// С помощью JS измените value на 'Hello'.

// let inputIn = document.querySelector(".input-number");
// let button = document.querySelector("button");

// button.onclick = function () {
//     let b = inputIn.value;
//     b = "Hello";
//     console.log(b);
// }


// Task 15
// Создайте input и получите его в переменную y.
// В js выполните следующее присвоение: y.style.border = '2px solid red'.
// Изучите результат операции.

// let y = document.querySelector(".border");
// y.style.border = '2px solid red';


// Task 16
// Создайте два input type = number, куда пользователь может ввести числа.
// Выведите на страницу сумму данных чисел.

// let firstInput = document.querySelector(".first-number");
// let secondInput = document.querySelector(".second-number");
// let button = document.querySelector("button");

// button.onclick = function () {
//     let a = +firstInput.value;
//     let b = +secondInput.value;

//     console.log(a+b);
// }

// Task 17
// Создайте input type = "text" куда пользователь может ввести строку и число.
// Создайте функцию, которая запускается по нажатию на кнопку.
// Получите значение из input в переменную t.
// А затем сделайте операцию t = parseInt(t), 
// и результат операции выведите в консоль.
// Прочитайте за эту операцию.Попробуйте по очереди вводить 44, 44aaa, 44.3, a45.
// Изучите вывод.

// let inputIn = document.querySelector(".input-in");
// let button = document.querySelector("button");

// button.onclick = function () {
//     let t = inputIn.value;
//     t = parseInt(t);
//     console.log(t);
// }


// Task 18
// Создайте input type = "text" куда пользователь может ввести строку и число.
// Создайте функцию, которая запускается по нажатию на кнопку.
// Получите значение из input в переменную t.
// А затем сделайте операцию t = parseFloat(t),
// и результат операции выведите в консоль.
// Прочитайте за эту операцию.
// Попробуйте по очереди вводить 44, 44aaa, 44.3, a45.Изучите вывод.


// let input = document.querySelector(".input-in");
// let button = document.querySelector("button");

// button.onclick = function() {
//     let t = input.value;
//     t = parseFloat(t);
//     console.log(t);
// }


// Task 19
// Создайте два input type = number, куда пользователь 
// может ввести отрицательные числа.
// Выведите на страницу сумму данных чисел.Мы это делали! Зачем ?
// Затем, что нужно понимать как влияет перевод в число
// с помощью + и parseInt на отрицательные числа!!!

// let firstInput = document.querySelector(".first-number");
// let secondInput = document.querySelector(".second-number");
// let button = document.querySelector("button");

// button.onclick = function () {
//     let b =+ firstInput.value;
//     let c =+ secondInput.value;

//     console.log(parseInt(b+c));
// }


// Task 20
// Создайте опросник, куда пользователь может ввести имя, фамилию, 
// возраст, род занятий.
// И кнопку.По нажатию кнопки выведите на страницу предложение
// 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...'
// куда поставьте соответствующие данные из inputов.

// let name = document.querySelector(".name");
// let secondName = document.querySelector(".second-name");
// let age = document.querySelector(".age");
// let position = document.querySelector(".position");
// let button = document.querySelector("button");


// button.onclick = function () {

//     let a = name.value;
//     let b = secondName.value;
//     let c = +age.value;
//     let d = position.value;

//     console.log("Dear" + " " + a + " " + b + "," + " " + "your age is" + " "
//         + c + "," + " " + "your profession is" + " " + d);
// }
