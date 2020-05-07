<template>
  <div>
    <v-card :tile="true" color="#3c234a" style="margin-bottom: 7px; cursor: pointer;" @click="overlay = true">
      <v-card-text class="uk-width-1-1">
        <vk-icon-link style="color: #dfdde0; margin: 0;" class="uk-align-center" ratio="1" icon="plus" />
      </v-card-text>
    </v-card>

    <v-overlay
      :absolute="absolute"
      :opacity="opacity"
      :value="overlay"
      :z-index="zIndex"
    >
      <v-card color="#3c234a" class="uk-align-center" style="width: 30vw; min-width: 300px">
        <v-card-title class="headline" style="color: #dfdde0">Add a new Task</v-card-title>

        <v-card-text style="color: #dfdde0">
          <v-form>
            <v-text-field
              placeholder="Task title"
              v-model="form.taskTitle"
              required
            />

            <v-textarea
              name="input-7-1"
              placeholder="Task description"
              v-model="form.taskText"
              required
            />
          </v-form>
        </v-card-text>

        <v-card-actions>
          <vk-grid class="uk-align-center">
            <vk-label @click="overlay = false" style="background-color: #3c234a; cursor: pointer; margin: 0 15px;">Close</vk-label>
            <vk-label @click="handleSubmit" style="background-color: #3c234a; cursor: pointer; margin: 0 15px;">Add task</vk-label>
          </vk-grid>
        </v-card-actions>
      </v-card>
    </v-overlay>
  </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "CardModal",
        props: {
            maxorder: Function,
            resetList: Function,
            normalizeOrder: Function,
            group: null
        },
        data () {
            return {
                absolute: false,
                opacity: 0.46,
                overlay: false,
                zIndex: 5,
                form: {
                    userId: null,
                    taskTitle: null,
                    taskText: null
                }
            }
        },
        methods: {
            handleSubmit () {
                if (this.form.taskTitle == null) {
                    this.form.taskTitle = "You must complete this field";
                    return;
                }

                if (this.form.taskText == null) {
                    this.form.taskText = "You must complete this field too";
                    return;
                }

                this.overlay = false;
                this.form.userId =  this.$store.state.userId;

                let vm = this;
                let axiosConfig = {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': this.$store.state.authorization
                    }
                };

                console.log(this.form);

                axios.post('https://rpg-task-organizer-backend.herokuapp.com/users/' + vm.group, vm.form, axiosConfig)
                    .then(function (response) {
                        console.log(response.data);
                        vm.form.taskText = null;
                        vm.form.taskTitle = null;
                        vm.resetList();
                    })
                    .catch(function (error) {
                        console.log(error.response.data);
                    });
            }
        }
    }
</script>
