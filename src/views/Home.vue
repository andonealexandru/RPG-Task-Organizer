<template>
  <div class="home">
      <div class="actions-menu kong">
        <div class="contain">
            <div class="col">
                <ul>
                    <li>
                        <img src = "../assets/normal-pro.gif" class = "caracter">
                    </li>
                </ul>
            </div>
            <div class="col">
                <h1 class="kong">Stats:</h1>
                <ul>
                <li>Level: {{ heroLevel }}</li>
                <li>MAX HP: {{ maxHealth }}</li>
                <li>Current HP: {{ currentHealth }}</li>
                </ul>
            </div>
            <br>
            <div>
                <ul>
                    <li>
                        <button type="button" class="nes-btn uk-align-right" @click="$router.push('game')">Take a break</button>
                    </li>
                </ul>
            </div>


            <div class="clearfix" />
            </div>
    </div>
    <vk-grid class="uk-child-width-1-3@m uk-padding-large">
      <List
        :list="list"
        :group="1"
        listTitle="To do"
        icon="star"
      />
      <List
        :list="list2"
        :group="2"
        listTitle="Daily tasks"
        icon="future"
      />
      <List
        :list="list3"
        :group="1"
        listTitle="Habits"
        icon="bolt"
      />
    </vk-grid>
  </div>
</template>

<script>
  import List from "../components/website/List";

  export default {
      name: "home",
      display: "Transitions",
      order: 7,
      components: {
          List
      },
      data() {
          return {
              list: [
                  {
                      name: 'Element 1.1'
                  },
                  {
                      name: 'Element 1.2'
                  },
                  {
                      name: 'Element 1.3'
                  },
                  {
                      name: 'Element 1.4'
                  },
                  {
                      name: 'Element 1.5'
                  },
                  {
                      name: 'Element 1.6'
                  },
                  {
                      name: 'Element 1.7'
                  }
              ],
              list2: [
                  {
                      name: 'Element 2.1'
                  },
                  {
                      name: 'Element 2.2'
                  },
                  {
                      name: 'Element 2.3'
                  },
                  {
                      name: 'Element 2.4'
                  },
                  {
                      name: 'Element 2.5'
                  },
                  {
                      name: 'Element 2.6'
                  },
                  {
                      name: 'Element 2.7'
                  },
                  {
                      name: 'Element 2.8'
                  },
                  {
                      name: 'Element 2.9'
                  }
              ],
              list3: [
                  {
                      name: 'Element 3.1'
                  },
                  {
                      name: 'Element 3.2'
                  },
                  {
                      name: 'Element 3.3'
                  },
                  {
                      name: 'Element 3.4'
                  },
                  {
                      name: 'Element 3.5'
                  },
                  {
                      name: 'Element 3.6'
                  },
                  {
                      name: 'Element 3.7'
                  },
                  {
                      name: 'Element 3.8'
                  }
              ]
          };
      },
      computed: {
      currentHealth() {
        return this.$store.state.currentHeroHealth

      },
      maxHealth() {
        return this.$store.state.currentHeroMaxHealth
      },
      heroLevel() {
        return this.$store.state.currentHeroLevel
      }
    }
  };

</script>

<style>
  .nes-btn{
        width: 300px;
        cursor: pointer;
}
  .caracter{
        width: 430px;
        height: 180px;
        image-rendering: pixelated;
        image-rendering: -moz-crisp-edges;
        image-rendering: crisp-edges;
  }
  .flip-list-move {
    transition: transform 0.5s;
  }
  .no-move {
    transition: transform 0s;
  }
  .ghost {
    opacity: 0.5;
    background: #c8ebfb;
  }
  .list-group {
    min-height: 20px;
  }
  .list-group-item {
    cursor: move;
  }
  .list-group-item i {
    cursor: pointer;
  }
  .actions-menu {
    width: 100vw;
    margin-left: 0;
    top: 0;
    height: auto;
    background-image: linear-gradient(to top,rgba(95, 0, 63, 0) , #1a001a);
    border-bottom :1px solid #999999;
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
