"Use strict";
//Zadaza 1//
let nums = [
    [23, 56, 75, -90, 123],
    [17, 0, -6429, -122],
    [19, 86, 55, -3, 900, 0, 0],
    [4, 9, -2]
 ];
 sum = 0;
 qua = 0
 for (let elem of nums) {
     qua += elem.length
     for (let index = 0; index < elem.length; index++) {
         elem[index] += 10;
        sum += elem[index] 
        srz = sum / qua
     }
 }
 console.log (nums);
 console.log (`Cреднее значение = ${srz}`);

//Zadacha 2//
 let max = 0, min = 0, index1 = 0; index2 = 0; 
 let arr = [];
 for (i = 0; i < 7; i++) {
     arr[i] = Math.floor(Math.random()*(300-5)+5)
 }
 console.log (arr);
 for (a = 0; a < arr.length; a++) {
     if (max < arr[a]) {
         max = arr[a];
         index1 = a;
     }
     if (min > arr[a]) {
         min = arr[a]
         index2 = a; 
     }  
 }
let save = arr[index1];
 arr[index1] = arr[index2];
 arr[index2] = save;
 console.log (arr);

