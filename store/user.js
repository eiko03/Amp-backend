import { getUser } from '~/src/graphql/queries'
import { createUser } from '~/src/graphql/mutations'

export const state = () => ({
  user: null
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  }
}

export const actions = {
  async getUser({ commit, dispatch }, id) {
    const user = await dispatch(
      'api/get',
      { query: 'getUser', id },
      { root: true }
    )
    commit('setUser', user)
    return user
  },

  async createUser({ commit, dispatch }, input) {
    const user = await dispatch(
      'api/mutate',
      { mutation: 'createUser', input },
      { root: true }
    )
    commit('setUser', user)
    return user
  },

  async findOrCreateUser({ dispatch }, { attributes, username }) {
    const current = new Date().toISOString();
    const user = await dispatch('getUser', username)
    if (user) {
      if(user.isCreator) {
      return user
    } else {
      return null
    }
    }



    return dispatch('createUser', {
      id: username,
      name: attributes.name,
      email: attributes.email,
      createdAt: current,
      isCreator: true,
      creator_id: username
    })
  }
}
