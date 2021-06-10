import { Promise } from 'core-js'
import { createStore } from 'vuex'

export default createStore({

  state: {
    currentUser: localStorage.getItem('currentUser') || '', // { firstname: '', lastname: '', usernmae: '', password: '' }, // stores details of current user
    user: localStorage.getItem('currentUser') || [],
    users: JSON.parse(localStorage.getItem('users')) || [], // used to store user details
    usernames: JSON.parse(localStorage.getItem('usernames')) || [], // used to store usernames
    isAdminUser: localStorage.getItem('isAdminUser') || '',
    isLoggedin: localStorage.getItem('isLoggedin') || '',
    error: '',
    theme: ''
  },

  mutations: {
    REGISTER (state, user) {
      // takes the state an the user object as input
      // updates the user array and the localstorage
      // sets the current user to the user who registered
      state.currentuser = user

      state.users.push(user)
      state.usernames.push(user.username)
      localStorage.setItem('users', JSON.stringify(state.users))
      localStorage.setItem('usernames', JSON.stringify(state.usernames))
      localStorage.setItem('currentUser', JSON.stringify(user))

      state.status = 'success'
    },

    LOGIN (state, user) {
      // updates currntUser state and sets localstorage currentUser to the user who logged in"
      // state.currentUser = user
      state.isLoggedin = 'true'
      state.currentUser = user
      state.user.push(user)
      // state.user = Object.assign({}, { firstname: user.firstname, lastname: user.lastname, username: user.username, password: user.password })
      localStorage.setItem('currentUser', user)
      localStorage.setItem('isLoggedin', 'true')
    },

    ADMIN_LOGIN (state) {
      const admin = { firstname: 'Admin', lastname: 'Admin', usernmae: 'admin', password: 'admin' }
      state.currentUser = admin
      // state.currentUser = Object.assign({}, { firstname: admin.firstname, lastname: admin.lastname, username: admin.username, password: admin.password })
      state.isAdminUser = 'true' // A dirty hack to make isAdminUser true
      state.isLoggedin = 'true'
      localStorage.setItem('currentUser', admin)
      localStorage.setItem('isAdminUser', 'true')
      localStorage.setItem('isLoggedin', 'true')
    },

    LOGOUT (state) {
      // clears the currentUser state and clears localstorage
      state.currentUser = ''
      state.isAdminUser = ''
      state.isLoggedIn = ''
      state.user = []
      localStorage.removeItem('currentUser')
      localStorage.removeItem('isAdminUser')
      localStorage.removeItem('isLoggedin')
      localStorage.removeItem('user')
    },

    SET_THEME (state, theme) {
      // updates the theme state
      state.theme = theme
      localStorage.setItem('theme', theme)
    }
  },

  actions: {

    // action for registration of a new user
    register ({ commit, state }, user) {
      return new Promise((resolve, reject) => {
        if (!state.usernames.includes(user.username) && user.username !== 'admin') {
          // checks wheather username already exist
          // if not user is succesfully registered
          commit('REGISTER', user)
          resolve()
        } else {
          // if user already exits then error is returened
          // commit('register_failure', 'User with this username already exists')
          const err = new Error('Username Already Exist')
          reject(err)
        }
      })
    },

    // action to autenticate an existing user
    login ({ commit, state }, user) {
      return new Promise((resolve, reject) => {
        console.log('In Login')
        let userId = -1// stores array index of user
        userId = state.usernames.indexOf(user.username)// returns the index if username in state.usernames
        if (userId !== -1) {
          // IF is executed if the username is present in state.usernames
          if (state.users[userId].password === user.password) {
            console.log('User')
            commit('LOGIN', this.state.users[userId])
            console.log(state.user)
            resolve()
          } else {
            console.log('error')
            reject(Error('Unabale to login using the following credintial'))
          }
        } else if (user.username === 'admin' && user.password === 'admin') {
          // executed if password is correct
          console.log('Admin')
          commit('ADMIN_LOGIN')
          resolve()
        }
      })
    },

    // action for LOGOUT operation
    logout ({ commit }) {
      return new Promise((resolve, reject) => {
        // commits LOGOUTs mutation
        commit('LOGOUT')
        resolve()
      })
    },

    // action to initialize Theme
    initTheme ({ commit }) {
      const cachedTheme = localStorage.theme ? localStorage.theme : false
      const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

      if (cachedTheme) {
        // Executed if theme is in localstorage
        commit('SET_THEME', cachedTheme)
      } else if (userPrefersDark) {
        // commits user's device default theme
        commit('SET_THEME', 'dark')
      } else {
        // commit light theme as default
        commit('SET_THEME', 'light')
      }
    },
    // action for changing theme
    toggleTheme ({ commit }) {
      // swith theme from light to datrkand vice versa
      switch (localStorage.theme) {
        case 'light':
          commit('SET_THEME', 'dark')
          break

        default:
          commit('SET_THEME', 'light')
          break
      }
    }

  },

  getters: {
    isLoggedIn: state => !!state.currentUser, // current ststus of the router
    getTheme: state => state.theme, // returns Current Theme
    getUser: state => state.users, // returns users list
    getCurrentUser: state => state.user, // returns currentuser
    isAdmin: state => !!state.isAdminUser // tells wheather the user is admin or not

  },
  modules: {
  }
})
