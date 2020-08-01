const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    catalogUrl: '/catalogData.json',
    products: [],
    cart: [],
    imgCatalog: 'https://placehold.it/200x150',
    vis: true,
    searchLine: '',
  },
  methods: {
    getJson(url) {
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          console.log(error);
        })
    },
    addProduct(product) {
      const indexOfCart = this._getIndexOfCart(product);
      if (indexOfCart === -1) {
        this.cart.push({ id: product.id_product, name: product.product_name, price: product.price, quantity: 1 });
      } else {
        this.cart[indexOfCart].quantity++;
      }
    },

    _getIndexOfCart(product) {
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id === product.id_product) {
          return i;
        }
      }
      return -1;
    },

    getTotalPrice() {
      let totalPrice = 0;
      for (let product of this.cart) {
        totalPrice += product.price * product.quantity;
      }
      return totalPrice;
    },

    removeProductOfCart(product) {
      this.cart.splice(this.cart.indexOf(product), 1);
    },


    filterGoods(product) {

      const regExp = new RegExp(this.searchLine, "i");
      document.querySelectorAll('.product-item').forEach(el => {
        if (regExp.test(el.querySelector("h3").textContent)) {
          el.classList.remove("invisible");
        } else {
          el.classList.add("invisible");
        }
      });
    },
  },

  beforeCreate() {

  },
  created() {
    this.getJson(`${API + this.catalogUrl}`)
      .then(data => {
        for (let el of data) {
          this.products.push(el);
        }
      });

  },
  beforeMount() {

  },
  mounted() {

  },
  beforeUpdate() {

  },
  updated() {

  },
  beforeDestroy() {

  },
  destroyed() {

  },
});
