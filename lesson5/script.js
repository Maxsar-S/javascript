/*1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по 
своему желанию. Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые 
ячейки. Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
*/

function generateChessDesk() {

    const table = document.createElement("table");
    for (var i = 1; i < 10; i++) {
        let tr = document.createElement('tr');
        for (var j = 1; j < 10; j++) {
            let td = document.createElement('td');
            if (i % 2 == j % 2 && i != 1 && j != 1) {
                td.className = "white";

            } else if (i == 1 && j == 1) {
                td.className = "nothing"
            } else if (i == 1 && j == 2) {
                td.textContent = '1'
            } else if (i == 1 && j == 3) {
                td.textContent = '2'
            } else if (i == 1 && j == 4) {
                td.textContent = '3'
            } else if (i == 1 && j == 5) {
                td.textContent = '4'
            } else if (i == 1 && j == 6) {
                td.textContent = '5'
            } else if (i == 1 && j == 7) {
                td.textContent = '6'
            } else if (i == 1 && j == 8) {
                td.textContent = '7'
            } else if (i == 1 && j == 9) {
                td.textContent = '8'
            } else if (j == 1 && i == 2) {
                td.textContent = 'A'
            } else if (j == 1 && i == 3) {
                td.textContent = 'B'
            } else if (j == 1 && i == 4) {
                td.textContent = 'C'
            } else if (j == 1 && i == 5) {
                td.textContent = 'D'
            } else if (j == 1 && i == 6) {
                td.textContent = 'E'
            } else if (j == 1 && i == 7) {
                td.textContent = 'F'
            } else if (j == 1 && i == 8) {
                td.textContent = 'G'
            } else if (j == 1 && i == 9) {
                td.textContent = 'H'
            }
            else {
                td.className = "black";
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    document.getElementById('chess').appendChild(table);
}


/*2*. Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, например К – король, Ф –
ферзь и т.п.,
*/

/*3. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре.
Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
3.1. Пустая корзина должна выводить строку «Корзина пуста»;
3.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
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

function add_product(product_name, add_quantity) {
    basket.product[product_name].quantity += add_quantity;
}
function clear_basket(basket) {
    for (var key in basket.product) {
        basket.product[key].quantity = 0;
    }
}

function general_price(basket) {
    let gen_pr = 0;
    let i = 0;
    let answer = document.createElement("answer");
    let number_of_prod = 0;
    for (var key in basket.product) {
        gen_pr += basket.product[key].quantity * basket.product[key].price;
        number_of_prod += basket.product[key].quantity;
    }
    if (gen_pr == 0) {
        answer.textContent = "Корзина пуста";
    } else {
        answer.textContent = "В корзине " + number_of_prod + " товаров на сумму " + gen_pr;
    }


    const myDiv = document.createElement('div');

    myDiv.appendChild(answer);
    document.getElementById('basket_div').appendChild(myDiv);
}




/*4*. Сделать так, чтобы товары в каталоге выводились при помощи JS:
4.1. Создать массив товаров (сущность Product);
4.2. При загрузке страницы на базе данного массива генерировать вывод из него. HTML-код должен содержать
только div id=”catalog” без вложенного кода. Весь вид каталога генерируется JS.
*/