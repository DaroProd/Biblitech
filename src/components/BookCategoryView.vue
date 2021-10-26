<template>
    <!-- Représentation des livres par catégorie -->
    <div class="container">
        <div class="header">
            {{ product_category}}
            <div class="separator-header"/>
            <base-button v-on:click="seeAll(product_category)">See all</base-button>
        </div>
        <div class="body" v-for="product in products" :key="product.Title">
            <book-card :item="product" :updateCart="updateCart"></book-card>
        </div>
    </div>
</template>

<script>
import BookCard from './BookCard.vue'
import BaseButton from './BaseButton.vue'

export default {
  name: 'BookCategoryView',
  components: {
    'book-card': BookCard,
    BaseButton
  },
  props: ['products', 'product_category', 'updateCart'],
  methods: {
    seeAll (category) {
      this.$router.push('/categories/' + category)
    }
  }
}
</script>
