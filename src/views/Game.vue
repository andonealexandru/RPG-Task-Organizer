<template>
  <div id="game">
    <HomeScreen v-show="currentView === 'homeScreen'"/>
    <StoryIntro v-show="currentView === 'storyIntro'"/>
    <PlayGame v-show="currentView === 'playGame'"/>
    <EnemyDefeated v-show="currentView === 'enemyDefeated'"/>
    <Tutorial v-show="currentView === 'howToPlay'"/>
    <GameOver v-show="currentView === 'gameOver'"/>
    <VictoryScreen v-show="currentView === 'victoryScreen'"/>
  </div>
</template>

<script>
    import HomeScreen from "../components/screens/HomeScreen";
    import StoryIntro from "../components/screens/StoryIntro";
    import PlayGame from "../components/screens/PlayGame";
    import EnemyDefeated from "../components/screens/EnemyDefeated";
    import Tutorial from "../components/screens/Tutorial";
    import GameOver from "../components/screens/GameOver";
    import VictoryScreen from "../components/screens/VictoryScreen";

    export default {
        name: "Game",
        components: {
            HomeScreen,
            StoryIntro,
            PlayGame,
            GameOver,
            EnemyDefeated,
            VictoryScreen,
            Tutorial
        },
        computed: {
            currentView() {
                return this.$store.state.currentView
            }
        }
    }
</script>

<style >
  #game {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
