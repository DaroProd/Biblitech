<template>
  <div class="container">
    <div class="header">
      <div v-for="(item) in collections" :key="item.Title + item.Price">
        <book-card :item="item" :updateCart="updateCart"></book-card>
      </div>
    </div>
  </div>
</template>

<script>
import BookCard from '@/components/BookCard.vue'

export default {
  name: 'Products',
  props: ['dataset', 'updateCart'],
  data () {
    return {
      collections: this.dataset
    }
  },
  components: {
    'book-card': BookCard
  }
}
</script>

<style scoped>

</style>
