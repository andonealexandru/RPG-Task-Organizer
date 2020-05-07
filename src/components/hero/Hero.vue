<template>
  <div class="heroTile">
    <div>
      <progress class="nes-progress" style="visibility: hidden" /><br>
      <img v-show="currentHeroState === 'Idle'" class="caracter"  src="../../assets/normal-pro.gif">
      <img v-show="currentHeroState === 'Attacking'" class="caracter" src="../../assets/attack-pro.gif">
    </div>

<!-- actions-menu START -->
  <div class="actions-menu kong">
    <div class="contain">
      <div class="col">
        <h1 class="kong">Actions:</h1>
        <ul>
          <li><label v-on:click="heroAttack()">Attack</label></li>
          <li><label v-on:click="heroHeal()">Heal</label></li>
          <li><label v-on:click="heroSpecialAttack()">Overdrive</label></li>
        </ul>
      </div>
      <div class="col">
        <h1 class="kong">Stats:</h1>
        <ul>
          <li>Level: {{ heroLevel }}</li>
          <li>HP:
          <progress class="nes-progress is-success" :value="currentHealth" v-bind:max="maxHealth" />
          </li>
        </ul>
      </div>
      <div class="col">
        <h1 class="kong">Battle Info:</h1>
        <ul>
          <li>
            <div class="actionMessages">

            <div class="actionMessage">
              {{ firstMessage }}
            </div>

            <div class="actionMessage">
              {{ secondMessage }}
            </div>

            <div class="actionMessage">
              {{ thirdMessage }}
            </div>

          </div>
          </li>
        </ul>
      </div>
      <div class="col">
        <h1 class="kong">Controls:</h1>
        <ul>
          <li>Mouse or</li>
          <li>A: attack</li>
          <li>H: Heal</li>
          <li>S: Special move</li>
        </ul>
      </div>
      <div class="clearfix" />
    </div>
  </div>
<!-- END OF actions-menu -->
</div>
</template>

<script>

  export default {
    props: [],
    data() { return {
        cooldown: 0
    }
  },
    components: {},
    mounted() {
      let self = this
      window.addEventListener('keydown', function(e) {
        if (self && self.$store) {
          let view = self.$store.state.currentView
          if (view !== 'playGame') {
            return
          }
        }

        if (e.keyCode === 65) {
          self.heroAttack()
        }
        if (e.keyCode === 72) {
          self.heroHeal()
        }
        if (e.keyCode === 83) {
          self.heroSpecialAttack()
        }
      });
    },
    computed: {
      currentHeroState() {
        return this.$store.state.currentHeroState
      },
      currentHealth() {
        return this.$store.state.currentHeroHealth

      },
      maxHealth() {
        return this.$store.state.currentHeroMaxHealth
      },
      heroLevel() {
        return this.$store.state.currentHeroLevel
      },
      heroAttackPower() {
        return 15
      },
      heroHealPower() {
        return this.heroLevel * 20
      },
      firstMessage() {
        return this.$store.state.currentActionMessagesFirst
      },
      secondMessage() {
        return this.$store.state.currentActionMessagesSecond
      },
      thirdMessage() {
        return this.$store.state.currentActionMessagesThird
      }
    },
    methods: {
      heroAttack() {
        this.$store.commit('damageEnemy', this.heroAttackPower)
        this.$store.commit('updateHeroStatus', 'Attacking')
        this.$store.commit('damageHero')
        let message = {
          action: 'attack',
          amount: this.heroAttackPower,
          cooldown: this.cooldown
        }
        this.$store.commit('updateCurrentActionMessages', message)
        if (this.cooldown > 0) {
          this.cooldown -= 1
        }
      },
      heroHeal() {
        this.$store.commit('healHero', this.heroHealPower)
        this.$store.commit('damageHero')
        let message = {
          action: 'heal',
          amount: this.heroHealPower,
          cooldown: this.cooldown
        }
        this.$store.commit('updateCurrentActionMessages', message)
        if (this.cooldown > 0) {
          this.cooldown -= 1
        }
      },
      heroSpecialAttack() {
        if (this.cooldown > 0) {
          return
        }
        let specialAttackPower = this.heroAttackPower * 1.5
        this.$store.commit('damageEnemy', specialAttackPower)
        this.$store.commit('updateHeroStatus', 'Attacking')
        this.$store.commit('damageHero')
        this.cooldown = 3
        let message = {
          action: 'special attack',
          amount: specialAttackPower,
          cooldown: this.cooldown
        }
        this.$store.commit('updateCurrentActionMessages', message)
      }
    },
    watch: {
      currentHeroState() {
        if (this.currentHeroState === 'Dead') {
          this.$store.commit('changeView', 'gameOver')
        }
      }
    }
  }

</script>

<style scoped>

  .nes-progress{
    height: 3vh;
  }

  .caracter{
    height: 250px;
    width: 250px;
    margin-bottom: 100px;
    image-rendering: pixelated;
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;
  }

  .actions-menu {
    width: 100vw;
    margin-left: 0;
    top: 0;
    position: fixed;
    height: auto;
    background-image: linear-gradient(to top,rgba(95, 0, 63, 0) , #1a001a);
  }

  .actions-menu .col {
    width: 190px;
    height: auto;
    float: left;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    padding: 0px 20px 20px 20px;
  }

  .actions-menu .col h1 {
    margin: 0;
    padding: 0;

    font-size: 15px;
    line-height: 17px;
    padding: 20px 0px 5px 0px;
    color: rgba(255, 255, 255, 0.596);
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: 0.250em;
  }

  .actions-menu .col ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .actions-menu .col ul li {
    color: #999999;
    font-size: 14px;

    font-weight: bold;
    padding: 5px 0px 5px 0px;
    cursor: pointer;
    transition: .2s;
    -webkit-transition: .2s;
    -moz-transition: .2s;
  }

  .social ul li {
    display: inline-block;
    padding-right: 5px !important;
  }

  .actions-menu .col ul li:hover {
    color: #ffffff;
    transition: .1s;
    -webkit-transition: .1s;
    -moz-transition: .1s;
  }
  .clearfix {
    clear: both;
  }

@media only screen and (min-width: 1280px) {
  .contain {
    width: 1200px;
    margin: 0 auto;
  }
}
@media only screen and (max-width: 1139px) {
  .contain .social {
    width: 1000px;
    display: block;
  }
  .social h1 {
    margin: 0px;
  }
}
@media only screen and (max-width: 950px) {
  .actions-menu .col {
    width: 33%;
  }
  .actions-menu .col h1 {
    font-size: 14px;
  }
  .actions-menu .col ul li {
    font-size: 13px;
  }
}
@media only screen and (max-width: 500px) {
    .actions-menu .col {
      width: 50%;
    }
    .actions-menu .col h1 {
      font-size: 14px;
    }
    .actions-menu .col ul li {
      font-size: 13px;

    }
}
@media only screen and (max-width: 340px) {
  .actions-menu .col {
    width: 100%;
  }
}
</style>
