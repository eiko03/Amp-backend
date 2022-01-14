<template>
  <v-navigation-drawer permanent app>
      <v-img
      src="https://i2.wp.com/subscape.co/wp-content/uploads/2021/10/logo-subscape-transparent-3.png?w=1100&ssl=1"
      max-width="180"
      class="mx-3 my-2"
      >
      </v-img>
        <!-- <v-divider></v-divider> -->

        <v-list
        flat
        >
          <v-list-item-group
            v-model="selectedItem"
            color="primary"
          >
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :to="item.url"
              class="px-5 py-1"
              link

            >
              <v-list-item-icon class="mr-4">
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>

              <v-list-item-content >
                <v-list-item-title class="text-h6" v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
</template>

<script>
  export default {
    data: () => ({
      selectedItem: 0,
      items: [
        { text: 'Dashboard', icon: 'mdi-folder',url: '/' },
        { text: 'My Content', icon: 'mdi-animation-play', url: '/content' },
        { text: 'My Fans', icon: 'mdi-account-multiple', url: '/subscribers' },
        { text: 'Donations', icon: 'mdi-heart', url: '/donations' },
        { text: 'My Custom Page', icon: 'mdi-page-layout-header-footer', url: '/custompage' },
        { text: 'Login', icon: 'mdi-lock', url: '/login' },
        { text: 'Settings', icon: 'mdi-cog', url: '/settings' },

      ],
      fname: 'John',
    }),
  }
</script>

<style>
.v-list-item--active {
  border-left: 4px solid #7fd9fd!important;
  color: #7fd9fd!important;
}

</style>
