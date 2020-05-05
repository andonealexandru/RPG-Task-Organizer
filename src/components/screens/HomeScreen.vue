<template>
  <div class="homeScreen" :style="`background-image:url(https://data.whicdn.com/images/299735703/original.gif);`">
    <div class="homeScreenTitle">
      <!-- <img :src="`${homeScreenTitleImage}`"> -->
      <img src="../../assets/text.png" >
    </div>

    <div class="homeScreenOptions uk-width-1-1">

      <button type="button" class="nes-btn is-warning kong" v-on:click="changeView('storyIntro')">
        Play Game
      </button>
      <br>
      <br>
      <button type="button" class="nes-btn is-warning kong" v-on:click="changeView('howToPlay')">
        How To Play
      </button>

    </div>
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
        homeScreenTitle: '',
        homeScreenImage: '',
        homeScreenTitleImage: ''
      }
    },
    components: {},
    mounted() {
      this.getResObject();
      let self = this;
      window.addEventListener('keydown', function(e) {
        if (e.keyCode === 13) {
          if (self && self.$store) {
            let view = self.$store.state.currentView;
            if (view === 'enemyDefeated' || view === 'storyIntro') {
              return self.changeView('playGame')
            }
            if ( view === 'tutorial' || view === 'howToPlay') {
              return self.changeView('homeScreen')
            }
            if (view === 'gameOver' || view === 'victoryScreen') {
              window.location.reload(true);
            }
          }
        }
      });
    },
    computed: {},
    methods: {
      changeView(view) {
        this.$store.commit('changeView', view)
      },
      async getResObject() {
        const slug = 'home';
        try {

          const res = await bucket.getObject({ slug });
          this.resObject = res;

          let metafields = res.object.metafields;
          metafields.map((field) => {
            if (field.title === 'HomeScreenTitle') {
              this.homeScreenTitle = field.value
            }
            //TODO: Clean these if statements up
            if (field.title === 'HomeScreenImage') {
              this.homeScreenImage = field.url
            }
            if (field.title === 'HomeScreenTitleImage') {
              this.homeScreenTitleImage = field.url
            }
          })
          //
          // const bucket = api.bucket({
          //   slug: 'cosmic-game',
          //   read_key: ''
          // })
          // const data = (await bucket.getMedia({
          // })).media
        }
        catch(e) {
          console.log('Error getting Home Screen Object', e)
        }
      },
    },
    watch: {}
  }

</script>

<style scoped>
  .homeScreen {
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed!important;
    overflow:hidden;
    text-align: center;
  }

  .homeScreenTitle {
    margin-top: 75px;
  }

  .homeScreenOptions {
   /* margin: 45px auto 0 auto;
    width: 30%; */
    margin-top: 45px;
    cursor: pointer;
  }

  .nes-btn{
    width: 500px;
    height: 70px;
    font-size: 30px;
    cursor: pointer;
  }

  .homeScreenOption {
    border: 2px solid #92ced6;
    color: #92ced6;
    padding: 10px;
    font-size: 18px;
    font-weight: 800;
    text-transform: uppercase;
    margin: 25px;
  }
</style>
