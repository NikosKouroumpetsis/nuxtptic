<template>
  <div class="card flex items-center gap-8">
    <nuxt-img :src="product.img" :alt="product.title" />
    <div>
      <p class="text-2xl text-secondary">{{ product.title }}</p>
      <p class="text-xl text-gray-50">{{ product.description }}</p>
      <p class="text-lg text-secondary my-3">
        {{ product.price }} Silver coins
      </p>
      <button class="btn" @click="addToBasket()" :disabled="isPending">
        <span v-show="!isPending">Add to Basket</span>
        <span v-show="isPending">Adding ... </span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "~~/stores/cartStore";

const cartStore = useCartStore();

const isPending = ref(false);

const addToBasket = async () => {
  isPending.value = true;
  await cartStore.addToCart(product);
  setTimeout(() => {
    isPending.value = false;
  }, 500);
};

const { product } = defineProps(["product"]);
</script>

<style scoped></style>
