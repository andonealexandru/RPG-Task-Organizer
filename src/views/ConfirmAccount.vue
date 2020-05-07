<template>
  <div>
    <!-- Card de confirmare email-->

    <v-overlay
      :absolute="absolute"
      :opacity="opacity"
      :value="overlay"
      :z-index="zIndex"
    >
      <v-card color="#3c234a" class="uk-align-center" style="width: 30vw; min-width: 300px">
        <v-card-title class="headline" style="color: #dfdde0">Welcome!</v-card-title>

        <v-card-text style="color: #dfdde0">

          <h3 class="uk-card-title" style="color: #dfdde0">{{status}}</h3>

        </v-card-text>

        <v-card-actions>
          <vk-grid class="uk-align-center">
            <vk-label style="background-color: #3c234a; cursor: pointer; margin: 0 15px;" @click="$router.push({name: 'Description'})">FINISH</vk-label>
          </vk-grid>
        </v-card-actions>
      </v-card>
    </v-overlay>

    <!-- END Card de confirmare email-->
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "ConfirmAccount",
        data () {
            return {
                token: this.$route.params.token,
                status: 'Checking your email address...',
                response: null
            }
        },
        created() {
            this.confirmAccount();
        },
        methods: {
            confirmAccount () {
                let vm = this;

                let axiosConfig = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                };

                axios.get('https://rpg-task-organizer-backend.herokuapp.com/users/confirm-account?token=' + this.token, axiosConfig)
                    .then(function (response) {
                        vm.response = response.data;
                        vm.status = "You can now use our tool freely!";
                    })
                    .catch(function (error) {
                        vm.showSpinner = false;
                        vm.status = error.response.data.message;
                    })
            }
        }
    }
</script>

<style>

</style>
