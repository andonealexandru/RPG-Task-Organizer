<template>
  <div class="enemyDefeated">
  <center>
    <br>
    <br>
      <div class="nes-container is-dark with-title kong">
        <br>

        <h1 class="kong" style="color: #dfdde0"> Enemy Defeated! </h1>
        <br><br><br><br><br>
        <span class="currentLevel" style="color: #dfdde0">
          Current Level: {{ currentLevel }}
        </span>
        <br>
        <span class="currentHealth" style="color: #dfdde0">
          Current Health: {{ currentHealth }}
        </span>
        <br>
        <div class="experienceToNextLevel" style="color: #dfdde0">
          Experience To Next Level: {{ experienceToNextLevel }}
        </div>
        <button type="button" class="nes-btn is-warning" v-on:click="changeView('playGame')"> Continue </button>

      </div>
  </center>
  </div>
</template>

<script>

  export default {
    props: [],
    data() { return {} },
    components: {},
    mounted() {},
    computed: {
      currentHealth() {
        return this.$store.state.currentHeroHealth
      },
      currentLevel() {
        return this.$store.state.currentHeroLevel
      },
      experienceToNextLevel() {
        return this.$store.state.experienceToNextLevel
      }
    },
    methods: {
      changeView(view) {
        this.$store.commit('changeView', view)
      },
    },
    watch: {}
  }

</script>

<style scoped>
  .enemyDefeated {
    background-image: url('https://data.whicdn.com/images/299735703/original.gif');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100vh;
    color: white;
    padding: 50px;
  }

  .enemyDefeated h1 {
    margin: 0;
  }

  .nes-btn{
    width: 500px;
    height: 70px;
    font-size: 30px;
    margin-top: 20vh
  }

  .nes-container{
    width: 50vw;
    min-width: 600px;
  }

</style>
