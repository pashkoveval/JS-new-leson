let btnCartButton = document.querySelector('.cart-button');
let cartBody = document.querySelector('.cart-body');
let goodsListHTML = document.querySelector('.goods-list');

btnCartButton.addEventListener('click', () => {
    cartBody.classList.toggle('open');
})


const goods = [{
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

const renderGoodsItem = (title, price) => {
    return `<div class="goods-item">
    <img src="https://via.placeholder.com/120x100" alt="">
    <h3>${title}</h3>
    <p>${price}</p>
    <button class="item-button" type="button">В корзину</button>
    </div>`;
};

const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').insertAdjacentHTML('afterbegin', goodsList.join(''))
}

renderGoodsList(goods);