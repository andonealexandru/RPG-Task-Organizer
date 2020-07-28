<template>

  <unity src="js/Build/RPG%20Task%20Organizer.json" width="1000" heighht="600"
         unityLoader="js/Build/UnityLoader.js" />

</template>

<script>
    import Unity from 'vue-unity-webgl'
    export default {
        name: "Game",
        components: {
            Unity
        }
    }
</script>

<style >
  /*@import "https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css";*/
  /*@import "../assets/game/style.css";*/
  @import "../assets/game/TemplateData/style.css";
</style>
