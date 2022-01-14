<template>
  <div>
    <v-row class="mx-5 mt-2 justify-space-between">
      <h1>My Content</h1>
    </v-row>



    <v-row class="grow mx-5 mt-15 justify-center" >
      <v-column class="d-flex flex-column" style="width: 50%;">
        <img class="d-flex rounded-t-lg shadow" id="img-holder"></img>
        <v-card class="d-flex rounded-lg mb-10 shadow align-center justify-center upload-hover" id="upload-block" height="200">
          <v-icon color="primary" x-large>mdi-upload</v-icon>
          <h3 class="primary--text">Upload Your Content</h3>
        </v-card>
        <v-card
        outlined
        class="d-flex grow px-8 py-8 rounded-b-lg rounded-t-lg shadow"
        id="submit-form"
        >
        <v-form v-model="valid" width="100%" class="d-flex" @submit.prevent="create" id="postForm">
          <v-container width="100%">
            <v-row width="100%">

                <v-text-field
                  v-model="form.title"
                  label="Title"
                  required
                  style="width: 100%!important; border-width: 0!important;"
                  class="rounded-t-lg"
                  outlined
                ></v-text-field>

                <v-textarea
                  v-model="form.body"
                  :counter="1000"
                  label="Description"
                  required
                  style="width: 100%!important; border-width: 0!important;"
                  class="rounded-b-lg"
                  outlined
                ></v-textarea>

                <v-btn
                  class="mr-5 rounded-lg button--outline"
                  type="submit"
                  depressed
                  color="primary"
                >
                  Post!
                  <v-icon
                    right
                    dark
                  >
                    mdi-cloud-upload
                  </v-icon>
                </v-btn>

                <v-row class="d-flex flex-wrap align-center mr-auto">
                  <v-file-input
                    v-model="form.file"
                    accept="image/*, video/*"
                    show-size
                    truncate-length="50"
                    class="d-flex justify-end"
                    placeholder="Upload Your Content..."
                    id="input"
                  >
                  <template v-slot:selection="{ text }">
                    <v-chip
                      small
                      label
                      color="primary"
                    >
                      {{ text }}
                    </v-chip>
                  </template>

                </v-file-input>

                </v-row>


            </v-row>
          </v-container>


        </v-form>



        </v-card>

      </v-column>

    </v-row>

    <!-- Problem row -->
  <!-- <v-row width="100%" class="grow mx-5 mt-15">
    <v-column class="d-inline-flex grow">
      <v-card
      outlined
      class="d-inline-flex grow rounded-lg"
      >
      <form @submit.prevent="create" class="d-inline-flex grow">
        <v-row class="d-block" width="100%">
        <label>Title</label>
        <input v-model="form.title" placeholder="Title" class="form-control" />
        </v-row>



        <v-row class="d-block">
          <label>Body</label>
          <textarea v-model="form.body" placeholder="Body" class="form-control"></textarea>

          <button type="submit" class="button--green">Create</button>

        </v-row>
      </form>
      </v-card>
    </v-column>

  </v-row> -->

  <v-row width="100%" class="grow mx-5 mt-15 justify-center">
    <v-column class="d-flex flex-wrap justify-space-between" style="width: 50%">
        <v-card id="skeleton-load" class="d-flex flex-column mb-5 rounded-lg shadow" width="100%" outlined>
          <v-skeleton-loader
              v-bind="attrs"
              type="image, article, actions"
              v-if="!isFetched"
          ></v-skeleton-loader>
        </v-card>

      <v-card v-for="post in posts" :key="post.id" v-if="isFetched" class="d-flex flex-column mb-5 rounded-lg shadow" width="100%" outlined>
        <v-row class="d-inline-flex flex-column" style="margin: 0!important;">
          <v-img v-if="post.fileType != null && post.fileType.includes('image')"
          contain
          style="border-radius: 8px 8px 0 0"
          :src="post.file"></v-img>
          <video v-if="post.fileType != null && post.fileType.includes('video')" style="width: 100%; border-radius: 8px 8px 0 0;" controls>
            <source :src="post.file">
          </video>
        </v-row>

        <v-row class="flex-column px-6 py-6" style="margin: 0!important;">
          <h2 class="text-lg font-semibold">
            <!-- <nuxt-link :to="`/posts/${post.id}`">{{ post.title }}</nuxt-link> -->
            {{ post.title }}
          </h2>
          <p>{{ post.body }}</p>
          <small>By: {{ post.author.email }}</small>
          <small>Created on: {{ changeDate(post.createdAt) }}</small>
          <div v-if="post.author.id === $auth.id" class="flex justify-center text-xs">
            <!-- <button @click="deletePost(post.id)" class="text-red-500">Delete</button> -->
            <v-btn
              text
              color="error"
              class="pl-0 pr-2"
              @click="deletePost(post.id)"
            >
              Delete
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="like(post.id)"
            >
              Like
            </v-btn>
            <nuxt-link :to="`/content/${post.id}/edit`" style="text-decoration: none;">
              <v-btn
                text
                color="primary"
              >
                Edit
              </v-btn>
            </nuxt-link>
          </div>
        </v-row>

      </v-card>
    </v-column>
  </v-row>
  </div>
</template>

<script>
export default {
  async fetch() {
        this.current = new Date().toISOString();
        this.posts = await this.$store.dispatch('api/listPosts', this.$auth.id)
        this.isFetched = true;


        const uploadBlock = document.getElementById("upload-block");
        const fUpload = document.getElementById("input");
        const imgHolder = document.getElementById("img-holder");
        const form = document.getElementById("submit-form");

        uploadBlock.onclick = function() {
          document.getElementById("input").click();
        }

        fUpload.onchange = function(event) {
          console.log("yo");
           var file = fUpload.files[0];
           if(file) {
             var reader = new FileReader();
             reader.onload = function(event) {
                 imgHolder.src = event.target.result;
                 form.classList.add("rounded-t-0");
                 form.classList.remove("rounded-t-lg");
                 uploadBlock.style.display = "none";
                 this.hasFile = true;
              };

              reader.readAsDataURL(file);
            } else {
              imgHolder.src = "";
            }
          }

  },
  mounted() {
      document.getElementById("skeleton-load").style.setProperty("display", "none", "important");
  },
  data () {
    return {
      form: {
        title: '',
        body: '',
        file: ''
      },
      hasFile: false,
      posts: [],
      postPending: '',
      isFetched: false
    }
  },
  methods: {
    async deletePost(id) {
      this.postPending = await this.$store.dispatch('api/getPost', id)

      const hold = this.postPending.fileName

      await this.$store.dispatch('api/deletePost', [id, "bocconicover.jpg"])
      this.posts = await this.$store.dispatch('api/listPosts', this.$auth.id)
    },
    async create() {
      try {
        const post = await this.$store.dispatch(
          'api/createPost',
          this.getPayload()
        )
        this.posts = await this.$store.dispatch('api/listPosts', this.$auth.id)
        this.$router.push('/content')
        console.log(this.posts)
        document.getElementById("postForm").reset()
      } catch (error) {
        console.log({ error })
      }
    },
    async like(post) {
      const id = this.$auth.id
      const reqPost = await this.$store.dispatch('api/getPost', post)
      try {
        for(let i =0; i < reqPost.likes.length; i++) {
          if(reqPost.likes[i] == id) {
            console.log(reqPost.likes[i])
            // return await this.$store.dispatch('api/updatePost', { id: post, likes: id })
          }
        }

        // this.likeRes = await this.$store.dispatch('api/updatePost', { id: post, likes: id })
        // console.log(this.likeRes)
      } catch (e) {
        console.log(e)
      }
    },
    getPayload() {
      return {
        ...this.form,
        authorId: this.$auth.id,
        createdAt: this.current,
        likes: []
      }
    },
    changeDate(input) {
      const d = new Date(input)
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      return months[d.getMonth()] + ". " + d.getDate() + ", " + d.getFullYear()
    }
  }
}
</script>
<style>
.shadow {
  box-shadow: 0px 0px 26px 4px rgba(0,0,0,0.15)!important;
}

.shadow-err {
  box-shadow: 0px 0px 26px 4px rgba(0,0,0,0.15)!important;
}

.upload-hover {
  transition: .15s ease-out;
}

.upload-hover:hover {
  outline: 3.5px solid rgba(147, 197, 253, .5)!important;
}
</style>
