<template>
  <div class="catalog" :class="{ errorClass: errorClass }">
    <h2 class="catalog-error" v-if="noRESPONS">Что-то пошло не так =(</h2>
    <div class="catalog-body">
      <ProductItem
        v-for="(item, index) in PRODUCTS"
        :key="index"
        :PRODUCTS="item"
        :item="item"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "product-list",

  data() {
    return {
      noRESPONS: true,
      errorClass: true,
    };
  },
  components: {
    ProductItem,
  },

  methods: {
    ...mapActions(["GET_GOODS_FROM_API", "ADD_TO_CART","ggg"]),

    addToCart(data) {
      this.ADD_TO_CART(data);
    },


  },
  mounted() {
    this.GET_GOODS_FROM_API()
    .then((respons) => {
      if (respons.data) {
        this.noRESPONS = !this.noRESPONS;
        this.errorClass = !this.errorClass;
      }
    });

  },
  computed: {
    ...mapGetters(["PRODUCTS"]),
  },
};
</script>

<style lang="scss">
.catalog {
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  &-body {
    display: flex;
    justify-content: space-between;
    align-self: center;
    flex-wrap: wrap;
  }
  &-error {
    color: red;
    font-size: 60px;
  }
  &.errorClass {
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
}
</style>