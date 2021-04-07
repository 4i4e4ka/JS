
// Task 1
// Создайте button.b-1 - при нажатии на него 
// выводите alert с номером задачи.

// document.querySelector(".btn-1").onclick = ()=> {

// alert("task 1");
// }


// Task 2
// Создайте input.b - 2 type = button - при нажатии на него
// выводите alert с номером задачи.
// Номер задачи просто пропишите вручную.


// document.querySelector(".inp-2").onclick = function () {
//     alert("task 2");
// }


// Task 3
// Создайте p.p-3 - при нажатии на него выводите alert с номером задачи.

// document.querySelector('.p-3').onclick = () => {
//     console.log("task 3");
// }

// Task 4
// Создайте input(checkbox).i - 4 и button.b - 4 -
// при нажатии на кнопку выводите true если checkbox выбран и
// false если не выбран.Вывод везде в задачах, где не указано другое,
// осуществляется в div.out - номер задачи.В данном случае div.out - 4

// 1 вариант вызова value 
// const inp = document.querySelector("#box-1");
// inp.onclick = () => {
//    console.log((inp).value); 
// }

// 2 вариант вызова value 
// document.querySelector("#box-1").onclick = () => {
//     console.log((document.querySelector("#box-1")).value);
// }

// Добавляем кнопку btn-4

// const button = document.querySelector(".btn-4");
// const inp = document.querySelector("#box-4");

// button.onclick = () => {
// console.log((inp).value);

//     let myCheckbox = document.querySelector("#box-4");
//     if (myCheckbox.checked) {
//         console.log("true");
//     } else {
//         console.log("false");
//     }
// }

// Task 5
// Создайте input(checkbox).i - 5 и button.b - 5.
// Для checkbox добавьте value = "task-5" - при нажатии на кнопку b - 5
// выводите value checkbox если checkbox выбран и false если не выбран.
// Вывод везде в задачах, где не указано другое, осуществляется в div.out -
// номер задачи.В данном случае div.out - 5.


// const button = document.querySelector(".btn-5");
// let myCheckbox = document.querySelector("#i-5");

// button.onclick = () => {

//     let val = myCheckbox.value;

//     if (myCheckbox.checked) {
//         console.log(val);
//     } else {
//         console.log("false");
//     }
// }


// Task 6
// Создайте input(hidden).i - 6 и button.b - 6 - при нажатии на кнопку
// выводите value из input в div.out - 6.

// document.querySelector(".btn-6").onclick = () => {
//     console.log(document.querySelector(".i-6").value);
// }

// Task 7
// Создайте input(password).i - 7 и button.b - 7 - при нажатии на кнопку
// выводите в div.out - 71 value прописанное в input.
// В.out - 72 выводите 1 если длина пароля больше или равна 6
// или 0 если меньше.Для подсчета количества символов в строке
// используйте length.

// const button = document.querySelector(".btn-7");
// let inp = document.querySelector(".i-7");

// button.onclick = () => {
    
//     console.log((inp).value);

//     if (inp.value.length >= 6) {
//         console.log(1);
//     } else {
//         console.log(0);
// }

// }

// Task 8 
// Создайте div.out - 8 и кнопку.b - 8. При нажатии кнопки создавайте внутри
// div.out - 8 элемент input.i - 81 и кнопку.b - 81(innerHTML).
// Добавьте на созданную кнопку событие клик и запуск функции f81.
// Функция должна в.out - 81 выводить value созданного input.i - 81.


// document.body.insertAdjacentHTML("afterbegin", `<input class="input-8">
//     <button class="btn-8>GO<button>`);


// Task 9
// Создайте один input(radio).r - 9 и button.b - 9 - при нажатии на button
// если radio.r - 9 выбран(активен, checked) выводите в.out - 9 -
// value прописанное в r - 9, либо 0 если не активен.

// document.querySelector(".btn-9").onclick = () => {
//     let conf = document.querySelector("#r-1");
//     let result = conf.value;
    
//     if (conf.checked) {
//         console.log(result);
//     } else {
//         console.log("not checked");
//     }

// }

// Task 10
// Создайте input(color).i - 10 и button.b - 10 - при нажатии на кнопку
// окрашивайте div.out - 10 выбранным цветом(имеется ввиду.style.background = ).

// document.querySelector(".btn-10").onclick = () => {
//     let color = document.querySelector("#i-10");
//     console.log((color).value);

//     // style

//     document.querySelector(".btn-10").style.backgroundColor =
//         (color).value;
// }

// Task 11
// Создайте input(color).i - 111 и input(color).i - 112 - два элемента
// и button.b - 11 - при нажатии на кнопку присвойте цвет из первого input
// в value второго.

// document.querySelector(".btn-11").onclick = () => {
//     let colorOne = document.querySelector("#i-11");
//     let colorTwo = document.querySelector("#i-12");

//     // style

//     document.querySelector(".btn-11").style.backgroundColor =
//         (colorTwo).value;
// }

// Task 12
// Создайте input(date).i - 12 и button.b - 12 - при нажатии на кнопку выводите
// на в out - 12 выбранную в input дату.

// document.querySelector(".btn-12").onclick = () => {
//     let date = document.querySelector("#i-12");
//     console.log(date.value);
// }

// Task 13
// Создайте input(range).i - 13. При изменении положения ползунка i - 13
// выводите значение в out - 13. Для события используйте oninput.

// document.querySelector(".btn-13").onclick = () => {
//     let result = document.querySelector("#i-13");
//     console.log(result.value);
// }

// document.querySelector("#i-13").oninput = () => {
//     let result = document.querySelector("#i-13");
//     console.log(result.value);
// }

// Task 14
// Создайте text - area.t - 14 и button.b - 14 -
// при нажатии на кнопку выводите на в out - 14 текст введенный в t - 14.

// document.querySelector("#btn-14").onclick = () => {
//     let text = document.querySelector("#t-14");
//     console.log(text.value);
// }



// Task 15
// Создайте text - area.t - 15, input.i - 15 и button.b - 15 -
// при нажатии на кнопку выводите текст из input.i - 15 в textarea.t - 15
// и на страницу в out - 15.

// document.querySelector(".btn-15").onclick = () => {
//     let text = document.querySelector("#t-15");
//     let inp = document.querySelector("#i-15");
//     text.value = inp.value;
//     console.log(text.value);
// }

// Task 16
// Создайте select.s-16 и button.b-16 - при нажатии на кнопку выводите 
// в out-16 value выбранного option из s-16.

// document.querySelector(".btn-16").onclick = () => {
//     let result = document.querySelector(".s-16");
//     console.log(result.value);
// }

// Task 17
// Создайте select.s - 17. Добавьте ему событие onchange,
// при наступлении которого запускается функция f17.
// Функция должна выводить в out - 17 value выбранного в select option.
// const select = document.querySelector(".s-17");
// select.onchange = () => {
//     console.log(select.value);
// }

// Task 18
// Создайте select.s - 18 и input.i - 18. Добавьте на select событие onchange,
// при наступлении которого запускается функция f18.
// Функция должна выводить в input i - 18 value выбранного в select option.

// const select = document.querySelector(".s-18");
// let inp = document.querySelector("#i-18");


// select.onchange = () => {
//     inp.value = select.value;
//     console.log(inp.value);
// }

// Task 19
// Создайте форму.В ней input(text).i - 191 и input(password).i - 192 -
// и кнопку button.b - 19. По нажатию кнопки выводите значение text и password
// в out - 19 через пробел.
// Обратите внимание на хитрость.Мы, кнопку сейчас повесили за пределами формы.
// Чуть позже мы рассмотрим почему это делали.
// document.querySelector(".btn-19").onclick = () => {
//     let inpOne = (document.querySelector("#i-191").value);
//     let inpTwo = (document.querySelector("#i-192").value);
//     console.log(inpOne+" " +inpTwo)
//  }

// Task 20
// Создайте форму.f - 20. В ней input(text) и input(password) - и кнопку button.b - 20.
// По нажатию кнопки выводите значение из input text и password в out - 20 через пробел.
// Используйте form.elements(читать)



// let form = document.forms.my;
// let elemOne = form.elements.one;
// let elemTwo = form.elements.two;

// document.querySelector("#btn-20").onclick
// = (event) => {
//     event.preventDefault();
//     console.log(elemOne.value+ " " + elemTwo.value);
// }


const max = 50;
const min = 6;
let total = 0;

for (let i = 1; i <= max; i += 1) {
    console.log(i);
    total += i;
}

console.log("Total" , total);