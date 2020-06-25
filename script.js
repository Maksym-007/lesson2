function myFunction() {
    connect = confirm('Привет, хочешь я угадаю год твоего рождения?');
    let dataYear = 2020,
        age = prompt('Для этого, тебе надо сказать свой возраст и кол-во месяцев, через ТОЧКУ!'),
        tadam = ('Та-дам!');
    confirm(tadam + ' ' + Math.floor(dataYear - +age));
    console.log(tadam + ' ' + Math.floor(dataYear - +age));
    let victoryna = Math.floor(Math.random() * (10 - 1) + 1),
        connect2 = alert('А теперь ты попробуй отгадать число, что я загадал'),
        askMe = prompt('загадай число от 0 до 10'),
        result = (victoryna === Number(askMe));
    alert(result);
    let day1 = prompt('Сколько раз ты мыл руки сегодня?'),
        day2 = prompt('Сколько раз ты мыл руки вчера?'),
        day3 = prompt('Сколько раз ты мыл руки позавчера?'),
        testStart = 'В среднем ты моешь руки -',
        testEnd = 'раз(а), Маловато будет!',
        task = Math.floor(Number((+day1 + +day2 + +day3) / 3));
    document.write(testStart + ' ' + task + ' ' + testEnd);
};
console.group('Варианты вывода значений');
console.warn('Предупреждение');
console.table('тут могла быть,таблица');
console.info('25.06.2020');
console.log('Home task 2');
console.groupEnd;

