<template>
  <div class="enemyTile">
    <div>
      <progress class="nes-progress is-error" :value="currentEnemy.health" v-bind:max="currentEnemy.max_health"/>
      <img v-show="currentHeroState === 'Idle'" src="../../assets/shame_shame_shame.gif">
      <img v-show="currentHeroState === 'Attacking'" src="../../assets/shame_shame_shame.gif">
    </div>
  </div>
</template>

<script>
  import EnemyList from './EnemyList.json'

  export default {
    props: [],
    data() {
      return {
        currentEnemyNames: [],
      }
    },
    components: {},
    beforeCreate () {
      this.currentEnemyNames = Object.keys(EnemyList)
      this.$store.commit('initializeEnemy', EnemyList[this.currentEnemyNames[0]])
    },
    mounted() {
      this.currentEnemyNames = Object.keys(EnemyList)
    },
    computed: {
      currentEnemy() {
        // let enemy = this.$store.state.currentEnemy
        return this.$store.state.currentEnemy
      },
      currentHeroState() {
        return this.$store.state.currentHeroState
      },
      currentEnemyHealth() {
        return this.currentEnemy.health
      },
      currentEnemyMaxHealth() {
        return this.currentEnemy.max_health
      },
      calculateHealthBar() {
        if (this.currentEnemy) {
          return {
            width: (this.currentEnemyHealth/this.currentEnemyMaxHealth)*100 + '%'
          }
        }
      }
    },
    methods: {
      enemyKilled() {
        if (this.currentEnemyNames.length === 1) {
          this.$store.commit('changeView', 'victoryScreen')
          return
        }
        this.$store.commit('grantExperience', this.currentEnemy.experience)
        this.$store.commit('changeView', 'enemyDefeated')
        this.updateEnemy()
      },
      updateEnemy() {
        this.currentEnemyNames.shift()
        this.$store.commit('initializeEnemy', EnemyList[this.currentEnemyNames[0]])
      }
    },
    watch: {
      currentEnemyHealth() {
        if (this.currentEnemyHealth <= 0) {
          this.enemyKilled()
        }
      }
    }
  }

</script>

<style scoped>

    .nes-progress{
    height: 3vh;
    width: 105px;
  }
</style>
