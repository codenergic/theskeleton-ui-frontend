export const state = () => ({
  posts: {},
  post: {}
})

export const mutations = {
  setPosts (state, posts) {
    posts.number += 1
    state.posts = { ...posts }
  },
  setPost (state, post) {
    state.post = { ...post }
  }
}

export const actions = {
  savePost ({ commit }, post = {}) {
    if (post.id) {
      return this.$axios.put(`/posts/${post.id}`, post).then(response => {
        commit('setPost', response.data)
        return response.data
      })
    } else {
      return this.$axios.post('/posts', post).then(response => {
        commit('setPost', response.data)
        return response.post
      })
    }
  },
  findPostById ({ commit }, id) {
    return this.$axios.get(`/posts/${id}`).then(response => {
      commit('setPost', response.data)
      return response.data
    })
  },
  findPosts ({ commit }, params = { title: '', page: 1, size: 20 }) {
    params.page -= 1
    params.sort = 'title,asc'
    return this.$axios.get('/posts', { params }).then(response => {
      commit('setPosts', response.data)
      return response.data
    })
  }
}
