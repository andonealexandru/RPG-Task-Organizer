<template>
  <div class="game-over-screen">
     <div class="game-over-text">
       <p class="title kong">GAME OVER!</p>
        <br>

     </div>
     <button type="button" class="nes-btn is-warning kong" v-on:click="reload()">
        Return
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
        gameOverText: ''
      }
    },
    components: {},
    mounted() {
      this.loadContent()
    },
    computed: {},
    methods: {
      reload() {
        window.location.reload(true);
      },
      async loadContent() {
        const slug = 'game-over';
        try {
          const res = await bucket.getObject({ slug });
          this.gameOverText = res.object.content
        } catch(e) {
          console.log('Error getting Game Over Object', e)
        }
      }

    },
    watch: {}
  }

</script>

<style scoped>
  .game-over-screen {
    background-image: url(https://odyssee.site44.com/bg/city-flying-cars.gif);
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    color: white;
  }

  .game-over-screen p {
    margin: 0 !important;
  }

  .game-over-text {
    padding-top: 10%;
    text-shadow: 2px 2px 4px #000000;
  }

  .nes-btn{
    width: 500px;
    height: 70px;
    font-size: 30px;
  }
  .title{
    font-size: 100px;
  }
</style>
