import db from '@/api/firebase'
import moment from 'moment'

const AGES = {
  male: 80,
  female: 85
}
const MINUTES_IN_A_YEAR = 525600

const state = {
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
  fetchProfile({ commit, dispatch }, id) {
    db.fetchProfile(id)
      .then((profile) => {
        console.log(profile)
        dispatch('setBirthdate', profile.birthdate)
        dispatch('setGender', profile.gender)
      })
      .catch(err => console.error(err))
  },
  setBirthdate({ commit }, birthdate) {
    window.localStorage.setItem('birthdate', birthdate)
    commit('SET_BIRTHDATE', birthdate)
  },
  setGender({ commit }, gender) {
    window.localStorage.setItem('gender', gender)
    commit('SET_GENDER', gender)
  }
}

const mutations = {
  SET_BIRTHDATE: (state, birthdate) => {
    state.birthdate = birthdate
  },
  SET_GENDER: (state, gender) => {
    state.gender = gender
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
