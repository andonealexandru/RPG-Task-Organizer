import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    // Authentication
    logged: false,
    authorization: '',
    userId: '',

    // Game
    currentView: 'homeScreen',
    currentViewOptions: ['homeScreen', 'howToPlay', 'storyIntro',
      'enemySelectionScreen', 'playGame', 'enemyDefeated'],
    currentActionMessagesFirst: 'Begin Fight',
    currentActionMessagesSecond: '',
    currentActionMessagesThird: 'Good luck!',

    // Hero Stats
    currentHeroHealth: 100,
    currentHeroMaxHealth: 100,
    currentHeroLevel: 1,
    currentHeroExperience: 0,
    experienceToNextLevel: 50,
    currentHeroState: 'Idle',
    currentHeroStateOptions: ['idle', 'attacking1', 'attacking2', 'poisoned', 'slain'],

    // Enemy Stats
    currentEnemy: {},
  },
  getters: {

  },
  mutations: {
    changeLogged(state) {
      state.logged = true;
    },
    changeUserId(state, userId) {
      state.userId = userId;
    },
    changeAuth(state, authorization) {
      state.authorization = authorization;
    },
    changeView(state, view) {
      return state.currentView = view
    },
    updateCurrentActionMessages(state, message) {
      state.currentActionMessagesFirst = `You ${message.action} for ${message.amount}!`;
      state.currentActionMessagesSecond = `${state.currentEnemy.name} attacks for ${state.currentEnemy.damage}!`;

      if (message.cooldown === 0) {
        state.currentActionMessagesThird = `Your Overdrive is ready!`
      } else {
        state.currentActionMessagesThird = `Your Overdrive will be ready in ${message.cooldown} turns!`
      }

    },
    initializeEnemy(state, enemy) {
      state.currentEnemy = enemy
    },
    damageEnemy(state, damage) {
      return state.currentEnemy.health = state.currentEnemy.health - damage
    },
    damageHero(state) {
      state.currentHeroHealth = state.currentHeroHealth - state.currentEnemy.damage;
      if (state.currentHeroHealth <= 0) {
        state.currentHeroState = 'Dead'
      }
    },
    healHero(state, heal) {
      state.currentHeroHealth = state.currentHeroHealth + heal;
      if (state.currentHeroHealth > state.currentHeroMaxHealth) {
        state.currentHeroHealth = state.currentHeroMaxHealth
      }
    },
    updateHeroStatus(state, status) {
      state.currentHeroState = status;
      if (status === 'Attacking') {
        setTimeout(function(){
          state.currentHeroState = 'Idle';
        }, 1560);
      }
    },
    grantExperience(state, exp) {
      state.experienceToNextLevel = state.experienceToNextLevel - exp;
      if (state.experienceToNextLevel <= 0) {
        state.currentHeroLevel += 1;
        state.currentHeroMaxHealth += 50;
        state.currentHeroHealth = state.currentHeroMaxHealth;
        state.experienceToNextLevel = (state.currentHeroLevel * 50)
      }
    }
  }
});

export default store
