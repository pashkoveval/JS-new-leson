const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';



const getRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url) {
        resolve({ status: 'ok', data: 'ok!' });

      } else {
        alert('Ура я вроде сделал)))!!!')
        reject({ status: 'error', data: 'Error!' });
      }
    }, 1000);
  })
}

console.log(getRequest());

async function asyncFunc(getRequest) {
  const result = await getRequest(url);
}






class ProductList {
    constructor(container = cont) {
      this.container = container[0];
      this.goods = [];
      this.allProducts = [];
      this.getProducts().then((data) => {
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
      const blocks = document.querySelector('.basket');
      for (let product of this.goods) {
        const productObject = new ProductItem(product);
        this.allProducts.push(productObject);
        block.insertAdjacentHTML('beforeend', productObject.render());
      }
  
      for (let product of this.goods) {
        const productObject = new ProductItem(product);
        this.allProducts.push(productObject);
        blocks.insertAdjacentHTML('beforeend', productObject.render2());
      }
    }
  
  
  }
  
  class ProductItem {
  
    constructor(product, img = 'https://placehold.it/200x150') {
  
      this.product_name = product.product_name;
      this.price = product.price;
      this.id = product.id_product;
      this.img = img;
  
      const ideas = product.id_product;
  
      const basket = `<div class="basket-item" id="${this.id}" data-id="${this.id}">
          <p>Я смог сдлать только так</p>
              <div class="item1">
              <a href="#"></a><img class="img-basket" src="${this.img}" alt=""></a>
              <span>${this.product_name}</span>
              <span>${this.price}</span>
              <input type="number" id="numbers" min="1" max="100" value="1">
              <input class="remove-btn" type="button" id="x" value="x">
          </div>
      </div>`;
  
      const btnBasket = document.getElementById('btnBasket');
      const basketBox = document.getElementById('basketBox');
      btnBasket.onclick = function () {
        basketBox.classList.toggle('vis');
      };
  
      setTimeout(() => {
        const btnBuy = document.querySelector('.buy-btn');
        btnBuy.onclick = function () {
  
  
          const idid = document.getElementsByClassName('basket-item');
          const idData = idid.dataset;
          const idId = idid.id;
  
          if (idData === idId) {
            basketBox.insertAdjacentHTML('beforeend', basket);
          }
  
  
          document.getElementById('x').onclick = function () {
            document.getElementById(`${ideas}`).remove();
          };
        };
      }, 1);
  
  
  
  
  
  
    }
  
  
    render() {
  
      return `<div class="product-item" data-id="${this.id}" id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3 data-name="${this.product_name}">${this.product_name}</h3>
                    <p id="g6" data-price="${this.price}">${this.price} \u20bd</p>
                    <form action="#">
                    <button type="button" class="buy-btn" id="btnBuy" >Купить</button>
                    </form>
                </div>
              </div>`;
  
    }
  
    render2() {
      return `<div class="basket-item" id="${this.id}" data-id="${this.id}">
                   <p>Я смог сдлать только так</p>
                       <div class="item1">
                       <img class="img-basket" src="${this.img}" alt="">
                       <span>${this.product_name}</span>
                       <span>${this.price}</span>
                       <input type="number" id="numbers" min="1" max="100" value="1">
                       <input class="remove-btn" type="button" id="x" value="x">
                   </div>
               </div>`;
    }
  
  
  
  }
  
  const list = new ProductList;
  
  