<template>
  <div class="tutorial-screen">
    <h1 class="kong"> HOW TO PLAY </h1> <br><br>
    <div class="tutorial-content kong">
      <p>
        During your turn, you can choose to attack, heal, or use a special attack.
Once you perform an action, your enemy will perform one as well!



Controls:

You can click on the hero's buttons, or use the following commands:

 - Attack: (A)

 - Heal: (H)

 - Special Attack: (S) 

You can also skip screens by pressing Enter!



Leveling Up:

 Everytime you defeat an enemy, you gain some experience. Given enough experience,
you will level up!

If you level up, your attack power goes up. You will also heal more, and your health bar will replenish!
      </p>
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
