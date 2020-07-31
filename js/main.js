const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    catalogUrl: '/catalogData.json',
    products: [],
    basketProducts: [],
    imgCatalog: 'https://placehold.it/200x150',
    vis: true,
    searchLine: '',
    quantity: 1,
    filtered: [],
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
      console.log(product);
      this.getJson(`${API + this.catalogUrl}`)
      .then(data => {
        for (let el of data) {
          this.basketProducts.push(el);
        }
      });
      console.log(this.basketProducts);
      
    },

    clearBasket(basketProducts) {
      this.basketProducts = [];
      console.log(basketProducts);
    },

    filterGoods() {
      console.log(this.searchLine);

    },


  },
  computed: {

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
