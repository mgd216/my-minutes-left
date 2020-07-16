import { db } from '../../config/firebaseConfig'
import moment from 'moment'
import router from '../../router'

const AGES = {
  male: 80,
  female: 85
}
const MINUTES_IN_A_YEAR = 525600

const state = {
  userId: null,
  birthdate: window.localStorage.getItem('birthdate'),
  gender: window.localStorage.getItem('gender') || 'MALE'
}

const getters = {
  birthdate: state => state.birthdate,
  gender: state => state.gender,
  isProfileComplete: state => (state.birthdate ? (!!state.gender) : false),
  estimatedAge: state => (state.gender === 'MALE' ? AGES.male : AGES.female),
  estimatedMinutes: (state, getters) => getters.estimatedAge * MINUTES_IN_A_YEAR,
  millisecondsFromBirthdate: state => moment().diff(moment(state.birthdate)),
  minutesOld: (state, getters) => moment.duration(getters.millisecondsFromBirthdate).asMinutes(),
  minutesLeft: (state, getters) => getters.estimatedMinutes - getters.minutesOld
}

const actions = {
  clearProfile({ commit, dispatch }) {
    dispatch('setBirthdate', null);
    dispatch('setGender', 'MALE')
  },
  createProfile({ commit, dispatch }, user) {
    let ref = db.collection('profiles').doc(user.uid)
    let profile = {
      userId: user.uid,
      birthdate: null,
      gender: 'MALE'
    }
    ref.set(profile)
      .then(() => {
        dispatch('updateProfile', profile)
        router.push('/')
      })
      .catch(err => {
        console.error(err)
      })
  },
  fetchProfile({ commit, dispatch }, user) {
    let ref = db.collection('profiles').doc(user.uid)
    ref.get()
      .then(doc => {
        dispatch('updateProfile', doc.data())
      })
  },
  updateProfile({ commit, dispatch }, profile) {
    dispatch('setUserId', profile.userId)
    dispatch('setBirthdate', profile.birthdate)
    dispatch('setGender', profile.gender)
  },
  setBirthdate({ commit }, birthdate) {
    commit('SET_BIRTHDATE', birthdate)
  },
  setGender({ commit }, gender) {
    commit('SET_GENDER', gender)
  },
  setUserId({ commit }, userId) {
    commit('SET_USER_ID', userId)
  },
}

const mutations = {
  SET_BIRTHDATE: (state, birthdate) => {
    state.birthdate = birthdate
  },
  SET_GENDER: (state, gender) => {
    state.gender = gender
  },
  SET_USER_ID: (state, userId) => {
    state.userId = userId
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
