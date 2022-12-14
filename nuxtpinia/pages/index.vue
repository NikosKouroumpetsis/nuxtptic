<template>
  <div>
    <h2 class="text-white text-2xl text-center my-8">All Products</h2>
  </div>
  <div class="grid grid-cols-2 gap-7">
    <div v-if="pending">
      <div class="mx-auto bg-white">Loading products....</div>
    </div>
    <div v-else v-for="product in products" :key="product.id">
      <ProductCard :product="product" />
    </div>
  </div>
</template>

<script setup>
//  fetch products

// const { data: products } = await useFetch("http://localhost:4000/products");
const { pending, data: products } = await useLazyAsyncData("products", () =>
  $fetch("http://localhost:4000/products")
);
</script>

<style scoped></style>
