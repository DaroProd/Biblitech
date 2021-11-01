<template>
  <header class="base-header">
    <div class="header-content">
      <font-awesome-icon class="icon" :icon="['fas', 'book-open']" /> BibliTech
      <base-button @click.prevent="route_to('/')">Home</base-button>
      <base-button @click.prevent="route_to('/products')">Products</base-button>
      <!-- <base-button v-for="category in categories" :key="category" @click.prevent="route_to('/categories/'+category)">Category</base-button> -->
      <div class="separator-header" />
      <base-button @click="checkout">Checkout</base-button>
    </div>
  </header>
</template>

<script>
import BaseButton from './BaseButton.vue'

export default {
  name: 'BaseHeader',
  components: {BaseButton},
  props: ['categories', 'purchase'],
  methods: {
    checkout () {
      this.$router.push('/checkout')
    },
    route_to (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
.base-header {
  background-color: #42b983;
  padding: 1em;
}
.header-content {
  display: flex;
  max-width: 70em;
  margin: auto;
}
.separator-header {
  flex-grow: 1;
}
.icon {
  margin-right: 0.5em;
}
</style>
