const url = 'https://602c2a0730ba720017222bc0.mockapi.io/goods';

const app = new Vue({
    el: '#root',
    data: {
        goods: [],
        filteredGoods: [],
        cartGoods: [],
        searchLine: '',
        errorMSG: '',
        totalSum: 0,
        isVisibleCart: false,
    },
    methods: {

        getGoods() {
            fetch(`${url}`)
                .then(r => r.json())
                .then(r => {
                    this.goods = r;
                    this.filteredGoods = this.goods;
                })
                .catch((e) => {
                    this.errorMSG = e;
                })
        },
        serchItem() {

            this.filteredGoods = this.goods.filter(item => {
                const regexp = new RegExp(this.searchLine, 'i');
                const match = item.productName.match(regexp);
                return !!match;
            })

        },
        addToCart(id) {

            if (!this.cartGoods.find(i => i.id === id)) {
                const item = this.filteredGoods.find((el) => {
                    if (el.id === id) {
                        return true;
                    } else {
                        return false;
                    }
                });
                this.cartGoods.push(item);
            } else {
                this.filteredGoods.forEach(el => {
                    if (el.id === id) {
                        el.quantity++
                    }
                })
            }


        },


        deletItemCart(id) {
            const index = this.cartGoods.findIndex(i => i.id === id);
            if (index !== -1) {
                this.cartGoods.splice(index, 1);
            }
        },
        deletAllCart() {
            this.cartGoods = [];
        },


    },
    computed: {
        totalSumItem() {

        }

    },
    mounted() {
        this.getGoods();

    }

});