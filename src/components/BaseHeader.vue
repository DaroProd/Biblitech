<template>
  <header class="base-header">
    <div class="header-content">
      <div class="logo">
        <font-awesome-icon class="icon" :icon="['fas', 'book-open']" /> BibliTech
      </div>
      <base-button @click.prevent="route_to('/')">
        <font-awesome-icon class="icon" :icon="['fas', 'home']" /> Home
      </base-button>
      <base-button @click.prevent="route_to('/products')">Products</base-button>
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
  background-color: #7042b9;
  padding: 1em;
}
.header-content {
  display: flex;
  max-width: 70em;
  margin: auto;
}
.logo {
  font-size: 25px;
}
.separator-header {
  flex-grow: 1;
}
.icon {
  margin-right: 0.5em;
}
</style>
