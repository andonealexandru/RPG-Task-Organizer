<template>
  <div class="home">
    <!-- Off Canvas -->
    <vk-offcanvas-content>
      <vk-button class="uk-margin-right-small button2" @click="slide = true">
        <span class="dot">
          <vk-icon icon="menu" style="color: #dfdde0;"></vk-icon>
        </span>
        
      </vk-button>
      <vk-offcanvas overlay mode="slide" :show.sync="slide">
        <vk-offcanvas-close @click="slide = false"></vk-offcanvas-close>
            <h1 style = "color: #dac494">Menu</h1>
            <hr class="new1">
            
              <vk-button :disabled="userData.money < 50" @click="breakTime">Break</vk-button>
                &nbsp;
              <vk-button @click="$router.push({name: 'Description'})" style = "float: right;">Home</vk-button>
              
              <br>
              <div style="position: absolute; bottom: 0;">  
              <hr class="new1">
              <p>
                Current <img src="../assets/coin.png" alt="gold" style="width: 18px; height: 18px">: {{ userData.money }}
              </p>
              <p>
                 It costs you 50 <img src="../assets/coin.png" alt="gold" style="width: 18px; height: 18px"> to take a break.
              </p>
              </div>
        </vk-offcanvas>
      </vk-offcanvas-content>
      <!-- End of Off Canvas -->


    <!-- Grid -->
    <vk-grid class="uk-child-width-1-3@m uk-padding-large">
      <List
        group="todo"
        listTitle="To do"
        icon="star"
        :updateUser="getUser"
      />
      <List
        group="daily"
        listTitle="Daily tasks"
        icon="future"
        :updateUser="getUser"
      />
      <List
        group="habits"
        listTitle="Habits"
        icon="bolt"
        :updateUser="getUser"
      />
    </vk-grid>
    <!-- End of grid -->
  </div>
</template>

<script>
  import axios from 'axios';
  import List from "../components/website/List";
  import Description from "./OpeningPage"
  import Game from "./Game";
  import store from "../store";
  export default {
      name: "home",
      display: "Transitions",
      order: 7,
      components: {
          List,
          Description,
          Game
      },
      data() {
          return {
              todo: null,
              daily: null,
              habits: null,
              userData: {
                  userId: null,
                  firstName: null,
                  lastName: null,
                  email: null,
                  level: null,
                  money: null
              },
          slide: false
          };
      },
      mounted() {
          this.getUser();
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
          getUser() {
              let vm = this;
              let axiosConfig = {
                  headers: {
                      'Accept': 'application/json',
                      'Authorization': this.$store.state.authorization
                  }
              };

              axios.get('https://rpg-task-organizer-backend.herokuapp.com/users/' + vm.$store.state.userId, axiosConfig)
                  .then(function (response) {
                      vm.userData = response.data;
                      vm.saveDataInStore();
                  })
                  .catch(function (error) {
                      console.log(error.data);
                      vm.$router.push({name: 'Description'});
                  })
          },
          saveDataInStore() {
              store.commit("changeHeroLevel", this.userData.level);
              store.commit("resetData");
          },
          breakTime () {
              let vm = this;
              let axiosConfig = {
                  headers: {
                      'Accept': 'application/json',
                      'Authorization': this.$store.state.authorization
                  }
              };

              let newUserData = {
                  money: this.userData.money - 50,
                  level: this.userData.level
              };

              axios.put('https://rpg-task-organizer-backend.herokuapp.com/users/' + vm.$store.state.userId, newUserData, axiosConfig)
                  .then(function (response) {
                      vm.userData = response.data;
                      vm.saveDataInStore();
                      vm.$router.push('game');
                  })
                  .catch(function (error) {
                      console.log(error.data);
                      vm.$router.push({name: 'Description'});
                  });
          }
      }
  };
</script>

<style>
hr.new1 {
  border-top: 1px solid #113448;
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

  .clearfix {
    clear: both;
  }
.dot
{
  height: 36px;
  width: 36px;
  background-color: #113448;
  border-radius: 50%;
  position:absolute;
}
.button2{
    background: transparent;
    border: none !important;
    font-size:0;
}
</style>
