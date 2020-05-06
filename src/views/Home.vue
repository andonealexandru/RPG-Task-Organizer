<template>
  <div class="home">
      <div class="actions-menu2 kong">
        <div class="contain2">
            <div class="col">
                <ul>
                    <li>
                        <img src = "../assets/normal-pro.gif" class = "caracter">
                    </li>
                </ul>
            </div>
            <div class="col">
                <h1 class="kong2">Stats:</h1>
                <ul>
                <li>Level: {{ heroLevel }}</li>
                <li>MAX HP: {{ maxHealth }}</li>
                </ul>
            </div>
            <div class="col">
                <h1 class="kong2"><img src="../assets/coin.png" alt="gold" class="coin">: 50</h1>

            </div>
            <div class = "col">
                <ul>
                    <li>
                    </li>
                    <li>
                        <button type="button" class="nes-btn" @click="$router.push('game')">Break</button>
                    </li>
                    <li>
                      <button type="button" class="nes-btn" @click="$router.push({name: 'Description'})">Home</button>
                    </li>
                </ul>
            </div>
            <div class = "col">
              <ul>
                <li>
                    </li>
                <li>
                        It costs you 50 <img src="../assets/coin.png" alt="gold"> to take a break... so start working
                </li>
              </ul>
            </div>


            <div class="clearfix" />
            </div>
    </div>
    <vk-grid class="uk-child-width-1-3@m uk-padding-large">
      <List
        group="todo"
        listTitle="To do"
        icon="star"
      />
      <List
        group="daily"
        listTitle="Daily tasks"
        icon="future"
      />
      <List
        group="habits"
        listTitle="Habits"
        icon="bolt"
      />
    </vk-grid>
  </div>
</template>

<script>
  import axios from 'axios';
  import List from "../components/website/List";
  import Description from "../views/Description"
  export default {
      name: "home",
      display: "Transitions",
      order: 7,
      components: {
          List,
          Description
      },
      data() {
          return {
              todo: null,
              daily: null,
              habits: null
          };
      },
      created() {
          //this.getTodo();
          //this.getDaily();
          //this.getHabits();
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
      },
      methods: {
          getTodo () {
              let vm = this;
              let axiosConfig = {
                  headers: {
                      'Accept': 'application/json',
                      'Authorization': this.$store.state.authorization
                  }
              };

              axios.get('https://rpg-task-organizer-backend.herokuapp.com/users/todo/' + vm.$store.state.userId, axiosConfig)
                .then(function (response) {
                  vm.todo = response.data;
                })
                .catch(function (error) {
                  console.log(error.response.data.message);
                })
          },
          getDaily() {
              let vm = this;
              let axiosConfig = {
                  headers: {
                      'Accept': 'application/json',
                      'Authorization': this.$store.state.authorization
                  }
              };

              axios.get('https://rpg-task-organizer-backend.herokuapp.com/users/daily/' + vm.$store.state.userId, axiosConfig)
                  .then(function (response) {
                      vm.daily = response.data;
                  })
                  .catch(function (error) {
                      console.log(error.response.data.message);
                  })
          },
          getHabits() {
              let vm = this;
              let axiosConfig = {
                  headers: {
                      'Accept': 'application/json',
                      'Authorization': this.$store.state.authorization
                  }
              };

              axios.get('https://rpg-task-organizer-backend.herokuapp.com/users/habits/' + vm.$store.state.userId, axiosConfig)
                  .then(function (response) {
                      vm.habits = response.data;
                  })
                  .catch(function (error) {
                      console.log(error.response.data.message);
                  })
          }
      }
  };

</script>

<style>
  .nes-btn{
        width: 100px;
        cursor: pointer;
}
  .caracter{
        width: 430px;
        height: 150px;
        image-rendering: pixelated;
        image-rendering: -moz-crisp-edges;
        image-rendering: crisp-edges;
  }
  .coin{
        width: 70px;
        height: 70px;
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
  .actions-menu2 {
    width: 100vw;
    margin-left: 0;
    top: 0;
    height: auto;
    background-color: #3c234a;

  }

  .actions-menu2 .col {
    width: 190px;
    height: auto;
    float: left;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    padding: 0px 20px 20px 20px;
  }

  .actions-menu2 .col h1 {
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

  .actions-menu2 .col ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .actions-menu2 .col ul li {
    color: #999999;
    font-size: 14px;

    font-weight: bold;
    padding: 5px 0px 5px 0px;
    cursor: pointer;
    transition: .2s;
    -webkit-transition: .2s;
    -moz-transition: .2s;
  }

  .actions-menu2 .col ul li:hover {
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
