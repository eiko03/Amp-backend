<template>
  <v-app-bar
        app
        color="white"
        v-if="!$auth.isAuthenticated"
        outlined
        style="border-bottom: 1px solid gray!important"

  >
     <!-- <v-divider inset vertical></v-divider> -->

     <v-spacer></v-spacer>

     <!-- <v-toolbar-title class="heading-bar">{{ user }}'s Exclusive Content</v-toolbar-title> -->

     <v-spacer></v-spacer>


      <v-btn icon @click="$router.push('/login')">
          <v-icon>mdi-login-variant</v-icon>
      </v-btn>
  </v-app-bar>


<v-app-bar
      app
      flat
      v-else

>

   <v-spacer></v-spacer>

   <!-- <v-toolbar-title class="heading-bar">{{ user }}'s Exclusive Content</v-toolbar-title> -->

   <v-spacer></v-spacer>


    <v-btn icon>
        <v-icon>mdi-bell</v-icon>

    </v-btn>

     <v-divider class="mr-3" inset vertical></v-divider>

    <div class="text-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-x
    >
      <template v-slot:activator="{ on, attrs }">
        <v-avatar
           color="primary"
           size="45"
           rounded
           v-bind="attrs"
           v-on="on"
         ><img src="https://cdn.vuetifyjs.com/images/john.jpg">
       </v-avatar>
      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar round>
              <img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
              >
            </v-list-item-avatar>

            <v-list-item-content v-if="isFetched">
              <v-list-item-title class="text-h5">Hey {{ current.name }}!</v-list-item-title>
            </v-list-item-content>

          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-item>
            <v-btn
              block
              large
              elevation="0"
              to="/login"
            >Settings</v-btn>
          </v-list-item>

          <v-list-item>
            <v-btn
              block
              large
              elevation="0"
            >DMs</v-btn>
          </v-list-item>

          <v-list-item>
            <v-btn
              block
              large
              elevation="0"
              @click="$store.dispatch('auth/logout')"
            ><span style="color: red;">Logout</span></v-btn>

          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </div>

   <!-- <v-btn text v-text="'Sign In'"></v-btn>
   <v-btn text v-text="'Register'"></v-btn> -->
</v-app-bar>
</template>

<!-- <button @click="$store.dispatch('auth/logout')" class="animate__animated animate__fadeIn button-logout">Logout</button> -->


<script>
  export default {
    async fetch() {
      this.name = this.$auth.name.split(" ")[0]
      this.current = await this.$store.dispatch('user/getUser', this.$auth.id)
      this.isFetched = true
    },
    data: () => ({
      isFetched: false,
      collapseOnScroll: true,
      fav: true,
      menu: false,
      message: false,
      hints: true,
      user: "John",
      firstname: "Jim",
    }),
  }
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
}

.heading-bar {
  font-size: 30px!important;
  font-weight: bold;
  font-family: "Poppins-Regular"!important;
}
.button-back {
  position: absolute;
  left: 5%;

  padding: 12px 32px;
  font-size: 16px;
  font-family: "Poppins-Regular";
  background-color: white;
  outline: none;
  border: none;
  border-radius: 2px;
  font-weight: bold;
}

.button-logout {
  position: absolute;
  right: 5%;

  padding: 12px 32px;
  font-size: 16px;
  font-family: "Poppins-Regular";
  background-color: white;
  outline: none;
  border: none;
  border-radius: 2px;
  font-weight: bold;
}
.navbar {
    display: flex;
    background-color: #121212;
    justify-content: center;
    align-items: center;
    height: 5em;
}
h1{
    color:#F6803C;
    font-family: Poppins-Regular;
}

#profile {
  /* position: absolute; */
  float: right;

  border-radius: 10px;
  width: 3em;
  height: 3em;
  object-fit: cover;
}

header {
  border-bottom: 1px solid lightgray!important;
  background-color: white!important;
}


@media only screen and (max-width: 850px) {
  h1 {
    visibility: hidden;

  }
}
</style>
