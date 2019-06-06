<template>
  <div class="game">
    <dealer/>
    <div class="message">
      {{ mainMessage }}
    </div>
    <player/>
    <div class="message result">
      {{ resultMessage }}
    </div>
    <div class="flex" v-show="!showButtons">
      <button @click="reset">Again</button>
    </div>
  </div>
</template>

<script>
import Dealer from './Dealer'
import Player from './Player'
import { mapGetters } from 'vuex';
export default {
  name: "game",
  components: { Dealer, Player },
  
  computed: {
    ...mapGetters([
      'showButtons',
      'resultMessage',
      'mainMessage',
    ]),
  },
  created: function () {
    this.$store.dispatch('pickTwoCardPlayer')
    this.$store.dispatch('pickTwoCardDealer')
    this.$store.commit('hideFirstCard')
  },
  methods: {
    reset() {
      this.$store.dispatch('initState')
      this.$store.dispatch('pickTwoCardPlayer')
      this.$store.dispatch('pickTwoCardDealer')
      this.$store.commit('hideFirstCard')
    }
  },
}
</script>

<style scoped>
.game {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
}
.message {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 2rem;
}
.result {
  font-size: 3rem;
  color: orangered;
}
.flex {
  display: flex;
  justify-content: center;
}
button {
  font-size: 1.5rem;
  font-weight: bold;
  width: 100px;
  height: 48px;
  margin: 1rem;
  color: white;
  background: #42b983;
  border-radius: 10px;
}
button:focus {
  outline: 0;
}
</style>