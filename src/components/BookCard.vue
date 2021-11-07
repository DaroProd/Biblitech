<template>
    <div class="container">
        <nav class="card-text">
            <h1> {{item.title }}</h1>
            <img v-bind:src="item.thumbnailUrl" width="100" height="100">
            <p>Auteur: {{ item.authors}}</p>
            <hr>
            <p>Prix: ${{item.price}}</p>
        </nav>
        <hr>
        <base-button @click.prevent="updateCart(item)"><font-awesome-icon class="icon" :icon="['fas', 'cart-plus']" /></base-button>
        <base-button @click="details(item.title)"><font-awesome-icon class="icon" :icon="['fas', 'list']" /></base-button>
    </div>
</template>

<script>
import BaseButton from './BaseButton.vue'
export default {
    name: 'BookCard',
    components: {BaseButton},
    props: ['item', 'updateCart'],
    methods: {
        details(Title) {
            this.$router.push('/products/' + Title)
        }
    }
}
</script>
<style scoped>

</style>