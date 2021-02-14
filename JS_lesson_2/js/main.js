let btnCartButton = document.querySelector('.cart-button');
let cartBody = document.querySelector('.cart-body');
let goodsListHTML = document.querySelector('.goods-list');

btnCartButton.addEventListener('click', (event) => {
    cartBody.classList.toggle('open');
})


const listGoodsItems = [{
        title: 'Shirt',
        price: 150
    },
    {
        title: 'Socks',
        price: 50
    },
    {
        title: 'Jacket',
        price: 350
    },
    {
        title: 'Shoes',
        price: 250
    },
];



class GoodsList {
    goods = [];
    cartGoodsList = [];

    __getGoodsItemTemplate({
        title,
        price,
    }, index, text = 'В корзину') {
        return `<div class="goods-item">
            <img src="https://via.placeholder.com/120x100" alt="">
            <h3>${title}</h3>
            <p>${price}</p>
            <button class="button-to-cart" type="button" value="${index}">${text}</button>
         </div>`;
    }

    __lengthCart() {
        if (this.cartGoodsList.length > 0) {
            document.querySelector('.empty').classList.toggle('hide');
            document.querySelector('.counter-cart').innerText = `${this.cartGoodsList.length}`
        }
    }

    getGoods(goods) {
        this.goods = goods;
    }

    render(place = '.goods-list', arr = this.goods) {
        this.goodsList = arr.map((item, index) => this.__getGoodsItemTemplate(item, index));
        const goodsWrapper = document.querySelector(`${place}`);
        goodsWrapper.insertAdjacentHTML('afterbegin', this.goodsList.join(''))
    }

    renders(elm) {

        this.cartGoodsList.push(this.goods[elm]);
        this.render('.cart-body', this.cartGoodsList);
        this.__lengthCart();
    }
}

const list = new GoodsList();
list.getGoods(listGoodsItems);
list.render();

let btnBuy = document.querySelectorAll('.button-to-cart');
btnBuy.forEach((el) => {
    el.addEventListener('click', (el) => {
        if (el.target.value) {
            list.renders(el.target.value)
        }
    })
})