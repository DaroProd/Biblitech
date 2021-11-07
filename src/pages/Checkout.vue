<template>
    <div class="container">
        <div class="left-part">
            <p v-if="!purchase || purchase.length === 0 ">No Books in the Cart!</p>
            <div v-for="item in cartItems" :key="item.Item.title">
                <div class="col-slide-3">
                    <!-- Put the Image of the book here -->
                </div>
                <div class="col-slide-9">
                    <div>
                        <h4>{{item.Item.title}}</h4>
                        <p>Author: {{item.Item.authors}}</p>
                        <p>Amount: {{item.amount}}</p>
                        <p>Price: {{item.Item.price}}</p>
                    </div>
                </div>
            </div>
            <hr>
        </div>
        <div class="right-part">
            <p>Total Price:</p>
            <h3>${{purchase}}</h3>
            <hr>
            <base-button>Place Order</base-button>
        </div>
    </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue"

export default {
    name: 'Checkout',
    props: ['cart', 'purchase'],
    computed: {
        cartItems () {
            return this.computeCart()
        }
    },
      methods: {
    computeCart: function () {
      let newCart = []
      this.cart.forEach((item) => {
        let index = newCart.findIndex((element) => {
          return element.Item === item
        })
        if (index >= 0) {
          newCart[index].amount += 1
        } else {
          newCart.push({
            Item: item,
            amount: 1
          })
        }
      })
      return newCart
    }
  },
    components: {BaseButton}
}
</script>

<style scoped>

</style>
