<template>
<div v-else>
  <v-row class="mx-5 mt-2 justify-space-between">
    <h1>Settings</h1>
  </v-row>

  <v-row class="mx-5 mt-10">
    You're logged in as {{ $auth.email }}.
    <button
      @click="$store.dispatch('auth/logout')"
      class="button--green"
    ><b>Logout</b></button>
  </v-row>

  <v-row class="mx-5 mt-10 justify-space-between flex-wrap" v-if="isFetched">
    <v-card class="shrink rounded-lg pa-10" style="width: 30%; text-align: center; box-shadow: 0px 0px 24px 4px rgba(0,0,0,0.09);">
      <h1>Update Your Account</h1>
      <form @submit.prevent="update" class="d-flex flex-column align-center shrink">
        <input type="text" v-model="changeForm.name" :placeholder="current.name" class="form-control mt-8 lreg-input" />
        <input
          type="password"
          v-model="changeForm.password"
          placeholder="●●●●●●●"
          class="form-control mt-8 lreg-input"
        />
        <button type="submit" class="button-submit mt-8 mb-8">Update Details</button>
        </form>
      </v-card>
      <v-card class="shrink rounded-lg pa-10" style="width: 30%; text-align: center; box-shadow: 0px 0px 24px 4px rgba(0,0,0,0.09);">
        <stripe-checkout
        ref="checkoutRef"
        mode="subscription"
        :pk="pk"
        :line-items="lineItems"
        :success-url="successUrl"
        :cancel-url="cancelUrl"
        />
        <button @click="checkout">Checkout</button>

      </v-card>

      <v-card class="shrink rounded-lg pa-10" style="width: 30%; text-align: center; box-shadow: 0px 0px 24px 4px rgba(0,0,0,0.09);">
        Test content

      </v-card>

  </v-row>

  <v-row class="mx-5 mt-10 justify-space-between flex-wrap" v-if="!isFetched">
    <v-card class="shrink rounded-lg pa-0" style="width: 30%; text-align: center; box-shadow: 0px 0px 24px 4px rgba(0,0,0,0.09);">
      <v-skeleton-loader
        type="article@3"
        v-if="!isFetched"
      ></v-skeleton-loader>

    </v-card>

    <v-card class="shrink rounded-lg pa-0" style="width: 30%; text-align: center; box-shadow: 0px 0px 24px 4px rgba(0,0,0,0.09);">
      <v-skeleton-loader
        type="article@3"
        v-if="!isFetched"
      ></v-skeleton-loader>

    </v-card>

    <v-card class="shrink rounded-lg pa-0" style="width: 30%; text-align: center; box-shadow: 0px 0px 24px 4px rgba(0,0,0,0.09);">
      <v-skeleton-loader
        type="article@3"
        v-if="!isFetched"
      ></v-skeleton-loader>

    </v-card>
  </v-row>
</div>
</template>
<script>

  const stripe = require('stripe')('sk_test_51JqMOUKsLLDrN7jINKvTmcNAHcH5ija99jCYOy4m9EYmjKRdwr1dJdPQdCOtWH47CPoaJU4VwlrmyBjeEQ43VkbV006I09H9I4');
  export default {

    async fetch() {
      this.pk = process.env.STRIPE_PK
      this.current = await this.$store.dispatch('user/getUser', this.$auth.id)
      console.log(this.current)
      this.isFetched = true
    },
    data: () => ({
      isFetched: false,
      initPrice: 'price_1JsT5lKsLLDrN7jIuAe6m8Zh',
      changeForm: {
        name: '',
        password: ''
      },
      lineItems: [
        {
          price: 'price_1JsT5lKsLLDrN7jIuAe6m8Zh',
          quantity: 1,
        },
      ],
      successUrl: 'http://localhost:3000/settings',
      cancelUrl: 'http://localhost:3000/settings',
    }),
    methods: {
      async checkout () {
        console.log(stripe)

        this.$refs.checkoutRef.redirectToCheckout();


        const subscription = await stripe.subscriptions.create({
          customer: 'cus_KYNjdctP2SJXlC',
          items: [
            {price: 'price_1JsT5lKsLLDrN7jIuAe6m8Zh'},
          ],
        });


        console.log(product)
      },
      async update() {
        try {
          const changes = { id: this.$auth.id }

          if(this.$auth.name != this.changeForm.name && this.changeForm.name != '') {
            Object.assign(changes, { name: this.changeForm.name })
          }

          if(this.changeForm.password != '') {
            Object.assign(changes, { password: this.changeForm.password })
          }

          console.log(changes)
          await this.$store.dispatch('api/updateUser', changes)
          await this.$store.dispatch('auth/updateUser', this.changeForm)
          this.$router.push('/settings')
        } catch (error) {
          console.log({ error })
        }
      }
    }

  }

</script>
