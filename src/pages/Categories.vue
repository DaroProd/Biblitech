<template>
  <div class="container">
    <div class="header">
      <div class="body" v-for="item in computedItems" :key="item.title+item.price">
        <book-card :item="item" :updateCart="updateCart"></book-card>
      </div>
    </div>
  </div>

</template>

<script>
import BookCard from '@/components/BookCard.vue'
export default {
  name: 'Categories',
  props: ['dataset', 'updateCart'],
  data () {
    return {
      'collections': this.dataset
    }
  },
  components: {
    'book-card': BookCard
  },
  computed: {
    computedItems () {
      let productList = this.collections.filter((element) => {
        if (element.genre === this.$route.params.type) {
          return element
        }
      })
      return productList
    }
  }
}
</script>

<style scoped>
.body{
  display: inline-block;
  margin: 2em;
}
.body > * {
    border: 1px solid black;
}
.header{
  text-align: center;
}
</style>
