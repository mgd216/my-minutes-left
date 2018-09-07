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
  minLeftVizComponent: 'MinLeftDoughnutChart',
  title: DEFAULT_TITLE
}

const getters = {
  isClipped: state => state.clipped,
  isNavVisible: state => state.nav,
  isFixed: state => state.fixed,
  navItems: state => state.navItems,
  isMiniNav: state => state.miniNav,
  minLeftVizComponent: state => state.minLeftVizComponent,
  title: state => state.title
}

const actions = {
  showNav({ commit}) {
    commit('SHOW_NAV')
  },
  showMiniNav({ commit }) {
    commit('SET_MINI_NAV', true)
  },
  hideMiniNav({ commit }) {
    commit('SET_MINI_NAV', false)
  },
  loadMinLeftVizComponent({commit}, component) {
    commit('LOAD_MIN_LEFT_VIZ',component)
  }
}

const mutations = {
  SHOW_NAV: (state) => {
    state.nav = true
    window.setTimeout(() => {
      state.nav = false
    }, 1000)
  },
  SET_MINI_NAV: (state, isVisible) => {
    state.miniNav = isVisible
  },
  LOAD_MIN_LEFT_VIZ: (state, component) => {
    state.minLeftVizComponent = component
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
