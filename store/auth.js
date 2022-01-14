import { Auth } from 'aws-amplify'

export const state = () => ({
  isAuthenticated: false,
  user: null
})

export const mutations = {
  set(state, user) {
    state.isAuthenticated = !!user
    state.user = user
  }
}

export const actions = {
  async load({ commit, dispatch }) {
    try {
      const user = await Auth.currentAuthenticatedUser()
      commit('set', user)

      if (user) {
        await dispatch('user/getUser', user.username, { root: true })
      }

      return user
    } catch (error) {
      commit('set', null)
    }
  },

  async register(_, { email, password, name }) {
    const user = await Auth.signUp({
      username: email,
      password,
      attributes: {
        name
      }
    })
    return user
  },

  async confirmRegistration(_, { email, code }) {
    return await Auth.confirmSignUp(email, code)
  },

  async login({ commit, dispatch }, { email, password }) {
    const user = await Auth.signIn(email, password)
    commit('set', user)

    if(await dispatch('user/findOrCreateUser', user, { root: true }) != null) {
      console.log(user)
      console.log("good")
      return user
    } else {
      await Auth.signOut()
      commit('set', null)
    }


  },

  async logout({ commit }) {
    await Auth.signOut()
    commit('set', null)
  },

  async updateUser({ commit, dispatch}, { name, password }) {
    const user = await Auth.currentAuthenticatedUser()
    if(name != '') {
      if(password != '') {
        await Auth.updateUserAttributes(user, {
          'name': name,
          'password': password
          });
          return user
      } else {
        await Auth.updateUserAttributes(user, {
          'name': name,
          });
          return user
      }
    } else {
      if(password != '') {
        await Auth.updateUserAttributes(user, {
          'password': password
          });
          return user
      }
    }

    }
  
}
