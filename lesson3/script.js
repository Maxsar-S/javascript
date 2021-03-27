//1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

function primesNumbers(n, i = 2, j = 2) {
    while (i <= n) {
        let flag = 1;
        let j = 2;
        while ((j <= i / 2) && (flag == 1)) {
            if (i % j == 0) {
                flag = 0;
            }
            j++
        }
        if (flag == 1) {
            console.log(i);
        }
        i++
    }
}
console.log(primesNumbers(100))

/*2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. 
Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.*/

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let basket = [
    {
        product: "pen",
        price: getRandomArbitrary(50, 100)
    },
    {
        product: "pencil",
        price: getRandomArbitrary(50, 100)
    },
    {
        product: "file",
        price: getRandomArbitrary(50, 100)
    },
    {
        product: "paper",
        price: getRandomArbitrary(50, 100)
    }
];
let basketPrice = 0;
for (let prod of basket) {
    basketPrice += prod.price;
    console.log("Товар " + prod.product + " стоит: " + prod.price);
}

console.log("Стоимость корзины: " + basketPrice + " у.е.");

/*3. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.*/

basket.push({ product: "book", price: getRandomArbitrary(100, 200) })
console.log("Товар " + basket[4].product + " стоит: " + basket[4].price);

function countBasketPrice(basket) {
    let funBasketPrice = 0;
    for (let prod of basket) {
        funBasketPrice += prod.price;
    }
    return funBasketPrice;
}

console.log("Стоимость корзины: " + countBasketPrice(basket) + " у.е.");


//4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
//for(…){// здесь пусто}

for (n = 0; n < 10; console.log(n++)) { }

/*5. * Нарисовать пирамиду с помощью console.log, как показано на рисунке,
только у вашей пирамиды должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx
*/

for (n = 0; n < 20; n++) {
    result = ' ';
    j = n
    while (j >= 0) {
        result = result + `x`;
        j = j - 1;
    }
    console.log(result);
}

