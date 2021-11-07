<template>
  <header class="base-header">
    <div class="header-content">
      <font-awesome-icon class="icon" :icon="['fas', 'book-open']" /> BibliTech
      <base-button @click.prevent="route_to('/')">Home</base-button>
      <base-button @click.prevent="route_to('/products')">Products</base-button>
      <base-button class="menu-deroulant">
        <a> Categories </a>
        <ul class="sous-menu" v-for="category in categories" :key="category" @click.prevent="route_to('/categories/'+category)">
          <li><a>{{category}}</a></li>
        </ul>
        </base-button>
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
  background-color: #42b983;
  padding: 1em;
  width: 100%;
  font-size: 25px;
  position: sticky;
  top: 0;
}
.header-content {
  display: flex;
  max-width: 54em;
  margin: auto;
  font-size: 27px;
}
.separator-header {
  flex-grow: 1;
}
.icon {
  margin-right: 0.5em;
}
:root{
  --hauteur-menu: 60px;
}

* {
  margin: 0px;
  padding: 0px;
}

.menu-deroulant > a:after{
  content: '❯';
  margin-left: 7px;
  display: inline-block;
}

.menu-deroulant:hover > a:after{
  animation: rotationFleche 0.2s linear forwards;
}

@keyframes rotationFleche {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(45deg);
  }
  100%{
    transform: rotate(90deg);
  }
}

.sous-menu {
  margin-bottom: var(--hauteur-menu);
  width: 100%;
  text-align: left;
  overflow: hidden;
  max-height: 0;
  border-radius: 2px;
}

.menu-deroulant:hover > .sous-menu {
  animation: apparitionSousMenu 1s forwards;
}

@keyframes apparitionSousMenu {
  0% {
    box-shadow: 0px 3px 3px 1px rgba(0,0,0,0);
  }
  30% {
    box-shadow: 0px 3px 3px 1px rgba(0,0,0,0.3);
  }
  100% {
    max-height: 15em;
    box-shadow: 0px 3px 3px 1px rgba(0,0,0,0.3);
  }
}

.sous-menu > li:hover {
  background-color: rgba(33, 105, 236, 0.3);
}

.sous-menu > li > a {
  align-items: center;
  display: flex;
  height: 40px;
  width: 100%;
}

.sous-menu > li:hover > a {
  color: white;
}
.menu-deroulant {
  padding-left: 5px;
  text-align: left;
}
</style>
