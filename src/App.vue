<template>
  <div id="app">
    <base-header :categories="categories" :purchase="totalPrice"></base-header>
    <router-view :dataset="collections" :updateCart="addToCart" :cart="cart" :purchase="totalPrice" />
  </div>
</template>

<script>
import BaseHeader from './components/BaseHeader.vue'
import Data from './assets/books.json'

export default {
  name: 'App',
  data () {
    return {
      'collections': Data.collection,
      'categories': [],
      'cart': []
    }
  },
  computed: {
    totalPrice () {
      let total = 0
      for (let i = 0; i < this.cart.length; i++) {
        total += Number(this.cart[i].price)
      }
      return total
    }
  },
  components: {
    'base-header': BaseHeader
  },
  created () {
    this.categories = this.getCategories()
  },
  methods: {
    getCategories: function () {
      let listedCategories = []
      this.collections.filter((item) => {
        if (!listedCategories.includes(item.genre)) {
          listedCategories.push(item.genre)
        }
      })
      return listedCategories
    },
    addToCart: function (item) {
      this.cart.push(item)
    }
  }
}
</script>

<style>

</style>

