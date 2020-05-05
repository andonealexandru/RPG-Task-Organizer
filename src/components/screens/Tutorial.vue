<template>
  <div class="tutorial-screen">
    <h1 class="kong"> HOW TO PLAY </h1> <br><br>
    <div class="tutorial-content kong" v-html="tutorialContent">

    </div>
    <button type="button" class="nes-btn kong" v-on:click="changeView('homeScreen')">
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
        tutorialContent: ''
      }
    },
    components: {},
    mounted() {
      this.loadTutorialContent()
    },
    computed: {},
    methods: {
      changeView(view) {
        this.$store.commit('changeView', view)
      },
      async loadTutorialContent() {
        const slug = 'tutorial'
        try {
          const res = await bucket.getObject({ slug })
          this.tutorialContent = res.object.content
        } catch(e) {
          console.log('Error getting Tutorial Object', e)
        }
      }
    },
    watch: {}
  }

</script>

<style scoped>
  .tutorial-screen {
    background-image: url(https://cutewallpaper.org/21/vaporwave-pixel-art-wallpaper/19-Pixel-Art-Wallpapers-that-Will-Make-Your-Desktop-Retro.png);
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color: #dfdde0;
    padding: 50px;
  }

  .tutorial-screen h1 {
    margin: 0;
    color: #dfdde0;
  }

  .tutorial-screen p {
    font-size: 36px;
    background: black;
  }
  .nes-btn{
    width: 500px;
    height: 70px;
    font-size: 30px;
    cursor: pointer;
  }
  .tutorial-content {
    font-size: 20px;
  }
</style>
