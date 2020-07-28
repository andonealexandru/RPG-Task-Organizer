<template>
  <div class="scrollNo" scroll="no">

    <div class="computer-monitor">

    <unity src="js/Build/RPG%20Task%20Organizer.json" width="990" heighht="600"
          unityLoader="js/Build/UnityLoader.js" />
    </div>
    <div class="computer-bottom"></div>
		<div class="computer-stand"></div>
		<div class="computer-stand-bottom"></div>

  </div>
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
