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
          <form>
          <v-text-field
            label="Task Title">
          </v-text-field>

         <v-textarea
          name="input-7-1"
          label=""
          value=""
          hint="Write a description here..."
        ></v-textarea>
          </form>
        </v-card-text>

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
