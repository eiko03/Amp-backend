<template>
  <v-card class="d-flex flex-column mb-5 rounded-lg shadow" width="100%" v-if="isFetched" v-on:new-save="fetch">
    <!-- Header image -->
    <v-row class="ma-0" style="height: 40vh; overflow: hidden; z-index: 1">
      <!-- <img src="../src/assets/header.jpg" class="ma-0 rounded-lg" style="max-width: 100%; padding: inherit; object-fit: cover;"/> -->
      <v-card class="d-flex flex-column justify-center align-center" :img="pages[0].header" style="height: 40vh; border-radius: 0!important; box-shadow: none!important; width: 100%;">
        <v-card-title class="px-4 py-2 white--text rounded-lg" :style="getBgColor()">Taylor Alesia Club</v-card-title>
      </v-card>
    </v-row>

    <!-- Profile image -->
    <v-row class="d-flex justify-center mx-0" style="width: 100%; margin-top: -6%; z-index: 2;">
      <img :src="pages[0].profile" class="rounded-circle profile" />

    </v-row>

    <!-- Headeing text and subtext -->
    <v-row class="d-flex flex-column flex-wrap justify-center align-center mt-10 mx-0 mb-0" style="text-align: center">
      <h1>{{ pages[0].headingText }}</h1>
      <br>
      <p style="width: 30%;">{{ pages[0].subheadingText }}</p>

      <v-btn :color="pages[0].joinBtnColor" depressed class="rounded-xl px-5 py-6 white--text">Join the club!</v-btn>

    </v-row>

    <!-- Why Join -->
    <v-row class="d-flex flex-column flex-wrap justify-center align-center mt-10 mx-0 mb-0">
      <v-card class="d-flex flex-column justify-center align-center" :img="pages[0].whyJoinBg" style="height: 70vh; border-radius: 0!important; box-shadow: none!important; width: 100%;">
        <!-- <h1 class="mb-5">Why Join?</h1> -->
        <v-card class="rounded-xl shadow px-8 py-4 ma-0" style="width: 50%;">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    Benefits
                  </th>
                  <th class="text-left">
                    Club Member
                  </th>
                  <th class="text-left">
                    Non-Club Member
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="py-5">Exclusive Content</td>
                  <td>
                    <v-chip
                      class="ma-2"
                      color="success"
                      text-color="white"
                    >
                      <v-avatar>
                        <v-icon size="20px">mdi-check</v-icon>
                      </v-avatar>
                    </v-chip>
                  </td>

                  <td>
                    <v-chip
                      class="ma-2"
                      text-color="grey"
                      outlined
                    >
                      <v-avatar>
                        <v-icon size="30px" color="grey">mdi-alpha-x</v-icon>
                      </v-avatar>
                    </v-chip>
                  </td>
                </tr>

                <tr>
                  <td class="py-5">Behind The Scenes</td>
                  <td>
                    <v-chip
                      class="ma-2"
                      color="success"
                      text-color="white"
                    >
                      <v-avatar>
                        <v-icon size="20px">mdi-check</v-icon>
                      </v-avatar>
                    </v-chip>
                  </td>

                  <td>
                    <v-chip
                      class="ma-2"
                      text-color="grey"
                      outlined
                    >
                      <v-avatar>
                        <v-icon size="30px" color="grey">mdi-alpha-x</v-icon>
                      </v-avatar>
                    </v-chip>
                  </td>
                </tr>

                <tr>
                  <td class="py-5">Monthly Giveawys</td>
                  <td>
                    <v-chip
                      class="ma-2"
                      color="success"
                      text-color="white"
                    >
                      <v-avatar>
                        <v-icon size="20px">mdi-check</v-icon>
                      </v-avatar>
                    </v-chip>
                  </td>

                  <td>
                    <v-chip
                      class="ma-2"
                      text-color="grey"
                      outlined
                    >
                      <v-avatar>
                        <v-icon size="30px" color="grey">mdi-alpha-x</v-icon>
                      </v-avatar>
                    </v-chip>
                  </td>
                </tr>

                <tr>
                  <td class="py-5">Music Release Drops</td>
                  <td>
                    <v-chip
                      class="ma-2"
                      color="success"
                      text-color="white"
                    >
                      <v-avatar>
                        <v-icon size="20px">mdi-check</v-icon>
                      </v-avatar>
                    </v-chip>
                  </td>

                  <td>
                    <v-chip
                      class="ma-2"
                      text-color="grey"
                      outlined
                    >
                      <v-avatar>
                        <v-icon size="30px" color="grey">mdi-alpha-x</v-icon>
                      </v-avatar>
                    </v-chip>
                  </td>
                </tr>

                <tr>
                  <td class="py-5">Absolutley Nothing</td>
                  <td>
                    <v-chip
                      class="ma-2"
                      text-color="grey"
                      outlined
                    >
                      <v-avatar>
                        <v-icon size="30px" color="grey">mdi-alpha-x</v-icon>
                      </v-avatar>
                    </v-chip>
                  </td>

                  <td>
                    <v-chip
                      class="ma-2"
                      color="success"
                      text-color="white"
                    >
                      <v-avatar>
                        <v-icon size="20px">mdi-check</v-icon>
                      </v-avatar>
                    </v-chip>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>

        </v-card>

        <v-btn :color="pages[0].joinBtnColor" depressed class="rounded-xl px-5 py-6 white--text mt-8">Join the club!</v-btn>

      </v-card>

    </v-row>

    <!-- Testimonial -->
    <v-row class="d-flex flex-wrap justify-center align-center ma-0">
      <v-card class="d-flex justify-center flex-column align-center ma-0 pa-5" style="border-radius: 0; box-shadow: none!important;" color="black">
        <v-row class="d-flex white--text justify-center align-center flex-column my-8" style="width: 100%">
          <h3>WE LOVE OUR FANS</h3>
          <h1 color="lightgray">And they love the club...</h1>
        </v-row>
        <v-row class="d-flex flex-row ma-0" style="width: 100%;">

          <v-col
          class="flex-row"
          width="100%"
          v-for="(review, i) in reviews"
          :key="i"
          cols=4
        >
          <v-card class="d-flex rounded-xl shadow pa-10">
            <v-row class="ma-0">
            <v-column class="d-flex flex-column">
            <h3>{{ review.review }}</h3>
            <h4><i>{{ review.name }}</i></h4>
            </v-column>
            </v-row>
          </v-card>

        </v-col>

        </v-row>

      </v-card>
    </v-row>

    <!-- Content Preview -->
    <v-row class="d-flex flex-column justify-center align-center ma-0 py-10">
      <v-row class="d-flex align-center justify-center ma-0 pb-5">
        <h1>UNLOCK EXCLUSIVE CONTENT</h1>
      </v-row>
      <v-row class="d-flex flex-wrap ma-0 px-10">
        <v-col
        class="flex-row"
        width="100%"
        v-for="(review, i) in reviews"
        :key="i"
        cols=4
      >
        <v-card min-height="200px" class="d-flex rounded-xl shadow pa-10 align-center justify-center" img="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260">
          <v-icon x-large>mdi-play-circle</v-icon>

        </v-card>

      </v-col>

      </v-row>
      <v-btn :color="pages[0].joinBtnColor" depressed class="rounded-xl px-5 py-6 white--text mt-8">Join the club!</v-btn>
    </v-row>

    <!-- See you inside -->
    <v-row class="d-flex flex-column justify-center align-center ma-0 pt-10">
      <v-row class="d-flex align-center justify-center ma-0 pb-10">
        <h1>SEE YOU INSIDE!</h1>
      </v-row>

      <v-row class="d-flex align-center justify-center ma-0">
        <img src="../src/assets/header.jpg" style="width: 100%"/>
      </v-row>

    </v-row>

  </v-card>
</template>
<script>
export default {
  async fetch() {
    this.pages = await this.$store.dispatch('api/listCustomPages', this.$auth.id)

    this.pages[0].header = await this.$store.dispatch('api/getImage', this.pages[0].header)
    this.pages[0].profile = await this.$store.dispatch('api/getImage', this.pages[0].profile)
    this.pages[0].whyJoinBg = await this.$store.dispatch('api/getImage', this.pages[0].whyJoinBg)

    console.log("Pages below")
    console.log(this.pages)
    this.isFetched = true

  },
  data() {
    return {
      isFetched: false,
      pages: [],
      reviews: [
        {
          img: '../src/assets/profilephoto.jpg',
          review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, elit, a volutpat enim, massa id. Vestibulum faucibus.',
          name: 'Jeffery Witty'
        },
        {
          img: '../src/assets/profilephoto.jpg',
          review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, elit, a volutpat enim, massa id. Vestibulum faucibus.',
          name: 'Jeffery Witty'
        },
        {
          img: '../src/assets/profilephoto.jpg',
          review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, elit, a volutpat enim, massa id. Vestibulum faucibus.',
          name: 'Jeffery Witty'
        },
        {
          img: '../src/assets/profilephoto.jpg',
          review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, elit, a volutpat enim, massa id. Vestibulum faucibus.',
          name: 'Jeffery Witty'
        },
        {
          img: '../src/assets/profilephoto.jpg',
          review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, elit, a volutpat enim, massa id. Vestibulum faucibus.',
          name: 'Jeffery Witty'
        },
        {
          img: '../src/assets/profilephoto.jpg',
          review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, elit, a volutpat enim, massa id. Vestibulum faucibus.',
          name: 'Jeffery Witty'
        },
      ]
    }
  },
  methods: {
    getBgColor() {
      return "background-color: "+this.pages[0].joinBtnColor
    },
    getPlaceholder(placeholder) {
      if(placeholder == "profile") {
        console.log("Yo")
        return this.$store.dispatch('api/getPlaceholders').profilePlaceholder
      } else {
        return this.$store.dispatch('api/getPlaceholders').bannerPlaceholder
      }
    }

  }
}

</script>
<style>
.shadow {
  box-shadow: 0px 0px 26px 4px rgba(0,0,0,0.15)!important;
}

.profile {
  width:12vw;
  height:12vw;
  object-fit:cover;
}
</style>
