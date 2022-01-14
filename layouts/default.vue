// default.vue
<template>
  <div>
  <div v-if="$route.path == '/custompage'">
    <v-app style="background: #FAFAFA;"">
      <CustomSideBar app />
      <TopBar app />
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    </v-app>
  </div>
  <div v-else-if="$route.path == '/welcome'">
    <v-app style="background: #FAFAFA;"">
    <v-main>
      <v-container fluid class="pa-0">
        <nuxt />
      </v-container>
    </v-main>
    </v-app>
  </div>
  <div v-else-if="$auth.isAuthenticated">
    <v-app style="background: #FAFAFA;"">
      <SideBar app />
      <TopBar app />
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    </v-app>
  </div>
  <div v-else>
    <v-app style="background: #FAFAFA;"">
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    </v-app>
  </div>
  </div>
</template>
<script>
import SideBar from "@/components/SideBar.vue"
import CustomSideBar from "@/components/CustomSideBar.vue"
import TopBar from "@/components/TopBar.vue"
import Unauth from "@/components/Unauth.vue"

export default {
    components: {
        SideBar,
        CustomSideBar,
        Unauth,
        TopBar
    }
}
</script>

<style>
  html, body {
    margin: 0;
  }

  </style>
