<template>
  <div>
    <div>
      <form @submit.prevent="handleSubmit">
        <div>
          <div class="uk-margin">
            <input v-model="formData.lastName" class="uk-input" type="text" placeholder="Last Name" required>
          </div>
          <div class="uk-margin">
            <input v-model="formData.firstName" class="uk-input" type="text" placeholder="First Name" required>
          </div>
        </div>
        <div >
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
            <input type="submit" :disabled="disabledButton" class="uk-button uk-button-default" value="Register">
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
  import axios from 'axios'

  export default {
      name: "Signin",
      props: {
          close: Function
      },
      data () {
          return {
              formData: {
                  firstName: '',
                  lastName: '',
                  email: '',
                  password: ''
              },
              responseData: {
                  userId: '',
                  firstName: '',
                  lastName: '',
                  email: ''
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
                      'Accept': 'application/json'
                  }
              };

              axios.post('https://rpg-task-organizer-backend.herokuapp.com/users', this.formData, axiosConfig)
                  .then(function (response) {
                      vm.responseData = response.data;
                      vm.showSpinner = false;
                      vm.status = "Please confirm your account!";
                  })
                  .catch(function (error) {
                      vm.showSpinner = false;
                      vm.status = error.response.data.message;
                  })
          }
      }
  }
</script>

<style scoped>

</style>
