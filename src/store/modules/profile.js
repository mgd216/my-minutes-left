import moment from 'moment';

const AGES = {
  male: 80,
  female: 85,
};
const MINUTES_IN_A_YEAR = 525600;

const state = {
  birthDate: null,
  gender: 'MALE',
};

const getters = {
  birthDate: state => state.birthDate,
  gender: state => state.gender,
  isProfileComplete: state => (state.birthDate ? (!!state.gender) : false),
  estimatedAge: state => (state.gender == 'MALE' ? AGES.male : AGES.female),
  estimatedMinutes: (state, getters) => getters.estimatedAge * MINUTES_IN_A_YEAR,
  millisecondsFromBirthDate: state => moment().diff(moment(state.birthDate)),
  minutesOld: (state, getters) => moment.duration(getters.millisecondsFromBirthDate).asMinutes(),
  minutesLeft: (state, getters) => getters.estimatedMinutes - getters.minutesOld,
};

const actions = {
  setBirthDate({ commit }, birthDate) {
    console.log('Setting Birthdate: ', birthDate);
    commit('SET_BIRTHDATE', birthDate);
  },
  setGender({ commit }, gender) {
    commit('SET_GENDER', gender);
  },
};

const mutations = {
  SET_BIRTHDATE: (state, birthDate) => {
    state.birthDate = birthDate;
  },
  SET_GENDER: (state, gender) => {
    state.gender = gender;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
