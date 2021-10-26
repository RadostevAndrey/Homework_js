"Use strict";
// 2 Задача //
let numex = prompt("Введите номер задачи, которую хотите проверить");
if (numex === "2") {

    let a = parseInt(prompt("Введите 1 число")), b = parseInt(prompt("ВВедите 2 число")), operator = prompt("Введите действие");
    switch (operator) {
        case "Прибавить":
        case "Сложить":
        case "+":    
        console.log(a+b);
        break;
        case "Отнять":
        case "Вычесть":
        case "-":    
        console.log(`Первое число ${a} минус второе ${b} равно ${a-b}, второе ${b} минус первое ${a} равно ${b-a}`);
        break;
        case "Умножить":
        case "*":    
        console.log(a*b);
        break;
        case "Разделить":
        case "/":    
        console.log(`Первое число ${a} разделить на второе ${b} равно ${a-b}, второе ${b} разделить на первое ${a} равно ${b-a}`);
        break;
        default:
        console.log("Пожалуйста введите корректный оператор или его наименование");
    }
} else if (numex === "3" ) {

    let quantityP = parseInt(prompt("Введите количество тарелок")), quantityF = parseInt((prompt("Введите количество моющего средства")));
    while (quantityF > 0 && quantityP > 0) {
        quantityP = --quantityP;
        quantityF = quantityF - 0.5;
        console.log(`Оставшееся количесвто тарелок ${quantityP}, оставшееся количество моющего средства ${quantityF}`);
    }
} else if (numex === "4") {
    
    let usernum = parseInt(prompt("Введите свое число или введите 0, чтобы выключить программу"));
    let prognum = Math.floor(Math.random()*(9-1)+1);
    while (usernum !== prognum || usernum === 0) {
        if (usernum === 0) {
            console.log("Завершение работы программы"); 
            break;
        }
        if (prognum >  usernum) {
        console.log("Загаданное число больше");
        usernum = parseInt(prompt("Попробуйте еще раз"));
            } else if (prognum <  usernum) {
        console.log("Загаданное число меньше");
        usernum = parseInt(prompt("Попробуйте еще раз"));
            } else if (prognum === usernum) {
        console.log(`Вы угадали, наше число было = ${prognum}`);
        usernum = prognum;
            } 
    }
   
} else if (numex === "6") {

    
}