import { firebaseAuth, googleProvider } from '../../config/firebaseConfig'
import router from '../../router'

const state = {
    user: null
}

const getters = {
    isLoggedIn: state => !!state.user
}

const actions = {
    authStatusChange({ commit, dispatch }, user) {
        if (user) {
            dispatch('loginUser', user)
        }
        else {
            dispatch('logout')
        }
    },
    loginEmailPassword({ commit, dispatch }, user) {
        return new Promise((resolve, reject) => {
            firebaseAuth().signInWithEmailAndPassword(user.email, user.password)
                .then(cred => {
                    dispatch('loginUser', cred.user)
                    resolve()
                })
                .catch(err => reject(err))
        })
    },
    loginGoogle({ commit }, user) {
        firebaseAuth().signInWithRedirect(googleProvider)
    },
    loginUser({ commit, dispatch }, user) {
        dispatch('fetchProfile', user)
        router.push('/')
        commit('SET_USER', user)
    },
    logout({ commit, dispatch }) {
        firebaseAuth().signOut()
        dispatch('clearProfile')
        commit('SET_USER', null)
    },
    signupEmailPassword({ commit, dispatch }, user) {
        return new Promise((resolve, reject) => {
            firebaseAuth().createUserWithEmailAndPassword(user.email, user.password)
                .then(cred => {
                    commit('SET_USER', cred.user)
                    dispatch('createProfile', cred.user)
                    resolve()
                })
                .catch(err => reject(err))
        })
    },
}

const mutations = {
    SET_USER: (state, user) => {
        state.user = user
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}
