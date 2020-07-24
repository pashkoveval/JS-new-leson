const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';






// Переделать в ДЗ (не на fetch!!! а на Promise)
// let getRequest = (url, cb) => {
//   let xhr = new XMLHttpRequest();
//   xhr.open('GET', url, true);
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4) {
//       if (xhr.status !== 200) {
//         console.log('Error');
//       } else {
//         cb(xhr.responseText);
//       }
//     }
//   };
//   xhr.send();

// };



// const getRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url) {
//         resolve({ status: 'ok', data: 'ok!' });

//       } else {
//         alert('Ура я вроде сделал)))!!!')
//         reject({ status: 'error', data: 'Error!' });
//       }
//     }, 1000);
//   })
// }

// console.log(getRequest());

// async function asyncFunc(getRequest) {
//   const result = await getRequest(url);
// }






class ProductList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this.getProducts()
      .then((data) => {
        this.goods = [...data];
        this.render();
      });

  }



  getProducts() {
    return fetch(`${API}/catalogData.json`)
      .then(result => result.json())
      .catch(error => {
        console.log('Error!', error);
      });
  }



  render() {
    const block = document.querySelector(this.container);
    for (let product of this.goods) {
      const productObject = new ProductItem(product);
      this.allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }



}

class ProductItem {
  constructor(product, img = 'https://placehold.it/200x150') {
    this.product_name = product.product_name;
    this.price = product.price;
    this.id = product.id_product;
    this.img = img;

    this.openBasket = document.getElementById('bbt').onclick = function () {
      document.getElementById('bas').classList.toggle('vis');

      this.pushItem = document.getElementById('btnBuy').onclick = function () {
        document.getElementById('bas').insertAdjacentHTML('beforeEnd', basket);
  
      };

    };

    const basket = `
    <div class="basket-item" id="${this.id}" data-id="${this.id}">
        <p>Я смог сдлать только так</p>
            <div class="item1">
            <span>${this.product_name}</span>
            <span>${this.price}</span>
            <input type="number" name="" id="numbers" name="num" min="1" max="10" value="1">
            <input class="remove-btn" type="button" value="x" id="x">
        </div>
    </div>`;





  }


  render() {

    return `<div class="product-item" data-id="${this.id}" id="item">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3 data-name="${this.product_name}">${this.product_name}</h3>
                  <p id="g6" data-price="${this.price}">${this.price} \u20bd</p>
                  <button type="button" class="buy-btn" id="btnBuy">Купить</button>
              </div>
            </div>`;

  }



}

const list = new ProductList;

class Basket {
  constructor() {

  }
}