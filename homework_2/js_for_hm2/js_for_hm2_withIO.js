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
    
    let usernum = parseInt(prompt("Введите свое число"));
    let prognum = Math.random()*(9-0)+0;
    if (Math.floor(prognum) >  usernum) {
    console.log("Загаданное число больше");
    } else if ((Math.floor(prognum) <  usernum)) {
    console.log("Загаданное число меньше");
    } else if ((Math.floor(prognum) ===  usernum)) {
    console.log("Вы угадали");
    } else if (0 ===  usernum) {
        console.log("Завершение программы");
    }
} else if (numex === "6") {

    
}