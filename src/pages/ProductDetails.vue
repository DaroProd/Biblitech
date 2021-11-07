<template>
    <div class="container">
        <div class="first">
            <!-- Put the image here -->
        </div>
        <div class="second">
            <h3>{{product.title}}</h3>
            <hr>
            <img v-bind:src="product.thumbnailUrl">
            <p>Author: {{product.authors}}</p>
            <p>Pages: {{product.pageCount}}</p>
            <p>Status: {{product.status}}</p>
            <p>Genre: {{product.genre}}</p>
            <hr>
            <p>Price: ${{product.price}}</p>
            <hr>
            <p> Description : {{product.longDescription}} </p>
            <hr>
            <base-button @click.prevent="updateCart(product)">Add to Cart</base-button>
        </div>
    </div>
</template>

<script>
import Data from '@/assets/books.json'
import BaseButton from '@/components/BaseButton.vue'

export default {
    name: 'ProductDetails',
    props:['updateCart'],
    data () {
        return {
            collection: Data.collection,
            product: []
        }
    }, 
    created () {
        this.product = this.collection.find((item) => {
            return item.title === this.$route.params.productID
        })
    },
    methods: {
        loadingImg(){
            return this.product.thumbnailUrl
        }
    },
  components: { BaseButton }
}
</script>

<style scoped>

</style>