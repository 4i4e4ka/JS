
// const max = 50;
// const min = 6;
// let total = 0;

// for (let i = 1; i <= max; i += 1) {
//     console.log(i);
//     total += i;
// }

// console.log("Total" , total);

// Task 1
// Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида:

// 1 2 3 4 5 6 7 8 9 ... 49 50

// от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла.

// let output = " ";
// document.querySelector(".btn-1").onclick = () => {
// for (let i = 1; i < 51; i += 1) {

//   output += i + " ";
  
// }
//    console.log(output); 
// }


    
// Task 2
// Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида:

// 2 4 6 ... 122

// от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла.

// let output = " ";
// document.querySelector(".btn-2").onclick = () => {
//     for (let i = 1; i < 122; i += 2) {
//         output += i + "this number is" + " ";
//     }
//     console.log(output);
// }

// Task 3
// Кнопка b-3 запускает функцию t3. Функция должна выводить в out-3 строку вида:

// 25 24 23 22 . . 7

// от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла.

// let output = " ";

// document.querySelector(".btn-3").onclick = () => {
//     for (let i = 25; i >6; i -= 1) {
//         console.log(i);
//         output += i + " ";
//     }
//     console.log(output);
// }

// Task 4
// Кнопка b-4 запускает функцию t4. Функция должна выводить в out-4 строку вида:

// 77_74_71_68_65_62_ ... _38_35_

// от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла.

// let output = " ";
// document.querySelector(".btn-4").onclick = () => {
//     for (let i = 77; i >= 35; i -= 3) {
//         console.log(i);
//         output += i + "_" + " ";
//     }
//     console.log(output);
// }

// Task 5
// Кнопка b-5 запускает функцию t5. Функция должна выводить в out-5 строку вида:

// 1_*2_**3_*4_** ... 17_*
//  от 1 до 17 c шагом 1. Разделитель - знак подчеркивания
// и звездочка(если число нечетное, и две звездочки если четное).
// Задача решается с помощью цикла.


// let output = " ";
// document.querySelector(".btn-5").onclick = () => {
  
//     for (let i = 1; i <= 17; i += 1) {

//           const even = (i % 2 === 0);

//         if (even) {
        
//             output += i + '_**';
//         }

//         else {
//             output += i + '_*';
//         }
//     }
//    console.log(output);
// }
 

// Task 6 НЕ РЕШЕННАЯ
// Кнопка b-6 запускает функцию t6. Функция должна выводить в out-6 строку вида:

// ******
// ******
// ******
// Задача решается с помощью цикла.В каждой итерации цикл выводит 6
// звездочек без пробелов и символ переноса строки br.
// Количество строк(итераций, повторений) цикла вводит пользователь в i - 6.



// function t6() {
//   let inp6 = +document.querySelector('.i-6');
//   for (let i = 0; i < 1; i = inp6.value) {
//     document.querySelector('.out-6').innerHTML += '******' + '<br>';
//     inp6.value = i;
//   }
// }

// document.querySelector('.b-6').onclick = t6;

// Task 7
// Есть input i-7 куда пользователь может ввести число больше нуля 
// (проверок не делаем, принимаем как факт).
// По нажатию кнопки b - 7 должна запускаться функция t7,
// которая выводит в out - 7 числа от введенного пользователем
// до нуля включительно.Разделитель пробел.Если пользователь ввел 4
// и нажал кнопку, мы получим:

// 4 3 2 1 0
// Задача решается с помощью цикла.


//  let str = " ";
//  document.querySelector('.btn-7').onclick = () => {
//   let inp = document.querySelector('.i-7');
//   let inVal = inp.value;
//   for (let i = inVal; i >=0; i--) {
//   if (i === 6) continue;
//   str += i + " ";
// }
//   console.log(str);
  
// }



//   Task 10
// Кнопка b - 10 запускает функцию t10.
// Функция должна выводить в out - 10 четные годы от 1950 до 2000
// включительно.Разделитель - пробел.Задача решается через цикл,
//   а четность - через шаг(равный 2).

// let min = 1951;
// let max = 2000;

// document.querySelector(".btn-10").onclick = () => {
// for (let i = min; i <= max; i += 1) {
//   // console.log(i);
//   if ((i % 2) == 0) {
//     console.log(i);  
// }


//   } 
  
// }

// Task 11
// Кнопка b - 11 запускает функцию t11.Функция должна:
// получить все div.div - 11 перебрать их с помощью цикла.
// Обращение к div выглядит так elem[i] вывести в out - 11
// содержимое каждого блока.
// Разделитель - пробел.В результате должно получиться так:one 3 4 two


// const div = document.getElementsByTagName("div");

// document.querySelector(".btn-11").onclick = () => {

//   let str = '';

//   for (let i = 0; i < div.length; i += 1) {

//     // console.log(div[i]);
    
//     // console.log(div[i]);
//     // div[i].style.background = "teal";
    
//     const value = div[i].getAttribute('value');
//     // console.log(value);

//    str += value + " ";
    
// }
//  console.log(str);
//   }

// Task 12
// Кнопка b - 12 запускает функцию t12.
// Функция должна: получить все div.div - 12 перебрать
// их с помощью цикла.Обращение к div выглядит так elem[i]
// применить к каждому elem[i].style.background = ‘orange’

// const div = document.getElementsByTagName('div');

// let str = " ";
// document.querySelector(".btn-12").onclick = () => {

//   for (let i = 0; i < div.length; i += 1) {
//     console.log(div[i]);
//     const value = div[i].getAttribute('value');
//     console.log(value);
//     str += value + " ";
    
//     const first = div[0];
//     console.log(first);
//     div[i].style.background = 'orange';
//     div[0].style.background = 'green';
//     div[div.length - 2].style.background = "teal";
//     // div[i].style.background = 'green';
//     div[i].style.border = '3px solid black';
    
//   }
//   console.log(str);
// }


// Task 13
// Кнопка b - 13 запускает функцию t13.
// Функция должна: получить все input.i - 13
// перебрать их с помощью цикла.Обращение к элементу выглядит
// так elem[i] применить к каждому elem[i].value,
// причем к value первого должно равняться 1, второго - 2,
// третьего - 3...

// const div = document.getElementsByTagName("div");
// console.log(div);

// document.querySelector(".btn-13").onclick = () => {

// for (let i = 0; i < div.length; i += 1) {
//   // console.log(div[i]);

//   // const value = div[i].getAttribute('value');
//   // console.log(value);
  
//   let value = div[i].getAttribute('value');
//   for (value = 0; value < div.length; value += 1) {
//     console.log(value);
//   }
  
  
//   }
// }


// Task 14 
// let r = document.querySelectorAll('input[type="radio"]');
// console.log(r);

// document.querySelector(".btn-14").onclick = () => {
  

//   for (let i = 0; i < r.length; i += 1) {
//     console.log(r[i].value);
//     if (r[i].checked) {
//       console.log(r[i].value , "вибрана опція");
// }
    
//      }

// }

// Task 15
// Кнопка b - 15 запускает функцию t15
// Функция должна выводить следующую последовательность
// в out - 15:

// 10 0 9 1 8 2 7 3 6 4 5 5 4 6 3 7 2 8 1 9 0 10
// Для вывода использовать цикл.

// let str = " ";
// document.querySelector('.btn-15').onclick = () => {

//   for (let i = 10;  i >=0; i -= 1 ) {
//     console.log(i + " ");

//   }
// for (let y = 0; y <=10; y += 1) {
//   console.log(y + " ");  
  
//   }

// }


// let str = " ";
// document.querySelector('.btn-15').onclick = () => {
  
//   for (let i = 10, j = 0; i >= 0; i-=1, j+=1) {
//     str += i + ' ' + j + ' ';
   
//   }
//    console.log(str);
// }



// Task 8
// Есть input i - 81 и i - 82 куда пользователь 
// может ввести числа больше нуля
//   (проверок не делаем, принимаем как факт).
//   Считаем, что второе число всегда больше первого.
// По нажатию кнопки b - 8 должна запускаться функция t8,
//   которая выводит в out - 8 числа от первого введенного до
// второго включительно, с шагом 1. Разделитель пробел.
// Если пользователь ввел 4 и 8 и нажал кнопку, мы получим:

// 4 5 6 7 8
// Задача решается с помощью цикла.

// Solution:



// Just training example for ex.8
// let str = " "
// document.querySelector('.btn-8').onclick = () => {

//   let inpValue = document.querySelector(".i-81").value;
  

// for (let i = inpValue; i>=0; i-=1 ) {
//   // console.log(inpValue);

//   str += i + " ";
// }

//   console.log(str);
// }


// Task 9
// Есть input i - 91 и i - 92 куда пользователь может ввести числа.
// По нажатию кнопки b - 9 должна запускаться функция t9,
//   которая выводит в out - 9 числа от меньшего введенного
// до большего включительно, с шагом 1. Разделитель пробел.
// Если пользователь ввел 4 и 8 и нажал кнопку, мы получим:

// 4 5 6 7 8
// если ввел 8 и 6, то получим
// 6 7 8
// Задача решается с помощью цикла.
//   Подсказка - вначале делаем проверку, а потом запускаем цикл.