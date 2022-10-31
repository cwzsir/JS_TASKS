let x = +prompt('Введите число от 1 до 10');
if(x === 7){
    alert('Верно');
} else{
    alert('Неверно');
}

let a = +prompt();
let b = +prompt();
if(a <= 1 && b >= 3){
    alert(a + b);
} else {
    alert(a - b);
}

let time = +prompt('Введите число от 0 до 59');
if(time >= 0 && time < 15){
    alert('первая четверть');
} else if (time >= 15 && time < 29){
    alert('вторая четверть');
} else if (time >= 30 && time < 44){
    alert('третья четверть');
} else if (time >= 45 && time <= 59){
    alert('четвертая четверть');
} else {
    alert('Введите число от 0 до 59');
}
