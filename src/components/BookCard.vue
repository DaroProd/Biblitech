<template>
    <div class="container">
        <nav class="card-text">
            <h1> {{item.Title }}</h1>
            <p>Auteur: {{ item.Author}}</p>
            <hr>
            <p>Prix: ${{item.Price}}</p>
        </nav>
        <hr>
        <base-button @click.prevent="updateCart(item)"><font-awesome-icon class="icon" :icon="['fas', 'cart-plus']" /></base-button>
        <base-button @click="details(item.Title)"><font-awesome-icon class="icon" :icon="['fas', 'list']" /></base-button>
    </div>
</template>

<script>
import BaseButton from './BaseButton.vue'
export default {
    name: 'BookCard',
    components: {BaseButton},
    props: ['item', 'updateCart'],
    methods: {
        details(title) {
            this.$router.push('/products/' + title)
        }
    }
}
</script>
