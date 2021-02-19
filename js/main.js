let btnCartButton = document.querySelector('.cart-button');
let cartBody = document.querySelector('.cart-body-box');
let goodsListHTML = document.querySelector('.goods-list');


btnCartButton.addEventListener('click', (event) => {
    cartBody.classList.toggle('open');
})


const requwstURL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/getBasket.json';


function sendReques(method, url, body = 'nall') {
    return fetch(url)
}

class Cart {
    __items = [];

    getItems() {
        return this.__items;
    }

    addItem = item => {
        this.__items.push(item);
        this.render();

    };

    removeItem(id) {
        this.__items = this.__items.filter(i => i.id !== id);
        this.render();
    }

    __cartLength() {
        const span = document.querySelector('.counter-cart');
        if (this.__items.length > 0) {
            span.innerText = this.__items.length;
        } else {
            span.innerHTML = ''
        }
    }

    __emptyCart() {
        const empty = `
        <div class="empty">
            <h2>Товаров нет</h2>
        </div>`
        if (this.__items.length == 0) {
            document.querySelector('.cart-body').innerHTML = empty;
        }
    }

    __getGoodsItemTemplate = ({
        productName,
        price,
        id,
        img
    }) => {
        return `<div class="goods-item">
            <img src="${img}" alt="">
            <h3>${productName}</h3>
            <p>${price}</p>
            <button class="button-to-cart delet-item-cart" type="button" value="${id}">Удалить</button>
         </div>`;
    };

    render() {
        const goodsTemplates = this.__items.map(item => this.__getGoodsItemTemplate(item)).join('');
        const wrapper = document.querySelector('.cart-body');
        wrapper.innerHTML = goodsTemplates;
        wrapper.querySelectorAll('.delet-item-cart').forEach(i => {
            i.addEventListener('click', () => {
                console.log(cart, 'ggg');
                const id = i.value;
                cart.removeItem(id);
            });
        });
        this.__cartLength();
        this.__emptyCart();

    }
}

class GoodsList {
    goods = [];
    filteredGoods = [];
    buttons;
    input;


    __getGoodsItemTemplate = ({
        productName,
        price,
        id,
        img
    }) => {
        return `<div class="goods-item">
            <img src="${img}" alt="">
            <h3>${productName}</h3>
            <p>${price}</p>
            <button class="button-to-cart" type="button" value="${id}">Купить</button>
         </div>`;
    };

    handleChange = event => {
        this.filteredGoods = this.goods.filter(item => {
            const v = event.target.value.toLowerCase();
            return item.productName.toLowerCase().includes(v);
        });
        console.log(this.filteredGoods);
        this.render();
    };

    init(url) {
        this.input = document.querySelector('[data-id=search]');
        this.input.addEventListener('input', this.handleChange);
        this.getGoods(url).then(() => {
            this.render();
        });
    }

    getGoods(url) {
        return fetch(url)
            .then(r => r.json())
            .then(r => {
                this.goods = r;
                this.filteredGoods = this.goods;
            });
    }

    render(selector = '.goods-list') {
        const goodsTemplates = this.filteredGoods.map(item => this.__getGoodsItemTemplate(item)).join('');
        const wrapper = document.querySelector(selector);
        wrapper.innerHTML = goodsTemplates;
        wrapper.querySelectorAll('.button-to-cart').forEach(i => {
            i.addEventListener('click', () => {
                console.log(cart);
                const id = i.value;
                const item = this.goods.find(goodsItem => goodsItem.id === id);
                cart.addItem(item);
            });
        });
        console.log(this.filteredGoods);

    }
}

const cart = new Cart();

const url = 'https://602c2a0730ba720017222bc0.mockapi.io/goods';
const list = new GoodsList().init(url);