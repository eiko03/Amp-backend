import { API } from 'aws-amplify';
import { Storage } from 'aws-amplify';
import * as gqlQueries from '~/src/graphql/queries'
import * as gqlMutations from '~/src/graphql/mutations'

export const state = {
  posts: [],
  post: null
}

export const getters = {
  authMode: (state, getters, rootState) => rootState.auth.isAuthenticated ? 'AMAZON_COGNITO_USER_POOLS' : 'API_KEY'
}

export const mutations = {
  set(state, {key, value}) {
    state[key] = value;
  }
}

export const actions = {
  async listUsers({ dispatch }, creator_id) {
    console.log(creator_id);
    return dispatch('query', { key: 'users', query: 'listUsers', filter: {creator_id:{ eq: creator_id }, isCreator: { eq: false } }})
  },

  async updateUser({ dispatch }, input) {
    console.log(input)
    return dispatch('mutate', { key: 'user', mutation: 'updateUser', input})
  },

  async listPosts({ dispatch }, authorId) {
    console.log(authorId);
    const posts = await dispatch('query', { key: 'posts', query: 'listPosts', filter: {authorId:{ eq: authorId } }})
    var postsReturned = []
    for(let i =0; i < posts.length; i++) {
      postsReturned.push(posts[i])
      if(postsReturned[i].file) {
        postsReturned[i].file = await Storage.get(postsReturned[i].fileName);
      } else {
        continue
      }
    }

    console.log(postsReturned)
    return postsReturned
  },

  async getPost({ dispatch }, id) {
    const post = dispatch('get', { key: 'post', query: 'getPost', id})
    if(post.fileName != "") {
      post.file = await Storage.get(post.fileName);
      return post
    } else {
      return post
    }
  },

  async createPost({ dispatch }, input) {
    if(input.file) {
      await Storage.put(input.file.name, input.file, {
          contentType: input.file.type
        });

        input.fileName = input.file.name;
        input.fileType = input.file.type;
        input.file = await Storage.get(input.file.name);
      return dispatch('mutate', { key: 'post', mutation: 'createPost', input})
    } else {
      return dispatch('mutate', { key: 'post', mutation: 'createPost', input})
    }
  },

  async updatePost({ dispatch }, input) {
    return dispatch('mutate', { key: 'post', mutation: 'updatePost', input})
  },

  async deletePost({ dispatch }, input) {
      const id = input[0];

      //Deleting the image from the server
      if(input[1] != "") { await Storage.remove(input[1]); }

      return dispatch('mutate',{ mutation: 'deletePost', input: { id } })
  },

  async listCustomPages({ dispatch }, authorId) {
    const pages = await dispatch('query', { key: 'custompages', query: 'listCustomPages', filter: {authorId:{ eq: authorId } }})
    var pagesReturned = []
    // for(let i =0; i < pages.length; i++) {
    //   pagesReturned.push(pages[i])
    //   if(pagesReturned[i].whyJoinBg) {
    //     pagesReturned[i].whyJoinBgName = pagesReturned[i].whyJoinBg
    //     pagesReturned[i].whyJoinBg = await Storage.get(pagesReturned[i].whyJoinBg);
    //
    //   }
    //    if(pagesReturned[i].header) {
    //     pagesReturned[i].headerName = pagesReturned[i].header
    //     pagesReturned[i].header = await Storage.get(pagesReturned[i].header);
    //   }
    //    if(pagesReturned[i].profile) {
    //      pagesReturned[i].profileName = pagesReturned[i].profile
    //     pagesReturned[i].profile = await Storage.get(pagesReturned[i].profile);
    //   }
    // }

    return pages
  },

  async createCustomPage({ dispatch }, input) {
    return dispatch('mutate', { key: 'custompage', mutation: 'createCustomPage', input})
  },

  async getCustomPage({ dispatch }, id) {
    return dispatch('get', { key: 'custompage', query: 'getCustomPage', id})
  },

  async updateCustomPage({ dispatch }, input) {
    const id = input.id

    if(input.whyJoinBg.name) {
      await Storage.put(input.id+"_"+input.whyJoinBg.name, input.whyJoinBg, {
          contentType: input.whyJoinBg.type
        });
        console.log("Putting to server")
        input.whyJoinBg = input.id+"_"+input.whyJoinBg.name;
    }
    if(input.header.name) {
      await Storage.put(input.id+"_"+input.header.name, input.header, {
          contentType: input.header.type
        });
        input.header = input.id+"_"+input.header.name;
    }
    if(input.profile.name) {
      await Storage.put(input.id+"_"+input.profile.name, input.profile, {
          contentType: input.profile.type
        });
        input.profile = input.id+"_"+input.profile.name;
    }

    return dispatch('mutate', { key: 'custompage', mutation: 'updateCustomPage', input})
  },

  async getPlaceholders({ dispatch }) {
    const out = {}
    out.profilePlaceholder = await Storage.get('default_profile_photo.png')
    out.bannerPlaceholder = await Storage.get('default_banner.png')

    return out
  },

  async getImage({ dispatch }, image) {
    return await Storage.get(image);
  },

  async listComments({ dispatch }, postId) {
    const comments = await dispatch('query', { key: 'comments', query: 'listComments', filter: {postId:{ eq: postId } }})
    console.log(comments)

    return comments
  },

  async listTotalComments({ dispatch }, id) {
    const comments = await dispatch('query', { key: 'comments', query: 'listComments', filter: {authorId:{ eq: id } }})

    return comments
  },

  async getComment({ dispatch }, id) {
    return dispatch('get', { key: 'comment', query: 'getComment', id})
  },

  async createComment({ dispatch }, input) {
    return dispatch('mutate', { key: 'comment', mutation: 'createComment', input})
  },

  async updateComment({ dispatch }, input) {
    return dispatch('mutate', {
      key: 'comment',
      mutation: 'updateComment',
      input
    })
  },

  async get({ commit, getters }, { key, query, id }) {
    const { data } = await API.graphql({
      query: gqlQueries[query],
      variables: { id },
      authMode: getters.authMode
    })

    const value = data[query]
    if (key) commit('set', { key, value })
    return value
  },

  async query({ commit, getters }, { key, query, filter }) {
    const { data } = await API.graphql({
      query: gqlQueries[query],
      variables: { filter },
      authMode: getters.authMode
    })

    const value = data[query].items
    if (key) commit('set', { key, value })
    return value
  },

  async mutate({ commit, getters }, { key, mutation, input }) {
    const { data } = await API.graphql({
      query: gqlMutations[mutation],
      variables: { input },
      authMode: getters.authMode
    })

    const value = data[mutation]
    if (key) commit('set', { key, value })
    return value
  }
}
