//2.4 Сформировать массив из чисел, которые делятся на 3 (Количество элементов массива: 8)

// let arr = [];

// for (let i = 0; arr.length !== 8; i++) {
//    if (i % 3 === 0) {
//       arr[arr.length] = i;
//    }
// }
// console.log(arr);


// 3.1 С помощью цикла создать массив, каждый элемент которого равен квадрату своего номера.

let arr = [];

for (let i = 0; arr.length !== 8; i++) {
   arr[i] = i ** 2;
}
console.log(arr);
