/*1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект,
 в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны 
 получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо
  выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/
function numObj(number) {
    if (number > 999) {
        alert('Вы ввели число больше 999')
        let obj = {};
        return obj;
    } else {
        let a = number % 10;
        let b = Math.floor(number / 10) % 10;
        let c = Math.floor(number / 100) % 10;
        let obj = {
            'единицы': a,
            'десятки': b,
            'сотни': c
        }
        return obj;
    }
}
let num = prompt('Введите натуральное число от 0 до 999')
console.log(numObj(num))

/*2.Продолжить работу с интернет-магазином:
2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить 
их элементы?
2.2. Реализуйте такие объекты.
2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/

let basket = {
    product: {
        'pen': {
            quantity: 0,
            price: 15
        },
        'pencil': {
            quantity: 0,
            price: 35
        },
        'file': {
            quantity: 0,
            price: 44
        },
        'paper': {
            quantity: 0,
            price: 17
        }
    }
}

basket.add = function (product_name, add_quantity) {
    basket.product[product_name].quantity = add_quantity;
}

basket.general_price = function () {
    let gen_pr = 0;
    let i = 0;
    for (var key in basket.product) {
        gen_pr += basket.product[key].quantity * basket.product[key].price
        console.log("Товар " + Object.keys(basket.product)[i] + ' в количестве ' + basket.product[key].quantity + " стоит (штука, общая): "
            + basket.product[key].price + ', ' + basket.product[key].quantity * basket.product[key].price);
        i++;
    }
    return ('Общая стоимость корзины: ' + gen_pr);
}

basket.add('pen', 5);
basket.add('pencil', 3);
basket.add('file', 2);
basket.add('paper', 6);

console.log(basket.general_price())

