/*********** N1 *********/
/*let numbers = [1,2,5,6,88,5];

let sum = 0;
 for (let i = 0; i < numbers.length; i++) {
     sum += numbers[i];
 }
 console.log(sum);*/

/*********** N2 *********/
/*let numbers = [1,2,3,4,5,6,7,8,9,10];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
     let elem = numbers[i];
     let square = elem * elem;
     sum += square;
     console.log({sum, square, elem, i});
}

console.log(sum);*/

/************* N3 *********/

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const sum = [];
for (let i = 0; i < numbers.length; i++){
    /*console.log(arr[i], arr[i] % 2 === 0)*/
    if (numbers[i] % 2 === 0){
        console.log(numbers[i])
        sum.push(numbers[i]);
    }
}
console.log(sum);