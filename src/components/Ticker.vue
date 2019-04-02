<template>
  <div class="ticker">
    <h1>{{ pair }}</h1>
    <h2>{{ price }}</h2>
    <i class="fas fa-spinner fa-spin"></i>
  </div>
</template>

<script>
  import { getTicker } from '../api';

  export default {
    name: 'Ticker',
    props: {
      msg: String,
    },
    data() {
      return {
        pair: 'btc_usd',
        price: '',
        isLoading: true,
      };
    },
    /*data: () => ({
       pair: 'BTC_USD',
       price: '',
       isLoading: true,
     }),*/
    async mounted() {
      this.price = await getTicker(this.pair);
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./Ticker.css"></style>
