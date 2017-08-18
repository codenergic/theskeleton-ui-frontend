import Vue from 'vue'

export const state = () => ({
  posts: [],
  post: {}
})

export const mutations = {
  addPost (state, { id, title, body }) {
    state.posts.push({ id, title, body })
  },
  setCurrentPost (state, { id, title, body }) {
    state.post = { id, title, body }
  }
}

export const actions = {
  findAllPosts ({ commit }) {
    return Vue.axios.get('/posts').then(response => {
      return response.data.map(post => {
        commit('addPost', post)
        return post
      })
    })
  },
  findPostById ({ commit }, id) {
    return Vue.axios.get(`/posts/${id}`).then(response => {
      commit('setCurrentPost', response.data)
      return response.data
    })
  }
}
