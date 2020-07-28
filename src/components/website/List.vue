<template>
  <div>
    <table class="is-bordered is-centered" style="background-color: rgba(17, 52, 72, 0.2); width: 100%">
      <thead>
      <tr>
        <th>
          <v-card :tile="true" color="#113448">
            <vk-icon-link style="color: #dfdde0; margin: 0;" class="uk-align-right uk-padding-small" ratio="1.5" :icon="icon" />
            <v-card-title style="color: #dfdde0">{{listTitle}}</v-card-title>
          </v-card>
        </th>
      </tr>
      </thead>
      <tbody><tr><td class="uk-padding-small">
        <draggable
          class="list-group"
          tag="div"
          :group="group"
          v-model="mappedList"
          ghost-class="ghost"
          v-bind="dragOptions"
          @start="drag = true"
          @end="handleDrag"
        >
          <transition-group type="transition" :name="!drag ? 'flip-list' : null">
            <div v-for="element in mappedList" :key="element.order">
              <v-card :tile="true" color="#113448" style="margin-bottom: 7px" class="list-group-item" @click="element.dialog = true">
                  <v-card-text style="color: #dfdde0">{{ element.taskTitle }}</v-card-text>
              </v-card>
              <v-overlay
                v-show="element.dialog"
                :opacity="opacity"
                :value="element.dialog"
                :z-index="zIndex"
              >
                <v-card color="#113448" class="uk-align-center" style="width: 30vw; min-width: 300px">
                  <v-card-title class="headline" style="color: #dfdde0">
                    <div v-if="!editStyle">
                      {{element.taskTitle}}
                    </div>
                    <v-text-field v-if="editStyle"
                        v-model="element.taskTitle"
                    />
                  </v-card-title>
                  <v-card-text style="color: #dfdde0">
                    <div v-if="!editStyle">
                      {{element.taskText}}
                    </div>
                    <v-text-field v-if="editStyle" v-model="element.taskText" />
                  </v-card-text>

                  <v-card-actions>
                    <vk-grid class="uk-align-center">
                      <!-- Close button-->
                      <vk-label v-if="!editStyle" @click="element.dialog = false" style="background-color: #113448; cursor: pointer; margin: 0 15px;">Close</vk-label>
                      <!-- Edit button-->
                      <vk-label v-if="!editStyle" @click="editStyle = true" style="background-color: #113448; cursor: pointer; margin: 0 15px;">Edit</vk-label>
                      <!-- Done button-->
                      <vk-label v-if="!editStyle" @click="handleDone(element.id)" style="background-color: #113448; cursor: pointer; margin: 0 15px;">Done</vk-label>

                      <!-- Cancel button-->
                      <vk-label v-if="editStyle" @click="element.dialog = editStyle = false" style="background-color: #113448; cursor: pointer; margin: 0 15px;">Cancel</vk-label>
                      <!-- Save button-->
                      <vk-label v-if="editStyle" @click="updateList(element.dialog)" style="background-color: #113448; cursor: pointer; margin: 0 15px;">Save</vk-label>
                    </vk-grid>
                  </v-card-actions>
                </v-card>
              </v-overlay>
            </div>
          </transition-group>
        </draggable>
        <AddButton
          :maxorder="getMappedListSize"
          :resetList="getList"
          :group="group"
        />
      </td></tr></tbody>
    </table>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'
  import AddButton from "./AddButton";
  import axios from "axios";
    export default {
        name: "List",
        components: {
            draggable,
            AddButton
        },
        props: {
            group: '',
            drag: false,
            listTitle: '',
            icon: '',
            updateUser: Function,
            editStyle: false,
            editElementTitle: ""
        },
        data () {
            return {
                absolute: true,
                opacity: 0.46,
                zIndex: 5,
                dialog: false,
                list: null,
                mappedList: null,
                storedList: null
            }
        },
        mounted() {
            this.getList();
        },
        computed: {
            dragOptions() {
                return {
                    animation: 0,
                    group: "description",
                    disabled: false
                };
            }
        },
        methods: {
            getList () {
                let vm = this;
                let axiosConfig = {
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': this.$store.state.authorization
                    }
                };

                axios.get('https://rpg-task-organizer-backend.herokuapp.com/users/' + vm.group + '/' + vm.$store.state.userId, axiosConfig)
                    .then(function (response) {
                        vm.list = response.data;
                        vm.mapList();
                    })
                    .catch(function (error) {
                        console.log(error.response.data.message);
                    })
            },
            mapList() {
                this.mappedList = this.list.map(({id, order, taskTitle, taskText}) => {
                    return {
                        id: id,
                        order: order,
                        taskTitle: taskTitle,
                        taskText: taskText,
                        dialog: false
                    };
                });
            },
            getMappedListSize() {
                return this.mappedList.size;
            },
            handleDrag() {
                this.drag = false;
                this.reMapList();

                let vm = this;
                let axiosConfig = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': this.$store.state.authorization
                    }
                };

                axios.put('https://rpg-task-organizer-backend.herokuapp.com/users/' + vm.group + '/' + vm.$store.state.userId, vm.storedList, axiosConfig)
                    .then(function (response) {
                        console.log(response.data);
                    })
                    .catch(function (error) {
                        console.log(error.response.data.message);
                    })

            },
            updateList(dialog) {
                dialog = false;
                this.editStyle = false;
                this.reMapList();

                let vm = this;
                let axiosConfig = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': this.$store.state.authorization
                    }
                };

                axios.put('https://rpg-task-organizer-backend.herokuapp.com/users/' + vm.group + '/' + vm.$store.state.userId, vm.storedList, axiosConfig)
                    .then(function (response) {
                        console.log(response.data);
                    })
                    .catch(function (error) {
                        console.log(error.response.data.message);
                    })
            },
            reMapList() {
                this.storedList = this.mappedList.map(({id, order, taskTitle, taskText}, index) => {
                    return {
                        id: id,
                        order: index,
                        taskTitle: taskTitle,
                        taskText: taskText
                    };
                })
            },
            handleDone (id) {
                let vm = this;
                let axiosConfig = {
                    headers: {
                        'Authorization': this.$store.state.authorization
                    }
                };

                axios.delete('https://rpg-task-organizer-backend.herokuapp.com/users/' + vm.group + '/' + vm.$store.state.userId + '/' + id, axiosConfig)
                    .then(function (response) {
                        console.log(response.data);
                        vm.updateUser();
                        vm.getList();
                    })
                    .catch(function (error) {
                        console.log(error.response.data.message);
                    })
            }
        }
    }
</script>

<style>
  .button {
    margin-top: 35px;
  }
  .flip-list-move {
    transition: transform 0.5s;
  }
  .no-move {
    transition: transform 0s;
  }
  .ghost {
    opacity: 0;
    background: #c8ebfb;
  }
  .list-group {
    min-height: 20px;
  }
  .list-group-item {
    cursor: move;
    padding: 0 !important;
  }
  .list-group-item i {
    cursor: pointer;
  }
</style>
