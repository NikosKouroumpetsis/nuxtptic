<template>
  <div class="m-8">
    <header class="wrapper flex justify-between">
      <NuxtLink to="/">
        <h1 class="text-secondary">Adventure Store</h1>
      </NuxtLink>

      <NuxtLink to="/cart">
        <Icon
          name="material-symbols:shopping-bag-outline"
          class="text-secondary text-5xl"
        />
        <span class="bg-white py-1 px-2 rounded-2xl font-bold badge">
          {{ cartStore.numberOfProducts }}
        </span>
      </NuxtLink>
    </header>

    <div class="wrapper font-sans">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "~~/stores/cartStore";

const cartStore = useCartStore();

cartStore.getCart();
</script>

<style scoped>
.badge {
  position: relative;
  left: -15px;
}
</style>
