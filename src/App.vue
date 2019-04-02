<template>
  <div class="app">
    <Ticker pair="4"/>
    <Ticker pair="5"/>
  </div>
</template>

<script>
  import Ticker from './components/Ticker.vue';

  export default {
    name: 'app',
    components: {
      Ticker,
    },
  };
</script>

<style src='./assets/stylesheets/App.css'></style>
