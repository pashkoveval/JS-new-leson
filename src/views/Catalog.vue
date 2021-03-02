<template>
  <div class="catalog">
      <ProductList/>
  </div>
</template>

<script>
import ProductList from "../components/ProductList.vue";
export default {
  name: "catalog",
  components: {
    ProductList,
  },
};
</script>

<style lang="scss" scoped>
</style>