/*1. Доработать модуль корзины.
a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы
b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида

*/




/* 2 *У товара может быть несколько изображений. Нужно:
a. Реализовать функционал показа полноразмерных картинок товара в модальном окне
b. Реализовать функционал перехода между картинками внутри модального окна ("листалка")
*/



const cartItem = {
    render(good) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${good.product_name}</div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <div><b>Количество</b>: ${good.quantity}</div>
                    <div><b>Стоимость</b>: ${good.quantity * good.price}</div>
                </div>`;
    }
}

const cart = {
    cartListBlock: null,
    cartButton: null,
    macbookButton: null,
    mouseButton: null,
    keyboardButton: null,
    cartItem,

    goods: [
        {
            id_product: 123,
            product_name: 'Ноутбук',
            price: 45600,
            quantity: 1,
        },
        {
            id_product: 456,
            product_name: 'Мышка',
            price: 1000,
            quantity: 2,
        },
        {
            id_product: 305,
            product_name: 'Клавиатура',
            price: 2000,
            quantity: 1,
        },
    ],
    init() {
        this.cartListBlock = document.querySelector('.cart-list');
        this.cartButton = document.querySelector('.cart-btn');
        this.macbookButton = document.querySelector("button.buy-btn1");
        this.mouseButton = document.querySelector(" button.buy-btn2");
        this.keyboardButton = document.querySelector("button.buy-btn3");

        this.cartButton.addEventListener('click', () => this.clearCart());
        this.macbookButton.addEventListener('click', () => this.buyMacBook());
        this.mouseButton.addEventListener('click', () => this.buyMouse());
        this.keyboardButton.addEventListener('click', () => this.buyKeyboard());

        this.render();
    },
    render() {
        if (this.goods.length) {
            this.goods.forEach(good => {
                this.cartListBlock.insertAdjacentHTML('beforeend', this.cartItem.render(good));
            });
            this.cartListBlock.insertAdjacentHTML('beforeend', `В корзине ${this.goods.length} позиций(а) стоимостью ${this.getCartPrice()}`);
        } else {
            this.cartListBlock.textContent = 'Корзина пуста';
        }
        if (this.cartListBlock.textContent == 'Корзина пуста') {
            this.goods = [{
                id_product: 123,
                product_name: 'Ноутбук',
                price: 45600,
                quantity: 0,
            },
            {
                id_product: 456,
                product_name: 'Мышка',
                price: 1000,
                quantity: 0,
            },
            {
                id_product: 305,
                product_name: 'Клавиатура',
                price: 2000,
                quantity: 0,
            },];
        }
    },
    getCartPrice() {
        return this.goods.reduce(function (price, good) {
            return price + good.price * good.quantity;
        }, 0);
    },
    clearCart() {
        this.goods = [];
        this.render();
    },

    buyMacBook() {
        this.goods[0].quantity += 1;
        this.cartListBlock.textContent = '';
        this.render();
    },
    buyMouse() {
        this.goods[1].quantity += 1;
        this.cartListBlock.textContent = '';
        this.render();
    },
    buyKeyboard() {
        this.goods[2].quantity += 1;
        this.cartListBlock.textContent = '';
        this.render();
    },

};
cart.init();




