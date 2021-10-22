"Use strict";
// 1 Задача //
let count = 111;
if (count <= 100 && count >=90) {
    console.log("Отлично");
} else if (count <= 89 && count >=60) {
    console.log("Хорошо");
} else if (count <= 59 && count >=40) {
    console.log("Удовлетворително");
} else if (count <= 39 && count >=0) {
    console.log("Попробуйте еще раз");
} else {
    console.log("Диапазон оценки только от 0 до 100!!!");
}

// 5 задача //

let prognum = Math.floor(Math.random()*(500-10)+10);
if (prognum > 25 && prognum < 200 ) {
    console.log(`Число ${prognum} содержится в интервале (25;200)`)
} else console.log(`Число ${prognum}  не содержится в интервале (25;200)`);