const DEFAULT_TITLE = 'My Minutes Left'

const state = {
  clipped: true,
  nav: false,
  fixed: true,
  navItems: [
    { icon: 'home', title: 'Home', route: '/' },
    { icon: 'info', title: 'About', route: '/about' }
  ],
  miniNav: false,
  title: DEFAULT_TITLE
}

const getters = {
  isClipped: state => state.clipped,
  isNavVisible: state => state.nav,
  isFixed: state => state.fixed,
  navItems: state => state.navItems,
  isMiniNav: state => state.miniNav,
  title: state => state.title
}

const actions = {
  showNav({ commit, state }) {
    commit('SHOW_NAV')
  },
  showMiniNav({ commit, state }) {
    commit('SET_MINI_NAV', true)
  },
  hideMiniNav({ commit, state }) {
    commit('SET_MINI_NAV', false)
  }
}

const mutations = {
  SHOW_NAV: (state) => {
    console.log("SHOW NAV: ", state.nav);
    state.nav = true
    window.setTimeout(() => {
      state.nav = false
      console.log("SHOW NAV: ", state.nav)
    }, 1000)
  },
  SET_MINI_NAV: (state, isVisible) => {
    console.log("SET MINI: ", isVisible);
    state.miniNav = isVisible
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
