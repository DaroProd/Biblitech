<template>
    <!-- Représentation des livres par catégorie -->
    <div class="container">
        <div class="header">
            <p>{{ product_category}}</p>
          </div>
          <div class="body" v-for="product in products" :key="product.title">
            <book-card :item="product" :updateCart="updateCart"></book-card>
        </div>
    </div>
</template>

<script>
import BookCard from './BookCard.vue'

export default {
  name: 'BookCategoryView',
  components: {
    'book-card': BookCard
  },
  props: ['products', 'product_category', 'updateCart']
}
</script>

<style scoped>
.header{
  display: flex;
  font-size: 18px;
}

.separator-header{
  flex-grow: 1;
  margin-left: 5em;
  margin-top: 0.7em;
}
.body{
  display: inline-block;
  margin-right: 2em;
}
.body > * {
    border: 1px solid black;
}
.container{
  text-align: center;
}
p{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 20px;
}
</style>