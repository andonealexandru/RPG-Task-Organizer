<template>
  <div class="victoryScreen">
    <div class="victory-screen-text kong">
      <p class="title">VICTORY!<p>
      <p>Back to work now, shall we?</p>
    </div>
    <button type="button" class="nes-btn kong" v-on:click="reloadGame()">
      Continue
    </button>
  </div>
</template>

<script>

  import bucket from '../../javascript/config.js'
  const Cosmic = require('cosmicjs');
  const api = Cosmic();

  export default {
    props: [],
    data() {
      return {
        content: ''
      }
    },
    components: {},
    mounted() {
      this.loadContent()
    },
    computed: {},
    methods: {
      reloadGame() {
        window.location.reload(true);
      },
      async loadContent() {
        const slug = 'victory';
        try {
          const res = await bucket.getObject({ slug });
          this.content = res.object.content
        } catch(e) {
          console.log('Error getting Victory Screen Object', e)
        }
      }
    },
    watch: {}
  }

</script>

<style scoped>
  .victoryScreen {
    background-image: url('https://cdna.artstation.com/p/assets/images/images/025/789/352/original/pixel-jeff-galaxy-far-far-away.gif?1586928273');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100vh;
    color: white;
    padding: 50px;
    font-size: 36px;
  }

  .nes-btn{
    width: 500px;
    height: 70px;
    font-size: 30px;
  }
  .title{
    font-size: 100px;
    margin: 0;
    text-shadow: 2px 2px 4px #000000;
  }
</style>
