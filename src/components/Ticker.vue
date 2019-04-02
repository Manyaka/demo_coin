<template>
  <div class="ticker">
    <h1>{{ pair }}</h1>
    <h2 v-if="!isLoading">{{ price }}</h2>
    <i class="fas fa-spinner fa-spin" v-if="isLoading"></i>
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
        pair: 3,
        price: '',
        isLoading: true,
      };
    },
    /*data: () => ({
       pair: 'BTC_USD',
       price: '',
       isLoading: true,
     }),*/
    mounted() {
      let updateRate = async () => {
        this.price = await getTicker(this.pair);
        this.isLoading = false;
      };
      updateRate();
      // setInterval(updateRate, 5000);
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./Ticker.css"></style>
