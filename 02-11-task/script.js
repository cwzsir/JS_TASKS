function hello(text) {
    return 'Привет, JavaScript!';
}

alert(hello());

function qubeNumber(a) {
    alert(a * 3);
}

qubeNumber(7);

function getName(userName = 'гость') {
    alert(`Привет, ${userName}`)
}

let name = 'Василий';
getName(name);