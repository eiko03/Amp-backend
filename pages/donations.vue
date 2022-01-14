<template>
  <div>
    <v-row class="mx-5 mt-2 justify-space-between">
      <h1>My Fans</h1>
      <v-spacer></v-spacer>
      <v-btn dark color="#7fd9fd" class="rounded-m" depressed @click="$router.push('/content')">
        <v-icon left>mdi-download</v-icon>
        Export
      </v-btn>

      <v-tabs class="mt-1" background-color="#FAFAFA" color="#7fd9fd" style="border-bottom: 1px solid lightgray!important;">
        <v-tab>All ({{ donations.length }})</v-tab>
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
          :headers="headers"
          :items="donations"
          :items-per-page="5"
          item-key="name"
          class="d-inline grow"
        >
        <template v-slot:item.amount="{ item }">
          <v-chip
            color="green"
            label
            dark
          >
            {{ item.amount }}
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
    data: () => ({
      headers: [
            {
              text: 'Name',
              align: 'start',
              value: 'name',
            },
            {
              text: 'Subscribe Date',
              value: 'subdate'
            },
            {
              text: 'Donation Date',
              value: 'donationdate'
            },
            {
              text: 'Amount',
              value: 'amount'
            },
          ],
          donations: [
            {
              name: 'Jim Bird',
              subdate: '9/15/2021',
              donationdate: '9/17/2021',
              amount: '$100'
            },
            {
              name: 'Jim Bird',
              subdate: '9/15/2021',
              donationdate: '9/17/2021',
              amount: '$100'
            },
            {
              name: 'Jim Bird',
              subdate: '9/15/2021',
              donationdate: '9/17/2021',
              amount: '$100'
            },
            {
              name: 'Jim Bird',
              subdate: '9/15/2021',
              donationdate: '9/17/2021',
              amount: '$100'
            },
            {
              name: 'Jim Bird',
              subdate: '9/15/2021',
              donationdate: '9/17/2021',
              amount: '$100'
            },
            {
              name: 'Jim Bird',
              subdate: '9/15/2021',
              donationdate: '9/17/2021',
              amount: '$100'
            }
          ],
        }),
      }
</script>
