/****** N1 постфиксные ******/
let num = 10;
num1 = num++; // 10 + 1 = 11
num2 = num++; // 11 + 1 = 12
num3 = num--; // 12 - 1 = 11
console.log(num);

/****** N1 префиксные ******/
let age = 10;
age1 = ++age; // 11
age2 = ++age; // 12
age3 = --age; // 11
console.log(age);

/****** N2 ******/
let price = 47;
price += 7; // price = price + 7 = 54
price -= 18; // price = price - 18 = 36
price *= 10; // price = price * 10 = 360
price /= 15; // price = price / 15 = 24
alert(price);

/****** N3 ******/
let count = 1;
count += 12; // count = count + 12 = 13
count -= 14; // count = count - 14 = -1
count *= 5; // count = count * 5 = -5
count /= 7; // count = count / - = -0.7142857142857143
count1 = count++; // count + 1 = 0.2857142857142857
count2 = count--; // count - 1 = -0.7142857142857143
alert(count);

/****** N4 && (and) ******/
// false + true = false;
let user_age = 18;
let user_name = 'sasha';
let result = user_age > 19 && user_name === 'sasha';
console.log(result);

//true + false = false;
let user_age1 = 18;
let user_name1 = 'sasha';
let result1 = user_age1 < 19 && user_name1 === 'test';
console.log(result1);

//false + false = false;
let user_age2 = 18;
let user_name2 = 'sasha';
let result2 = user_age2 >= 19 && user_name2 === 'test';
console.log(result2);

//true = true = true;
let user_age3 = 18;
let user_name3 = 'sasha';
let result3 = user_age3 <= 19 && user_name3 === 'sasha';
console.log(result3);

/****** N4 || (or) ******/
//true + false = true;
let user_age4 = 19;
let user_name4 = 'sasha';
let result4 = user_age4 > 18 || user_name4 === 'test';
console.log(result4);

//false + true = true;
let user_age5 = 19;
let user_name5 = 'sasha';
let result5 = user_age5 < 18 || user_name5 === 'sasha';
console.log(result5);

//true + true = true;
let user_age6 = 19;
let user_name6 = 'sasha';
let result6 = user_age6 >= 18 || user_name6 === 'sasha';
console.log(result6);

//false + false = false;
let user_age7 = 19;
let user_name7 = 'sasha';
let result7 = user_age7 <= 18 || user_name7 === 'test';
console.log(result7);