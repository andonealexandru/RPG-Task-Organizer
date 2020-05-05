<template>
  <div class="playGameScreen">
    <vk-grid class="uk-child-width-1-2 uk-position-bottom">
      <Hero class="heroTile"/>
      <Enemy class="enemyTile"/>
    </vk-grid>
  </div>
</template>

<script>
  import Hero from '../hero/Hero.vue'
  import Enemy from '../enemy/Enemy.vue'
  export default {
    props: [],
    data() {
      return {}
    },
    components: {
      Hero,
      Enemy
    },
    mounted() {},
    computed: {},
    methods: {},
    watch: {
    }
  }

</script>

<style scoped>
  .playGameScreen {
    background-image: url('../../assets/gameBackground.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100vh;
  }

  .fight {
    position: absolute;
    top: 0;
    left: 0;
  }

</style>
