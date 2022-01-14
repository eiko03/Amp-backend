<template>
  <div>
    <v-row class="mx-5 mt-2 justify-space-between">
      <h1>My Fans</h1>
      <v-spacer></v-spacer>
      <v-btn dark color="#7fd9fd" class="rounded-m" depressed @click="$router.push('/subscribers')">
        <v-icon left>mdi-download</v-icon>
        Export
      </v-btn>

      <v-tabs class="mt-1" background-color="#FAFAFA" color="#7fd9fd" style="border-bottom: 1px solid lightgray!important;" v-if="isFetched">
        <v-tab>All ({{ users.length }})</v-tab>
      </v-tabs>
    </v-row>




    <v-row width="100%" class="grow mx-5 mt-10">
      <v-column
        class="d-inline-flex grow"
      >
        <v-card
          class="d-inline-flex grow rounded-lg"
          style="box-shadow: 0px 0px 24px 4px rgba(0,0,0,0.09);"
        >
        <v-data-table
          v-if="isFetched"
          :headers="headers"
          :items="users"
          :items-per-page="5"
          item-key="user"
          class="d-inline grow"
        >
        <template v-slot:item.status="{ item }">
          <v-chip
            :color="getColor(item.status)"
            dark
          >
            {{ item.status }}
          </v-chip>
        </template>

      </v-data-table>


        </v-card>
      </v-column>
    </v-row>
  </div>

</template>
<script>
  export default {
    async fetch() {
      this.users = await this.$store.dispatch('api/listUsers', this.$auth.id)
      for(let i = 0; i < this.users.length; i++) {
        const d = new Date(this.users[i].createdAt)
        console.log(d)
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        this.users[i].createdAt = months[d.getMonth()] + ". " + d.getDate() + ", " + d.getFullYear()
        this.users[i].status = "Not Paid"
      }

      this.isFetched = true;
    },
    data: () => ({
      isFetched: false,
      headers: [
            {
              text: 'Name',
              align: 'start',
              value: 'name',
            },
            {
              text: 'Email',
              value: 'email'
            },
            {
              text: 'Location',
              value: 'location'
            },
            {
              text: 'Subscribe Date',
              value: 'createdAt'
            },
            {
              text: 'Status',
              value: 'status'
            },
          ],
        }),
        methods: {
          getColor (status) {
            if (status == 'Active') return 'green'
            else return 'red'
          },
          changeDate(input) {

          }
        },
      }
</script>

<!-- subscribers: [
  {
    name: 'Jim Bird',
    email: 'jimb@gmail.com',
    location: 'Bellevue, WA',
    subdate: '9/15/2021',
    status: 'Active'
  },
  {
    name: 'Jim Bird',
    email: 'jimb@gmail.com',
    location: 'Bellevue, WA',
    subdate: '9/15/2021',
    status: 'Inactive'
  },
  {
    name: 'Jim Bird',
    email: 'jimb@gmail.com',
    location: 'Bellevue, WA',
    subdate: '9/15/2021',
    status: 'Active'
  },
  {
    name: 'Jim Bird',
    email: 'jimb@gmail.com',
    location: 'Bellevue, WA',
    subdate: '9/15/2021',
    status: 'Active'
  },
  {
    name: 'Jim Bird',
    email: 'jimb@gmail.com',
    location: 'Bellevue, WA',
    subdate: '9/15/2021',
    status: 'Active'
  },
  {
    name: 'Jim Bird',
    email: 'jimb@gmail.com',
    location: 'Bellevue, WA',
    subdate: '9/15/2021',
    status: 'Active'
  }
], -->
