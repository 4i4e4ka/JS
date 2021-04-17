
// let out = document.querySelector('.out');

// for (let i = 0; i < 7; i += 1) {
   
//     for (let j = 0; j < 10; j += 1) {
//         out.innerHTML += "*";
//     }

//     out.innerHTML += "_";
// }



// С помощью вложенных циклов, нарисуйте строку:
// ***_***_***_
// где звездочки рисуются с помощью
// внутреннего цикла от 0 до 3, а _ с помощью внешнего.

// let out = document.querySelector('.out');
// for (let i = 0; i <3; i += 1) {
//     for (let j = 0; j <3; j += 1) {
//          out.innerHTML += "*";
//     }
//     out.innerHTML += "_";
// }   


// let out = " ";


// for (let i = 0; i < 3; i += 1) {
//     for (let j = 0; j <3; j += 1) {
//         out += "*";
//         console.log(out);
//     }
//     out += "_";
//     console.log(out);

// }

// Task 2
// С помощью вложенных циклов, нарисуйте строку:

// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// Решить задачу с помощью вложенных циклов.Внешний цикл выводит цифры и перенос строки br, ,
//     второй звездочки, знак подчеркивания и знак переноса.

// let out = document.querySelector('.out');
// for (let i = 0; i < 3; i += 1) {
//     out.innerHTML += `<br />${i + 1} <br />`;
//     for (let j = 0; j < 3; j += 1) {
// out.innerHTML += `*_`; } } 

// Task 3

// С помощью вложенных циклов, нарисуйте строку:

// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_
// Решить задачу с помощью вложенных циклов.Внешний цикл выводит перенос строки br,
//     внутренний - звездочки, знак подчеркивания.


// let out = document.querySelector('.out');


// for (let i = 0; i < 4; i += 1) {
   
//     for (let j = 0; j < 3; j += 1) {
//         out.innerHTML += "*_";
//     }

//     out.innerHTML += "<br>";
// }


//     Task 4
// С помощью вложенных циклов, нарисуйте строку:

// 1_1 2 3 4 5 2_1 2 3 4 5 3_1 2 3 4 5

// let out = document.querySelector('.out');

// for (let i = 1; i < 4; i+=1) {
//     out.innerHTML += `${i}_`;
//     for (let j = 1; j < 6; j+=1) {
//         out.innerHTML += `${j} `;
//     }
// }


// }




