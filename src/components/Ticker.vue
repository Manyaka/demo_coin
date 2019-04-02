<template>
  <div class="ticker">
    <h1>{{ pair }}</h1>
    <h2>{{ price }}</h2>
    <i class="fas fa-spinner fa-spin"></i>
  </div>
</template>

<script>
  export default {
    name: 'Ticker',
    props: {
      msg: String,
    },
    data() {
      return {
        pair: 'BTC_USD',
        price: '',
        isLoading: true,
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./Ticker.css"></style>
