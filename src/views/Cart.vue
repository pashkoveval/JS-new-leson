<template>
  <div class="cart">
    <CartList />
  </div>
</template>

<script>
import CartList from "../components/CartList.vue";
import { mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    CartList,
  },
  props: {},
  methods: {},
  computed: {
    ...mapGetters(["CART"]),
  },
};
</script>

<style scoped lang="scss">
.cart {
  margin-top: 50px;
}
</style>