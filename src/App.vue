<template>
  <div id="app">
    <h1>やすひろじゃんけん</h1>
    <Game></Game>
    <Score></Score>
  </div>
</template>

<script>
import Game from './components/Game.vue'
import Score from './components/Score.vue'
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components : {
    Game,
    Score
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
