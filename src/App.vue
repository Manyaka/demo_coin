<template>
  <div class="app">
    <List />
    <Ticker pair="4" />
    <Ticker pair="5" />
  </div>
</template>

<script>
  import Ticker from './components/Ticker.vue';
  import List from './components/List.vue';

  export default {
    name: 'app',
    components: {
      List,
      Ticker,
    },
  };
</script>

<style src="./assets/stylesheets/App.css"></style>
