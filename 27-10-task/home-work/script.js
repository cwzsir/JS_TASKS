let user = prompt('Кто пришел?')
if (user === "Админ"){
    let user1 = prompt( 'Пароль?');
    if (user1 === 'Черный Властелин'){
        alert('Добро пожаловать!');
    } else if (user1) {
        alert('Пароль не верен');
    } else if (user1 === ''){
        alert('Введите пароль');
    } else {
    alert('Вход отменен');
    }
} else if (user){
    alert('Я вас не знаю');
} else if (user === ''){
    alert('Введите логин');
} else {
    alert('Вход отменен');
}