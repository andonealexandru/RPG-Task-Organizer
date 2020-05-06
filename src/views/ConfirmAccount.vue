<template>
  <div>
    <p style="color: white">{{status}}</p>
    <vk-button style="color: white" @click="$router.push({name: 'Description'})">RETURN HOME</vk-button>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "ConfirmAccount",
        data () {
            return {
                token: this.$route.params.token,
                status: 'Validare cont...',
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
                        vm.status = "Acum te poti conecta la contul tau!";
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
