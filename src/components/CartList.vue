<template>
  <div class="cart-body">
    <div class="cart-body-items">
      <div v-if="!CART.length" class="empty">
        <h2>Cart is empty</h2>
        <router-link class="go-shop" to="/">Go to shoping ?</router-link>
      </div>
      <CartItem
        v-for="(item, index) in CART"
        :CART="item"
        :key="index"
        :item="item"
        @deleteFromCart="deleteFromCart"
      />
    </div>
    <ShippingAdresCart />
  </div>
</template>

<script>
import CartItem from "../components/CartItem.vue";
import ShippingAdresCart from "../components/ShippingAdresCart.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "cart-list",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["DELET_FROM_CART"]),
    deleteFromCart(index) {
      this.DELET_FROM_CART(index);
    },
  },
  components: {
    CartItem,
    ShippingAdresCart,
  },
  computed: {
    ...mapGetters(["CART"]),
  },
};
</script>

<style lang="scss">
.cart {
  &-body {
    display: flex;
    justify-content: space-between;
    max-width: 1120px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
    &-items {
      margin-right: 30px;
      width: 100%;
      max-height: 600px;
      overflow-y: scroll;
    }
  }
  .empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 60px;
    color: $pink;
    .go-shop {
      margin-top: 30px;
      text-decoration: none;
      color: #000;
      border: 1px solid #111;
      padding: 5px 10px;
      transition: all 0.3s;
      &:hover {
        border-color: $pink;
        color: $pink;
      }
    }
  }
}
</style>