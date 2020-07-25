// Переведено на промисы
// let getRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         let xhr = new XMLHttpRequest();
//         xhr.open("GET", url, true);
//         xhr.onreadystatechange = () => {
//             if(xhr.readyState === 4){
//                 if(xhr.status !== 200){
//                     reject('Error');
//                     alert('Error');
//                 } else {
//                     resolve(xhr.responseText);
//                     alert('Ok!');
//                 }
//             }
//         };
//         xhr.send();
//     })
// };
/*-------------------------------------------------------------------------------------------------*/
'use strict';

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';


class List {
   constructor(url, container, list = listContext) {
      this.container = container;
      this.list = list;
      this.url = url;
      this.goods = [];
      this.allProducts = [];
      this._init();
   }


   getProducts(url) {
      return fetch(url ? url : `${API + this.url}`)
         .then(result => result.json())
         .catch(error => {
            console.log(error);
         })
   }


   handleData(data) {
      this.goods = [...data];
      this.render();
   }


   calcSum() {
      return this.allProducts.reduce((sum, {
         price
      }) => sum + price, 0);
   }

   render() {
      const block = document.querySelector(this.container);

      for (let product of this.goods) {
         const productObject = new this.list[this.constructor.name](product);

         this.allProducts.push(productObject);
         block.insertAdjacentHTML('beforeend', productObject.render());
      }
   }
}

class Item {
   constructor(product, img = 'https://via.placeholder.com/250') {
      this.product_name = product.product_name;
      this.price = product.price;
      this.id_product = product.id_product;
      this.img = img;
   }

   render() {
      return ``;
   }
}


class ProductsList extends List {
   constructor(cart, container = '.products', url = "/catalogData.json") {
      super(url, container);
      this.cart = cart;
      this.getProducts()
         .then(data => this.handleData(data));
   }

   _init() {
      document.querySelector(this.container).addEventListener('click', e => {
         if (e.target.classList.contains('buy-btn')) {
            this.cart.addProduct(e.target);
         }
      });
   }
}

// Класс единицы товара в списке
class ProductItem extends Item {
   render() {
      return `<div class="product-item" data-id="${this.id_product}">
                  <img src="${this.img}" alt="Some img">
                  <div class="product-item__box">
                     <h3>${this.product_name}</h3>
                     <p class="cart-price">${this.price} \u20bd</p>
                     <button
                        class="button buy-btn smal"
                        data-id="${this.id_product}"
                        data-title="${this.product_name}"
                        data-price="${this.price}">Купить</button>
                  </div>
            </div>`;
   }
}

class Cart extends List {
   constructor(container = ".cart-drop", url = "/getBasket.json") {
      super(url, container);
   }


   addProduct(element) {
      this.getProducts(`${API}/addToBasket.json`)
         .then(data => {
            if (data.result === 1) {
               let productId = +element.dataset['id'];
               let find = this.allProducts.find(product => product.id_product === productId);
               if (find) {
                  find.quantity++;
                  this._updateCart(find);
               } else {
                  let product = {
                     id_product: productId,
                     price: +element.dataset['price'],
                     product_name: element.dataset['title'],
                     quantity: 1
                  };

                  this.goods = [product];

                  this.render();
               }
            } else {
               alert('Error!');
            }
         })
   }


   removeProduct(element) {
      this.getProducts(`${API}/deleteFromBasket.json`)
         .then(data => {
            if (data.result === 1) {
               let productId = +element.dataset['id'];
               let find = this.allProducts.find(product => product.id_product === productId);
               if (find.quantity > 1) { // если товара > 1, то уменьшаем количество на 1
                  find.quantity--;
                  this._updateCart(find);
               } else { // удаляем
                  this.allProducts.splice(this.allProducts.indexOf(find), 1);
                  document.querySelector(`.cart-body[data-id="${productId}"]`).remove();
               }
            } else {
               alert('Error');
            }
         })
   }


   _updateCart(product) {
      let block = document.querySelector(`.cart-body[data-id="${product.id_product}"]`);
      block.querySelector('.product-quantity').textContent = `Количество: ${product.quantity}`;
      block.querySelector('.product-price').textContent = `${product.quantity * product.price} ₽`;
   }

   _init() {
      document.querySelector('.btn-cart').addEventListener('click', () => {
         document.querySelector(this.container).classList.toggle('invisible');
      });
      document.querySelector(this.container).addEventListener('click', e => {
         if (e.target.classList.contains('del-btn')) {
            this.removeProduct(e.target);
         }
      })
   }
}

// Класс товаров в корзине
class CartItem extends Item {
   constructor(product, img = 'https://via.placeholder.com/80') {
      super(product, img);
      this.quantity = product.quantity;
   }

   /**
    * Метод отрисовывает товары в корзине
    */
   render() {
      return `<div class="cart-body" data-id="${this.id_product}">
                  <div class="cart-item-left">
                     <a href="#"><img src="${this.img}" alt="Some image"></a>
                     <div class="cart-item-text">
                        <h4>${this.product_name}</h4>
                        <p class="product-quantity">Количество: ${this.quantity}</p>
                        <p class="product-single-price">${this.price} за шт.</p>
                        <p class="product-price">${this.quantity * this.price} ₽</p>
                     </div>
                  </div>
                  <a href="#" class="del-btn" data-id="${this.id_product}">&times;</a>
               </div>`;
   }
}

const listContext = {
   ProductsList: ProductItem,
   Cart: CartItem
};

const cart = new Cart();
const list = new ProductsList(cart);