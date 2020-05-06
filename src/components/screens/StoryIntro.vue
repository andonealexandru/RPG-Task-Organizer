<template>
  <div class="storyIntro">
    <div class="storyIntroText kong" style="text-shadow: 2px 2px black;">
        <p class = "TextSize">OFFICIAL TRANSMISSION INCOMING:</p>
        <br>
            YOU HAVE BEEN SPOTTED! I REPEAT, YOU HAVE BEEN SPOTTED! <br>
            EVERYONE, PREPARE FOR COMBAT!
    </div>

    <button type="button" class="nes-btn kong" v-show="showContinue" v-on:click="changeView('playGame')">
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
        storyText: '',
        showContinue: false
      }
    },
    components: {},
    mounted() {
      this.getResObject()

      let self = this
      setTimeout(function(){
        self.showContinue = true;
      }, 4000);
    },
    computed: {
      storyIntroBackground() {
        return ''
      }
    },
    methods: {
      changeView(view) {
        this.$store.commit('changeView', view)
      },
      async getResObject() {
        const slug = 'story'
        try {
          const res = await bucket.getObject({ slug })
          this.storyText = res.object.content
        }
        catch(e) {
          console.log('Error getting Story Intro Res', e)
        }
      },
    },
    watch: {}
  }

</script>

<style scoped>
  .storyIntro {
    background-image: url('https://i.pinimg.com/originals/37/38/c0/3738c0c68850f3882c590fe6f6a01711.gif');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100vh;
    font-size: 32px;
    color: white;
  }

  .storyIntroText {
    width: 70%;
    margin: 0 auto 0 auto;
    padding: 30px;
  }

  .nes-btn{
    width: 500px;
    height: 70px;
    font-size: 30px;
  }

  .TextSize{
    font-size: 40px;
  }
</style>
