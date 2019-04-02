<template>
  <div class="app">
    <Ticker />
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
