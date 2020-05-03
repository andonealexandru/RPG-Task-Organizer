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
      <v-card color="#3c234a" class="uk-width-1-3@m uk-align-center">
        <v-card-title class="headline" style="color: #dfdde0">Add a new Task</v-card-title>

        <v-card-subtitle style="color: #dfdde0">Subtitlu</v-card-subtitle>

        <v-card-text style="color: #dfdde0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et lectus commodo sem fermentum vehicula non vitae tortor. Praesent porttitor eget nunc nec suscipit. Etiam maximus accumsan purus et ultrices. Nulla luctus, leo eu dapibus bibendum, mi arcu elementum nisl, sed mattis felis dui eu orci. Nulla eget elit eget lectus aliquet commodo. Morbi tortor justo, euismod in lectus quis, dapibus laoreet est. Nunc id tellus arcu. Maecenas vestibulum augue a magna luctus, nec accumsan turpis fermentum. </v-card-text>

        <v-card-actions>
          <vk-grid class="uk-align-center">
            <vk-label @click="overlay = false" style="background-color: #3c234a; cursor: pointer; margin: 0 15px;">Close</vk-label>
            <vk-label style="background-color: #3c234a; cursor: pointer; margin: 0 15px;">Done</vk-label>
            <vk-label style="background-color: #3c234a; cursor: pointer; margin: 0 15px;">Edit</vk-label>
          </vk-grid>
        </v-card-actions>
      </v-card>
    </v-overlay>
  </div>
</template>

<script>
    export default {
        name: "CardModal",
        data () {
            return {
                absolute: false,
                opacity: 0.46,
                overlay: false,
                zIndex: 5
            }
        }
    }
</script>
