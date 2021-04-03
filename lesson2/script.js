
/* 1. Дан код:
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
d = b++; alert(d);           // 1
c = (2+ ++a); alert(c);      // 5
d = (2+ b++); alert(d);      // 4
alert(a);                    // 3
alert(b);                    // 3
Почему код даёт именно такие результаты? */

// префиксная форма ++a увеличивает переменную и возвращает увеличенное значение, а постфиксная увеличивает переменную, но возвращает старое значение


/* 2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2);
*/

// 1 + (a = 2*2) = 5

/* 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который
работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом. */

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

var a = getRandomArbitrary(-10, 10);
let b = getRandomArbitrary(-10, 10);

console.log(a, b);

function number3(a, b, x = 'a') {
    if (a >= 0 && b >= 0) {
        x = a - b;
        if (x !== NaN) {
            console.log('a и b положительные', x)
        }
    } else if (a < 0 && b < 0) {
        x = a * b;
        if (x !== NaN) {
            console.log('если а и b отрицательные', x)
        }
    } else {
        x = a + b;
        if (x !== NaN) {
            console.log('если а и b разных знаков', x)
        }
    }
}
x = number3(a, b);

/* 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15. */


function cycle(first_number, last_number) {
    var line = first_number
    while (last_number - first_number != 0) {
        line = line + ' , ' + (first_number + 1);
        first_number += 1;
    }
    return line
}

number = getRandomArbitrary(0, 15);
console.log(number);

switch (number) {
    case 0:
        console.log(cycle(number, 15))
        break;
    case 1:
        console.log(cycle(number, 15))
        break;
    case 2:
        console.log(cycle(number, 15))
        break;
    case 3:
        console.log(cycle(number, 15))
        break;
    case 4:
        console.log(cycle(number, 15))
        break;
    case 5:
        console.log(cycle(number, 15))
        break;
    case 6:
        console.log(cycle(number, 15))
        break;
    case 7:
        console.log(cycle(number, 15))
        break;
    case 8:
        console.log(cycle(number, 15))
        break;
    case 9:
        console.log(cycle(number, 15))
        break;
    case 10:
        console.log(cycle(number, 15))
        break;
    case 11:
        console.log(cycle(number, 15))
        break;
    case 12:
        console.log(cycle(number, 15))
        break;
    case 13:
        console.log(cycle(number, 15))
        break;
    case 14:
        console.log(cycle(number, 15))
        break;
    case 15:
        console.log(cycle(number, 15))
}

/* 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return. */

function addition(number_1, number_2) {
    return number_1 + number_2
}
function subtraction(number_1, number_2) {
    return number_1 - number_2
}
function division(number_1, number_2) {
    return number_1 / number_2
}
function multiplication(number_1, number_2) {
    return number_1 * number_2
}

console.log(addition(5, 10), subtraction(7, 5), division(6, 2), multiplication(13, 12))

/* 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения
аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических
операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).  */

function arithmetic(arg1, arg2, operation) {
    if (operation == addition) {
        return arg1 + arg2
    }
    if (operation == subtraction) {
        return arg1 - arg2
    }
    if (operation == division) {
        return arg1 / arg2
    }
    if (operation == multiplication) {
        return arg1 * arg2
    }
}

console.log(arithmetic(5, 10, addition))

// 7. *Сравнить null и 0. Попробуйте объяснить результат.
var z = null
var q = 0
var w = z > q
console.log(w)
var w = (z == q)
console.log(w)
var w = z < q
console.log(w)

// Null - обозначает отсутствие объекта как такого, поэтому объект равный 0 будет больше отсутствующего объекта

// 8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.

function power(val, pow) {

    if (pow == 1) {
        return val;
    } else {
        return val * power(val, pow - 1);
    }
}

console.log(power(10, 4))