<template>
  <div class="max-w-md mx-auto pt-6">
    <div>


      <!-- Unauthenticated -->
      <div v-if="!$auth.isAuthenticated">

        <div class="d-flex align-center justify-center" style="height: 100vh;">
        <v-card class="shrink rounded-lg pa-10" style="width: 30%; text-align: center; height: 60vh; box-shadow: 0px 0px 24px 4px rgba(0,0,0,0.09);">
          <h1>Create Account</h1>
          <form v-if="step === steps.register" @submit.prevent="register" class="d-flex flex-column align-center shrink">
            <input v-model="registerForm.name" type="text" placeholder="John Doe" class="form-control mt-8 lreg-input" />
            <input v-model="registerForm.email" type="email" placeholder="user@example.com" class="form-control mt-8 lreg-input" />
            <input
              v-model="registerForm.password"
              type="password"
              placeholder="●●●●●●●"
              class="form-control mt-8 lreg-input"
            />
            <button type="submit" class="button-submit mt-8 mb-8">Register</button>
            </form>



          <!-- Confirm Registration -->

              <form v-if="step != steps.register" @submit.prevent="confirm" class="d-flex flex-column align-center shrink">
                <input v-model="confirmForm.email" type="email" placeholder="Email" class="form-control mt-8 lreg-input" style="display: none;"/>
                <p class="above-input mt-15">Registration Code</p>
                <input v-model="confirmForm.code" placeholder="●●●●●●" class="form-control lreg-input" />
                <button type="submit" class="button-submit mb-8 mt-8">Confirm</button>

              </form>

              <nuxt-link to="/login" style="text-decoration: none; color: gray">Already have an account? <span style="text-decoration: underline; color: #232323">Login</span></nuxt-link>





        </v-card>
        </div>
        <!-- Register -->

      </div>

      <!-- Authenticated -->
      <div v-else>
        You're logged in as {{ $auth.email }}.
        <button
          @click="$store.dispatch('auth/logout')"
          class="button--green"
        >Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
const steps = {
  register: 'REGISTER',
  confirm: 'CONFIRM'
}
export default {
  data: () => ({
    steps: { ...steps },
    step: steps.register,
    registerForm: {
      email: '',
      password: '',
      name: ''
    },
    confirmForm: {
      email: '',
      code: ''
    }
  }),
  methods: {
    async register() {
      try {
        await this.$store.dispatch('auth/register', this.registerForm)
        this.confirmForm.email = this.registerForm.email
        this.step = this.steps.confirm
      } catch (error) {
        console.log({ error })
      }
    },
    async confirm() {
      try {
        await this.$store.dispatch('auth/confirmRegistration', this.confirmForm)
        await this.$store.dispatch('auth/login', this.registerForm)
        this.$router.push('/')
      } catch (error) {
        console.log({ error })
      }
    }
  }
}
</script>
<style>
  *{box-sizing:border-box;}
  .lreg-input {
    padding: 10px 20px;
    border: 1.5px solid lightgray;
    border-radius: 15px;
    width: 100%;
  }

  .button-submit {
    padding: 10px 20px;
    background-color: #4285F4;
    color: white;
    border-radius: 15px;
    width: 100%;
  }

</style>

<!-- <div id="main-container">
<div class="left-container">
  <div class="login-form">

<h1 class="mb-3">Register</h1>
<form v-if="step === steps.register" @submit.prevent="register">
  <p class="above-input">Email</p>
  <input v-model="registerForm.email" type="email" placeholder="user@example.com" class="form-control" />
  <p class="above-input">Password</p>
  <input
    v-model="registerForm.password"
    type="password"
    placeholder="●●●●●●●"
    class="form-control"
  />
  <button type="submit" class="button--green">Register</button>
</form>





    <form v-if="step != steps.register" @submit.prevent="confirm">
      <input v-model="confirmForm.email" type="email" placeholder="Email" class="form-control" style="display: none;"/>
      <p class="above-input">Registration Code</p>
      <input v-model="confirmForm.code" placeholder="●●●●●●" class="form-control" />
      <button type="submit" class="button--green">Confirm</button>
    </form>


<p class="register-text">Have an account? <nuxt-link to="/login">Login</nuxt-link></p>

</div>
</div>
</div> -->
