"Use strict";
const height = 10;const lenght = 23;const width = 13;
square = `Высота параллелепипида ${height}, длина параллелепипида ${lenght}, 
ширина параллелепипида ${width}. Объем ${height*lenght*width}, Площадь ${2*((width*lenght)+(width*height)+(height*lenght))} `;
console.log(square);

//1 способ//
let n = 58; let c = Math.trunc(n / 10);
sum = `Cумма чисел числа ${n} равна ${n % 10 + c }`;
console. log(sum);
//2 способ//
let n2 = 99;
sum2 = `Cумма чисел числа ${n2} равна ${n2 % 10 + parseInt(n2 / 10) }`;
console. log(sum2);

let a = 5; let b = 7;
text = `В начале задаем два чисал где a = ${a}, а b = ${b}, после возвращаются числа в обратном порядке:`;
a = a * 10 + b;
b = parseInt(a / 10);
a = a % 10;

console. log(text,a,b);