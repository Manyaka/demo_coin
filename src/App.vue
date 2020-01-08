<template>
  <div class="app">
    <List v-on:mashaitemsupdated="updateList" />
    <div>
      <Ticker v-for="ticker in items"
              v-bind:pair="ticker"
              v-bind:key="ticker" />
    </div>
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
    data() {
      return {
        items: [],
      };
    },
    methods: {
      //items пришли из компонента
      updateList(items) {
        this.items = items;
      },
    },
  };
</script>

<style src="./assets/stylesheets/App.css" />
