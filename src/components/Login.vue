<template>
  <div>
    <div>
      <form @submit.prevent="handleSubmit">
        <div>
          <div class="uk-margin">
            <input v-model="formData.email" class="uk-input" type="email" placeholder="your@email.com" required>
          </div>
        </div>
        <div>
          <div class="uk-margin">
            <input v-model="formData.password" class="uk-input" type="password" placeholder="Password" required>
          </div>
        </div>
        <div>
          <div class="uk-margin">
            <input type="submit" :disabled="disabledButton" class="uk-button uk-button-default" value="Connect">
            <p v-show="!showSpinner">{{ status }}</p>
            <div v-show="showSpinner">
              <vk-spinner class="uk-align-center" style="margin-top: 10px" />
            </div>
          </div>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
    import store from '../store'
    import axios from 'axios'

    export default {
        name: "Login",
        props: {
            close: Function
        },
        data () {
            return {
                formData: {
                    email: '',
                    password: ''
                },
                status: null,
                showSpinner: false,
                disabledButton: false
            }
        },
        methods: {
            handleSubmit: function () {
                let vm = this;
                this.showSpinner = true;
                this.disabledButton = true;
                let axiosConfig = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Access-Control-Allow-Origin': 'https://rpg-task-organizer.herokuapp.com/'
                    }
                };

                axios.post('https://rpg-task-organizer-backend.herokuapp.com/users/login', this.formData, axiosConfig)
                    .then(function (response) {
                        vm.showSpinner = false;
                        store.commit("changeAuth", response.headers['authorization']);
                        store.commit("changeUserId", response.headers['userid']);
                        store.commit("changeLogged");
                        vm.status = "Connected! Preparing your tasks...";
                        vm.closeModalAndRedirect();
                    })
                    .catch(function (error) {
                        vm.showSpinner = false;
                        vm.disabledButton = false;
                        vm.status = "Wrong email or password! In case you haven't checked your e-mail adress, please do so!"
                    })
            },
            closeModalAndRedirect() {
                setTimeout(() => {this.close();}, 700);
                setTimeout(() => {this.$router.push({name: 'Home'});}, 1000);
            }
        }
    }
</script>

<style scoped>

</style>
