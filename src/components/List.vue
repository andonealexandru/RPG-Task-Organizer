<template>
  <div>
    <table class="is-bordered is-centered" style="background-color: rgba(60, 35, 74, 0.2); width: 100%">
      <thead>
      <tr>
        <th>
          <v-card :tile="true" color="#3c234a">
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
          v-bind="dragOptions"
          @start="drag = true"
          @end="drag = false"
        >
          <transition-group type="transition" :name="!drag ? 'flip-list' : null">
            <div v-for="element in mappedList" :key="element.order">
              <v-card :tile="true" color="#3c234a" style="margin-bottom: 7px" class="list-group-item" @click="element.dialog = true">
                  <v-card-text style="color: #dfdde0">{{ element.name }}</v-card-text>
              </v-card>

              <v-overlay
                :absolute="absolute"
                :opacity="opacity"
                :value="element.dialog"
                :z-index="zIndex"
              >
                <v-card color="#3c234a" class="uk-width-1-3@m uk-align-center">
                  <v-card-title class="headline" style="color: #dfdde0">{{element.name}}</v-card-title>

                  <v-card-subtitle style="color: #dfdde0">Subtitlu</v-card-subtitle>

                  <v-card-text style="color: #dfdde0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et lectus commodo sem fermentum vehicula non vitae tortor. Praesent porttitor eget nunc nec suscipit. Etiam maximus accumsan purus et ultrices. Nulla luctus, leo eu dapibus bibendum, mi arcu elementum nisl, sed mattis felis dui eu orci. Nulla eget elit eget lectus aliquet commodo. Morbi tortor justo, euismod in lectus quis, dapibus laoreet est. Nunc id tellus arcu. Maecenas vestibulum augue a magna luctus, nec accumsan turpis fermentum. </v-card-text>

                  <v-card-actions>
                    <vk-grid class="uk-align-center">
                      <vk-label @click="element.dialog = false" style="background-color: #3c234a; cursor: pointer; margin: 0 15px;">Close</vk-label>
                      <vk-label style="background-color: #3c234a; cursor: pointer; margin: 0 15px;">Done</vk-label>
                      <vk-label style="background-color: #3c234a; cursor: pointer; margin: 0 15px;">Edit</vk-label>


                    </vk-grid>
                  </v-card-actions>
                </v-card>
              </v-overlay>

            </div>
          </transition-group>
        </draggable>
      </td></tr></tbody>
    </table>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'
  import CardModal from "./CardModal";
    export default {
        name: "List",
        components: {
            draggable,
            CardModal
        },
        props: {
            list: null,
            group: '',
            drag: false,
            listTitle: '',
            icon: ''
        },
        data () {
            return {
                absolute: false,
                opacity: 0.46,
                overlay: false,
                zIndex: 5,
                dialog: false,
                mappedList: this.list.map(({name, order}) => {
                    return {
                        name,
                        order,
                        dialog: false,
                        id: this.group + '_' + order
                    };
                })
            }
        },
        computed: {
            dragOptions() {
                return {
                    animation: 100,
                    group: "description",
                    disabled: false
                };
            }
        }
    }
</script>

<style>
  .list-group {
    min-height: 20px;
  }
  .list-group-item {
    cursor: pointer;
  }
</style>
