<template>
  <div class="container">
    <div class="header">
      <div v-for="item in computedItems" :key="item.Title+item.Price">
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
        if (element.Genre === this.$route.params.type) {
          return element
        }
      })
      return productList
    }
  }
}
</script>

<style scoped>

</style>
