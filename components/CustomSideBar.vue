<template>
  <v-navigation-drawer permanent app>

        <!-- <v-divider></v-divider> -->

        <v-list
        flat
        dense
        >
          <v-list-item-group
            v-model="selectedItem"
            color="primary"
          >
            <v-list-item
              to="/"
              class="px-5 py-1"
              link

            >
              <v-list-item-icon class="mr-4">
                <v-icon color="black">mdi-arrow-left</v-icon>
              </v-list-item-icon>

              <v-list-item-content >
                <v-list-item-title class="text-h6">Back Home</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <v-divider></v-divider>

        <v-row class="d-flex px-1 py-2 ma-0 align-center justify-center" v-if="isFetched">
        <v-form @submit.prevent="updatePage" class="pa-0" id="mainForm" style="width: 90%">
          <v-card outlined class="px-2 pt-1 pb-0 mb-3 rounded-l shadow">
            <small style="color: grey;">Primary Color</small>
            <v-color-picker
              dot-size="25"
              mode="hexa"
              swatches-max-height="200"
              class="mt-1"
              v-model="form.joinBtnColor"
            ></v-color-picker>

          </v-card>

          <v-card outlined class="pa-2 mb-3 rounded-l shadow">
          <v-file-input
            v-model="form.header"
            label="Header Image"
            hide-details
            outlined
            dense
          ></v-file-input>
          </v-card>

          <v-card outlined class="pa-2 mb-3 rounded-l shadow">
          <v-file-input
            v-model="form.profile"
            label="Profile Photo"
            hide-details
            outlined
            dense
          ></v-file-input>
          </v-card>

          <v-card outlined class="px-2 pt-2 pb-3 mb-3 rounded-l shadow">
          <v-text-field hide-details label="Heading Text" v-model="form.headingText"></v-text-field>
          </v-card>

          <v-card outlined class="px-2 pt-2 pb-3 mb-3 rounded-l shadow">
          <v-textarea hide-details label="Subheading Text" v-model="form.subheadingText"></v-textarea>
          </v-card>

          <v-card outlined class="pa-2 mb-3 rounded-l shadow">
          <v-file-input
            v-model="form.whyJoinBg"
            label="Why Us Background"
            hide-details
            outlined
            dense
          ></v-file-input>
          </v-card>

          <v-btn style="display: none;" id="subBtn" @click="updatePage"></v-btn>

        </v-form>



        </v-row>

        <template v-slot:append>
        <div class="pa-2">
          <v-btn block depressed color="success" @click="submitForm" class="px-4 py-2">Save (Update Preview)</v-btn>
        </div>
      </template>
      </v-navigation-drawer>
</template>

<script>
  export default {
    async fetch() {
      this.pages = await this.$store.dispatch('api/listCustomPages', this.$auth.id)
      this.form.headingText = this.pages[0].headingText
      this.form.subheadingText = this.pages[0].subheadingText
      this.form.header = this.pages[0].header
      this.form.profile = this.pages[0].profile
      this.form.whyJoinBg = this.pages[0].whyJoinBg

      this.pages[0].header = await this.$store.dispatch('api/getImage', this.form.header)
      this.pages[0].profile = await this.$store.dispatch('api/getImage', this.form.profile)
      this.pages[0].whyJoinBg = await this.$store.dispatch('api/getImage', this.form.whyJoinBg)

      console.log("Header")
      console.log(this.form.header)


      this.id = this.pages[0].id
      this.isFetched = true

      console.log(this.pages[0])
    },
    data: () => ({
      id: '',
      isFetched: false,
      pages: [],
      selectedItem: 0,
      form: {
        header: '',
        profile: '',
        headingText: '',
        subheadingText: '',
        joinBtnColor: '',
        whyJoinBg: ''
      },
      items: [
        { text: 'Dashboard', icon: 'mdi-folder',url: '/' },
        { text: 'My Content', icon: 'mdi-animation-play', url: '/content' },
        { text: 'My Fans', icon: 'mdi-account-multiple', url: '/subscribers' },
        { text: 'Donations', icon: 'mdi-heart', url: '/donations' },
        { text: 'Login', icon: 'mdi-lock', url: '/login' },
        { text: 'Settings', icon: 'mdi-cog', url: '/settings' },

      ],
    }),
    methods: {
      async createPage() {
        try {
          const page = await this.$store.dispatch(
            'api/createCustomPage',
            this.getPayloadCreate()
          )
          this.$router.push('/custompage')

        } catch (error) {
          console.log({ error })
        }
        // console.log("Working!")
      },
      async updatePage() {
        const newPage = await this.$store.dispatch('api/updateCustomPage', this.getPayloadUpdate())
        this.$router.push('/custompage')
        this.pages = await this.$store.dispatch('api/listCustomPages', this.$auth.id)

        this.pages[0].header = await this.$store.dispatch('api/getImage', this.form.header)
        this.pages[0].profile = await this.$store.dispatch('api/getImage', this.form.profile)
        this.pages[0].whyJoinBg = await this.$store.dispatch('api/getImage', this.form.whyJoinBg)

        return newPage
      },
      async getPages() {
        const page = await this.$store.dispatch('api/listCustomPages', this.$auth.id)
        console.log(page)
      },
      getPayloadUpdate() {
        return {
          ...this.form,
          id: this.id,
          authorId: this.$auth.id,
          createdAt: this.current
        }
      },
      getPayloadCreate() {
        return {
          ...this.form,
          id: this.id,
          authorId: this.$auth.id,
          createdAt: this.current
        }
      },
      async submitForm() {
        const formSubBtn = await document.getElementById("subBtn")
        formSubBtn.click()
      }
    }
  }
</script>

<style>
.v-list-item--active {
  border-left: 4px solid;
  color: #7fd9fd!important;
}

</style>
