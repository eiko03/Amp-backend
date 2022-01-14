<template>
  <div v-if="isFetched">
  <v-row class="mx-5 mt-2 justify-space-between">
    <h1>Profile Statistics</h1>
    <v-spacer></v-spacer>
    <v-btn dark color="#7fd9fd" class="rounded-m" depressed @click="$router.push('/content')">
      <v-icon left>mdi-plus</v-icon>
      Create a post
    </v-btn>
  </v-row>



  <v-row class="mx-5 mt-8 grow justify-space-between">

      <v-card
        class="rounded-lg"
        width="100%"
        style="box-shadow: 0px 0px 24px 4px rgba(0,0,0,0.09);"
      >
      <v-row justify="space-between" align="center" width="100%" class="my-4 mx-4 grow">

        <v-column cols="auto" class="shrink">
          <v-card-subtitle class="pb-0 subtitle-fix">Subscribers</v-card-subtitle>
          <v-card-title class="pt-0 h1 title-fix" style=""><b>{{ users.length }}</b></v-card-title>
        </v-column>

        <v-column cols="auto" class="grow">
          <v-sparkline
             :value="value"
             :gradient="gradient"
             :smooth="radius || false"
             :padding="padding"
             :line-width="width"
             :stroke-linecap="lineCap"
             :gradient-direction="gradientDirection"
             :fill="fill"
             :type="type"
             :auto-line-width="autoLineWidth"
             auto-draw

           ></v-sparkline>
        </v-column>

        <!-- <v-spacer></v-spacer> -->

        <v-divider
          vertical
        ></v-divider>

        <v-column cols="auto" class="shrink">
          <v-card-subtitle class="pb-0 subtitle-fix">Total Revenue</v-card-subtitle>
          <v-card-title class="pt-0 title-fix"><b>$--,---</b></v-card-title>
        </v-column>

        <v-column cols="auto" class="grow">
          <!-- <v-sparkline
             :value="value"
             :gradient="gradient"
             :smooth="radius || false"
             :padding="padding"
             :line-width="width"
             :stroke-linecap="lineCap"
             :gradient-direction="gradientDirection"
             :fill="fill"
             :type="type"
             :auto-line-width="autoLineWidth"
             auto-draw

           ></v-sparkline> -->
        </v-column>

        <!-- <v-spacer></v-spacer> -->

        <v-divider
          vertical
        ></v-divider>

        <v-column cols="auto" class="shrink">
          <v-card-subtitle class="pb-0 subtitle-fix">Donation Revenue</v-card-subtitle>
          <v-card-title class="pt-0 title-fix"><b>$--,---</b></v-card-title>
        </v-column>

        <v-column cols="auto" class="grow">
          <!-- <v-sparkline
             :value="value"
             :gradient="gradient"
             :smooth="radius || false"
             :padding="padding"
             :line-width="width"
             :stroke-linecap="lineCap"
             :gradient-direction="gradientDirection"
             :fill="fill"
             :type="type"
             :auto-line-width="autoLineWidth"
             auto-draw

           ></v-sparkline> -->
        </v-column>

        <!-- <v-spacer></v-spacer> -->

      </v-row>


      </v-card>
  </v-row>

  <!-- <v-row class="d-inline-flex grow justify-space-between mx-5 mt-15 flex-wrap">
    <v-column
      class="d-inline-flex grow"
    >
      <v-card
      class="rounded-lg shadow"
      width="100%"
      height="400"
      >

      <h1>Graph Placeholder - Revenue or Subscriber Count Will Be Viewable</h1>
      </v-card>
    </v-column>
  </v-row> -->

  <v-row class="d-flex grow justify-space-between mx-5 mt-15 mb-5">
    <v-column
      class="d-inline-flex"
    >
      <v-card
        class="shadow rounded-lg pa-5"
        height="400"
      >
      <h2>Activity Feed</h2>

      <v-list-item two-line v-for="activity in activities" class="px-0 py-1">
        <v-list-item-avatar>
              <v-img :src="activity.avatar"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ activity.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ activity.datetime }}</v-list-item-subtitle>
        </v-list-item-content>
        <h4>{{ activity.action }}</h4>
      </v-list-item>


      </v-card>
    </v-column>

    <v-column
      class="d-inline-flex flex-column grow justify-space-between mx-5"
    >
      <v-card
        height="190"
        class="d-flex flex-column align-center justify-center shadow rounded-lg"
      >
      <v-icon large color="primary">mdi-chart-bar</v-icon>
      <p class="mb-0">Total Likes</p>
      <h1>{{ likes }}</h1>

      </v-card>

      <v-card
        height="190"
        class="d-flex flex-column align-center justify-center shadow rounded-lg px-5"
      >
      <v-icon large color="success">mdi-chart-bar</v-icon>
      <p class="mb-0">Total Comments</p>
      <h1>{{ comments }}</h1>

      </v-card>

    </v-column>

    <v-column
      class="d-inline-flex shrink"
    >
      <v-card
        class="shadow rounded-lg pa-5"
        height="400"
      >

      <h2>Donations</h2>

    <v-list-item two-line v-for="donation in donations" class="px-0 py-1">
      <v-list-item-avatar>
            <v-img :src="donation.avatar"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>{{ donation.name }}</v-list-item-title>
        <v-list-item-subtitle>{{ donation.datetime }}</v-list-item-subtitle>
      </v-list-item-content>
      <h4>{{ donation.amount }}</h4>
    </v-list-item>


      </v-card>
    </v-column>
  </v-row>
  </div>
  <div v-else>
    <Unauth />
  </div>
</template>

<script>
  import Unauth from '@/components/Unauth.vue'

  const gradients = [
   ['#222'],
   ['#42b3f4'],
   ['red', 'orange', 'yellow'],
   ['purple', 'violet'],
   ['#00c6ff', '#F0F', '#FF0'],
   ['#f72047', '#ffd200', '#1feaea'],
 ]
export default {
  methods: {
    async getCommentCount() {
      this.comments = 0
      for(let i=0; i<this.posts.length;i++) {
        var postComments = await this.$store.dispatch('api/listComments', this.posts[i].id)
        this.comments += postComments.length
      }
    },
    async getLikeCount() {
      this.likes = 0
      for(let i=0; i<this.posts.length;i++) {
        var postLikes = this.posts[i].likes
        this.likes += postLikes.length
      }
    }
  },
  async fetch() {
    this.users = await this.$store.dispatch('api/listUsers', this.$auth.id)
    this.posts = await this.$store.dispatch('api/listPosts', this.$auth.id)
    await this.getCommentCount()
    await this.getLikeCount()

    this.isFetched = true;
  },
  components: {
      Unauth
  },
  data: () => ({
    isFetched: false,
    headers: [
          {
            text: 'Username',
            align: 'start',
            value: 'name',
          },
          { text: 'Category', value: 'category' },
        ],
        activities: [
          {
            name: "Jimmy Jones",
            datetime: "Dec. 14th - 8am",
            action: "Subscribed",
            avatar: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTQ3NTI2OTA4NzY5MjE2MTI4/drake_photo_by_prince_williams_wireimage_getty_479503454.jpg"
          },
          {
            name: "Jimmy Jones",
            datetime: "Dec. 14th - 8am",
            action: "Liked Your Post",
            avatar: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTQ3NTI2OTA4NzY5MjE2MTI4/drake_photo_by_prince_williams_wireimage_getty_479503454.jpg"
          },
          {
            name: "Jimmy Jones",
            datetime: "Dec. 14th - 8am",
            action: "Commented",
            avatar: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTQ3NTI2OTA4NzY5MjE2MTI4/drake_photo_by_prince_williams_wireimage_getty_479503454.jpg"
          },
          {
            name: "Jimmy Jones",
            datetime: "Dec. 14th - 8am",
            action: "Unsubscribed",
            avatar: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTQ3NTI2OTA4NzY5MjE2MTI4/drake_photo_by_prince_williams_wireimage_getty_479503454.jpg"
          },

        ],
        donations: [
          {
            name: "Jimmy Jones",
            datetime: "Dec. 14th - 8am",
            amount: "$185",
            avatar: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTQ3NTI2OTA4NzY5MjE2MTI4/drake_photo_by_prince_williams_wireimage_getty_479503454.jpg"
          },
          {
            name: "Jimmy Jones",
            datetime: "Dec. 14th - 8am",
            amount: "$185",
            avatar: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTQ3NTI2OTA4NzY5MjE2MTI4/drake_photo_by_prince_williams_wireimage_getty_479503454.jpg"
          },
          {
            name: "Jimmy Jones",
            datetime: "Dec. 14th - 8am",
            amount: "$185",
            avatar: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTQ3NTI2OTA4NzY5MjE2MTI4/drake_photo_by_prince_williams_wireimage_getty_479503454.jpg"
          },
          {
            name: "Jimmy Jones",
            datetime: "Dec. 14th - 8am",
            amount: "$185",
            avatar: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTQ3NTI2OTA4NzY5MjE2MTI4/drake_photo_by_prince_williams_wireimage_getty_479503454.jpg"
          },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            category: 'Ice cream',
          },
          {
            name: 'Ice cream sandwich',
            category: 'Ice cream',
          },
          {
            name: 'Eclair',
            category: 'Cookie',
          },
          {
            name: 'Cupcake',
            category: 'Pastry',
          },
          {
            name: 'Gingerbread',
            category: 'Cookie',
          },
          {
            name: 'Jelly bean',
            category: 'Candy',
          },
          {
            name: 'Lollipop',
            category: 'Candy',
          },
          {
            name: 'Honeycomb',
            category: 'Toffee',
          },
          {
            name: 'Donut',
            category: 'Pastry',
          },
          {
            name: 'KitKat',
            category: 'Candy',
          },
        ],
    topstats: [
      {title: 'Subscribers', amount: '170', icon: 'mdi-account-group'},
      {title: 'Subscribers (Last 7d)', amount: '20', icon: 'mdi-calendar-account'},
      {title: 'Videos Posted', amount: '5', icon: 'mdi-message-video'},
      {title: 'Content Views', amount: '10.000', icon: 'mdi-eye'},
    ],
    username: '@gayman',
    width: 3,
    radius: 10,
    padding: 20,
    lineCap: 'round',
    gradient: gradients[5],
    value: [0, 2],
    gradientDirection: 'top',
    gradients,
    fill: false,
    type: 'trend',
    autoLineWidth: false,
  }),

}
</script>
<style>
  .shadow {
    box-shadow: 0px 0px 24px 4px rgba(0,0,0,0.09)!important;
  }

  .title-fix {
    font-size: 2rem!important;
  }

  .subtitle-fix {
    font-size: .8rem!important;
    font-weight: 300!important;
  }

</style>
